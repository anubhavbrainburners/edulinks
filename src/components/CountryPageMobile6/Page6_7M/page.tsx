"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Are public universities in Germany tuition-free?",
    answer:
      "Yes — most public universities charge no tuition fees for both domestic and international students, only a small semester fee.",
  },
  {
    question: "Is German language proficiency required?",
    answer:
      "For English-taught programs, German isn’t mandatory, but learning it helps with internships and daily life.",
  },
  {
    question: "Can students work part-time during studies?",
    answer:
      "Yes — international students can work 120 full days or 240 half days per year without a work permit.",
  },
  {
    question: "What are post-study career options in Germany?",
    answer:
      "Graduates can stay for 18 months to find employment related to their field of study.",
  },
  {
    question: "What scholarships are available in Germany?",
    answer:
      "Major programs include DAAD Scholarships, Deutschlandstipendium, and university-specific merit awards.",
  },
];

export default function Page6_7M() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-8 py-25 -mt-20 -mb-8 bg-white">
      {/* FAQ Section */}
      <h2 className="text-[22px] font-semibold text-[#545454] mb-3 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-[#666666] text-[16px] text-center leading-relaxed mb-8">
        From visas to scholarships, everything you need to know about studying in Australia.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`rounded-lg cursor-pointer transition-all duration-500 ${
              openIndex === index
                ? "bg-cyan-100 shadow-md"
                : "bg-cyan-100 shadow-sm"
            }`}
            style={{
              boxShadow:
                openIndex === index
                  ? "0 6px 12px rgba(0, 0, 0, 0.1)"
                  : "0 3px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div className="flex justify-between items-center py-4 px-4">
              <h3 className="font-medium text-[16px] text-[#000000] flex-1 pr-2">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaChevronCircleUp className="text-[#37D7D9] w-6 h-6 transition-transform duration-500" />
              ) : (
                <FaChevronCircleDown className="text-[#37D7D9] w-6 h-6 transition-transform duration-500" />
              )}
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-40 mb-3" : "max-h-0"
              }`}
            >
              <p className="text-[#666666] px-4 pb-2 text-sm leading-6">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
