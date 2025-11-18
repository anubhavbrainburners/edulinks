"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import Image from "next/image";

const faqs = [
  {
    question: "What are the basic requirements to study in the U.S.?",
    answer:
      "Academic transcripts, standardized test scores (SAT, ACT, GRE, GMAT), proof of English proficiency, and a valid passport.",
  },
  {
    question: "Can international students work in the U.S.?",
    answer:
      "Yes — students can work on-campus up to 20 hours/week and later apply for OPT or CPT for practical training.",
  },
  {
    question: "How much does it cost to study in the U.S.?",
    answer:
      "Tuition fees range between USD $25,000–60,000 per year, depending on the university and program.",
  },
  {
    question: "How long can I stay after graduation?",
    answer:
      "With Optional Practical Training (OPT), graduates can stay for 1–3 years, depending on their field.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes — through Fulbright, EducationUSA, and many university-specific awards.",
  },
];

export default function Page5_7() {
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
