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
  { img: "/images/tuusa3Img7.png", title: "Columbia University", link: "/topunis/topuniversityusa/usa7uni" },
  { img: "/images/tuusa3Img8.png", title: "Yale University", link: "/topunis/topuniversityusa/usa8uni" },
  { img: "/images/tuusa3Img9.png", title: "University of Pennsylvania", link: "/topunis/topuniversityusa/usa9uni" },
  { img: "/images/tuusa3Img10.png", title: "Cornell University", link: "/topunis/topuniversityusa/usa10uni" },
  { img: "/images/tuusa3Img11.png", title: "Johns Hopkins University", link: "/topunis/topuniversityusa/usa11uni" },
  { img: "/images/tuusa3Img12.png", title: "Northwestern University", link: "/topunis/topuniversityusa/usa12uni" },
  { img: "/images/tuusa3Img13.png", title: "University of California, Berkeley", link: "/topunis/topuniversityusa/usa13uni" },
  { img: "/images/tuusa3Img14.png", title: "University of California, Los Angeles", link: "/topunis/topuniversityusa/usa14uni" },
  { img: "/images/tuusa3Img15.png", title: "University of Michigan", link: "/topunis/topuniversityusa/usa15uni" },
  { img: "/images/tuusa3Img16.png", title: "Duke University", link: "/topunis/topuniversityusa/usa16uni" },
  { img: "/images/tuusa3Img17.png", title: "New York University", link: "/topunis/topuniversityusa/usa17uni" },
  { img: "/images/tuusa3Img18.png", title: "Carnegie Mellon University", link: "/topunis/topuniversityusa/usa18uni" },
  { img: "/images/tuusa3Img19.png", title: "Brown University", link: "/topunis/topuniversityusa/usa19uni" },
  { img: "/images/tuusa3Img20.png", title: "University of Washington", link: "/topunis/topuniversityusa/usa20uni" },
];


export default function TuUsa3M() {
  return (
    <main className="bg-white -mt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <header className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#545454]">
            Top 20 Universities In USA
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
