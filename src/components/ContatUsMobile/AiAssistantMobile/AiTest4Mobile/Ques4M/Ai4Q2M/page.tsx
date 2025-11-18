"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Ai4Q2M() {
  const router = useRouter();
  const [progress, setProgress] = useState(33);
  const options = ["Listening", "Reading", "Writing", "Speaking"];

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setSelected((prev) => (prev === idx ? null : idx));
    // preserved your original logic exactly
    setProgress(selected === idx ? 33 : 67);
  };

  function handleBack() {
    router.back();
  }

  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest4/ai4q1/ai4q2/ai4q3"); // replace with your actual route
    }
  }

  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <div className="py-15 bg-[#DFFFFF]">
        <div className="px-5 pb-2">
          {/* Standard header layout (back button + centered title) */}
          <div className="flex items-center justify-center relative mb-3">
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center text-[#545454] leading-tight">
              English Test
            </h1>
          </div>

          <p className="text-base leading-tight font-medium text-[#545454] text-center max-w-[90%] mx-auto mb-4">
            Select Your English Proficiency Test.
          </p>

          {/* Progress */}
          <div className="mt-4 w-full max-w-[95%] mx-auto">
            <div className="h-2 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${progress}%`, backgroundColor: "#37D7D9" }}
              />
            </div>

            <div className="flex items-center justify-between text-xs mt-2 font-medium px-1">
              <span className="text-[11px]">
                “You’re Doing Great — Let’s Complete Your Career Match!”
                <br /> Or Simply
              </span>
              <span className="text-[12px] -mt-1">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-6 pb-12">
        <div className="max-w-full mx-auto">
          <div className="px-1 mb-4">
            <h2 className="text-2xl font-semibold mb-3">Test_Name Test</h2>
            <p className="text-lg font-medium mb-2">Choose One Section</p>
          </div>

          <form className="space-y-3" aria-label="Choose test section">
            {options.map((opt, idx) => {
              const isChecked = selected === idx;
              return (
                <label
                  key={opt}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center justify-between w-full border ${
                    isChecked ? "border-[#37D7D9]" : "border-[#CFEDED]"
                  } rounded-xl px-4 py-3 cursor-pointer transition-all bg-white`}
                >
                  <div className="text-base font-semibold text-[#545454]">
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

            {/* Standardized Next Button */}
            <div className="flex items-center justify-center mt-6">
              <button
                type="button"
                onClick={handleNext}
                className={`flex items-center justify-center gap-3 bg-[#37D7D9] text-white text-base font-semibold rounded-full px-6 py-3 shadow-md transition-opacity ${
                  selected === null ? "opacity-60 pointer-events-none" : ""
                }`}
              >
                Next <FaArrowRightLong />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}