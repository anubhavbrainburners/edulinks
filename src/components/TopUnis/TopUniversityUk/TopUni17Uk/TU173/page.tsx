"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #167 in QS World University Rankings 2024.",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Member of the prestigious Russell Group of research universities.",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: "21,000+ students, including 6,000 international students from 150+ countries.",
    style: "absolute left-[52%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Consistently ranked in the UK's top 10 for student satisfaction.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Beautiful 500-acre campus with modern facilities and lakeside surroundings.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU173() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why University of York?
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
