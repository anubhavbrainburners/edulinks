"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked in the Top 300 universities globally (QS World University Rankings).",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Highly regarded for health sciences, business, and engineering programs.",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: "Melbourne location offers a vibrant lifestyle and global career access.",
    style: "absolute left-[53%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Strong focus on employability with industry placements and internships.",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Modern campuses with innovation hubs and global study options.",
    style: "absolute right-[-10%] top-[63%] w-[30%] text-center",
  },
];

export default function TU173() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
        Why La Trobe University?
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
