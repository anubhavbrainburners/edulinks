"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #7 in QS World University Rankings 2025.",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Around 2,400 students, including 27% international students from 80+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[36%] text-center",
  },
  {
    text: "Located in Pasadena, California, near Los Angeles - a global center for technology and innovation.",
    style: "absolute left-[54%] top-[20%] w-[38%] text-left",
  },
  {
    text: "#8 globally for graduate employability (QS 2025).",
    style: "absolute left-[45%] top-[80%] w-[22%] text-center",
  },
  {
    text: "Faculty includes 46 Nobel laureates and pioneers in science and space research.",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU42() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Caltech ?


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
