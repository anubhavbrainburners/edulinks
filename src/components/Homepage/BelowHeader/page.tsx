"use client";
import React from "react";

export default function BelowHeader() {
  return (
    <section
      id="below-header"
      className="relative flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-6 md:px-20 lg:px-40 xl:px-60 2xl:px-80 py-20 pt-30"
    >
      {/* Content */}
      <div className="text-center">
        <h1
          className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          AI-Powered{" "}
          <span className="underline decoration-[#37D7D9] underline-offset-4">
            career
          </span>{" "}
          Launchpad Built For
          <br /> Students Who <span>Dream Big</span>
        </h1>

        <p
          className="text-[#666666] pt-8 text-base md:text-lg whitespace-normal text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          Edulinks AI helps you discover your ideal career, shortlist universities & courses,
          and calculate visa success
          <br /> all in one smart, personalized journey.
        </p>

        {/* Static Buttons */}
        <div className="pt-12 md:pt-20">
          <div className="flex gap-4 flex-col sm:flex-row items-center justify-center">
            {/* <button className="px-6 py-3 rounded-full bg-[#37D7D9] text-white font-medium shadow-md w-full sm:w-auto">
              Book Online Counselling
            </button> */}
            <button className="px-6 md:px-16 py-3 rounded-full border border-[#DFFFFFF] text-white bg-[#37D7D9] font-medium shadow-md w-full sm:w-auto">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
