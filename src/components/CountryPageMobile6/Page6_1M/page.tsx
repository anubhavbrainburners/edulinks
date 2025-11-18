// components/SupportSection.tsx
"use client";
import Image from "next/image";
import React from "react";

const supportItems: string[] = [
  "Public universities with little or no tuition fees",
  "Globally recognized degrees & strong employability",
  "Post-Study Work Visa up to 18 months",
  "Multicultural & welcoming student environment",
  "Hub for engineering, technology, and research",
];

export default function Page6_1M() {
  return (
    <section className="relative bg-white w-full rounded-t-4xl flex flex-col items-center -mt-10 py-12 px-4">
      {/* === Background Image === */}
      {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/page6_1Img.png"
            alt="Support Illustration"
            width={650}
            height={650}
            className="object-contain w-[530px] h-[200px]"
            priority
          />
        </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#545454] text-center mb-6 mt-10">
        Why Study in Germany?
      </h2>

      {/* Layout */}
      <div className="grid grid-cols-1 gap-10 items-center w-full max-w-6xl">
        {/* Left Side - Bullet Points */}
        <div className="space-y-6 ml-5 px-2">
          {supportItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 sm:gap-6 md:gap-11">
              <span className="w-3 h-3 sm:w-4 sm:h-4 px-1.5 rounded-full bg-[#37D7D9] mt-2"></span>
              <p
                className="text-base sm:text-lg md:text-[22px] font-bold text-[#333] relative z-20"
                style={{ fontFamily: "DM Sans" }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
