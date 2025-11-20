"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import TU2M from "../TU2M/page";
import TU3M from "../TU3M/page";
import TU4M from "../TU4M/page";
import TU5M from "../TU5M/page";
import TU6M from "../TU6M/page";
import TU7M from "../TU7M/page";
import TU8M from "../TU8M/page";

export default function TU1M() {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center -top-[20px] px-4 py-45 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center max-w-6xl">
        <h1
          className="text-3xl  font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          University of Auckland
        </h1>
        <p className="text-md text-[#545454] mt-1">
            Auckland,<span className="font-bold text-sm text-[#000000]">New Zealand</span>
        </p>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base pt-14 px-10">
            Founded in 1883, the University of Auckland is New Zealand's leading university and consistently
 ranked among the top 100 globally. It is known for world-class research, academic excellence, and
 strong international partnerships across disciplines such as engineering, business, medicine, and
 arts.
          </span>
        </p>

        {/* ===== static button ===== */}
        <div className="pt-25">
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
                <TU2M />
                <TU3M />
                <TU4M />
                <TU5M />
                <TU6M />
                <TU7M />
                <TU8M />
                <Mfooter />
              </div>
  </>
  );
}
