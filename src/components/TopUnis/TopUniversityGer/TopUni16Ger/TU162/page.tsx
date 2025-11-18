"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 200 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Member of Germany's TU9 Alliance of elite technical universities",
    style: "absolute left-[15%] top-[-7%] w-[35%] text-center",
  },
  {
    text: "Tuition-free education with semester contribution (~EUR 280)",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: " Leading programs in engineering, technology, and computer science",
    style: "absolute left-[40%] top-[80%] w-[28%] text-center",
  },
  {
    text: "Located in Dresden, a centre for innovation and culture in eastern Germany",
    style: "absolute right-[-11%] top-[63%] w-[33%] text-left",
  },
];

export default function TU162() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
     Why Dresden University of Technology?



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
