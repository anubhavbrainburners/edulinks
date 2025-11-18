"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  {
    img: "/images/tuger3Img1.png",
    title: "Technical University of Munich",
    link: "/topunis/topuniversityger/Ger1uni",
  },
  {
    img: "/images/tuger3Img2.png",
    title: "Ludwig Maximilian University of Munich",
    link: "/topunis/topuniversityger/Ger2uni",
  },
  {
    img: "/images/tuger3Img3.png",
    title: "Heidelberg University",
    link: "/topunis/topuniversityger/Ger3uni",
  },
  {
    img: "/images/tuger3Img4.png",
    title: "Humboldt University of Berlin",
    link: "/topunis/topuniversityger/Ger4uni",
  },
  {
    img: "/images/tuger3Img5.png",
    title: "RWTH Aachen University",
    link: "/topunis/topuniversityger/Ger5uni",
  },
  {
    img: "/images/tuger3Img6.png",
    title: "Free University of Berlin",
    link: "/topunis/topuniversityger/Ger6uni",
  },
  {
    img: "/images/tuger3Img7.png",
    title: "University of Tübingen",
    link: "/topunis/topuniversityger/Ger7uni",
  },
  {
    img: "/images/tuger3Img8.png",
    title: "University of Freiburg",
    link: "/topunis/topuniversityger/Ger8uni",
  },
  {
    img: "/images/tuger3Img9.png",
    title: "Technical University of Berlin",
    link: "/topunis/topuniversityger/Ger9uni",
  },
  {
    img: "/images/tuger3Img10.png",
    title: "University of Bonn",
    link: "/topunis/topuniversityger/Ger10uni",
  },
  {
    img: "/images/tuger3Img11.png",
    title: "University of Göttingen",
    link: "/topunis/topuniversityger/Ger11uni",
  },
  {
    img: "/images/tuger3Img12.png",
    title: "University of Hamburg",
    link: "/topunis/topuniversityger/Ger12uni",
  },
  {
    img: "/images/tuger3Img13.png",
    title: "University of Stuttgart",
    link: "/topunis/topuniversityger/Ger13uni",
  },
  {
    img: "/images/tuger3Img14.png",
    title: "University of Cologne",
    link: "/topunis/topuniversityger/Ger14uni",
  },
  {
    img: "/images/tuger3Img15.png",
    title: "Karlsruhe Institute of Technology",
    link: "/topunis/topuniversityger/Ger15uni",
  },
  {
    img: "/images/tuger3Img16.png",
    title: "Dresden University of Technology",
    link: "/topunis/topuniversityger/Ger16uni",
  },
  {
    img: "/images/tuger3Img17.png",
    title: "University of Münster",
    link: "/topunis/topuniversityger/Ger17uni",
  },
  {
    img: "/images/tuger3Img18.png",
    title: "University of Erlangen",
    link: "/topunis/topuniversityger/Ger18uni",
  },
  {
    img: "/images/tuger3Img19.png",
    title: "University of Würzburg",
    link: "/topunis/topuniversityger/Ger19uni",
  },
  {
    img: "/images/tuger3Img20.png",
    title: "University of Leipzig",
    link: "/topunis/topuniversityger/Ger20uni",
  },
];

export default function TuGer3M() {
  return (
    <main className="bg-white -mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#545454]">
            Top 20 Universities In Germany
          </h1>
        </header>

        {/* Grid for mobile (2 columns) */}
        <section className="grid grid-cols-2 gap-x-4 gap-y-6 justify-items-center">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={i}
              className="w-full max-w-[240px] flex flex-col items-center overflow-hidden bg-white shadow-md rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[120px] overflow-hidden">
                <Image
                  src={uni.img}
                  alt={uni.title}
                  fill
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-4 space-y-4 w-full">
                <h3 className="text-xs text-gray-800 text-center leading-snug">
                  {uni.title}
                </h3>
                <button
                  onClick={() => (window.location.href = uni.link)}
                  className="bg-[#37D7D9] text-white text-xs px-3 py-1 rounded-full shadow-lg hover:bg-[#2fc4c6] transition-colors duration-300"
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
