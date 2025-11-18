"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #25 in QS World University Rankings 2025.",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: " Around 16,000 students, including 24% international students from 100+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[35%] text-center",
  },
  {
    text: "Located in Durham, North Carolina, part of the thriving Research Triangle region.",
    style: "absolute left-[54%] top-[20%] w-[36%] text-left",
  },
  {
    text: " #12 globally for graduate employability (QS 2025).",
    style: "absolute left-[40%] top-[80%] w-[28%] text-center",
  },
  {
    text: "Home to 15 Nobel laureates and renowned for cutting-edge innovation and entrepreneurship.",
    style: "absolute right-[-11%] top-[63%] w-[38%] text-left",
  },
];

export default function TU162() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why York University?


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
