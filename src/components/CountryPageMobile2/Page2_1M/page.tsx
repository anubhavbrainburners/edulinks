// components/WhyAustralia.tsx
"use client";

import Image from "next/image";

export default function Page2_1M() {
  return (
    <section className=" w-full rounded-t-4xl bg-white py-12  px-4 -mt-8 overflow-hidden">

      {/* === Foreground Content (top) === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* === Left Image === */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/page2_1Img.png"
            alt="Study in Australia"
            width={450}
            height={350}
            className="object-contain w-[430px] h-auto"
            priority
          />
        </div>

        {/* === Right Content === */}
        <div className="text-center">
          <h2
            className=" text-3xl font-bold text-[#545454] mb-6 md:mb-10"
            style={{ fontFamily: "Space Grotesk" }}
          >
            Why Study in New zealand
          </h2>

          <ul className="space-y-6 text-lg text-[#333] font-bold whitespace-nowrap">
            {[
              <>Top-Ranked Universities</>,
              "Globally Recognized Degrees",
              "Post-Study Work Opportunities",
              "Safe & Multicultural Environment",
              <>Research & Innovative Learning</>,
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4"
              >
                <span className="w-2 h-2 ml-6 rounded-full bg-[#37D7D9] mt-1.5"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
