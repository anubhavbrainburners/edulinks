"use client";
import Image from "next/image";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tunz3Img1.png", title: "University of Auckland", link: "/topunis/topuniversitynz/nz1uni" },
  { img: "/images/tunz3Img2.png", title: "University of Otago", link: "/topunis/topuniversitynz/nz2uni" },
  { img: "/images/tunz3Img3.png", title: "Victoria University of Wellington", link: "/topunis/topuniversitynz/nz3uni" },
  { img: "/images/tunz3Img4.png", title: "University of Canterbury", link: "/topunis/topuniversitynz/nz4uni" },
  { img: "/images/tunz3Img5.png", title: "Massey University", link: "/topunis/topuniversitynz/nz5uni" },
  { img: "/images/tunz3Img6.png", title: "University of Waikato", link: "/topunis/topuniversitynz/nz6uni" },
  { img: "/images/tunz3Img7.png", title: "Lincoln University", link: "/topunis/topuniversitynz/nz7uni" },
  { img: "/images/tunz3Img8.png", title: "Auckland University of Technology", link: "/topunis/topuniversitynz/nz8uni" },
  { img: "/images/tunz3Img9.png", title: "Unitec Institute of Technology", link: "/topunis/topuniversitynz/nz9uni" },
  { img: "/images/tunz3Img10.png", title: "Ara Institute of Canterbury", link: "/topunis/topuniversitynz/nz10uni" },
  { img: "/images/tunz3Img11.png", title: "Otago Polytechnic", link: "/topunis/topuniversitynz/nz11uni" },
  { img: "/images/tunz3Img12.png", title: "Waikato Institute of Technology", link: "/topunis/topuniversitynz/nz12uni" },
  { img: "/images/tunz3Img13.png", title: "Southern Institute of Technology", link: "/topunis/topuniversitynz/nz13uni" },
  { img: "/images/tunz3Img14.png", title: "Nelson Marlborough Institute of Technology", link: "/topunis/topuniversitynz/nz14uni" },
  { img: "/images/tunz3Img15.png", title: "Toi Ohomai Institute of Technology", link: "/topunis/topuniversitynz/nz15uni" },
  { img: "/images/tunz3Img16.png", title: "Manukau Institute of Technology", link: "/topunis/topuniversitynz/nz16uni" },
  { img: "/images/tunz3Img17.png", title: "Eastern Institute of Technology", link: "/topunis/topuniversitynz/nz17uni" },
  { img: "/images/tunz3Img18.png", title: "NorthTec", link: "/topunis/topuniversitynz/nz18uni" },
  { img: "/images/tunz3Img19.png", title: "Open Polytechnic of New Zealand", link: "/topunis/topuniversitynz/nz19uni" },
  { img: "/images/tunz3Img20.png", title: "Whitireia New Zealand", link: "/topunis/topuniversitynz/nz20uni" },
];

export default function TuNz3M() {
  return (
    <main className="bg-white -mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#545454]">
            Top 20 Universities In New Zealand
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
