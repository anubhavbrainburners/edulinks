"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #40 in QS World University Rankings 2024.",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Top 10 in the world for nursing, dentistry, and law.",
    style: "absolute left-[10%] top-[-6%] w-[30%] text-center",
  },
  {
    text: "Located in central London with five campuses along the River Thames.",
    style: "absolute left-[52%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Over 33,000 students, including 14,000 international students from 150+ countries.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Strong partnerships with organizations such as the NHS, UNESCO, and BBC.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU73() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why King's College London?
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
