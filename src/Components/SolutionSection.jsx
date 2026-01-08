// components/SolutionsSection.jsx
import React from "react";
import {solutionsData} from "../DataObjects/SolutionSection.js"

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
          loading="lazy"
          decoding="async"
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
