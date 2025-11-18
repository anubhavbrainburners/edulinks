"use client";

import React, { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Ai2Q2M() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const options = [
    "Yes, I Have A Confirmed Offer For A Full-Time Course",
    "Yes, I Have A Conditional Offer Pending Fulfillment Of Requirements",
    "No, I Am Still In The Process Of Applying",
    "No, I Have Not Started The Application Process Yet",
  ];

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setSelected((prev) => (prev === idx ? null : idx));
    setProgress(selected === idx ? 0 : 10);
  };

  function handleBack() {
    router.back();
  }

  function handleNext() {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest2"); // <-- replace with your next route (e.g. "/CountrySelMobile2")
    }
  }


  return (
    <main className="min-h-screen bg-[#DFFFFF] text-[#545454] flex flex-col">
      {/* Header */}
      <div className="py-10 bg-[#DFFFFF]">
        <div className="px-5 pb-2">
          {/* ✅ Uses your permanent header structure */}
          <div className="flex items-center justify-center relative mb-3">
            <button
              onClick={handleBack}
              className="absolute left-0 flex items-center justify-center w-8 h-8 text-[#545454]"
              aria-label="Go back"
            >
              <FaArrowLeft className="text-xl" />
            </button>

            <h1 className="text-2xl font-bold text-center text-[#545454] leading-tight">
              Country_Name Study Visa
            </h1>
          </div>

          <p className="text-[#37D7D9] mb-2 text-center text-sm font-medium">
            Eligibility Assessment
          </p>

          <p className="text-sm text-center leading-6 font-medium max-w-[90%] mx-auto text-[#545454]">
            Complete this Comprehensive Assessment To Evaluate Your Visa
            Eligibility And Get Personalized Guidance For Your Study Abroad
            Journey.
          </p>

          {/* ✅ Standard Progress Bar + always keep line break */}
          <div className="mt-8 w-full max-w-[90%] mx-auto">
            <div className="h-2 rounded-full bg-white/60 overflow-hidden">
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
              <span className="text-[12px] -mt-1">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="flex-1 w-full bg-white rounded-t-3xl shadow-lg px-5 pt-8 pb-12">
        <div className="max-w-full mx-auto">
          <div className="px-1">
            <h2 className="text-2xl font-semibold">Visa Assessment Question</h2>
            <p className="text-[#37D7D9] mb-3 text-sm">Eligibility Evaluation</p>

            <p className="text-lg font-medium mb-3">
              Have You Received An Offer Of Admission From A CRICOS
              Registered Institution In Australia?
              <br />
              <span className="text-yellow-400 text-sm">
                ! This Question Affects Your Visa Eligibility Score
              </span>
            </p>

            <p className="text-lg font-medium mb-3">
              Choose The Option That Best Describes Your Situation:
              <br />
              <span className="text-[#545454] text-sm">
                ! Each Option Has Different Weightage
              </span>
            </p>
          </div>

          <form className="space-y-3" aria-label="Eligibility Evaluation">
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