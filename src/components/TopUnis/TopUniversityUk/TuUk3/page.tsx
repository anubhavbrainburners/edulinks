// app/top-universities/page.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";

const UNIVERSITIES = [
  { img: "/images/tuuk3Img1.png", title: "University of Oxford", link: "/topunis/topuniversityuk/uk1uni" },
  { img: "/images/tuuk3Img2.png", title: "University of Cambridge", link: "/topunis/topuniversityuk/uk2uni" },
  { img: "/images/tuuk3Img3.png", title: "Imperial College London", link: "/topunis/topuniversityuk/uk3uni" },
  { img: "/images/tuuk3Img4.png", title: "London School of Economics and Political Science", link: "/topunis/topuniversityuk/uk4uni" },
  { img: "/images/tuuk3Img5.png", title: "University College London", link: "/topunis/topuniversityuk/uk5uni" },
  { img: "/images/tuuk3Img6.png", title: "University of Edinburgh", link: "/topunis/topuniversityuk/uk6uni" },
  { img: "/images/tuuk3Img7.png", title: "King’s College London", link: "/topunis/topuniversityuk/uk7uni" },
  { img: "/images/tuuk3Img8.png", title: "University of Manchester", link: "/topunis/topuniversityuk/uk8uni" },
  { img: "/images/tuuk3Img9.png", title: "University of Warwick", link: "/topunis/topuniversityuk/uk9uni" },
  { img: "/images/tuuk3Img10.png", title: "University of Bristol", link: "/topunis/topuniversityuk/uk10uni" },
  { img: "/images/tuuk3Img11.png", title: "University of Glasgow", link: "/topunis/topuniversityuk/uk11uni" },
  { img: "/images/tuuk3Img12.png", title: "University of Leeds", link: "/topunis/topuniversityuk/uk12uni" },
  { img: "/images/tuuk3Img13.png", title: "University of Southampton", link: "/topunis/topuniversityuk/uk13uni" },
  { img: "/images/tuuk3Img14.png", title: "Durham University", link: "/topunis/topuniversityuk/uk14uni" },
  { img: "/images/tuuk3Img15.png", title: "University of Nottingham", link: "/topunis/topuniversityuk/uk15uni" },
  { img: "/images/tuuk3Img16.png", title: "University of Birmingham", link: "/topunis/topuniversityuk/uk16uni" },
  { img: "/images/tuuk3Img17.png", title: "University of York", link: "/topunis/topuniversityuk/uk17uni" },
  { img: "/images/tuuk3Img18.png", title: "University of Exeter", link: "/topunis/topuniversityuk/uk18uni" },
  { img: "/images/tuuk3Img19.png", title: "Cardiff University", link: "/topunis/topuniversityuk/uk19uni" },
  { img: "/images/tuuk3Img20.png", title: "Queen Mary University of London ", link: "/topunis/topuniversityuk/uk20uni" },
];

export default function TuDe3() {
  return (
    <main className="bg-white min-h-screen -mt-60">
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        {/* Heading */}
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#545454]">
            Top 20 Universities In UK
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
