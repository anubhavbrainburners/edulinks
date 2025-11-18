"use client";
import React from "react";
import Image from "next/image";

export default function Mcard() {
  return (
    <div className="relative -mt-30 mb-10 bg-white max-w-full flex justify-center">

      {/* Background Image */}
      <Image
        src="/images/mcardImg.svg" // 🔥 replace this URL
        alt="Stats Background"
        width={600}
        height={400}
        className="rounded-2xl"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">

        {/* Section 1 */}
        <div className="relative right-15">
          <h2 className="text-md font-bold text-black">
            200 <span className="text-black">+</span>
          </h2>
          <p className="text-blck text-[10px]">Universities</p>
        </div>

        {/* Section 2 */}
        <div className="relative left-5">
          <h2 className="text-md font-bold text-black">
            500 <span className="text-black">+</span>
          </h2>
          <p className="text-black text-[10px]">Careers</p>
        </div>

        {/* Section 3 */}
        <div className="relative left-22">
          <h2 className="text-md font-bold text-black">
            1000 <span className="text-black">+</span>
          </h2>
          <p className="text-black text-[10px]">Courses</p>
        </div>

      </div>
    </div>
  );
}
