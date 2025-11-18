"use client";
import React from "react";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import Page4_1M from "../Page4_1M/page";
import Page4_2M from "../Page4_2M/page";
import Page4_3M from "../Page4_3M/page";
import Page4_4M from "../Page4_4M/page";
import Page4_5M from "../Page4_5M/page";
import Page4_6M from "../Page4_6M/page";
import Page4_7M from "../Page4_7M/page";

export default function Page4_0M () {
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
          Study in United Kingdom
        </h1>

        <p
          className="text-[#6F6F6F] pt-8 px-2 text-md leading-relaxed text-center"
          style={{ fontFamily: "DM Sans" }}
        >
          <span className="block text-base sm:text-lg">
            Unlock your future with world-class universities, centuries of academic excellence, and career opportunities in one of the most global education destinations.
          </span>
        </p>
        <Image
              width={600}
              height={400}
              src="/images/towerImg.png"
              alt="kangaroo"
              className="w-[300px] absolute -bottom-[190px] -right-[55px]"
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
                <Page4_1M />
                <Page4_2M />
                <Page4_3M />
                <Page4_4M />
                <Page4_5M />
                <Page4_6M />
                <Page4_7M />
                <Mfooter />
              </div>
  </>
  );
}
