"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import Page6_1M from "../Page6_1M/page";
import Page6_2M from "../Page6_2M/page";
import Page6_3M from "../Page6_3M/page";
import Page6_4M from "../Page6_4M/page";
import Page6_5M from "../Page6_5M/page";
import Page6_6M from "../Page6_6M/page";
import Page6_7M from "../Page6_7M/page";

export default function Page6_0M () {
  return (
    <>
    <section
      id="below-header"
      className="fixed flex flex-col bg-[#DFFFFF] items-center justify-center px-8 py-55 overflow-hidden"
    >
      {/* ===== content ===== */}
      <div className="text-center -mt-30 relative z-20 max-w-6xl">
        <h1
          className="text-2xl font-bold text-[#545454] leading-snug"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Study in Germany
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Unlock your future with globally recognised degrees, affordable tuition, rich cultural experience and career pathways in Europe’s creative and innovation-driven study destination.
          </span>
        </p>
        <Image
              width={600}
              height={400}
              src="/images/buildingImg.png"
              alt="kangaroo"
              className="w-[200px] absolute -bottom-[140px] -right-[40px]"
               />

        {/* ===== static button ===== */}
        <div className="pt-30">
          <div className="flex gap-4 items-center justify-center">
            <button className="px-4 py-2 rounded-full font-bold bg-[#37D7D9] text-white text-md shadow-lg shadow-gray-300">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>

     <div style={{ marginTop:640, position: "relative", zIndex: 50,  borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)", }}>
                <Page6_1M />
                <Page6_2M />
                <Page6_3M />
                <Page6_4M />
                <Page6_5M />
                <Page6_6M />
                <Page6_7M />
                <Mfooter />
              </div>
  </>
  );
}
