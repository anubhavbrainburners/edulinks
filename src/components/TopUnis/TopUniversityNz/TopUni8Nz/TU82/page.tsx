// components/Overview.tsx
"use client";

import Image from "next/image";

export default function TU82() {
  return (
    <section className="max-w-full py-12 px-40 mt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* === Left Side: Text === */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12">
            Overview
          </h2>
          <p className="text-[#000000] mb-16 md:text-2xl whitespace-nowrap"style={{ fontFamily: "DM Sans" }}>
              Ranked among the Top 250 universities globally, AUT has<br/> over 29,000 students, including 5,000
 international students<br/> from more than 100 countries. It is recognized for combining<br/> academic theory
 with hands-on industry experience across <br/>a wide range of disciplines.
            </p>
          {/* Button */}
          <button className="bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all">
            See More
          </button>
        </div>
        {/* === Right Side: Image === */}
        <div className="absolute left-2 w-full flex justify-end md:justify-end">
          <Image
            src="/images/tu8nz8Imgr.png"
            alt="Macquarie University"
            width={400} // adjust as ne eded
            height={300} // adjust as needed
            className="object-contain w-auto h-auto max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
