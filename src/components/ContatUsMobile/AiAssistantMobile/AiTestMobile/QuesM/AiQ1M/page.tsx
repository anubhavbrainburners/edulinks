"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function AiQ1M() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  const options = [
    "Germany",
    "Canada",
    "UK",
    "USA",
    "Australia",
    "New Zealand",
    "France",
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setSelected((prev) => (prev === idx ? null : idx));
    setProgress(selected === idx ? 0 : 25);
  };

  // ✅ Go Back — fixed to a specific page instead of router.back()
  function handleBack() {
    router.back(); // <-- replace with your desired route (e.g. "/ai-home")
  }

  // ✅ Handle Next
  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest/aiq1/aiq2"); // <-- replace with your next route (e.g. "/CountrySelMobile2")
    }
  }

  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-5 pb-2">
          {/* Back button + heading aligned next to each other */}
          <div className="flex items-center justify-center relative mb-3">
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center text-[#545454] leading-tight">
              University/Course
              <br />
              Shortlisting
            </h1>
          </div>

          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto text-[#545454]">
            Help Us Understand Your Study Destination Preference
          </p>

          {/* Progress Bar */}
          <div className="mt-8 max-w-[420px] w-full">
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
                “You’re Doing Great — Let’s Complete Your Career Match!”
                <br /> Or Simply
              </span>
              <span className="-mt-4">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <section className="flex-1 w-full bg-white rounded-t-4xl shadow-lg px-5 pt-8 pb-12">
        <div className="max-w-full mx-auto">
          <div className="px-1">
            <h2 className="text-xl font-semibold mb-3">
              Choose Your Study Destination
            </h2>
            <p className="text-base font-medium mb-8">
              Which Country Do you Want to Study In?
            </p>
          </div>

          <form className="space-y-3" aria-label="Choose your country">
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

            {/* Next Button */}
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
