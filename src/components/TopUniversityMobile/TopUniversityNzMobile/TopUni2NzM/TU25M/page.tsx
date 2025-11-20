"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: "/images/uniicon.svg",
    text: "Central Dunedin Campus - Historic buildings and world-class facilities.",
  },
  {
    icon: "/images/uni2icon.svg",
    text: "Medical and research campuses across Wellington and Christchurch.",
  },
  {
    icon: "/images/libicon.svg",
    text: "Libraries, laboratories, and innovation hubs for entrepreneurship.",
  },
  {
    icon: "/images/campicon.svg",
    text: "Modern accommodation, sports centres, and cultural clubs.",
  },
  {
    icon: "/images/commicon.svg",
    text: "Strong focus on student well-being and international community engagement.",
  },
];

export default function TU25M() {
  return (
    <div className="mx-auto mt-10 max-w-screen-lg text-left bg-white ">
      {/* Header */}
      <h1 className="text-xl  font-bold -mt-40 text-[#545454] mb-16 text-center">
        Campus and Facilities
      </h1>

      {/* List */}
      <div className="space-y-12 pb-30 px-8">
        {REASONS.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 w-full"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <Image
                src={item.icon}
                alt="icon"
                width={38}
                height={38}
                className="w-10 h-10"
              />
            </div>

            {/* Text */}
            <p className="text-sm  text-[#545454] font-semibold leading-snug max-w-xl">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}