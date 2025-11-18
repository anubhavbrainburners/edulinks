"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 500 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Member of the U15 Group of Canadian Research Universities",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "Affordable tuition and cost of living compared to major cities",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: " Strong research focus in agriculture, health, and sustainability",
    style: "absolute left-[40%] top-[80%] w-[30%] text-center",
  },
  {
    text: "Safe, welcoming, and culturally diverse campus community",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU172() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why University of Saskatchewan?


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
