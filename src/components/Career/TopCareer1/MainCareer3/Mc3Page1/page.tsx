import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Study Engineering In Australia",
  description: "Reasons and benefits of pursuing Engineering studies in Australia",
};

const UNIVERSITIES = [
  { img: "/images/mcpage1Img6.png", title: "University Of Melbourne", link: "/topunis/topuniversityaus/aus2uni" },
  { img: "/images/mcpage1Img7.png", title: "The University Of Sydney", link: "/topunis/topuniversityaus/aus3uni" },
  { img: "/images/mcpage1Img8.png", title: "UNSW Sydney", link: "/topunis/topuniversityaus/aus4uni" },
  { img: "/images/mcpage1Img9.png", title: "Australian National University", link: "/topunis/topuniversityaus/aus5uni" },
  { img: "/images/mcpage1Img10.png", title: "Monash University", link: "/topunis/topuniversityaus/aus6uni" },
  { img: "/images/mcpage1Img11.png", title: "University Of Queensland", link: "/topunis/topuniversityaus/aus7uni" },
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
        High global demand for IT and AI<br/> professionals across all industries.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/mcpage1Img1.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Practical, project-based curriculum aligned<br/> with real-world tech needs.
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
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Access to top research labs and innovation<br/> hubs across major cities.
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
        Strong career pathways in tech, analytics,<br/> and automation.
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
        Post-study work visa and PR opportunities <br/>for skilled IT graduates.
      </>
    ),
  },
];

export default function Mc3Page1() {
  return (
    <main className="min-h-screen bg-white px-6">
      {/* Header */}
      <div className="mx-auto max-w-screen-xl text-center mb-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Why Study Engineering In Australia
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
              <div
                className={`flex items-center w-full ${
                  isEven
                    ? "md:justify-start text-left ml-20"
                    : "md:justify-end text-left mr-20"
                }`}
              >
                {isEven ? (
                  <>
                    <div className="flex-shrink-0 flex justify-center items-center ml-10 ">
                      {item.icon}
                    </div>
                    <div className="max-w-2xl text-[#545454] pl-8">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-shrink-0 flex justify-center items-center pr-4 ">
                      {item.icon}
                    </div>
                    <div className="max-w-2xl text-[#545454] mr-6">
                      <p className="text-xl md:text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* Universities Section */}
      <div className="max-w-[1100px] mx-auto px-6 mt-30">
        <header className="text-center mb-16 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#545454]">
            Top Universities In Australia
          </h1>
        </header>

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
                  className="bg-[#37D7D9] text-white text-xs px-6 py-1.5 font-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
