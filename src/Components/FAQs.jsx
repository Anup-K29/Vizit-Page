import React, { useState } from "react";

export const faqsData = [
  {
    question: "How does Vizit improve the security of our facility?",
    answer:
      "It replaces paper logs with a secure digital record, allows for real-time tracking of everyone in the building, and can instantly identify individuals against a watchlist.",
  },
  {
    question: "Can visitors pre-register before they arrive?",
    answer:
      "Yes. Hosts can send email invites with a QR code, allowing guests to check in instantly upon arrival without manual data entry.",
  },
  {
    question: "Does the system notify hosts when their guest arrives?",
    answer:
      "Yes. The system sends instant notifications via email, SMS, or workplace tools like Slack and Microsoft Teams as soon as a guest signs in.",
  },
  {
    question: "What hardware do I need to run the application?",
    answer:
      "You typically need a tablet (iPad or Android) and a stand. If you want to print visitor badges, you will also need a compatible thermal label printer.",
  },
  {
    question:
      "Can Vizit integrate with our existing tools (Slack, Google, etc.)?",
    answer:
      "Yes. Vizit integrates with major platforms including Google Workspace, Microsoft Outlook, Slack, and various door access control systems.",
  },
  {
    question:
      "Can we customize the check-in flow for different types of visitors?",
    answer:
      "Yes. You can create unique sign-in paths for different groups, such as asking contractors for safety certifications while providing a faster flow for delivery drivers.",
  },
  {
    question: "Does the app support digital NDA or waiver signing?",
    answer:
      "Yes. You can upload legal documents for visitors to read and sign digitally on the kiosk. Signed copies are automatically saved as secure PDFs.",
  },
  {
    question:
      "Can Vizit manage multiple entrances or different office locations?",
    answer:
      "Yes. You can manage multiple sites from a single central dashboard, giving you a global view of all visitor activity across your entire organization.",
  },
  {
    question: "Does the system support touchless check-in?",
    answer:
      "Yes. Visitors can scan a QR code at the kiosk using their own smartphone to complete the entire registration process without touching the communal screen.",
  },
  {
    question: "Can we print custom visitor badges?",
    answer:
      "Yes. You can design and automatically print badges that include the visitor's name, photo, host details, and access level.",
  },
];

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
