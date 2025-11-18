"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Part of Te Pukenga - New Zealand Institute of Skills and Technology",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Practical, work-based learning and strong industry ties",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text:  "Affordable tuition and living costs",
    style: "absolute left-[49%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Supportive community and small class environment",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Located in Whangarei - a scenic, student-friendly city in Northland",
    style: "absolute right-[-10%] top-[64%] w-[30%] text-center",
  },
];

export default function TU183() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
           Why NorthTec?
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
