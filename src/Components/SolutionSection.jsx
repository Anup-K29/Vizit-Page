// components/SolutionsSection.jsx
import React from "react";
import HeroCarousel1 from "../assets/images/HomePage/HeroCarousel1.png";
import HeroCarousel2 from "../assets/images/HomePage/HeroCarousel2.png";
import HeroCarousel3 from "../assets/images/HomePage/HeroCarousel3.png";

const solutionsData = [
  {
    id: 1,
    eyebrow: "All-in-One Employee Software",
    title: "Employee Management",
    description:
      "Manage all aspects of your workplace with ease, from RFID sign-ins and multi-site management to instant fire roll call reporting, parcel tracking, and mobile app access.",
    buttonText: "Find out more",
    image: HeroCarousel1,
  },
  {
    id: 2,
    eyebrow: "Smart Visitor Experience",
    title: "Visitor Management",
    description:
      "Deliver a secure and seamless visitor experience with pre-registration, QR-based check-ins, real-time notifications, and compliance-ready access control.",
    buttonText: "Find out more",
    image: HeroCarousel2,
  },
  {
    id: 3,
    eyebrow: "Smart Visitor Experience",
    title: "Visitor Management",
    description:
      "Deliver a secure and seamless visitor experience with pre-registration, QR-based check-ins, real-time notifications, and compliance-ready access control.",
    buttonText: "Find out more",
    image: HeroCarousel3,
  },
];

const SolutionBlock = ({
  eyebrow,
  title,
  description,
  buttonText,
  image,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-12 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div className="max-w-xl">
        <p className="text-md font-medium text-[#AA60C8]">{eyebrow}</p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">{title}</h2>

        <p className="mt-4 text-xl leading-relaxed text-gray-600">
          {description}
        </p>

        <button className="mt-6 rounded-lg bg-[#AA60C8] px-6 py-3 text-md font-medium text-white transition hover:text-[#AA60C8] hover:bg-white border border-[#AA60C8] cursor-pointer">
          {buttonText}
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-full max-w-lg">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl object-contain " 
        />
      </div>
    </div>
  );
};

export const SolutionsSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-28">
        {solutionsData.map((solution, index) => (
          <SolutionBlock
            key={solution.id}
            {...solution}
            reverse={index % 2 !== 0} // 🔁 auto reverse
          />
        ))}
      </div>
    </section>
  );
};
