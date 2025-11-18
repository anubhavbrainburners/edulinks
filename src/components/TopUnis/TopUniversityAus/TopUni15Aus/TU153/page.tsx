"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 200 universities globally (QS World Rankings).",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Strong focus on industry engagement and employability.",
    style: "absolute left-[10%] top-[-13%] w-[30%] text-center",
  },
  {
    text: "Located in Brisbane — safe, affordable, and a hub for innovation and startups.",
    style: "absolute left-[53%] top-[20%] w-[30%] text-center",
  },
  {
    text: "World-class programs in business, technology, health, and design.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Diverse, inclusive campus community with global study opportunities.",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU153() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
        Why Queensland University of Technology?
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
