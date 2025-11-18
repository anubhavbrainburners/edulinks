"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "What are the entry requirements to study in the UK?",
    answer:
      "A strong academic background, English proficiency (IELTS/PTE/TOEFL), a personal statement, and recommendation letters.",
  },
  {
    question: "Can I work while studying in the UK?",
    answer:
      "Yes — international students can work up to 20 hours per week during term and full-time during breaks.",
  },
  {
    question: "What is the Graduate Route Visa?",
    answer:
      "It allows international students to stay and work in the UK for 2 years (or 3 years for PhD graduates) after their degree.",
  },
  {
    question: "What are the tuition and living costs in the UK?",
    answer:
      "Tuition is typically GBP £15,000–35,000/year, and living costs range around £1,200–1,800/month, depending on location.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "TYes — popular ones include Chevening, Commonwealth, and Rhodes Scholarships.",
  },
];

export default function Page4_7() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      {/* === Background Image Layer 2 (deepest) === */}
      <div className="absolute inset-0 z-0 w-auto h-[500px]">
        <Image
          src="/images/page6lineImg.png" // <-- replace with your farthest background image
          alt="Deep2 Background"
          fill
          className="object-contain translate-x-152 translate-y-1180 opacity-100" // lower opacity to blend
          priority
        />
      </div>
      <div>
        <h2
          className="relative z-20 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Frequently asked <br /> questions
        </h2>
        <p
          className="relative z-20 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "DM Sans" }}
        >
          From visas to scholarships, everything you need to
          <br />
          know about studying in Australia.
        </p>
      </div>

      {/* Right Section */}
      <div className="relative z-20 space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-cyan-100 rounded-xl py-6 sm:py-8 cursor-pointer transition shadow-sm -translate-x-10"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3
                className="font-medium px-4 text-lg sm:text-xl md:text-2xl text-gray-900 flex-1 break-words"
                style={{ fontFamily: "Space Grotesk" }}
              >
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronCircleUp className="text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              ) : (
                <FaChevronCircleDown className="text-[#37D7D9] w-6 sm:w-7 md:w-8 h-auto mr-4 transition-transform duration-500" />
              )}
            </div>

            {/* Smooth expand/collapse */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p
                className="text-gray-700 px-4 text-sm sm:text-base"
                style={{ fontFamily: "DM Sans" }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
