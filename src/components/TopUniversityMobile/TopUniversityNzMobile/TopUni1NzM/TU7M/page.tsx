// app/admission-requirements/page.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function TU7M() {
  return (
    <main className="bg-white mb-10 py-10">
      <div className="space-y-10">
        {/* ---------------------- */}
        {/* UNDERGRADUATE SECTION */}
        {/* ---------------------- */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] items-center lg:pl-32 px-6">
          
          {/* Text Left on Desktop / Top on Mobile */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-[#545454] leading-tight">
              Admission <br /> Requirements
            </h1>
          </div>

          {/* Image + Overlay */}
          <div className="relative left-10 w-full flex justify-center">
            <Image
              src="/images/admnreqImg1.png"
              alt="Undergraduate Requirements"
              width={750}
              height={500}
              className="w-full max-w-[650px] h-auto object-contain"
              priority
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex justify-between items-center px-3">
              
              {/* Overlay Left Title (Undergraduate) */}
              <div className="text-center text-black font-semibold text-[10px]">
                <p>Undergraduate</p>
                <p>Programs</p>
              </div>

              {/* Overlay Right Text */}
              <div className="text-black text-[12px] max-w-[260px] leading-relaxed px-3 text-left">
                <ul className="list-disc space-y-1 left-3 relative">
                  <li>
                    Academic: Completion of High School / Year 12 /
                     equivalent qualification
                  </li>
                  <li>
                    Language: IELTS 6.5 (no band less than 6.0) / TOEFL 90
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------- */}
        {/* POSTGRADUATE SECTION   */}
        {/* ---------------------- */}
        <div className="relative right-5 w-full flex justify-center px-6">
          <Image
            src="/images/admnreqImg2.png"
            alt="Postgraduate Requirements"
            width={850}
            height={500}
            className="w-full max-w-[650px] h-auto object-contain"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex justify-between items-center px-9">
            
            {/* Overlay Left Text */}
            <div className="text-black text-[12px] left-3 relative max-w-[250px] md:max-w-[410px] leading-relaxed">
              <ul className="list-disc space-y-1">
                <li>
                  Academic: Bachelor's degree from a recognised institution
                </li>
                <li>
                  Language: IELTS 6.5 / TOEFL 90
                </li>
              </ul>
            </div>

            {/* Overlay Circle Text */}
            <div className="text-center text-[9px] text-white font-semibold">
              <p>Postgraduate</p>
              <p>Programs</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
