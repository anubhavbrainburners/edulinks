// app/aiassistant/englishproficiency/questions/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  passage?: string;
}

export default function EnglishTestQuestions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  // Get parameters from localStorage (from previous steps)
  useEffect(() => {
    const selectedTest = localStorage.getItem("selectedTest");
    const selectedSection = localStorage.getItem("selectedSection");
    const selectedDifficulty = localStorage.getItem("selectedDifficulty");

    // Sanity check for required params
    if (!selectedTest || !selectedSection || !selectedDifficulty) {
      setError("Missing required test parameters");
      setIsLoading(false);
      return;
    }

    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Try to get questions from localStorage first (from the quiz flow)
      const storedQuestions = localStorage.getItem("generatedQuestions");
      
      if (storedQuestions) {
        const parsedQuestions = JSON.parse(storedQuestions);
        if (Array.isArray(parsedQuestions) && parsedQuestions.length > 0) {
          setQuestions(parsedQuestions);
          setIsLoading(false);
          return;
        }
      }

      // Fallback: Generate new questions via API
      const selectedTest = localStorage.getItem("selectedTest");
      const selectedSection = localStorage.getItem("selectedSection");
      const selectedDifficulty = localStorage.getItem("selectedDifficulty");

      const response = await axios.post("/api/generate-questions", {
        testType: selectedTest,
        section: selectedSection,
        difficulty: selectedDifficulty,
        count: 10,
      });

      let questionsArray: Question[] = [];

      // Normalize response shapes (same logic as before)
      if (
        response.data?.success &&
        response.data?.data &&
        Array.isArray(response.data.data.questions)
      ) {
        questionsArray = response.data.data.questions;
      } else if (response.data?.success && Array.isArray(response.data.questions)) {
        questionsArray = response.data.questions;
      } else if (
        response.data?.success &&
        response.data.testSession &&
        Array.isArray(response.data.testSession.questions)
      ) {
        questionsArray = response.data.testSession.questions;
      } else if (Array.isArray(response.data)) {
        questionsArray = response.data;
      }

      if (!Array.isArray(questionsArray) || questionsArray.length === 0) {
        throw new Error("No questions returned from server");
      }

      setQuestions(questionsArray);
      // Store in localStorage for persistence
      localStorage.setItem("generatedQuestions", JSON.stringify(questionsArray));
      
    } catch (err: any) {
      console.error("Error loading questions:", err);
      setError(err.message || "Failed to load questions");
    } finally {
      setIsLoading(false);
    }
  };

  // Helper: normalize strings
  const normalize = (v: string) =>
    String(v || "")
      .trim()
      .toLowerCase();

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: value }));
  };

  const goToNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(userAnswers[nextIndex] || "");
    }
  };

  const goToPrev = () => {
    const prevIndex = currentQuestionIndex - 1;
    if (prevIndex >= 0) {
      setCurrentQuestionIndex(prevIndex);
      setSelectedAnswer(userAnswers[prevIndex] || "");
    }
  };

  const handleSubmit = () => {
    let correct = 0;

    questions.forEach((q, index) => {
      const userAns = userAnswers[index];
      if (!userAns) return;

      if (
        q.correctAnswer &&
        normalize(userAns) === normalize(q.correctAnswer)
      ) {
        correct++;
      }
    });

    const score =
      questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;

    // Store results in localStorage for the results page
    localStorage.setItem("testResults", JSON.stringify({
      score,
      totalQuestions: questions.length,
      correctAnswers: correct,
      userAnswers,
      questions,
      selectedTest: localStorage.getItem("selectedTest"),
      selectedSection: localStorage.getItem("selectedSection"),
      selectedDifficulty: localStorage.getItem("selectedDifficulty"),
    }));

    // Navigate to results page
    router.push("/results");
  };

  // Don't show error UI while loading
  if (error || (!isLoading && questions.length === 0)) {
    return (
      <div className="bg-[#DFFFFF] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-lg font-semibold text-red-600">Error</h2>
          <p className="mt-2 text-sm text-gray-600">
            {error || "No questions available."}
          </p>
          <button
            onClick={() => router.push("/aiassistant/englishproficiency")}
            className="mt-4 px-4 py-2 bg-[#37D7D9] text-white rounded-full hover:opacity-90 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#DFFFFF] flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#37D7D9]"></div>
          </div>
          <p className="text-center mt-4 text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Build options entries
  const optionsEntries = currentQuestion.options.map((opt, idx) => [
    String.fromCharCode(65 + idx), // A, B, C, D
    opt,
  ]);

  return (
    <main
      className="min-h-screen w-full antialiased pt-28"
      style={{
        backgroundColor: "#DFFFFF",
      }}
    >
      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#37D7D9] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {/* Question Header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {currentQuestion.question}
            </h2>
            
            {currentQuestion.passage && (
              <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h3 className="font-medium text-gray-700 mb-2">Reading Passage:</h3>
                <p className="text-gray-600 leading-relaxed">{currentQuestion.passage}</p>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {optionsEntries.map(([key, value]) => {
              const isSelected = selectedAnswer && 
                (normalize(selectedAnswer) === normalize(value) || 
                 normalize(selectedAnswer) === normalize(key));

              return (
                <button
                  key={key}
                  onClick={() => handleAnswerSelect(value)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    isSelected
                      ? "bg-[#E6FDFD] border-[#37D7D9] shadow-sm"
                      : "bg-white border-gray-200 hover:border-[#37D7D9] hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 font-medium ${
                      isSelected
                        ? "border-[#37D7D9] bg-[#37D7D9] text-white"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {key}
                  </div>
                  <div
                    className={`flex-1 text-left ${
                      isSelected ? "font-medium text-gray-800" : "text-gray-700"
                    }`}
                  >
                    {value}
                  </div>
                  {isSelected && (
                    <div className="flex-shrink-0 text-[#37D7D9]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={goToPrev}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-3 rounded-full font-medium transition ${
                currentQuestionIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Previous
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button
                onClick={goToNext}
                disabled={!selectedAnswer}
                className={`px-8 py-3 rounded-full font-medium text-white transition ${
                  !selectedAnswer
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#37D7D9] hover:bg-[#2bc4c6] shadow-md"
                }`}
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className={`px-8 py-3 rounded-full font-medium text-white transition ${
                  !selectedAnswer
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 shadow-md"
                }`}
              >
                Submit Test
              </button>
            )}
          </div>

          {/* Question Progress Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setSelectedAnswer(userAnswers[index] || "");
                }}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentQuestionIndex
                    ? "bg-[#37D7D9]"
                    : userAnswers[index]
                    ? "bg-green-400"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
