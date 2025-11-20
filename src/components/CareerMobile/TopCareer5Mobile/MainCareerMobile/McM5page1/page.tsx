"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuuk3Img1.png", title: "University of Oxford", link: "/topunis/topuniversityuk/uk1uni" },
  { img: "/images/tuuk3Img2.png", title: "University of Cambridge", link: "/topunis/topuniversityuk/uk2uni" },
  { img: "/images/tuuk3Img3.png", title: "Imperial College London", link: "/topunis/topuniversityuk/uk3uni" },
  { img: "/images/tuuk3Img4.png", title: "London School of Economics and Political Science", link: "/topunis/topuniversityuk/uk4uni" },
  { img: "/images/tuuk3Img5.png", title: "University College London", link: "/topunis/topuniversityuk/uk5uni" },
  { img: "/images/tuuk3Img6.png", title: "University of Edinburgh", link: "/topunis/topuniversityuk/uk6uni" },
  ];
const REASONS = [
  {
    icon: (
      <Image
        src="/images/mcpage1Img1.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
      UK universities rank among the top 50 globally for engineering and technology.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img2.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Emphasis on innovation, design, And industry-focused learning.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img3.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        Access to research facilities and internships with leading companies.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img4.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
        2-year post-study work visa for international graduates.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/wave.svg"
        alt="icon-users"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
       Pathways to skilled worker visas and Global career opportunities.
      </>
    ),
  },
];

export default function McM5page1() {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-16">
        <h1 className="text-3xl font-bold text-[#545454] leading-snug">
          Why Study Engineering & Technology in the UK?
        </h1>
      </div>

      {/* Reasons Section */}
      <section className="mx-auto max-w-screen-lg flex flex-col space-y-10">
        {REASONS.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-5 text-left"
          >
            {/* Icon */}
            <div className="flex-shrink-0">{item.icon}</div>

            {/* Text */}
            <p className="text-base md:text-xl font-semibold text-[#545454] leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* Top Universities Section */}
      <div className="max-w-[1100px] mx-auto px-2 mt-15">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
            Top Universities In UK
          </h1>
        </header>

        <section className="grid grid-cols-2 gap-x-15 gap-y-6 justify-items-center">
  {UNIVERSITIES.map((uni, i) => (
    <div
      key={i}
      className="relative w-[190px] flex flex-col items-center overflow-hidden bg-white shadow-lg pb-6 rounded-2xl"
    >
      {/* Image */}
      <div className="relative w-full h-[130px] overflow-hidden rounded-t-2xl">
        <Image
          src={uni.img}
          alt={uni.title}
          fill
          className="object-cover"
          priority={i < 3}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-between py-4 space-y-2 w-full">
        <h3 className="text-sm sm:text-base font-bold text-[#545454] text-center">
          {uni.title}
        </h3>
        <button
          type="button"
          className="bg-[#37D7D9] text-white text-[10px] sm:text-xs px-4 py-1.5 font-bold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
        >
          Know more
        </button>
      </div>
    </div>
  ))}
</section>

      </div>
    </main>
  );
}
