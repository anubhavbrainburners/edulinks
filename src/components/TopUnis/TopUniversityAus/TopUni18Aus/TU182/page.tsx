// components/Overview.tsx
"use client";

import Image from "next/image";

export default function TU182() {
  return (
    <section className="max-w-full py-12 px-40 mt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* === Left Side: Text === */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#545454] mb-12">
            Overview
          </h2>
          <p className="text-[#000000] mb-16 md:text-2xl whitespace-nowrap"style={{ fontFamily: "DM Sans" }}>
            Ranked among the top 200 universities worldwide, the University<br/> of Newcastle (UON) is known for its research-driven approach and<br/> globally recognised degrees. With over 37,000 students —<br/> including 7,000 international students — UON offers world-class<br/> programs in engineering, health, business, and education, <br/>supported by industry partnerships and practical learning<br/> experiences.
            </p>
          {/* Button */}
          <button className="bg-[#37D7D9] text-xl text-white font-bold px-12 py-3 rounded-full shadow-lg shadow-gray-400 transition-all">
            See More
          </button>
        </div>
        {/* === Right Side: Image === */}
        <div className="absolute left-2 w-full flex justify-end md:justify-end">
          <Image
            src="/images/tu182Img.png"
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
