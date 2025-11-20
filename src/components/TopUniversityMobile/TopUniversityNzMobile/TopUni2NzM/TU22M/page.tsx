"use client";

import Image from "next/image";
import React from "react";

export default function TU22M() {
  return (
    <section className="relative mx-auto rounded-t-4xl max-w-[500px] h-[65vh] bg-white">
      {/* Background Image */}
      <Image
        src="/images/nzuni2Img.png" // your image path here
        alt="Study Abroad"
        fill
        className="object-contain relative -translate-y-14"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute top-[50px] inset-0 flex flex-col text-center px-10 text-white">
        <h1 className="text-3xl font-bold mb-3">
          Overview
        </h1>
        <p className="text-base max-w-md leading-relaxed">
          Ranked among the Top 200 universities worldwide, the University of Otago has over 21,000
 students, including 3,000 international students from 100+ countries. The university emphasizes
 hands-on learning and community engagement in a supportive, inclusive environment.
        </p>
      </div>
    </section>
  );
}
