"use client";
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const faqs = [
  {
    question: "Is IELTS mandatory to study in New Zealand?",
    answer:
      "Most universities require English proficiency proof through IELTS, TOEFL, or PTE, but exemptions apply for English-medium education backgrounds.",
  },
  {
    question: "Can I work while studying in New Zealand?",
    answer:
      "Yes — international students can work 20 hours per week during term and full-time during holidays.",
  },
  {
    question: "What are the post-study work options in New Zealand?",
    answer:
      "Graduates can apply for a Post-Study Work Visa valid for 1–3 years, depending on qualification level and study location.",
  },
  {
    question: "How affordable is studying in New Zealand compared to other countries?",
    answer:
      "New Zealand offers moderate tuition and living costs, averaging NZD $22,000–$35,000/year for tuition and NZD $20,000–$27,000/year for living.",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes — popular options include New Zealand Excellence Awards, Commonwealth Scholarships, and university merit-based awards.",
  },
];

export default function Page2_7M() {
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
