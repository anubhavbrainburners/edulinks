// app/why-engineering/page.tsx
"use client";
import Image from "next/image";
import React from "react";

const REASONS = [
  {
    icon: (
      <Image
        src="/images/supporticon.svg"
        alt="icon-university"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
         Head Office in Lower Hutt - administrative and academic support center.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/assisticon.svg"
        alt="icon-graduates"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
          Fully online study - access to digital resources, tutor support, and virtual classrooms.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/uni2icon.svg"
        alt="icon-industry"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
           Flexible assessment and learning schedules.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/supporticon.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
            Student success and wellbeing support teams available online.
      </>
    ),
  },
  {
    icon: (
      <Image
        src="/images/commicon.svg"
        alt="icon-briefcase"
        width={40}
        height={40}
        className="w-13 h-13"
      />
    ),
    text: (
      <>
           Access to Te Pukenga's learning and research network.
      </>
    ),
  },
];

export default function TU195 () {
  return (
    <div className="mx-auto mt-25 max-w-screen-xl text-center -mb-20">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454] mb-16">
        Campus and Facilities
      </h1>

      {/* Reasons Section */}
      <section className="mx-auto max-w-screen-xl space-y-16">
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
                    ? "md:justify-start text-left ml-30"
                    : "md:justify-end text-left -mr-10"
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
