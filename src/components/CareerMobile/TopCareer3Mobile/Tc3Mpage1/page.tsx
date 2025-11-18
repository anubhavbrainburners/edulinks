"use client";
import Image from "next/image";
import React from "react";

const CAREER_FIELDS = [
  {
    img: "/images/tcpage1Img1.png",
    title: "Engineering & Manufacturing",
    text: "Work in one of the world’s strongest engineering sectors — automotive, mechanical, and electrical.",
    link: "/maincareer/topcareer3/careerger1",
  },
  {
    img: "/images/tcpage1Img4.png",
    title: "Information Technology & AI",
    text: "Contribute to Germany’s growing tech ecosystem in AI, data analytics, cybersecurity, and software development.",
    link: "/maincareer/topcareer3/careerger2",
  },
  {
    img: "/images/tcpage1Img2.png",
    title: "Healthcare & Life Sciences",
    text: "Support Germany’s expanding healthcare system in nursing, biotechnology, and medical research.",
    link: "/maincareer/topcareer3/careerger3",
  },
  {
    img: "/images/tcpage1Img3.png",
    title: "Business & Finance",
    text: "Join Germany’s dynamic business environment with roles in management, finance, and supply chain.",
    link: "/maincareer/topcareer3/careerger4",
  },
  {
    img: "/images/tcpage1Img7.png",
    title: "Renewable Energy & Sustainability",
    text: "Be part of Germany’s leadership in green technology, energy efficiency, and environmental innovation.",
    link: "/maincareer/topcareer3/careerger5",
  },
  {
    img: "/images/tcpage1Img5.png",
    title: "Education & Research",
    text: "Engage in teaching or academic research at leading universities and institutes.",
    link: "/maincareer/topcareer3/careerger6",
  },
];

export default function Tc3Mpage1() {
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
          Germany offers exceptional career prospects across technology,
           engineering, healthcare, and research-driven fields. As Europe’s 
           largest economy, it faces significant skill shortages and provides
            international graduates with numerous work and immigration opportunities 
            — including the 18-month post-study work visa and long-term residence options.
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
