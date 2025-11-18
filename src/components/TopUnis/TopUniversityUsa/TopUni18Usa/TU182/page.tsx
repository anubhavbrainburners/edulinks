"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #26 in QS World University Rankings 2025.",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Around 16,000 students, including 30% international students from 120+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[37%] text-center",
  },
  {
    text: " Located in Pittsburgh, Pennsylvania, a vibrant tech and research hub",
    style: "absolute left-[54%] top-[20%] w-[32%] text-left",
  },
  {
    text: "#7 globally for computer science and engineering (QS Subject Rankings 2025).",
    style: "absolute left-[37%] top-[80%] w-[32%] text-center",
  },
  {
    text: "Home to 20 Nobel laureates and leaders in AI, robotics, business, and design.",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU182() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
     Why Carnegie Mellon University ?


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
