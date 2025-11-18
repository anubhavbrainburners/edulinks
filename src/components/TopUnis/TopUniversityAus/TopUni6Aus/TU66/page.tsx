"use client";

import Image from "next/image";
import React from "react";

type Card = { title: string; body: React.ReactNode };

export default function TU66() {
  const cards: Card[] = [
    {
      title: "Multicultural Community",
      body: (
        <>
          Over 100,000 students (domestic + international)<br/> from 100+ countries contribute to a vibrant and<br/> inclusive campus culture.
        </>
      ),
    },
    {
      title: "Clubs & Societies",
      body: (
        <>
          Hundreds of active student-run clubs and societies<br/> covering academic disciplines, culture, sports and<br/> innovation.
        </>
      ),
    },
    {
      title: "Melbourne Lifestyle",
      body: (
        <>
         Study in Melbourne — ranked among the world’s <br/>most liveable cities, with a rich culture, vibrant<br/> arts and strong employment opportunities.
        </>
      ),
    },
    {
      title: "Events & Festivals",
      body: (
        <>
          Regular cultural, innovation and leadership events,<br/> research showcases and global networking <br/>opportunities across campus and international <br/>partnerships.
        </>
      ),
    },
  ];

  return (
    <main className="px-6 py-12 mt-35">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-18 text-[#545454]">
          Life at Monash University
        </h1>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {/* CARD 1 */}
          <div className="relative">
            <Image
              src="/images/cardblImg.png"
              alt="Card 1 background"
              width={600}
              height={220}
              className="h-44 object-cover drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-start text-left">
              <h2 className="text-xl font-bold mb-4 -mt-8">
                {cards[0].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[0].body}</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative -mt-3">
            <Image
              src="/images/cardbrImg.png"
              alt="Card 2 background"
              width={600}
              height={220}
              className=" h-48 object-cover drop-shadow-xl"
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
              className="h-44 object-cover drop-shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 items-start text-left">
              <h2 className="text-xl font-bold mb-4 -mt-1">
                {cards[2].title}
              </h2>
              <p className="text-lg leading-relaxed">{cards[2].body}</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative -mt-3">
            <Image
              src="/images/cardbrImg.png"
              alt="Card 4 background"
              width={600}
              height={220}
              className="h-48 object-cover drop-shadow-xl"
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