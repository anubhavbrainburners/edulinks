"use client";

import Image from "next/image";
import React from "react";

type Card = { title: string; body: React.ReactNode };

export default function TU6M() {
  const cards: Card[] = [
    {
      title: "Global Community",
      body: (
        <>
          8,000+ international students from 120+ countries.
        </>
      ),
    },
    {
      title: " Vibrant City",
      body: (
        <>
          Study in Auckland, New Zealand's economic and cultural capital.
        </>
      ),
    },
    {
      title: "Research & Innovation",
      body: (
        <>
          World-leading research in sustainability, technology, and healthcare.
        </>
      ),
    },
    {
      title: "Campus Life",
      body: (
        <>
          200+ student clubs, festivals, and community events.
        </>
      ),
    },
  ];

  return (
    <main className="px-4 py-4 bg-white -mt-20">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-3xl font-bold mb-5 text-[#545454]">
          Life at the University of Auckland
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2">
          {/* CARD 1 */}
          <div className="relative max-w-full">
            <Image
              src="/images/cardblImg.png"
              alt="Card 1 background"
              width={600}
              height={220}
              className="w-full h-40 md:h-48 rounded-xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <h2 className="text-lg md:text-xl font-bold text-black">
                {cards[0].title}
              </h2>
              <p className="text-[15px] md:text-lg leading-relaxed text-black">
                {cards[0].body}
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative w-full">
            <Image
              src="/images/cardbrImg.png"
              alt="Card 2 background"
              width={600}
              height={220}
              className="w-full h-40 md:h-48 rounded-xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 items-end text-right">
              <h2 className="text-lg md:text-xl font-bold text-black">
                {cards[1].title}
              </h2>
              <p className="text-[15px] md:text-lg leading-relaxed text-black">
                {cards[1].body}
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative w-full">
            <Image
              src="/images/cardblImg.png"
              alt="Card 3 background"
              width={600}
              height={220}
              className="w-full h-40 md:h-48 rounded-xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              <h2 className="text-lg md:text-xl font-bold text-black">
                {cards[2].title}
              </h2>
              <p className="text-[15px] md:text-lg leading-relaxed text-black">
                {cards[2].body}
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative w-full">
            <Image
              src="/images/cardbrImg.png"
              alt="Card 4 background"
              width={600}
              height={220}
              className="w-full h-40 md:h-48 rounded-xl object-contain"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 items-end text-right">
              <h2 className="text-lg md:text-xl font-bold text-black">
                {cards[3].title}
              </h2>
              <p className="text-[15px] md:text-lg leading-relaxed text-black">
                {cards[3].body}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
