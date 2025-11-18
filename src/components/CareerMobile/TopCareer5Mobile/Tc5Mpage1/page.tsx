"use client";
import Image from "next/image";
import React from "react";

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img2.png",
    title: "Healthcare & Nursing",
    text: "Join one of the UK’s largest employment sectors — high demand in nursing, medicine, and allied health services.",
    link :"/maincareer/topcareer5/careeruk1",
  },
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Technology",
    text: "Design, develop, and innovate in civil, electrical, mechanical, and renewable energy fields.",
    link :"/maincareer/topcareer5/careeruk2",
  },
  {
    img: "/images/tcpage1Img10.png",
    title: "Information Technology & Data Science",
    text: "Be part of the UK’s expanding digital economy through careers in AI, software development, and cybersecurity.",
    link :"/maincareer/topcareer5/careeruk3",
  },
  {
    img: "/images/tcpage1Img3.png",
    title: "Business & Finance",
    text: "Work in the global hub of London across banking, accounting, consulting, and management roles.",
    link :"/maincareer/topcareer5/careeruk4",
  },
  {
    img: "/images/tcpage1Img5.png",
    title: "Education & Teaching",
    text: "Teach and inspire in one of the world’s most respected education systems, from early years to university level.",
    link :"/maincareer/topcareer5/careeruk5",
  },
  {
    img: "/images/tcpage1Img9.png",
    title: "Creative Industries & Media",
    text: "Pursue opportunities in design, film, digital marketing, and content production in the UK’s creative sector.",
    link :"/maincareer/topcareer5/careeruk6",
  },
];

export default function Tc5Mpage1() {
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
          The United Kingdom offers strong job prospects across diverse
           sectors — from finance and healthcare to technology, engineering,
            and education. As one of the world’s leading economies, the UK 
            attracts skilled professionals globally and provides international
             graduates with post-study work visas and long-term career opportunities 
             in high-growth industries.
        </p>
      </section>

      {/* ===== Career Fields Section ===== */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#545454] mb-8">
          Top Career Fields In<br />UK
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
