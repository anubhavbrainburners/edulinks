// app/top-universities/page.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";

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

export default function TuNz3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In New Zealand
          </h1>
        </header>

        {/* Card Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {UNIVERSITIES.map((uni, i) => (
            <div
              key={i}
              className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:shadow-lg transition-all duration-300 pb-16 rounded-2xl"
            >
              {/* Clickable Image */}
              <Link href={uni.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                  <Image
                    src={uni.img}
                    alt={uni.title}
                    fill
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col items-center justify-between py-6 space-y-8 w-full">
                <h3 className="text-lg md:text-xl font-medium text-gray-800 text-center">
                  {uni.title}
                </h3>

                <Link
                  href={uni.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
