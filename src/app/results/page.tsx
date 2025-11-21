// app/contactus/aiassistant/aitest4/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface TestResults {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  userAnswers: Record<number, string>;
  questions: Question[];
  selectedTest: string;
  selectedSection: string;
  selectedDifficulty: string;
}

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function TestResults() {
  const router = useRouter();
  const [results, setResults] = useState<TestResults | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("testResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      router.push("/contactus/aiassistant/aitest4");
    }
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-screen bg-[#DFFFFF] flex items-center justify-center">
        <div className="text-center">
          <p>Loading results...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return "Excellent! 🎉";
    if (score >= 80) return "Very Good! 👍";
    if (score >= 70) return "Good job! 😊";
    if (score >= 60) return "Not bad! 👌";
    if (score >= 50) return "Keep practicing! 💪";
    return "Need more practice! 📚";
  };

  return (
    <main className="bg-[#DFFFFF] pt-28 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Results Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Test Results
            </h1>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <div className="text-center">
                <div className={`text-5xl font-bold ${getScoreColor(results.score)}`}>
                  {results.score}%
                </div>
                <div className="text-lg text-gray-600 mt-2">
                  {getScoreMessage(results.score)}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {results.correctAnswers}
                </div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {results.totalQuestions - results.correctAnswers}
                </div>
                <div className="text-sm text-gray-600">Incorrect</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {results.totalQuestions}
                </div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
            </div>
          </div>

          {/* Test Details */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold mb-4">Test Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Test Type:</span> {results.selectedTest}
              </div>
              <div>
                <span className="font-medium">Section:</span> {results.selectedSection}
              </div>
              <div>
                <span className="font-medium">Difficulty:</span> {results.selectedDifficulty}
              </div>
            </div>
          </div>
        </div>

        {/* Review Questions */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Review Questions</h2>
          <div className="space-y-6">
            {results.questions.map((question, index) => {
              const userAnswer = results.userAnswers[index];
              const isCorrect = userAnswer?.trim().toLowerCase() === 
                               question.correctAnswer.trim().toLowerCase();
              
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 ${
                    isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm mr-3 ${
                        isCorrect ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {isCorrect ? "✓" : "✗"}
                    </span>
                    <h3 className="text-lg font-medium text-gray-800">
                      {index + 1}. {question.question}
                    </h3>
                  </div>

                  <div className="ml-9 space-y-2">
                    <div>
                      <span className="font-medium text-green-600">
                        Correct Answer: 
                      </span>{" "}
                      {question.correctAnswer}
                    </div>
                    {userAnswer && (
                      <div>
                        <span className="font-medium text-blue-600">
                          Your Answer: 
                        </span>{" "}
                        {userAnswer}
                      </div>
                    )}
                    {!userAnswer && (
                      <div className="text-orange-600 font-medium">
                        Not answered
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => router.push("/contactus/aiassistant/aitest4")}
            className="px-6 py-3 bg-[#37D7D9] text-white rounded-full hover:opacity-90 transition"
          >
            Take Another Test
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-gray-500 text-white rounded-full hover:opacity-90 transition"
          >
            Print Results
          </button>
        </div>
      </div>
    </main>
  );
}