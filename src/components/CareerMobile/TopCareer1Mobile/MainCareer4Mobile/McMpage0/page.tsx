// app/overview-career/page.tsx
"use client";
import Image from "next/image";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Career Overview - Study in Australia",
//   description: "Overview and reasons to choose a career in Australia",
// };

export default function McMpage0 () {
  return (
    <main className="rounded-t-4xl bg-white py-15 ">
      {/* ===== Overview Section ===== */}
      <section className="mx-auto ">
        <div className="grid grid-cols-1 gap-8 text-center">
          {/* LEFT: Text column */}
          <div className=" order-2">
            <h1 className="mb-6 text-3xl font-bold text-[#545454]">
              About Hospitality & Tourism in Australia
            </h1>

            <p className="text-lg leading-normal text-[#666666] px-4 -mt-3">
              Australia’s hospitality and tourism sector is among its largest industries, contributing billions to the economy each year. Universities and colleges offer globally recognised programs that combine theory with practical experience in hotels, resorts, event management, and travel operations.
            </p>
            <button
            className="bg-[#37D7D9] text-white relative z-10 text-md font-black rounded-full px-6 py-1.5 mt-5 shadow-xl"
          >
            See More
          </button>
           {/* RIGHT: Illustration */}
          <div className="-mt-25 relative left-38 top-20">
            <div className="w-74 max-w-[1000px]">
              <Image
                src="/images/mc4page0Img1.png"
                alt="illustration of professional holding tools"
                width={2000}
                height={800}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Section ===== */}
      <section className="mx-auto max-w-screen-xl text-center mt-15">
        <h1 className="text-3xl font-bold text-[#545454]">
          Popular Specialisations
        </h1>

        <div className="flex justify-center mt-16">
          <Image
            src="/images/mcmpage0Img2.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={400}
            className="w-[400px] h-auto object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
}
