"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #15 in QS World University Rankings 2025.",
    style: "absolute left-[-16%] top-[25%] w-[35%] text-right",
  },
  {
    text: "Over 46,000 students, including 18% international students from 120+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[35%] text-center",
  },
  {
    text: "Located in Los Angeles, a global hub for business, technology, arts, and entertainment.",
    style: "absolute left-[54%] top-[20%] w-[37%] text-left",
  },
  {
    text: "#6 globally for graduate employability (QS 2025).",
    style: "absolute left-[40%] top-[80%] w-[26%] text-center",
  },
  {
    text: "Home to 16 Nobel laureates and leaders across science, media, and public service.",
    style: "absolute right-[-11%] top-[63%] w-[37%] text-left",
  },
];

export default function TU142() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
     Why University of California, Los Angeles?



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
