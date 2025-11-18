"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 600 globally (QS World University Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Located in the heart of Toronto - Canada's largest business and tech hub",
    style: "absolute left-[15%] top-[-7%] w-[32%] text-center",
  },
  {
    text: "Strong focus on innovation, startups, and experiential learning",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: "Industry-linked programs offering co-op placements and internships",
    style: "absolute left-[40%] top-[80%] w-[28%] text-center",
  },
  {
    text: "Diverse student body representing over 140 nationalities",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU202() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Toronto Metropolitan University?


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
