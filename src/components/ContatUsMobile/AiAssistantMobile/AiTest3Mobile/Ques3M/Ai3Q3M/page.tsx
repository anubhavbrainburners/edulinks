"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Ai3Q3M() {
  const router = useRouter();

  const [progress, setProgress] = useState(50);
  const options = [
    "Mathematics & Analytics",
    "Art & Creative Design",
    "Biology & Life Sciences",
    "Technology & Programming",
    "Social Sciences & Pychology",
    "Business & Management",
    "Engineering & Innovation",
    "Healthcare & Medicine",
    "Education & Teaching",
    "Communication & Media",
  ];

  const [selected, setSelected] = useState<number[]>([]);

  const handleSelect = (idx: number) => {
    setSelected((prev) => {
      const already = prev.includes(idx);
      let next: number[];

      if (already) {
        // deselect
        next = prev.filter((i) => i !== idx);
      } else {
        // prevent selecting more than 3
        if (prev.length >= 3) return prev;
        next = [...prev, idx];
      }

      setProgress(next.length === 0 ? 50 : 75);
      return next;
    });
  };

  function handleBack() {
    router.back();
  }

   function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest3/ai3q1/ai3q2/ai3q3/ai3q4"); // replace with your actual route
    }
  }

  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header (back button + title) */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-5 pb-2">
          <div className="flex items-center justify-center relative mb-3">
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center leading-tight">
              Career Assessment
              <br />
              For Country_Name
            </h1>
          </div>

          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto">
            Help Us Understand Your Background To Create A Personalized
            Career Test.
          </p>

          {/* Progress */}
          <div className="mt-6 w-full max-w-[95%] mx-auto">
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

      {/* Full-width form */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-6 pb-12">
        <div className="max-w-full mx-auto">
          <div className="px-1">
            <h2 className="text-xl font-semibold mb-3">Interest Areas</h2>
            <p className="text-base font-medium mb-6">
              Which Areas Or Subjects Interest You The Most? (Select up to 3)
            </p>
          </div>

          <form className="space-y-3" aria-label="Interest areas">
            {options.map((opt, idx) => {
              const isChecked = selected.includes(idx);
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
                  selected.length === 0 ? "opacity-60 pointer-events-none" : ""
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