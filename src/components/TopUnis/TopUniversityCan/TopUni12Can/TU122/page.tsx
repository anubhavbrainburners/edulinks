"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 350 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Leading university in sustainability and innovation",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "3 campuses located in Metro Vancouver area",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: " One of Canada's best co-op education programs",
    style: "absolute left-[40%] top-[80%] w-[26%] text-center",
  },
  {
    text: "Excellent employability outcomes and global partnerships",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU122() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Simon Fraser University?


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
