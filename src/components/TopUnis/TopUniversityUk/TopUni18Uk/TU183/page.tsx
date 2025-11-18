"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #153 in QS World University Rankings 2024.",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Member of the Russell Group, recognized for world-class research.",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: " Over 30,000 students from 150+ countries.",
    style: "absolute left-[52%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Top 10 in the UK for student satisfaction and graduate employment.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Beautiful, green campuses located in Exeter and Cornwall.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU183() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why University of Exeter?
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
