"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "What are unlisted shares?",
    answer:
      "Unlisted shares are shares of a company that are not listed on any recognized stock exchange. They are usually traded privately or through over-the-counter (OTC) markets, offering investors an opportunity to invest in companies before they go public.",
  },
  {
    question: "Are unlisted shares safe to invest in?",
    answer:
      "Like any investment, unlisted shares carry risks, including lower liquidity and lack of regulatory oversight compared to listed stocks. However, they can offer higher growth potential as you invest in companies before they go public. It's important to conduct thorough research or consult with a financial advisor before investing.",
  },
  {
    question: "What are the tax implications of buying and selling unlisted shares?",
    answer:
      "Gains from unlisted shares are subject to capital gains tax in India. Short-term capital gains (if held for less than 24 months) are taxed at your applicable income tax rate, while long-term capital gains (if held for more than 24 months) are taxed at 20% with indexation benefits. Always consult a tax advisor for precise tax implications.",
  },
  {
    question: "What is the difference between unlisted and listed shares?",
    answer:
      "Listed shares are traded on stock exchanges and are subject to strict regulatory oversight, which offers transparency and liquidity. Unlisted shares, on the other hand, are traded privately and may have limited information available, with lower liquidity but potentially higher growth prospects for early-stage investors.",
  },
  {
    question: "How do I value unlisted shares?",
    answer:
      "Valuing unlisted shares can be complex since they are not publicly traded. The valuation typically depends on factors like the company's financials, growth potential, recent fundraising, and market conditions. It’s advisable to work with financial experts or brokers experienced in unlisted shares to get an accurate assessment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl p mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-6 dark:text-white text-black">FAQ&apos;s</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center p-4  cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-md md:text-lg font-semibold text-gray-500">{faq.question}</h3>
              <div className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                {openIndex !== index ? (
                  <CirclePlus className="text-gray-400" />
                ) : (
                  <CircleMinus className="text-gray-400" />
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <div className="p-4 bg-white text-gray-500 text-sm md:text-md">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
