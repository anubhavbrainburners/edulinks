import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Image from "next/image";
import React from "react";
import Ai3Test2M from "../Ai3Test2M/page";

export default function Ai3Test1M() {
  return (
    <>
      {/* Hero Section (Text + Image together, static background) */}
      <div className="bg-[#DFFFFF] fixed flex flex-col items-center justify-center text-center px-6 py-20">
        {/* Text Section */}
        <div>
          <h1 className="text-2xl font-bold text-[#545454] mb-2">
            Career Pathway Test
          </h1>
          <div
            className="w-70 h-[2px] mb-2 mx-auto"
            style={{
              background:
                "linear-gradient(to right, #DFFFFF, #37D7D9, #37D7D9, #DFFFFF)",
            }}
          ></div>

          <p className="text-[#666666] text-md leading-normal mt-6">
            Discover the top career paths on your interests and strengths 
through our comprehensive assessment.
          </p>
        </div>

        {/* Image Section (in same container, not scrolling separately) */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/aitest3page1Img.png"
            alt="Career Pathway Illustration"
            width={300}
            height={300}
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
        <Ai3Test2M />
        <Mfooter />
      </div>
    </>
  );
}
