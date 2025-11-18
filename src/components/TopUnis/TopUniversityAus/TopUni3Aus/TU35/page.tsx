// app/why-engineering/page.tsx
"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: (
      <Image
        src="/images/libicon.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
        Historic main campus in Camperdown/Darlington, with modern facilities including advanced libraries, research centres and specialised campuses.
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
        State-of-the-art libraries (millions of items), collaborative study zones and world-class research infrastructure.
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
        On-campus accommodation and professional support services for international students.
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
        Extensive sports, recreation and student life amenities across the campus and nearby city.
      </>
    ),
  },
];

export default function TU35 () {
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
