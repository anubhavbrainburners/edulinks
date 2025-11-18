"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 150 globally (QS & THE Rankings).",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: " Member of the TU9 Alliance of top German technical universities.",
    style: "absolute left-[15%] top-[-7%] w-[35%] text-center",
  },
  {
    text: "Tuition-free education with a semester contribution (~EUR 170).",
    style: "absolute left-[54%] top-[20%] w-[40%] text-left",
  },
  {
    text: " Strong focus on research and innovation in engineering and technology.",
    style: "absolute left-[36%] top-[80%] w-[33%] text-center",
  },
  {
    text: "Extensive industry collaborations with Siemens, Bosch, and Mercedes-Benz",
    style: "absolute right-[-11%] top-[63%] w-[35%] text-left",
  },
];

export default function TU152() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why Karlsruhe Institute of Technology?


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
