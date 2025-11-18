// components/SupportSection.tsx
"use client";
import Image from "next/image";
import React from "react";

const supportItems: string[] = [
  "Home to the world’s top universities (Harvard, MIT, Stanford, etc.)",
  "Degrees with global recognition & high employability",
  "Optional Practical Training (OPT) & STEM extensions for international students",
  "Diverse, multicultural environment with students from 190+ countries",
  "Hub for innovation, technology & research",
];

export default function Page5_1M() {
  return (
    <section className="relative bg-white w-full rounded-t-4xl flex flex-col items-center -mt-10 py-12 px-4">
      {/* === Background Image === */}
      {/* Right Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/images/page5_1Img.png"
            alt="Support Illustration"
            width={650}
            height={650}
            className="object-contain w-[530px] h-[200px] right-4 relative"
            priority
          />
        </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#545454] text-center mb-6 mt-10 px-4">
        Why Study in U.S.A.
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
