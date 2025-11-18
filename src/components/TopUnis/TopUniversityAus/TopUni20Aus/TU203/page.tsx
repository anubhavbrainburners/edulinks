"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 250 universities (QS World University Rankings).",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Known for innovation, technology, and future-ready learning.",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: "Strong focus on employability through internships and industry projects.",
    style: "absolute left-[50%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Located in Melbourne, Australia’s technology and education hub.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Partnerships with leading global companies like Siemens, Adobe, and Amazon.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU203() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
        Why Swinburne University of Technology?
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
