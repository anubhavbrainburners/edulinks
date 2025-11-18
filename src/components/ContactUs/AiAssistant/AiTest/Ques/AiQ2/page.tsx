"use client";

import Image from "next/image";
import { useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation"; // ✅ for navigation

export default function AiQ2() {
  const [progress, setProgress] = useState(25);
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter(); // ✅ init router

  const options = [
    "High School (12th Grade)",
    "Undergraduate Student",
    "Bachelor’s Degree",
    "Master’s Degree",
    "PhD / Doctorate",
    "Professional Experience",
  ];

  const handleSelect = (idx: number) => {
    setSelected((prev) => (prev === idx ? null : idx));
    setProgress(selected === idx ? 25 : 50);
  };

  // ✅ handle next button navigation
  const handleNext = () => {
    if (selected !== null) {
      router.push("/contactus/aiassistant/aitest/aiq1/aiq2/aiq3"); // 👈 change this to your next page
    } else {
      alert("Please select your education background before continuing!");
    }
  };

  return (
    <main
      className="min-h-screen w-full antialiased overflow-hidden"
      style={{
        backgroundColor: "#DFFFFF",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Left fixed panel */}
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
        <div className="flex-0 mt-42">
          <div className="w-full max-w-[260px]">
            <Image
              src="/images/aiq1Img.png"
              alt="career illustration"
              width={1020}
              height={220}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="mt-16 max-w-[550px]">
          <h1 className="text-4xl font-bold mb-6 text-[#545454]">
            Career Assessment For Country_Name
          </h1>
          <p className="text-base leading-tight font-medium text-[#545454]">
            Help Us Understand Your Background To Create A Personalized <br />
            Career Test.
          </p>

          <div className="mt-8 max-w-[420px]">
            <div className="h-3 rounded-full bg-white/60 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
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
      </aside>

      {/* Right scrollable form */}
      <section
        className="pt-6 pb-12 mr-8"
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
                Education Background
              </h2>
              <p className="text-lg font-medium mb-12">
                What Is Your Highest Level Of Education Or Current Field Of
                <br /> Study?
              </p>
            </div>

            <form className="space-y-4" aria-label="Education background">
              {options.map((opt, idx) => {
                const isChecked = selected === idx;
                return (
                  <label
                    key={opt}
                    onClick={() => handleSelect(idx)}
                    className={`flex items-center justify-between w-full border rounded-xl px-5 py-3 cursor-pointer transition-all ${
                      isChecked
                        ? "border-[#37D7D9] bg-[#E6FFFF]"
                        : "border-[#37D7D9]"
                    }`}
                  >
                    <div className="text-lg font-semibold text-[#545454]">
                      {opt}
                    </div>

                    {/* Fixed-size container so layout never shifts */}
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

              {/* ✅ Next button with link */}
              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-3 bg-[#37D7D9] text-white text-xl font-black rounded-full px-6 py-2 shadow-md hover:cursor-pointer"
                >
                  Next <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
