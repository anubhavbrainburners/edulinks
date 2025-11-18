// app/why-career/page.tsx
"use client";
import type { Metadata } from "next";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Why Choose A Career In Australia",
//   description: "Reasons and benefits of pursuing a career in Australia",
// };

export default function Tc3Mpage2() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-screen-full text-center">
        <h1 className="text-2xl font-bold text-[#545454]">
          Why Choose A Career In<br/> Germany
        </h1>
         <div className="flex justify-center mt-10">
          <Image
            src="/images/tc1mpage2Img1.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={1400}
            className="w-[420px] h-auto object-contain"
            priority
          />
        </div>
      </div>
      <div className="text-center mt-15">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#545454]">
          Average Salary Range in the<br/> Germany (per year)
        </h1>
         <div className="mt-10">
          <Image
            src="/images/tc1mpage2Img2.png"
            alt="Why Choose a Career in Australia"
            width={2000}
            height={1400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
      <section className="mx-auto mt-15 px-6">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#545454] text-center mb-12">
          How Edulinks Helps You
        </h1>

        {/* RIGHT: Illustration */}
          <div className="flex justify-center -mt-8">
            <Image
              src="/images/tc1page2Img3.png"
              alt="How Edulinks Helps You"
              width={600}
              height={400}
              className="w-full max-w-[360px] h-auto"
              priority
            />
          </div>

        <div className="grid grid-cols-1 py-20 items-center -mt-10">
          {/* LEFT: Bullet points */}
          <ul className="max-w-5xl space-y-6 px-5 text-sm text-[#000000] list-disc leading-relaxed">
            <li>Identify career fields in demand and related<br/> study programs in Germany</li>
            <li>Shortlist public universities with low tuition fees</li>
            <li>Guide you through visa, scholarship, and<br/> document processes</li>
            <li>Support your journey from application to job<br/> placement</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
