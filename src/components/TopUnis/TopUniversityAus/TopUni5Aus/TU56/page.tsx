"use client";

import Image from "next/image";
import React from "react";

type Card = { title: string; body: React.ReactNode };

export default function TU56() {
  const cards: Card[] = [
    {
      title: "Multicultural Community",
      body: (
        <>
          A diverse student body attracts students from<br/> across the world, offering a rich cultural and social<br/> experience.
        </>
      ),
    },
    {
      title: "Clubs & Societies",
      body: (
        <>
          Hundreds of student-led societies and clubs spanning<br/> academic, cultural, social, sports and leadership interests.
        </>
      ),
    },
    {
      title: "Canberra Lifestyle",
      body: (
        <>
         Study in Australia’s capital city — safe, planned,<br/> with government, research and cultural<br/> institutions at your doorstep.
        </>
      ),
    },
    {
      title: "Events & Festivals",
      body: (
        <>
          Regular academic seminars, research showcases,<br/> cultural festivals and networking events for<br/> students and alumni.
        </>
      ),
    },
  ];

  return (
    <main className="px-6 py-12 mt-35">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-center text-4xl font-bold mb-18 text-[#545454]">
          Life at the Australian National University
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