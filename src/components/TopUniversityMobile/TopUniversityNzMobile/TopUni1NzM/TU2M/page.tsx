"use client";

import Image from "next/image";
import React from "react";

export default function TU2M() {
  return (
    <section className="relative mx-auto rounded-t-4xl max-w-[500px] h-[65vh] bg-white">
      {/* Background Image */}
      <Image
        src="/images/nzuni1Img.png" // your image path here
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
          With over 40,000 students, including 8,000 international students from 120+ countries, the
 University of Auckland offers a dynamic and inclusive learning environment. It's located in New
 Zealand's largest and most vibrant city, providing excellent opportunities for study, work, and
 lifestyle balance.
        </p>
      </div>
    </section>
  );
}
