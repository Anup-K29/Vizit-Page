import React, { useState } from "react";
import {faqsData} from "../DataObjects/FAQs.js"


export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border rounded-xl px-6 py-4 cursor-pointer transition"
                onClick={() => toggle(index)}
              >
                {/* QUESTION */}

                <div className="flex items-center justify-between">
                  <p className="font-medium text-xl text-[#0f0f1a]">{faq.question}</p>
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {/* ANSWER */}

                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out 
                    ${
                      isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }
                    `}
                >
                  <div className="mt-4 bg-[#f7e4fd] rounded-lg px-5 py-4 transition-all duration-300">
                    <p className="text-lg text-[#121213] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
