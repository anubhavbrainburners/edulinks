"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import Page5_1M from "../Page5_1M/page";
import Page5_2M from "../Page5_2M/page";
import Page5_3M from "../Page5_3M/page";
import Page5_4M from "../Page5_4M/page";
import Page5_5M from "../Page5_5M/page";
import Page5_6M from "../Page5_6M/page";
import Page5_7M from "../Page5_7M/page";

export default function Page5_0M () {
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
          Study in U.S.A
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 px-2 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Unlock your future with world-renowned universities, cutting-edge research opportunities, and limitless career pathways in the world’s most popular study-abroad destination.
          </span>
        </p>
        <Image
              width={600}
              height={400}
              src="/images/birdImg.png"
              alt="kangaroo"
              className="w-[235px] absolute -top-[100px] -left-[40px]"
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
                <Page5_1M />
                <Page5_2M />
                <Page5_3M />
                <Page5_4M />
                <Page5_5M />
                <Page5_6M />
                <Page5_7M />
                <Mfooter />
              </div>
  </>
  );
}
