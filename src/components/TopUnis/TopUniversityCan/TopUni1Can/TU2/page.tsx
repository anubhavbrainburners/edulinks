"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked #1 in Canada and among the Top 20 globally (QS & THE Rankings)",
    style: "absolute left-[-10%] top-[25%] w-[25%] text-right",
  },
  {
    text: "Extensive research facilities and global industry partnerships",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "Diverse and inclusive international student community",
    style: "absolute left-[54%] top-[23%] w-[30%] text-left",
  },
  {
    text: "Located in Toronto - Canada's economic and cultural hub",
    style: "absolute left-[45%] top-[80%] w-[25%] text-center",
  },
  {
    text: "Over 500,000 alumni network worldwide for global career connections",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU2() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
        Why University of Toronto?

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
