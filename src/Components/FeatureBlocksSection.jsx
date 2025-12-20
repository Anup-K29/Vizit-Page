// src/components/FeatureBlocksSection.jsx
import React from "react";
import FeatureBlock from "./FeatureBlock.jsx";
import six from "../assets/images/proVisit/six.png";
import seven from "../assets/images/proVisit/seven.png";
import eight from "../assets/images/proVisit/eight.jpg";

export const featuresData = [
  {
    eyebrow: "Seamless Contractor Ecosystem",
    title: "Contractor Management",
    description:
      "Experience a new level of control over contractor management with our all-in-one solution, covering pre-booking, on-site inductions, digital sign-ins, document checks, and compliance.",
    buttonText: "Find out more",
    image: six,
    reverse: false,
  },
  {
    eyebrow: "Complete Visitor Management",
    title: "Visitor Management",
    description:
      "Streamline your visitor process from start to finish. ProVisit stores everything from efficient sign-in with QR codes to asset tracking, time and attendance, and real-time notifications.",
    buttonText: "Find out more",
    image: seven,
    reverse: true,
  },
  {
    eyebrow: "All-in-One Employee Software",
    title: "Employee Management",
    description:
      "Manage all aspects of your workplace with ease, from RFID sign-ins and multi-site management to instant fire roll call reporting, parcel tracking, and mobile app access.",
    buttonText: "Find out more",
    image: eight,
    reverse: false,
  },
];

const FeatureBlocksSection = () => {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {featuresData.map((feature, index) => (
          <FeatureBlock key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureBlocksSection;
