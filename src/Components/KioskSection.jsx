// src/components/KioskSection.jsx
import React from "react";
import KioskBlock from "./KioskBlock.jsx";
import nine from "../assets/images/proVisit/nine.jpg";
import ten from "../assets/images/proVisit/ten.jpg";

const kioskSectionsData = [
  {
    eyebrow: "Welcome visitors with confidence",
    title: "Tailor-made impressions",
    description:
      "Experience a seamless and intuitive system that caters to the needs of both guests and employees.",
    image: nine,
    imagePosition: "left",
    extraType: "features",
    features: [
      {
        title: "RFID Reader",
        text: "Remove the burden of manual entry and welcome a seamless sign-in experience.",
      },
      {
        title: "Contactless Sign-in",
        text: "Effortlessly sign visitors by utilising a distinctive QR code process.",
      },
    ],
  },
  {
    eyebrow: "First impressions matter",
    title: "Seamless sign-in experience",
    description:
      "Allow your guests to check in with a sleek, modern, and practical freestanding kiosk.",
    image: ten,
    imagePosition: "right",
    extraType: "button",
    buttonText: "Read our testimonials",
  },
];

const KioskSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* SECTION 1 – Intro (static) */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-green-600 mb-3">
            Kiosk Sign-in
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Your brand, your colours, the choice is yours.
          </h2>

          <p className="text-lg text-[#4b4b63] leading-relaxed">
            Create a memorable first impression that is unique and professional
            looking and helps your guests feel welcome the moment they sign in.
          </p>
        </div>

        {/* SECTION 2 & 3 – Data-driven */}
        {kioskSectionsData.map((section, index) => (
          <KioskBlock key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default KioskSection;
