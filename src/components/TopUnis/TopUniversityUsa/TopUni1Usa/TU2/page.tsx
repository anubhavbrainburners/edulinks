"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #4 in QS World University Rankings 2024.",
    style: "absolute left-[-10%] top-[25%] w-[26%] text-right",
  },
  {
    text: "Over 23,000 students, including 25% international students from 150+ countries.",
    style: "absolute left-[15%] top-[-7%] w-[35%] text-center",
  },
  {
    text: "Exceptional faculty-to-student ratio and strong interdisciplinary research.",
    style: "absolute left-[54%] top-[23%] w-[30%] text-left",
  },
  {
    text: "Unparalleled alumni network across global industries and governments.",
    style: "absolute left-[40%] top-[80%] w-[30%] text-center",
  },
  {
    text: "Located in Cambridge, Massachusetts - a global academic hub",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU2() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why Harvard University?
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
