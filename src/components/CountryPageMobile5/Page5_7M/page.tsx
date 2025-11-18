"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

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
      "Yes — through Fulbright, EducationUSA, and many university-specific awards.",
  },
];

export default function Page5_7M() {
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
