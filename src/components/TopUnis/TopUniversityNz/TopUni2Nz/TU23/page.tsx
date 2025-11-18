"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 200 globally (QS & THE Rankings)",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "New Zealand's oldest and most research-driven university",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text: "Strong global reputation in health sciences, law, and business",
    style: "absolute left-[50%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Scholarships for international students",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: " Located in Dunedin - a safe, affordable, and student-friendly city",
    style: "absolute right-[-10%] top-[60%] w-[30%] text-center",
  },
];

export default function TU23() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
         Why University of Otago?
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
