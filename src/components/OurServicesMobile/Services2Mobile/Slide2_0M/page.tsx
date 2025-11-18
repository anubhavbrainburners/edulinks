"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Slide2_1M from "../Slide2_1M/page";
import Slide2_2M from "../Slide2_2M/page";
import Slide2_3M from "../Slide2_3M/page";

export default function Slide2_0M () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center px-8 md:px-16 py-35 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center -mt-10 relative z-20 max-w-6xl">
        <h1
          className="text-2xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          English Language Assessment
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Evaluate your English communication skills before taking official exams. Our AI-powered English Language Assessment helps you understand your proficiency level in reading, writing, listening, and speaking — giving you the confidence to excel in international admission tests and academic environments.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-20">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-4 py-2 rounded-full font-bold bg-[#37D7D9] text-white text-md shadow-lg shadow-gray-300">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:570, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Slide2_1M />
                <Slide2_2M />
                <Slide2_3M />
                <Mfooter />
              </div>
  </>
  );
}
