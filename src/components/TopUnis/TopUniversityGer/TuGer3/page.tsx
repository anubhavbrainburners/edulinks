// app/top-universities/page.tsx
import Image from "next/image";
import Link from "next/link";
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

export default function TuGer3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In Germany
          </h1>
        </header>

        {/* Card Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={i}
              className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:bg-white hover:shadow-lg transition-all duration-300 pb-16 rounded-2xl"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                <Image
                  src={uni.img}
                  fill
                  alt={uni.title}
                  className="object-cover"
                  priority={i < 3}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-6 space-y-8 w-full">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 text-center">
                  {uni.title}
                </h3>
                <Link
                  href={uni.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="bg-[#37D7D9] text-white text-xs px-6 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Know more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
