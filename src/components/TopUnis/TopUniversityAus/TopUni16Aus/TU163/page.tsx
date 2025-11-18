"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked in the Top 250 globally (QS World University Rankings).",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Award-winning university for sustainability, innovation, and teaching quality.",
    style: "absolute left-[10%] top-[-13%] w-[30%] text-center",
  },
  {
    text: "Strong industry ties and hands-on learning through internships and research.",
    style: "absolute left-[53%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Campuses in Brisbane and the Gold Coast — both top-rated student cities.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Global partnerships with 200+ universities across 40 countries.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU163() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
        Why Griffith University?
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
