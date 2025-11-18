// app/top-universities/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UNIVERSITIES = [
  { img: "/images/tucan3Img1.png", title: "University of Toronto", link: "/topunis/topuniversitycan/can1uni" },
  { img: "/images/tucan3Img2.png", title: "McGill University", link: "/topunis/topuniversitycan/can2uni" },
  { img: "/images/tucan3Img3.png", title: "University of British Columbia", link: "/topunis/topuniversitycan/can3uni" },
  { img: "/images/tucan3Img4.png", title: "University of Alberta", link: "/topunis/topuniversitycan/can4uni" },
  { img: "/images/tucan3Img5.png", title: "McMaster University", link: "/topunis/topuniversitycan/can5uni" },
  { img: "/images/tucan3Img6.png", title: "University of Waterloo", link: "/topunis/topuniversitycan/can6uni" },
  { img: "/images/tucan3Img7.png", title: "Western University", link: "/topunis/topuniversitycan/can7uni" },
  { img: "/images/tucan3Img8.png", title: "Queen’s University", link: "/topunis/topuniversitycan/can8uni" },
  { img: "/images/tucan3Img9.png", title: "University of Calgary", link: "/topunis/topuniversitycan/can9uni" },
  { img: "/images/tucan3Img10.png", title: "Dalhousie University", link: "/topunis/topuniversitycan/can10uni" },
  { img: "/images/tucan3Img11.png", title: "University of Ottawa", link: "/topunis/topuniversitycan/can11uni" },
  { img: "/images/tucan3Img12.png", title: "Simon Fraser University", link: "/topunis/topuniversitycan/can12uni" },
  { img: "/images/tucan3Img13.png", title: "Laval University", link: "/topunis/topuniversitycan/can13uni" },
  { img: "/images/tucan3Img14.png", title: "Memorial University of Newfoundland", link: "/topunis/topuniversitycan/can14uni" },
  { img: "/images/tucan3Img15.png", title: "University of Manitoba", link: "/topunis/topuniversitycan/can15uni" },
  { img: "/images/tucan3Img16.png", title: "York University", link: "/topunis/topuniversitycan/can16uni" },
  { img: "/images/tucan3Img17.png", title: "University of Saskatchewan", link: "/topunis/topuniversitycan/can17uni" },
  { img: "/images/tucan3Img18.png", title: "Concordia University", link: "/topunis/topuniversitycan/can18uni" },
  { img: "/images/tucan3Img19.png", title: "Carleton University", link: "/topunis/topuniversitycan/can19uni" },
  { img: "/images/tucan3Img20.png", title: "Ryerson University", link: "/topunis/topuniversitycan/can20uni" },
];

export default function TuCan3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In Canada
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
                  alt={uni.title}
                  fill
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
                  className="bg-[#37D7D9] text-white text-xs px-6 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
