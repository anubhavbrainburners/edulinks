"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Known for affordable tuition and Zero Fees Scheme (for domestic students)",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Hands-on, practical learning with industry placements",
    style: "absolute left-[10%] top-[-8%] w-[30%] text-center",
  },
  {
    text:  "Small class sizes and personalized attention",
    style: "absolute left-[49%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Modern facilities and a friendly, supportive learning environment",
    style: "absolute left-[37%] top-[75%] w-[30%] text-center",
  },
  {
    text: "Located in Invercargill, one of New Zealand's most affordable cities",
    style: "absolute right-[-10%] top-[64%] w-[30%] text-center",
  },
];

export default function TU133() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
          Why Southern Institute of Technology?
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
