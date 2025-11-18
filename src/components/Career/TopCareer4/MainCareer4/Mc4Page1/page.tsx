// app/why-engineering/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Study Engineering In Australia",
  description: "Reasons and benefits of pursuing Engineering studies in Australia",
};
const UNIVERSITIES = [
  { img: "/images/tunz3Img1.png", title: "University of Auckland", link:"/topunis/topuniversitynz/nz1uni" },
  { img: "/images/tunz3Img2.png", title: "University of Otago", link:"/topunis/topuniversitynz/nz2uni" },
  { img: "/images/tunz3Img3.png", title: "Victoria University of Wellington", link:"/topunis/topuniversitynz/nz3uni" },
  { img: "/images/tunz3Img4.png", title: "University of Canterbury", link:"/topunis/topuniversitynz/nz4uni" },
  { img: "/images/tunz3Img5.png", title: "Massey University", link:"/topunis/topuniversitynz/nz5uni" },
  { img: "/images/tunz3Img6.png", title: "University of Waikato", link:"/topunis/topuniversitynz/nz6uni" },
  ];
const REASONS = [
  {
    icon: (
      <Image
        src="/images/mcpage1Img1.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
       One of the most sustainable agricultural<br/> economies in the world.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img3.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
      Strong research and industry collaboration<br/> with global agritech firms.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img2.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
       Hands-on learning with fieldwork, labs, And<br/> internships in real environments.
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
        className="w-13 h-13"
      />
    ),
    text: (
      <>
      High employability in agriculture, food Tech,<br/> and environmental policy sectors.
      
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mc2page1Img5.svg"
        alt="icon-users"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
       Pathways to PR and post-study work visas <br/>for science graduates.
      </>
    ),
  },
];

export default function Mc4Page1 () {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Why Study Agriculture & Environmental <br/> Sciences in New Zealand
        </h1>
      </div>

      {/* Reasons Section */}
      <section className="mx-auto max-w-screen-xl space-y-14">
        {REASONS.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`flex items-center w-full ${
                isEven ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Inner flex: icon + text */}
              <div
                className={`flex items-center w-full ${
                  isEven
                    ? "md:justify-start text-left ml-20"
                    : "md:justify-end text-left mr-20"
                }`}
              >
                {isEven ? (
                  // --- Left Side Icon + Text ---
                  <>
                    {/* Icon container */}
                    <div className="flex-shrink-0 flex justify-center items-center ml-10 ">
                      {item.icon}
                    </div>

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454] pl-8">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </>
                ) : (
                  // --- Right Side Icon + Text ---
                  <>
                  <div className="flex-shrink-0 flex justify-center items-center pr-4 ">
                      {item.icon}
                    </div> 

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454] mr-6">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>

                    {/* Icon container */}
                    
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <div className="max-w-[1100px] mx-auto px-6 mt-30">
              {/* Heading */}
              <header className="text-center mb-16 mt-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
                  Top Universities in New Zealand
                </h1>
              </header>
      
              {/* Card Grid */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {UNIVERSITIES.map((uni, i) => (
                  <div
                    key={i}
                    className="relative w-[320px] flex flex-col items-center overflow-hidden bg-white hover:bg-white hover:shadow-lg transition-all duration-300 pb-12 rounded-2xl"
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
                    <div className="flex flex-col items-center justify-between py-6 space-y-4 w-full">
                      <h3 className="text-lg md:text-lg font-bold text-[#545454] text-center">
                        {uni.title}
                      </h3>
                      <Link
                  href={uni.link}
                        className="bg-[#37D7D9] text-white text-xs px-6 py-1.5  font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
