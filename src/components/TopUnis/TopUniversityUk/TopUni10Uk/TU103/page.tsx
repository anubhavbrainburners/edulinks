"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #55 in QS World University Rankings 2024.",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Member of the Russell Group of research-intensive universities.",
    style: "absolute left-[10%] top-[-6%] w-[30%] text-center",
  },
  {
    text: "27,000+ students, including over 9,000 international students from 150+ countries.",
    style: "absolute left-[52%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Excellent graduate employability and strong industry connections.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Located in Bristol, one of the UK's most creative and student-friendly cities.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU103() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why University of Bristol?
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
