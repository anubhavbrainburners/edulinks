// app/admission-requirements/page.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function TU107() {
  return (
    <main className="bg-white py-16 relative">
      <div className="space-y-16 relative">
        {/* Header + Undergraduate Image in one line */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-center relative">
          {/* Left side: Text */}
          <div className="flex justify-center lg:justify-start ml-0 lg:ml-44">
            <h1 className="text-4xl md:text-6xl font-bold text-[#545454] leading-tight text-center lg:text-left">
              Admission <br /> Requirements
            </h1>
          </div>

          {/* Right side: Undergraduate Image */}
          <div className="relative flex justify-end">
            <Image
              src="/images/admnreqImg1.png"
              alt="Undergraduate Programs Requirements"
              width={750}
              height={500}
              className="w-full max-w-[750px] h-auto object-contain"
              priority
            />

            {/* Text overlay for Undergraduate */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-end items-center">
              {/* Left Circle Text */}
              <div className="mr-16 text-center text-xl text-black font-semibold">
                <p>Undergraduate</p>
                <p>Programs</p>
              </div>

              {/* Right Side Text */}
              <div className="text-white text-lg max-w-[380px] leading-relaxed mr-30">
                <ul className="list-disc space-y-1">
                  <li>
                        Academic: Completion of High School / Year 12 /<br/> equivalent qualification
                  </li>
                  <li>
                       Language: IELTS 6.0 (no band less than<br/> 5.5) / TOEFL 80
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Postgraduate Image */}
        <div className="relative flex justify-start">
          <Image
            src="/images/admnreqImg2.png"
            alt="Postgraduate Programs Requirements"
            width={850}
            height={500}
            className="w-full max-w-[850px] h-auto object-contain"
          />

          {/* Text overlay for Postgraduate */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-start items-center">
            {/* Left Side Text */}
            <div className="text-black text-lg max-w-[410px] leading-relaxed ml-72">
              <ul className="list-disc space-y-1">
                <li>
                     Academic: Bachelor's degree from a<br/> recognised institution
                </li>
                <li>
                     Language: IELTS 6.0 / TOEFL 80
                </li>
              </ul>
            </div>

            {/* Right Circle Text */}
            <div className="ml-21 text-center text-xl text-white font-semibold">
              <p>Postgraduate</p>
              <p>Programs</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}