"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #5 in QS World University Rankings 2024.",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Located in Silicon Valley - the global center for innovation and startups.",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: " Over 17,000 students, including 25% international students from 120+ countries.",
    style: "absolute left-[54%] top-[20%] w-[36%] text-left",
  },
  {
    text: "Ranked #2 globally for graduate employability (QS 2024).",
    style: "absolute left-[40%] top-[80%] w-[28%] text-center",
  },
  {
    text: "World-renowned faculty, including Nobel laureates and Turing Award winners.",
    style: "absolute right-[-11%] top-[63%] w-[36%] text-left",
  },
];

export default function TU22() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Stanford University?

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
