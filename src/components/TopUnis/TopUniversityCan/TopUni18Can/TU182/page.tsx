"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 500 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Located in Montreal - one of the best student cities in the world",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "Affordable tuition and low living costs compared to other major Canadian cities",
    style: "absolute left-[54%] top-[20%] w-[32%] text-left",
  },
  {
    text: "Strong emphasis on innovation, research, and sustainability",
    style: "absolute left-[40%] top-[80%] w-[26%] text-center",
  },
  {
    text: "Highly diverse and inclusive international student community",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU182() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Concordia University?


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
