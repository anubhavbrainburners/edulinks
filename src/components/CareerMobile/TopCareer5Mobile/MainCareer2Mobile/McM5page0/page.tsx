// app/overview-career/page.tsx
"use client";
import Image from "next/image";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Career Overview - Study in Australia",
//   description: "Overview and reasons to choose a career in Australia",
// };

export default function McM5page0 () {
  return (
    <main className="rounded-t-4xl bg-white py-15 ">
      {/* ===== Overview Section ===== */}
      <section className="mx-auto ">
        <div className="grid grid-cols-1 gap-8 text-center">
          {/* LEFT: Text column */}
          <div className=" order-2">
            <h1 className="mb-6 text-3xl font-bold text-[#545454]">
              About Business & Finance in the UK
            </h1>

            <p className="text-lg leading-normal text-[#666666] px-4 -mt-3">
              The United Kingdom is one of the world’s most influential financial and business hubs, home to London — the global centre for banking, entrepreneurship, and corporate leadership. UK universities are globally recognised for excellence in business education, producing graduates who lead industries across finance, consulting, marketing, and management.
            </p>
            <button
            className="bg-[#37D7D9] text-white text-md font-black rounded-full px-6 py-1.5 mt-5 shadow-xl"
          >
            See More
          </button>
           {/* RIGHT: Illustration */}
          <div className="-mt-25 relative left-14 top-8">
            <div className="w-94 md:w-200 max-w-[1000px]">
              <Image
                src="/images/mc2page0Img1.png"
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
