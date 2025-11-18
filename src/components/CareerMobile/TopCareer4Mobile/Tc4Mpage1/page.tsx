"use client";
import Image from "next/image";
import React from "react";

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Construction",
    text: "Help shape New Zealand’s infrastructure boom through civil, electrical, and mechanical engineering roles.",
    link :"/maincareer/topcareer4/careernz1",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Healthcare & Nursing",
    text: "Work in one of the country’s highest-demand sectors with opportunities in nursing, medicine, and aged care.",
    link :"/maincareer/topcareer4/careernz2",
  },
  {
    img: "/images/tcpage1Img4.png",
    title: "Information Technology & AI",
    text: "Contribute to New Zealand’s fast-evolving digital economy in software development, cybersecurity, and data analytics.",
    link :"/maincareer/topcareer4/careernz3",
  },
  {
    img: "/images/tcpage1Img3.png",
    title: "Business & Management",
    text: "Lead, innovate, and drive growth in management, finance, and marketing across local and global firms.",
    link :"/maincareer/topcareer4/careernz4",
  },
  {
    img: "/images/tcpage1Img5.png",
    title: "Education & Teaching",
    text: "Join New Zealand’s respected education system — from early childhood teaching to university lecturing.",
    link :"/maincareer/topcareer4/careernz5",
  },
  {
    img: "/images/tcpage1Img8.png",
    title: "Agriculture & Environmental Sciences",
    text: "Support New Zealand’s world-class agribusiness and sustainability initiatives through research and innovation.",
    link :"/maincareer/topcareer4/careernz6",
  },
];

export default function Tc4Mpage1() {
  return (
    <main className="min-h-screen rounded-t-4xl bg-white -mt-8 pt-20 pb-16">
      {/* ===== Top Image Section ===== */}
      <div className="relative w-full h-[270px]">
        <Image
          src="/images/tcpage1Img.png"
          alt="Career Overview in Australia"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* ===== Overview Text Section ===== */}
      <section className="text-center px-6 pt-8 pb-10">
        <h1 className="text-3xl font-semibold text-[#545454] mb-8">
          Overview
        </h1>
        <p className="text-[#000000] text-base leading-relaxed">
          New Zealand offers strong career prospects across sectors like 
          healthcare, engineering, IT, and education. With skill shortages
           nationwide and a growing demand for qualified professionals, international 
           graduates benefit from stable job markets, a safe living environment,
            and up to three years of post-study work opportunities.
        </p>
      </section>

      {/* ===== Career Fields Section ===== */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#545454] mb-8">
          Top Career Fields In<br />Germany
        </h2>

        <div className="grid grid-cols-2 gap-y-5 gap-x-4 justify-items-center">
          {CAREER_FIELDS.map((field, i) => (
            <div
              key={i}
              className="w-full max-w-[200px] bg-white rounded-2xl overflow-hidden flex flex-col items-center shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src={field.img}
                  alt={field.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center px-2 py-4 space-y-3">
                <h3 className="text-xs font-semibold text-[#545454] text-center leading-snug">
                  {field.title}
                </h3>
                <p className="text-[8px] text-[#000000] text-center leading-tight">
                  {field.text}
                </p>
                <button
                  onClick={() => (window.location.href = field.link)}
                  className="bg-[#37D7D9] text-white text-xs px-2.5 py-1 rounded-full shadow-lg hover:bg-[#2fc4c6] transition-colors duration-300"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
