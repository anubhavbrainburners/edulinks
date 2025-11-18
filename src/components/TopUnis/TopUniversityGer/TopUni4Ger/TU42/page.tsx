"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: " Ranked among the Top 120 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Located in the heart of Berlin, Germany's cultural and political capital",
    style: "absolute left-[15%] top-[-7%] w-[34%] text-center",
  },
  {
    text: "Tuition-free education for both domestic and international students",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: "Renowned alumni including Albert Einstein, Karl Marx, and Max Planck",
    style: "absolute left-[40%] top-[80%] w-[30%] text-center",
  },
  {
    text: "Strong research networks with Max Planck Society and Charité Medical School",
    style: "absolute right-[-11%] top-[63%] w-[33%] text-left",
  },
];

export default function TU42() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
       Why Humboldt University of Berlin?


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
