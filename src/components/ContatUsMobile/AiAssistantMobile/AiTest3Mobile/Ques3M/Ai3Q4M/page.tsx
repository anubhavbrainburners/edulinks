"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Ai3Q4M() {
  const router = useRouter();
  const [progress, setProgress] = useState(75);
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "Structured & Analytical",
    "Creative & Free-Flowing",
    "People-Oriented & Social",
    "Problem-Solving & Research",
    "Outdoor & Physical Work",
    "Tech-Focused & Digital",
  ];

  const handleSelect = (idx: number) => {
    setSelected((prev) => (prev === idx ? null : idx));
    setProgress(selected === idx ? 75 : 100);
  };

  function handleBack() {
    router.back();
  }

  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest3"); // replace with your actual route
    }
  }

  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header Section */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-3 pb-2">
          {/* ✅ Back button and heading aligned next to each other */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center  text-[#545454] leading-tight">
              Career Assessment For Country_Name
            </h1>
          </div>

          {/* Paragraph below */}
          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto  text-[#545454]">
            Help Us Understand Your Background To Create<br/> A Personalized 
            Career Test.
          </p>

          {/* Progress bar section */}
          <div className="mt-6 w-full max-w-[95%] mx-auto">
            <div className="h-2 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${progress}%`, backgroundColor: "#37D7D9" }}
              />
            </div>

            <div className="flex items-center justify-between text-xs mt-2 font-medium px-1">
              <span className="text-[11px]">
                “You’re Doing Great — Let’s Complete Your Career Match!”<br/> Or Simply
              </span>
              <span className="text-[12px] -mt-1">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-8 pb-12">
        <div className="max-w-full mx-auto">
          <div className="px-1">
            <h2 className="text-xl font-semibold mb-3">Work Style</h2>
            <p className="text-base font-medium mb-8">
              How Would You Describe Your Ideal Work Style?
            </p>
          </div>

          <form className="space-y-3" aria-label="Work Style Options">
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

            {/* ✅ Standardized Next Button */}
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