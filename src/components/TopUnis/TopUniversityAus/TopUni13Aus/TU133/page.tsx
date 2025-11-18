"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked in the Top 1% of universities worldwide (QS & THE Rankings).",
    style: "absolute left-[-15%] top-[23%] w-[30%] text-center",
  },
  {
    text: "Consistently rated among Australia’s top universities for student satisfaction.",
    style: "absolute left-[15%] top-[-13%] w-[30%] text-center",
  },
  {
    text: "Strong global focus with over 5,000 industry partnerships.",
    style: "absolute left-[51%] top-[20%] w-[30%] text-center",
  },
  {
    text: "Campuses located in Victoria’s most livable and student-friendly regions.",
    style: "absolute left-[37%] top-[70%] w-[30%] text-center",
  },
  {
    text: "Known for innovation in digital learning and employability programs.",
    style: "absolute right-[-10%] top-[65%] w-[30%] text-center",
  },
];

export default function TU133() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-30">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-30 text-center">
        Why Deakin University?
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
