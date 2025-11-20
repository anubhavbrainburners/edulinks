"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import TU22M from "../TU22M/page";
import TU23M from "../TU23M/page";
import TU24M from "../TU24M/page";
import TU25M from "../TU25M/page";
import TU26M from "../TU26M/page";
import TU27M from "../TU27M/page";
import TU28M from "../TU28M/page";

export default function TU21M() {
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
          University of Otago
        </h1>
        <p className="text-md text-[#545454] mt-1">
            Dunedin,<span className="font-bold text-sm text-[#000000]">New Zealand</span>
        </p>

        <p
          className="text-[#6F6F6F] pt-6 sm:pt-8 text-base sm:text-lg leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base pt-14 px-10">
            Founded in 1869, the University of Otago is New Zealand's oldest university and a world leader in
 medical, health, and research-based education. Known for its vibrant student culture, research
 excellence, and historic campus, Otago offers internationally recognized degrees in a range of
 disciplines.
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
                <TU22M />
                <TU23M />
                <TU24M />
                <TU25M />
                <TU26M />
                <TU27M />
                <TU28M />
                <Mfooter />
              </div>
  </>
  );
}
