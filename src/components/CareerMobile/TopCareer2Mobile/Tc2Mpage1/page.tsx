"use client";
import Image from "next/image";
import React from "react";

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Construction",
    text: "Design, develop, and manage infrastructure projects across Canada’s growing cities and industries.",
    link: "/maincareer/topcareer2/careercan1",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Health Sciences & Nursing",
    text: "Join Canada’s expanding healthcare system with high demand in nursing, public health, and allied services.",
    link: "/maincareer/topcareer2/careercan2",
  },
  {
    img: "/images/tcpage1Img4.png",
    title: "Information Technology & AI",
    text: "Be part of Canada’s tech revolution in AI, software development, data science, and cybersecurity.",
    link: "/maincareer/topcareer2/careercan3",
  },
  {
    img: "/images/tcpage1Img3.png",
    title: "Business & Finance",
    text: "Lead and innovate in global trade, banking, management, and entrepreneurship.",
    link: "/maincareer/topcareer2/careercan4",
  },
  {
    img: "/images/tcpage1Img5.png",
    title: "Education & Teaching",
    text: "Contribute to Canada’s world-class education system across schools, colleges, and universities.",
    link: "/maincareer/topcareer2/careercan5",
  },
  {
    img: "/images/tcpage1Img6.png",
    title: "Hospitality & Tourism",
    text: "Build a global career in Canada’s thriving travel, food, and hospitality sectors.",
    link: "/maincareer/topcareer2/careercan6",
  },
];

export default function Tc2Mpage1() {
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
          Canada offers a thriving job market across multiple sectors — 
          from healthcare and technology to engineering, business, and education.
           With consistent skill shortages, attractive post-study work options,
            and clear immigration pathways, international graduates enjoy strong 
            employment prospects and long-term growth opportunities.
        </p>
      </section>

      {/* ===== Career Fields Section ===== */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-[#545454] mb-8">
          Top Career Fields In<br />Canada
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
