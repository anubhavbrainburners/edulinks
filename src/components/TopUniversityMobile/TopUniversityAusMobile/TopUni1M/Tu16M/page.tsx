"use client";

import Image from "next/image";
import React from "react";

type Card = { title: string; body: React.ReactNode };

export default function TU16M() {
  const cards: Card[] = [
    {
      title: "Multicultural Community",
      body: (
        <>
          Join 12,000+ International Students From More Than
          140 Countries.
        </>
      ),
    },
    {
      title: "Clubs & Societies",
      body: (
        <>
          Over 130 Student-Run Clubs, From Cultural
          Associations To Sports Teams And Academic Groups.
        </>
      ),
    },
    {
      title: "Sydney Lifestyle",
      body: (
        <>
          Enjoy Beaches, A Thriving Food Scene, Nightlife, And
          Part-Time Job Opportunities In One Of The World’s
          Most Livable Cities.
        </>
      ),
    },
    {
      title: "Events & Festivals",
      body: (
        <>
          Regular Cultural Festivals, Career Fairs, Workshops,
          And Social Gatherings.
        </>
      ),
    },
  ];

  return (
    <main className="px-4 py-6 bg-white -mt-5">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-3xl font-bold mb-10 text-[#545454]">
          Life At Macquarie
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
