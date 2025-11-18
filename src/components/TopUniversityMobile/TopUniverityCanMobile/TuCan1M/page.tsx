"use client";
import React from "react";

import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import TuCan2M from "../TuCan2M/page";
import TuCan3M from "../TuCan3M/page";
import TuCan4M from "../TuCan4M/page";

export default function TuCan1M() {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col md:flex-row bg-[#DFFFFF] items-center justify-center px-4 py-25 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center relative z-20 max-w-6xl">
        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Top 20 Universities in Canada
        </h1>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Explore Canada’s leading universities known for academic excellence, global recognition, and strong post-study work opportunities.
          </span>
          <span className="block text-base sm:text-lg">
            opportunities.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-10">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-3 py-2 rounded-full bg-[#37D7D9] text-white text-sm shadow-md hover:bg-[#00B7C1] transition-all duration-300">
              View Universities
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:450, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <TuCan2M />
                <TuCan3M />
                <TuCan4M />
                <Mfooter />
              </div>
  </>
  );
}
