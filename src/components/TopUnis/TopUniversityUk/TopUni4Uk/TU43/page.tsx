"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #3 in the world for Social Sciences (QS 2024)",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Located in London - the global centre for business, politics, and finance",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: "More than 70% of students are international, representing 150+ countries",
    style: "absolute left-[50%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Faculty includes world-renowned economists and policymakers",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Strong graduate employability and internship opportunities worldwide",
    style: "absolute right-[-10%] top-[65%] w-[30%] text-center",
  },
];

export default function TU43() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why London School of Economics?
      </h2>

      {/* Line + Dots as One Image */}
      <div className="relative w-full max-w-[1000px] h-auto aspect-[1000/400]">
        <Image
          src="/images/tu2Img.png"
          alt="Timeline line"
          fill
          className="object-contain"
          priority
        />

        {/* Overlay Texts */}
        {points.map((point, index) => (
          <p
            key={index}
            className={`text-[#000000] text-xs sm:text-sm md:text-base ${point.style}`}
          >
            {point.text}
          </p>
        ))}
      </div>
    </section>
  );
}
