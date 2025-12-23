import React from 'react'

const whatYouGetData = [
  {
    title: "Zero queue time",
    description:
      "Guests simply scan their QR code or sign in by name – they're already expected, making arrivals faster and stress-free.",
    icon: "👥",
  },
  {
    title: "No confusion",
    description:
      "Clear, branded instructions are sent well in advance, guiding visitors through every step before they even arrive.",
    icon: "👌",
  },
  {
    title: "Instant host alerts",
    description:
      "Hosts immediately receive SMS and email notifications the moment their visitor signs in at the kiosk or turnstile.",
    icon: "💬",
  },
  {
    title: "Badge printing",
    description:
      "A personalised, professional badge is printed instantly, helping visitors feel recognised and welcome upon arrival.",
    icon: "🪪",
  },
  {
    title: "Verified and secure",
    description:
      "Every QR code is unique, verified, and logged, ensuring only approved guests gain fast, traceable access to your site.",
    icon: "🔒",
  },
];




export const WhatYouGet = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#0f0f1a]">
            What you get
          </h3>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">

          {whatYouGetData.map((item, index) => (
            <div key={index} className="flex gap-5">

              {/* ICON */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 text-black">
                  {item.icon}
                </div>
              </div>

              {/* TEXT */}
              <div className="max-w-sm">
                <h4 className="font-semibold text-lg mb-2 text-[#0f0f1a]">
                  {item.title}
                </h4>

                <p className="text-sm text-[#4b4b63] leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};


