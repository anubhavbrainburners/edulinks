// app/aiassistant/englishproficiency/questions/page.tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer?: string; // For compatibility
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
  const [isTransitioning, setIsTransitioning] = useState(false);

  const questionsScrollRef = useRef<HTMLDivElement>(null);

  // Enhanced loading states
  const [timeRemaining, setTimeRemaining] = useState(45);
  const [loadingStage, setLoadingStage] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("Analyzing your profile...");

  const loadingMessages = [
    "Analyzing your profile...",
    "Understanding your interests...",
    "Evaluating your work style...",
    "Generating personalized questions...",
    "Crafting behavioral assessments...",
    "Preparing scenario-based tests...",
    "Finalizing your career assessment...",
  ];

  // Scroll functions from old component
  const scrollToTop = useCallback(() => {
    if (questionsScrollRef.current) {
      questionsScrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  const forceScrollToTop = useCallback(() => {
    setTimeout(() => {
      if (questionsScrollRef.current) {
        questionsScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);

    setTimeout(() => {
      if (questionsScrollRef.current) {
        questionsScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);

    setTimeout(() => {
      if (questionsScrollRef.current) {
        questionsScrollRef.current.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 300);
  }, []);

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

  // Enhanced loading effect
  useEffect(() => {
    if (isLoading) {
      // Timer countdown
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Stage progression every 6 seconds
      const stageTimer = setInterval(() => {
        setLoadingStage((prev) => {
          const nextStage = (prev + 1) % loadingMessages.length;
          setCurrentMessage(loadingMessages[nextStage]);
          return nextStage;
        });
      }, 6000);

      return () => {
        clearInterval(timer);
        clearInterval(stageTimer);
      };
    }
  }, [isLoading]);

  // Scroll to top when question changes
  useEffect(() => {
    if (questions.length > 0) {
      forceScrollToTop();
    }
  }, [currentQuestionIndex, questions.length, forceScrollToTop]);

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

  // Enhanced answer selection with scroll behavior
  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: value }));

    // Scroll to show next button better (from old component)
    setTimeout(() => {
      if (questionsScrollRef.current) {
        const container = questionsScrollRef.current;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const maxScroll = scrollHeight - clientHeight;

        if (maxScroll > 100) {
          container.scrollTo({
            top: Math.min(maxScroll, 200),
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  // Enhanced navigation with transitions
  const goToNext = () => {
    if (!selectedAnswer) {
      // Show error toast (you can implement toast or error state)
      setError("Please select an answer before proceeding.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      handleSubmit();
      return;
    }

    // Move to next question with transition
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1);
      const savedAnswer = userAnswers[currentQuestionIndex + 1];
      setSelectedAnswer(savedAnswer || "");

      forceScrollToTop();
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    if (currentQuestionIndex === 0) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev - 1);
      const savedAnswer = userAnswers[currentQuestionIndex - 1];
      setSelectedAnswer(savedAnswer || "");

      forceScrollToTop();
      setIsTransitioning(false);
    }, 300);
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

  // Enhanced Loading Component
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8FDFD] to-[#E6FDFD] p-6">
        <div className="bg-white rounded-3xl shadow-2xl shadow-[#37D7D9]/20 border border-[#E6FDFD] p-8 w-full max-w-md mx-auto relative overflow-hidden">

          {/* Animated Background Elements */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-[#4ECDC4] opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-6 left-4 w-12 h-12 bg-[#45B7D1] opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute top-8 left-8 w-8 h-8 bg-[#96CEB4] opacity-10 rounded-full animate-ping"></div>

          {/* Loading Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#E6FDFD] to-[#B8F0F0] rounded-full flex items-center justify-center animate-spin">
              <div className="text-3xl">🧠</div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#1A4D4F] mb-2">
              Preparing Your Assessment
            </h2>
            <p className="text-[#5A7A7C] text-sm">
              Creating personalized career questions based on your profile
            </p>
          </div>

          {/* Timer Display */}
          <div className="flex items-center justify-center bg-[#E6FDFD] rounded-xl p-3 mb-4">
            <div className="text-lg mr-2">⏱️</div>
            <span className="text-[#37D7D9] font-semibold text-sm">
              {timeRemaining > 0
                ? `Estimated time: ${timeRemaining} seconds`
                : "Almost ready..."
              }
            </span>
          </div>

          {/* Current Stage Message */}
          <div className="bg-[#F0F9FF] rounded-xl p-4 mb-6 min-h-[60px] flex items-center justify-center border border-[#E0F2FE]">
            <p className="text-[#1E40AF] font-medium text-center text-sm">
              {currentMessage}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="w-full bg-[#E6FDFD] rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#37D7D9] to-[#2BBCC0] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((45 - timeRemaining) / 45) * 100}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-[#37D7D9] text-xs font-semibold">
                {timeRemaining > 0
                  ? `Generating assessment... ${Math.round(((45 - timeRemaining) / 45) * 100)}%`
                  : "Finalizing questions..."
                }
              </span>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-2 h-2 bg-[#37D7D9] rounded-full animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Don't show error UI while loading
  if (error || (!isLoading && questions.length === 0)) {
    return (
      <div className="bg-[#DFFFFF] flex items-center justify-center min-h-screen">
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

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Build options entries - handle both old and new question formats
  let optionsEntries: [string, string][] = [];
  
  if (currentQuestion.options && typeof currentQuestion.options === 'object') {
    // Handle old format: { A: "option1", B: "option2", ... }
    optionsEntries = Object.entries(currentQuestion.options).map(([key, value]) => [key, value as string]);
  } else if (Array.isArray(currentQuestion.options)) {
    // Handle new format: ["option1", "option2", ...]
    optionsEntries = currentQuestion.options.map((opt, idx) => [
      String.fromCharCode(65 + idx), // A, B, C, D
      opt,
    ]);
  }

  return (
    <main
      ref={questionsScrollRef}
      className="min-h-screen w-full antialiased pt-28 flex flex-col justify-between bg-gradient-to-br from-[#F8FDFD] to-[#E6FDFD] overflow-y-auto"
      style={{
        backgroundColor: "#DFFFFF",
      }}
    >
      {/* Progress Bar */}
      <div className="bg-white shadow-sm border-b border-[#E6FDFD]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-xl font-bold text-[#1A4D4F]">Career Assessment</h1>
              <p className="text-[#37D7D9] font-semibold text-sm">
                Question Progress
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600 block">
                {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[#37D7D9] to-[#2BBCC0] h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}
            style={{ pointerEvents: isTransitioning ? 'none' : 'auto' }}
          >
            <div className="bg-white rounded-2xl shadow-lg shadow-[#37D7D9]/10 border border-[#E6FDFD] p-6 md:p-8">
              
              {/* Question Header */}
              <div className="mb-6">
                <div className="inline-block bg-[#37D7D9] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Question {currentQuestionIndex + 1}
                </div>
                <h2 className="text-xl font-semibold text-[#1A4D4F] leading-relaxed">
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
                        className={`flex-shrink-0 w-10 h-10 rounded-lg border-2 flex items-center justify-center font-bold transition-all duration-200 ${
                          isSelected
                            ? "border-[#37D7D9] bg-[#37D7D9] text-white"
                            : "border-[#D1D5DB] bg-[#F9FAFB] text-[#9CA3AF]"
                        }`}
                      >
                        {key}
                      </div>
                      <div
                        className={`flex-1 text-left ${
                          isSelected ? "font-medium text-[#1A4D4F]" : "text-[#5A7A7C]"
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

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm text-center">{error}</p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  onClick={goToPrev}
                  disabled={currentQuestionIndex === 0}
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition ${
                    currentQuestionIndex === 0
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#F8FDFD] text-[#37D7D9] font-semibold border-2 border-[#E6FDFD] hover:bg-[#E6FDFD]"
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Previous
                </button>

                {!isLastQuestion ? (
                  <button
                    onClick={goToNext}
                    disabled={!selectedAnswer}
                    className={`inline-flex items-center px-8 py-3 rounded-full font-medium text-white transition transform hover:scale-105 ${
                      !selectedAnswer
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#37D7D9] to-[#2BBCC0] hover:shadow-lg hover:shadow-[#37D7D9]/30"
                    }`}
                  >
                    Next Question
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswer}
                    className={`inline-flex items-center px-8 py-3 rounded-full font-medium text-white transition transform hover:scale-105 ${
                      !selectedAnswer
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-[#10B981]/30"
                    }`}
                  >
                    View Results
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
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
        </div>
      </div>
    </main>
  );
}