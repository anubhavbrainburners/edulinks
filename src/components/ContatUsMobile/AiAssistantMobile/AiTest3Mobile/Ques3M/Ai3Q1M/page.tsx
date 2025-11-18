"use client";
import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6"; // added left arrow
import { useRouter } from "next/navigation";

export default function Ai3Q1M() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const options = [
    "Germany",
    "Canada",
    "United Kingdom",
    "United States",
    "Australia",
    "New Zealand",
    "France",
  ];

  const [selected, setSelected] = useState<number | null>(null);

  function handleSelect(idx: number) {
    setSelected((prev) => {
      const newSelected = prev === idx ? null : idx;
      setProgress(newSelected === null ? 0 : 25);
      return newSelected;
    });
  }

  // for now, this just logs — you can replace with router.back()
  function handleBack() {
    router.back(); // <-- replace with your desired route (e.g. "/ai-home")
  }

  // ✅ Handle Next
  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest3/ai3q1/ai3q2"); // <-- replace with your next route (e.g. "/CountrySelMobile2")
    }
  }



  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header Section */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-5 pb-6">
          {/* Title Row with Back Button */}
          <div className="flex items-center justify-center relative mb-3">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            {/* Centered Title */}
            <h1 className="text-2xl font-bold text-center leading-tight">
              Career Location
              <br />
              Preference
            </h1>
          </div>

          {/* Description */}
          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto">
            Select Your Preferred Work Location To Get Personalized Career
            recommendations.
          </p>

          {/* Progress Bar */}
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

      {/* Full-width Form Section */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-6 pb-12">
        <h2 className="text-xl font-semibold mb-2">Choose Your Preferred Work Location</h2>
        <p className="text-base font-medium mb-6">
          Which Country Would You Like To Work In After Completing Your Career Pathway?
        </p>

        <form className="space-y-3" aria-label="Country selection">
          {options.map((opt, idx) => {
            const isChecked = selected === idx;
            return (
              <label
                key={opt}
                onClick={() => handleSelect(idx)}
                className={`flex items-center justify-between w-full border ${
                  isChecked ? "border-[#37D7D9]" : "border-[#CFEDED]"
                } rounded-xl px-4 py-3 cursor-pointer transition-all`}
              >
                <div className="text-base font-semibold text-[#545454]">
                  {opt}
                </div>

                <div className="flex-shrink-0 flex items-center justify-center h-9 w-9">
                  {isChecked ? (
                    <IoCheckmarkCircle
                      className="text-[#37D7D9]"
                      style={{ width: "100%", height: "100%" }}
                      aria-hidden
                    />
                  ) : (
                    <div className="h-9 w-9 rounded-full border border-[#37D7D9]" />
                  )}
                </div>
              </label>
            );
          })}

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
      </section>
    </main>
  );
}