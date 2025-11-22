// app/aiassistant/careerpathway/questions/page.tsx
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { parseCareerParams } from "@/utils/encryption";

interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

export default function CareerQuestions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [careerData, setCareerData] = useState<any>(null);

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

  // Get career data from URL parameters
  useEffect(() => {
    const data = parseCareerParams(searchParams);
    if (data) {
      setCareerData(data);
      fetchQuestions(data);
    } else {
      setError("Missing career profile data");
      setIsLoading(false);
    }
  }, [searchParams]);

  // Scroll functions
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

  // Enhanced loading effect
  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

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

  const fetchQuestions = async (profileData: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/generate-career-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ profileData }),
      });

      if (!response.ok) {
        throw new Error(`API failed with status ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid response format from API");
      }

      // Transform the response to match expected format
      const questionsArray: Question[] = data.questions.map((item: any, index: number) => ({
        id: index + 1,
        question: item.question,
        options: {
          A: item.options[0],
          B: item.options[1],
          C: item.options[2],
          D: item.options[3],
        },
      }));

      setQuestions(questionsArray);
      
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
      setError("Please select an answer before proceeding.");
      setTimeout(() => setError(null), 3000);
      return;
    }

    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      handleSubmit();
      return;
    }

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
    const finalAnswers = questions.map((q, index) => {
      const selectedLetter = userAnswers[index];
      const fullAnswerText = selectedLetter ? q.options[selectedLetter as keyof typeof q.options] : "";

      return {
        question: q.question,
        selectedOption: fullAnswerText,
      };
    });

    // Store results and navigate
    if (typeof window !== 'undefined') {
      localStorage.setItem('careerAssessmentResults', JSON.stringify({
        userProfile: careerData,
        testResults: finalAnswers,
      }));
    }

    router.push('/aiassistant/careerpathway/result');
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

  if (error || (!isLoading && questions.length === 0)) {
    return (
      <div className="bg-[#DFFFFF] flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-4">
          <h2 className="text-lg font-semibold text-red-600">Error</h2>
          <p className="mt-2 text-sm text-gray-600">
            {error || "No questions available."}
          </p>
          <button
            onClick={() => router.push("/aiassistant/careerpathway")}
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

  // Build options entries
  const optionsEntries = Object.entries(currentQuestion.options);

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
                      onClick={() => handleAnswerSelect(key)}
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

      <ToastContainer
        toastClassName="!bg-white !text-[#1A4D4F] !rounded-xl !border !border-[#E6FDFD]"
        progressClassName="!bg-[#37D7D9]"
      />
    </main>
  );
}