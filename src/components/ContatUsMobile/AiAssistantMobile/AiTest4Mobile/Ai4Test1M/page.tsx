import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import React from "react";
import Ai4Test2M from "../Ai4Test2M/page";

export default function Ai4Test1M() {
  return (
    <>
      {/* Hero Section (Text + Image together, static background) */}
      <div className="bg-[#DFFFFF] fixed flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl font-bold text-[#545454] mb-2">
            English Proficiency Test
          </h1>
          <div
            className="w-70 h-[2px] mb-2 mx-auto"
            style={{
              background:
                "linear-gradient(to right, #DFFFFF, #37D7D9, #37D7D9, #DFFFFF)",
            }}
          ></div>

          <p className="text-[#666666] text-md px-2 leading-normal mt-6">
            Evaluate your English communication skills and get a clear understanding of your readiness for international study and career opportunities.
          </p>
        </div>

        {/* Image Section (in same container, not scrolling separately) */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/aitest4page1Img.png"
            alt="Career Pathway Illustration"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Button */}
        <div className="mt-8">
          <button
            type="button"
            className="bg-[#37D7D9] rounded-full shadow-lg shadow-gray-300 px-6 py-2 text-[15px] text-white font-bold"
          >
            Start Exploring
          </button>
        </div>
      </div>

      {/* Next Section */}
      <div
        style={{
          marginTop: 850,
          position: "relative",
          zIndex: 50,
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          boxShadow: "0 -4px 21px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Ai4Test2M />
        <Mfooter />
      </div>
    </>
  );
}
