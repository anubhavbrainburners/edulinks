"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Ai2Q1M() {
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
    setProgress(selected === idx ? 0 : 20);
  };

  function handleBack() {
    router.back();
  }

  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest2/ai2q1/ai2q2"); // <-- replace with your next route (e.g. "/CountrySelMobile2")
    }
  }

  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-5 pb-2">
          {/* ✅ Standard Header Rule */}
          <div className="flex items-center justify-center relative mb-3">
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center text-[#545454] leading-tight">
              Country Selection
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto text-[#545454]">
            Select A Country To Estimate Your Visa Eligibility.
          </p>

          {/* Progress Bar (with line break rule) */}
          <div className="mt-8 max-w-[420px] w-full mx-auto">
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
              <span className="text-[11px]">
                “You’re Doing Great — Let’s Complete Your Career Match!”
                <br /> Or Simply
              </span>
              <span className="-mt-4">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-8 pb-12 mt-6">
        <div className="max-w-full mx-auto">
          <div className="px-1">
            <h2 className="text-2xl font-semibold mb-3">
              Choose Your Study Destination
            </h2>
            <p className="text-lg font-medium mb-6">
              Which Country Are You Planning To Study In? We’ll
            Customize Your Student Visa Assessment Accordingly.
            </p>
          </div>

          <form className="space-y-3" aria-label="Country selection form">
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