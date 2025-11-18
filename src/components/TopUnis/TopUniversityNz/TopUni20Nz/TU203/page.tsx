"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Part of Te Pukenga - New Zealand Institute of Skills and Technology",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Practical, industry-aligned learning experience",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text:  "Strong focus on student wellbeing and small class teaching",
    style: "absolute left-[49%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Located near Wellington, New Zealand's cultural and political capital",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Affordable tuition and excellent graduate employability",
    style: "absolute right-[-10%] top-[64%] w-[30%] text-center",
  },
];

export default function TU203() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
           Why Whitireia New Zealand?
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
