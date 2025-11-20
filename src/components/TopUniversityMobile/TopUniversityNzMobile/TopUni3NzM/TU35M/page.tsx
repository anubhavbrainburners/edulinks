"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: "/images/uniicon.svg",
    text: "Kelburn Campus - Main academic and research hub with panoramic city views.",
  },
  {
    icon: "/images/uni2icon.svg",
    text: "Pipitea Campus - Located near Parliament and government offices.",
  },
  {
    icon: "/images/libicon.svg",
    text: "Te Aro Campus - Home to architecture and design faculties.",
  },
  {
    icon: "/images/labicon.svg",
    text: "Innovation hubs, libraries, and international support offices.",
  },
  {
    icon: "/images/campicon.svg",
    text: "Affordable student accommodation and strong cultural community.",
  },
];

export default function TU35M() {
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