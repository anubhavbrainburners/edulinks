"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: "/images/uniicon.svg",
    text: "City Campus - Central Auckland hub with state-of-the-art labs, libraries, and innovation centres.",
  },
  {
    icon: "/images/uni2icon.svg",
    text: "Grafton Campus - Home to the Faculty of Medicine and Health Sciences",
  },
  {
    icon: "/images/campicon.svg",
    text: "Modern student accommodation, sports centres, and cultural clubs.",
  },
  {
    icon: "/images/assisticon.svg",
    text: "Entrepreneurial hubs and global research collaborations.",
  },
  {
    icon: "/images/supporticon.svg",
    text: "Dedicated international office for support and career services.",
  },
];

export default function TU5M() {
  return (
    <div className="mx-auto mt-20 max-w-screen-lg text-left bg-white ">
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