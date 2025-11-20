"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import McM6page0 from "../McM6page0/page";
import McM6page1 from "../McM6page1/page";
import McM6page2 from "../McM6page2/page";


export default function McM6page () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-25 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center relative z-20 max-w-6xl">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Business & Management in the United States
        </h1>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Gain global business expertise with world-renowned programs designed to shape tomorrow’s leaders, innovators, and entrepreneurs.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-10">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-3 py-2 rounded-full bg-[#37D7D9] text-white text-sm shadow-md hover:bg-[#00B7C1] transition-all duration-300">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:430, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <McM6page0 />
                <McM6page1 />
                <McM6page2 />
                <Mfooter />
              </div>
  </>
  );
}
