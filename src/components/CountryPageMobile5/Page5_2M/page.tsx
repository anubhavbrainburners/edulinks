"use client";
import React from "react";

export default function Page5_2M () {
  return (
    <section className="relative w-full bg-white py-12 -mt-6 flex flex-col items-center">

      {/* Heading */}
      <h2 className="relative z-20 text-3xl font-bold text-[#545454] mb-10 text-center">
        Popular Courses In<br/> U.K.
      </h2>

      {/* Courses Container */}
      <div className="relative z-20 w-full max-w-9xl h-[300px] text-sm">
        {/* Course Boxes */}
        <div className="absolute top-4 left-3 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Business &amp; Management
        </div>

        <div className="absolute top-22 -right-18 transform -translate-x-1/2 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Computer Sci. &amp; A.I. 
        </div>

        <div className="absolute top-46 left-2 bg-[#DFFFFF] rounded-2xl shadow-lg px-4 py-2 font-bold text-center">
          Data Science & Cybersecurity
        </div>

        <div className="absolute bottom-20 left-60 bg-[#DFFFFF] rounded-2xl shadow-lg px-2 py-2 font-bold max-w-[85%] text-center">
          Arts, Design & Creative Industries
        </div>

        <div className="absolute top-25 left-[2%] bg-[#DFFFFF] rounded-2xl shadow-lg px-4 py-2 font-bold text-center">
          Medicine, Nursing & Health
        </div>

        <div className="absolute top-6 right-3 bg-[#DFFFFF] rounded-2xl shadow-lg px-3 py-2 font-bold text-center">
          Hospitality &amp; Tourism
        </div>
      </div>
    </section>
  );
}
