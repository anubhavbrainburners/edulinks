"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is IELTS mandatory for UTS admission?",
    answer:
      "Usually yes, but other tests like TOEFL, PTE, or Cambridge English are also accepted.",
  },
  {
    question: "Can international students work during studies?",
    answer:
      " Yes, up to 48 hours per fortnight during semesters and full-time during breaks.",
  },
  {
    question: "Does UTS offer scholarships?",
    answer:
      "Yes, UTS offers merit-based scholarships and international student bursaries.",
  },
//   {
//     question: "Does RMIT University offer scholarships for international students?",
//     answer:
//       " Yes — RMIT provides scholarships and support for commencing international students through various merit and need-based programs.",
//   },
];

export default function TU118() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      <div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#000000] mb-4 md:ml-12"
          style={{ fontFamily: "Space Grotesk" }}
        >
          Frequently asked <br /> questions
        </h2>
        <p
          className="text-[#666666] text-base sm:text-lg md:text-xl leading-relaxed md:ml-12"
          style={{ fontFamily: "DM Sans" }}
        >
          From visas to scholarships, everything you need to know about studying in Australia.
        </p>
      </div>

      {/* Right Section */}
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-cyan-100 rounded-xl py-6 sm:py-8 cursor-pointer transition shadow-sm"
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
