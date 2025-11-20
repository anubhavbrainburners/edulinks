"use client";

import Image from "next/image";
import React from "react";

export default function TU3M() {
  const points = [
    "Ranked #1 in New Zealand and Top 100 globally (QS Rankings)",
    "Research-led teaching and global employability focus",
    "Diverse and inclusive campus community",
    "Scholarships for international students",
    "Located in Auckland - a safe, multicultural, and innovative city",
  ];

  return (
    <section className="w-full px-6 py-12 -mt-13 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#545454]">
         Why University of Auckland?
      </h2>

      <div className="relative flex items-start">
        {/* Vertical Line Image */}
        <div className="relative w-8 flex-shrink-0 flex justify-center">
          <Image
            src="/images/tu13mImg.png" // ← Replace with your line+dot image
            alt="Timeline line"
            width={28}
            height={400}
            className="object-contain h-full"
          />
        </div>

        {/* Text List */}
        <ul className="ml-4 flex flex-col justify-between space-y-6">
          {points.map((point, index) => (
            <li
              key={index}
              className="text-gray-800 text-base leading-relaxed font-medium"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
