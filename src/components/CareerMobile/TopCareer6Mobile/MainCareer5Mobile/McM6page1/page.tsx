"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tuusa3Img1.png", title: "Harvard University", link: "/topunis/topuniversityusa/usa1uni" },
  { img: "/images/tuusa3Img2.png", title: "Stanford University", link: "/topunis/topuniversityusa/usa2uni" },
  { img: "/images/tuusa3Img3.png", title: "Massachusetts Institute of Technology", link: "/topunis/topuniversityusa/usa3uni" },
  { img: "/images/tuusa3Img4.png", title: "California Institute of Technology", link: "/topunis/topuniversityusa/usa4uni" },
  { img: "/images/tuusa3Img5.png", title: "University of Chicago", link: "/topunis/topuniversityusa/usa5uni" },
  { img: "/images/tuusa3Img6.png", title: "Princeton University", link: "/topunis/topuniversityusa/usa6uni" },
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
        Home to top-ranked universities with World-renowned education faculties.
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
       Strong emphasis on innovation, inclusivity, and cross-cultural learning.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/govermentgate.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
       Research opportunities funded by Major government and private grants.
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
       High global demand for qualified Educators and education researchers.
      
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img5.svg"
        alt="icon-users"
        width={40}
        height={40}
        className="w-8 h-8"
      />
    ),
    text: (
      <>
     Pathways to OPT (Optional Practical Training) and long-term academic roles.
      </>
    ),
  },
];

export default function McM6page1() {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-16">
        <h1 className="text-3xl font-bold text-[#545454] leading-snug">
          Why Study Education & Research in the USA?
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
            Top Universities In USA
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
