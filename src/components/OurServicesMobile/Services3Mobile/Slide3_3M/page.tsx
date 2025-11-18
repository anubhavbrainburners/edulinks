"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Slide3_3M() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-full mx-auto items-center text-center grid grid-cols-1 gap-8">
        {/* Left Content */}
        <div className="px-2 ">
          <h2 className="text-3xl font-bold text-[#545454] mb-4">
            Start Connecting Today
          </h2>
          <p className="text-[#6F6F6F] text-base px-4 mb-6">
            Join the Edulinks Community Hub and become part of a global network of students, alumni, and mentors helping each other achieve their study-abroad dreams.
          </p>
        </div>

        {/* Right Content (Laptop Image only) */}
        <div
          className="
            relative
            w-full
            max-w-[420px]
            mx-auto
            left-[14%]
            bottom-[15%]
          "
        >
          {/* Laptop Image */}
          <div className="relative w-full right-15 h-[260px]">
            <Image
              src="/images/slide3page3Img.png"
              alt="Laptop Illustration"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
