// app/why-australia/page.tsx
import Image from "next/image";
import React from "react";

const IMAGES = [
  { src: "/images/tucan2Img1.png", alt: "Feature pill 1" },
  { src: "/images/tucan2Img2.png", alt: "Feature pill 2" },
  { src: "/images/tucan2Img3.png", alt: "Feature pill 3" },
  { src: "/images/tucan2Img4.png", alt: "Feature pill 4" },
];

export default function TuCan2M () {
  return (
    <main className="bg-white rounded-t-4xl -mt-5">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top heading - increased bottom margin to separate from first image */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 pt-10">
             Why Choose Canada’s Top Universities
          </h1>
        </header>

        {/* Alternating left-right rows with centered images inside each half
            Reduced vertical gap between items (space-y-4) */}
        <section className="space-y-4">
          {IMAGES.map((img, idx) => {
            const isLeft = idx % 2 === 0; // even -> image on left, odd -> image on right
            return (
              <div key={img.src} className="flex flex-col md:flex-row items-center">
                {isLeft ? (
                  <>
                    {/* Image column (left) - centered within its half. Wrapper controls exact image width */}
                    <div className="md:w-1/2 w-full flex justify-center ">
                      <div className="w-[420px] md:w-[600px] md:-mr-40">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={570}
                          height={60}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>

                    {/* Spacer column */}
                    <div className="md:w-1/2 w-full" />
                  </>
                ) : (
                  <>
                    {/* Spacer column */}
                    <div className="md:w-1/2 w-full" />

                    {/* Image column (right) - centered within its half. Wrapper controls exact image width */}
                    <div className="md:w-1/2 w-full flex justify-center md:-ml-24">
                      <div className="w-[420px] md:w-[600px]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={540}
                          height={60}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </section>

        {/* bottom spacing */}
        <div className="h-24" />
      </div>
    </main>
  );
}
