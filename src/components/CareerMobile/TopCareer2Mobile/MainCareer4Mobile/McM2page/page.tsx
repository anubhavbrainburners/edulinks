"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import McM2page0 from "../McM2page0/page";
import McM2page1 from "../McM2page1/page";
import McM2page2 from "../McM2page2/page";


export default function McM2page () {
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
          Hospitality & Tourism in Canada
        </h1>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Discover endless opportunities in one of the world’s most welcoming destinations — study hospitality, tourism, and event management in Canada’s thriving service industry.
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
                <McM2page0 />
                <McM2page1 />
                <McM2page2 />
                <Mfooter />
              </div>
  </>
  );
}
