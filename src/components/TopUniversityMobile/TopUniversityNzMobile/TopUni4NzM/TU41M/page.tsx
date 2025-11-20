"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import TU42M from "../TU42M/page";
import TU43M from "../TU43M/page";
import TU44M from "../TU44M/page";

export default function TU41M() {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center -top-[20px] px-4 py-40 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center max-w-6xl">
        <h1
          className="text-3xl  font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          University of Canterbury
        </h1>
        <p className="text-md text-[#545454] mt-1">
            Christchurch,<span className="font-bold text-sm text-[#000000]">New Zealand</span>
        </p>

        <p
          className="text-[#6F6F6F] pt-2 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base pt-14 px-2">
             Established in 1873, the University of Canterbury (UC) is one of New Zealand's top public research
 universities. It is renowned for its world-class engineering, science, and business programs, and its
 commitment to innovation, sustainability, and community impact.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-15">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-5 py-2 rounded-full bg-[#37D7D9] text-white text-md font-bold shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:620, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <TU42M />
                <TU43M />
                <TU44M />
                <Mfooter />
              </div>
  </>
  );
}
