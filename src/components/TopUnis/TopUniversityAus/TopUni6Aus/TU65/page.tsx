// app/why-engineering/page.tsx
"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: (
      <Image
        src="/images/uniicon.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Main campus located in Clayton & surrounding Melbourne suburbs (Clayton, Caulfield, Peninsula) covering more than 100 hectares — one of Australia’s largest campuses.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/libicon.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        State-of-the-art libraries, research parks (Monash Science Technology Research & Innovation Precinct), and major facilities in stem cell research, nanofabrication, and design.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/campicon.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
       On-campus accommodation, retail, dining, student services and recreation facilities — designed for international students and multi-campus living.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/sporticon.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Extensive sports, clubs and student life infrastructure, including academic societies, cultural groups and major events.
      </>
    ),
  },
];

export default function TU65 () {
  return (
    <div className="mx-auto mt-25 max-w-screen-xl text-center -mb-20">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-16">
        Campus and Facilities
      </h1>

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
                    : "md:justify-end text-left"
                }`}
              >
                {isEven ? (
                  <>
                    {/* Icon container */}
                    <div className="flex-shrink-0 flex justify-center items-center ">
                      {item.icon}
                    </div>

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454]">
                      <p className="text-xl md:text-2xl px-6 font-bold leading-tight mr-30">
                        {item.text}
                      </p>
                    </div>
                  </>
                ) : (
                  // --- Right Side Icon + Text ---
                  <>
                  <div className="flex-shrink-0 flex justify-center items-center ">
                      {item.icon}
                    </div> 

                    {/* Text container */}
                    <div className="max-w-2xl text-[#545454]">
                      <p className="text-xl px-6 md:text-2xl font-bold leading-tight mr-20">
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
    </div>
  );
}
