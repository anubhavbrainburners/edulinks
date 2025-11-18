"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 200 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Tuition-free education with a semester contribution (~EUR 380)",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "Globally recognized for excellence in natural sciences and humanities",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: " Member of the German Excellence Strategy",
    style: "absolute left-[45%] top-[80%] w-[26%] text-center",
  },
  {
    text: "Home to multiple Nobel laureates and global research collaborations",
    style: "absolute right-[-11%] top-[63%] w-[31%] text-left",
  },
];

export default function TU112() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why University of Göttingen?


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
