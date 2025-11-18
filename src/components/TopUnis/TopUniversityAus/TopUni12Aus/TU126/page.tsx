"use client";

import Image from "next/image";
import React from "react";

type Card = { title: string; body: React.ReactNode };

export default function TU126() {
  const cards: Card[] = [
    {
      title: "Multicultural Community",
      body: (
        <>
          Students from 130+ countries enrich campus <br/>culture.
        </>
      ),
    },
    {
      title: "Industry Engagement",
      body: (
        <>
          Access to internships, co-op placements, and <br/>networking.
        </>
      ),
    },
    {
      title: "Perth Lifestyle",
      body: (
        <>
        Safe, sunny, and vibrant with beaches and cultural<br/> festivals.
        </>
      ),
    },
    {
      title: "Career Readiness",
      body: (
        <>
          Dedicated Curtin Careers team for employability<br/> support.
        </>
      ),
    },
  ];

  return (
    <main className="px-6 py-12 mt-35">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-18 text-[#545454]">
          Life at Curtin University
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {/* CARD 1 */}
          <div className="relative">
            <Image
              src="/images/cardtlImg.png"
              alt="Card 1 background"
              width={600}
              height={220}
              className="h-44 object-contain drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-start text-left">
              <h2 className="text-xl font-bold mb-4 -mt-8">
                {cards[0].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[0].body}</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative -mt-2">
            <Image
              src="/images/cardtrImg.png"
              alt="Card 2 background"
              width={600}
              height={220}
              className=" h-48 object-contain drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-end text-right">
              <h2 className="text-xl font-bold mb-4 -mt-8">
                {cards[1].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[1].body}</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative">
            <Image
              src="/images/cardblImg.png"
              alt="Card 3 background"
              width={600}
              height={220}
              className="h-44 object-contain drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-start text-left">
              <h2 className="text-xl font-bold mb-4 -mt-1">
                {cards[2].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[2].body}</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative -mt-2">
            <Image
              src="/images/cardbrImg.png"
              alt="Card 4 background"
              width={600}
              height={220}
              className="h-48 object-contain drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-end text-right">
              <h2 className="text-xl font-bold mb-4 -mt-8">
                {cards[3].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[3].body}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}