"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 40 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[27%] text-right",
  },
  {
    text: "One of Europe's top research universities with 500+ partnerships worldwide",
    style: "absolute left-[15%] top-[-7%] w-[33%] text-center",
  },
  {
    text: "Tuition-free education (students pay only semester contribution fees)",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: "Wide range of English-taught programs in science, business, and humanities",
    style: "absolute left-[38%] top-[80%] w-[32%] text-center",
  },
  {
    text: "Located in Munich - a global centre for technology, business, and culture",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU22() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
       Why Ludwig Maximilian University of Munich?

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
