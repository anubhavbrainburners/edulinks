"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import TU32M from "../TU32/page";
import TU33M from "../TU33M/page";
import TU34M from "../TU34M/page";
import TU35M from "../TU35M/page";
import TU36M from "../TU36M/page";
import TU37M from "../TU37M/page";
import TU38M from "../TU38M/page";

export default function TU31M() {
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
          Victoria University of Wellington
        </h1>
        <p className="text-md text-[#545454] mt-1">
            Wellington,<span className="font-bold text-sm text-[#000000]">New Zealand</span>
        </p>

        <p
          className="text-[#6F6F6F] pt-2 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base pt-14 px-2">
            Founded in 1897, Victoria University of Wellington is one of New Zealand's oldest and most
 respected universities. Known for its excellence in law, humanities, business, and environmental
 science, it has a strong focus on research and global engagement. The university's location in New
 Zealand's capital city connects students with government, industry, and culture.
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
                <TU32M />
                <TU33M />
                <TU34M />
                <TU35M />
                <TU36M />
                <TU37M />
                <TU38M />
                <Mfooter />
              </div>
  </>
  );
}
