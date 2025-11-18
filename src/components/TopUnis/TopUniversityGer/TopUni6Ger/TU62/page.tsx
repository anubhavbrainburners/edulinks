"use client";

import Image from "next/image";
import React from "react";

const points = [
  {
    text: "Ranked among the Top 100 globally (QS & THE Rankings)",
    style: "absolute left-[-16%] top-[25%] w-[30%] text-right",
  },
  {
    text: "Tuition-free education with semester contribution (~EUR 300)",
    style: "absolute left-[15%] top-[-7%] w-[30%] text-center",
  },
  {
    text: "Member of the prestigious Berlin University Alliance",
    style: "absolute left-[54%] top-[20%] w-[30%] text-left",
  },
  {
    text: " Leading programs in political science, history, natural sciences, and medicine",
    style: "absolute left-[37%] top-[80%] w-[32%] text-center",
  },
  {
    text: "Global partnerships with 400+ universities worldwide",
    style: "absolute right-[-14%] top-[63%] w-[31%] text-left",
  },
];

export default function TU62() {
  return (
    <section className="relative w-full flex flex-col items-center py-10 mt-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-[#545454] mb-25 text-center">
      Why University of Berlin?


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
