"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #16 in QS World University Rankings 2025.",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Around 8,400 students, including 22% international students from 100+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[36%] text-center",
  },
  {
    text: "Located in Princeton, New Jersey - a beautiful, safe, and historic Ivy League town.",
    style: "absolute left-[54%] top-[20%] w-[36%] text-left",
  },
  {
    text: "Among the top 10 globally for graduate employability (QS 2025).",
    style: "absolute left-[40%] top-[80%] w-[30%] text-center",
  },
  {
    text: "Faculty and alumni include 30+ Nobel laureates, 16 Fields Medalists, and U.S. Presidents",
    style: "absolute right-[-11%] top-[63%] w-[38%] text-left",
  },
];

export default function TU62() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why University of Waterloo?


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
