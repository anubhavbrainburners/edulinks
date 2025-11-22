"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

type Step = 1 | 2 | 3;

export default function CombinedAiQuiz() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  // Step-specific data
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Step configurations
  const stepConfig = {
    1: {
      title: "English Proficiency Test",
      subtitle: "Select Your English Proficiency Test.",
      question: "Which English Test Have You Taken Or Planning To Take?",
      options: ["IELTS", "TOEFL", "PTE", "Duolingo"],
      progress: 33,
      storageKey: "selectedTest",
    },
    2: {
      title: "English Test",
      subtitle: "Select Your English Proficiency Test.",
      question: "Choose One Section",
      options: ["Listening", "Reading", "Writing", "Speaking"],
      progress: 67,
      storageKey: "selectedSection",
    },
    3: {
      title: "English Test",
      subtitle: "Select Your English Proficiency Test.",
      question: "We will generate questions based on your difficulty choice.",
      options: ["Easy", "Medium", "Hard"],
      progress: 100,
      storageKey: "selectedDifficulty",
    },
  };

  const currentConfig = stepConfig[currentStep];

  useEffect(() => {
    // Load previous selections when component mounts or step changes
    const test = localStorage.getItem("selectedTest");
    const section = localStorage.getItem("selectedSection");

    setSelectedTest(test);
    setSelectedSection(section);

    setProgress(currentConfig.progress);
    setSelected(null); // Reset selection when step changes
  }, [currentStep]);

  const handleSelect = (idx: number) => {
    setSelected(idx);
  };

  const handleNext = async () => {
    if (selected === null) return;

    const selectedValue = currentConfig.options[selected];

    // Save selection
    localStorage.setItem(currentConfig.storageKey, selectedValue);

    if (currentStep === 1) {
      setSelectedTest(selectedValue);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setSelectedSection(selectedValue);
      setCurrentStep(3);
    } else if (currentStep === 3) {
      await generateQuestions(selectedValue);
    }
  };

  // Generate Questions API
  const generateQuestions = async (difficulty: string) => {
    if (!selectedTest || !selectedSection) {
      alert("Invalid flow: Missing test or section.");
      return;
    }

    try {
      const res = await axios.post("/api/generate-questions", {
        testType: selectedTest,
        section: selectedSection,
        difficulty,
        count: 10,
      });

      console.log("API RESPONSE:", res);

      let questionsArray = [];

      if (
        res.data &&
        res.data.data &&
        Array.isArray(res.data.data.questions)
      ) {
        questionsArray = res.data.data.questions;
      } else if (Array.isArray(res.data.questions)) {
        questionsArray = res.data.questions;
      } else if (
        res.data.testSession &&
        Array.isArray(res.data.testSession.questions)
      ) {
        questionsArray = res.data.testSession.questions;
      } else if (Array.isArray(res.data)) {
        questionsArray = res.data;
      }

      if (!questionsArray || questionsArray.length === 0) {
        alert("Failed to generate questions");
        return;
      }

      localStorage.setItem(
        "generatedQuestions",
        JSON.stringify(questionsArray)
      );

      router.push("/questions");
    } catch (error) {
      console.error("Error generating questions:", error);
      alert("Error generating test questions.");
    }
  };

  const getStepTitle = () => {
    if (currentStep === 1) return "Choose English Test";
    if (currentStep === 2) return `${selectedTest} Test`;
    return "Test Difficulty";
  };

  const getOptionColor = (option: string) => {
    if (currentStep !== 3) return "#545454";

    return option === "Easy"
      ? "#4CAF50"
      : option === "Medium"
      ? "#FFD700"
      : "#FF4C4C";
  };

  return (
    <main
      className="min-h-screen w-full antialiased overflow-hidden"
      style={{
        backgroundColor: "#DFFFFF",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left Panel */}
      <aside
        className="hidden md:flex flex-col ml-30"
        style={{
          width: "50vw",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="flex-0 mt-32">
          <div className="w-full max-w-[300px]">
            <Image
              src="/images/ai4q1Img.png"
              alt="career illustration"
              width={1020}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="mt-16 max-w-[550px]">
          <h1 className="text-4xl font-bold mb-6 text-[#545454]">
            {currentConfig.title}
          </h1>

          <p className="text-base leading-tight font-medium text-[#545454]">
            {currentConfig.subtitle}
          </p>

          <div className="mt-8 max-w-[420px]">
            <div className="h-3 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#37D7D9",
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs mt-2 font-medium">
              <span>
                "You're Doing Great — Let's Complete Your Career Match!"
                <br />
                Or Simply
              </span>

              <span className="-mt-4">{progress}%</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Section */}
      <section
        className="pt-28 pb-12 mr-8"
        style={{
          marginLeft: "54vw",
          minHeight: "100vh",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="max-w-[650px] mx-auto text-[#545454]">
          <div className="bg-white rounded-4xl shadow-lg px-8 pt-10 pb-10">
            <div className="px-4">
              <h2 className="text-2xl font-semibold mb-3">
                {getStepTitle()}
              </h2>

              <p className="text-lg font-medium mb-12">
                {currentConfig.question}
              </p>
            </div>

            <form className="space-y-4">
              {currentConfig.options.map((opt, idx) => {
                const isChecked = selected === idx;
                const textColor = getOptionColor(opt);

                return (
                  <label
                    key={opt}
                    onClick={() => handleSelect(idx)}
                    className={`flex items-center justify-between w-full border rounded-xl px-5 py-3 cursor-pointer transition-all ${
                      isChecked
                        ? "border-[#37D7D9] bg-[#DFFFFF]"
                        : "border-[#37D7D9]"
                    }`}
                  >
                    <div
                      className="text-lg font-semibold"
                      style={{ color: textColor }}
                    >
                      {opt}
                    </div>

                    <div className="flex-shrink-0 flex items-center justify-center h-9 w-9">
                      {isChecked ? (
                        <IoCheckmarkCircle
                          className="text-[#37D7D9]"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ) : (
                        <div className="h-9 w-9 rounded-full border border-[#37D7D9]" />
                      )}
                    </div>
                  </label>
                );
              })}

              {/* Next Button */}
              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selected === null}
                  className={`flex items-center gap-3 text-xl font-black rounded-full px-6 py-2 shadow-md transition ${
                    selected !== null
                      ? "bg-[#37D7D9] text-white hover:cursor-pointer hover:opacity-90"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {currentStep === 3 ? "Generate Test" : "Next"}
                  <FaArrowRightLong />
                </button>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full ${
                      step === currentStep
                        ? "bg-[#37D7D9]"
                        : step < currentStep
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
