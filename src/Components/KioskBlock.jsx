// src/components/ImageTextSection.jsx
import React from "react";

const KioskBlock = ({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "left",
  extraType,
  features = [],
  buttonText,
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-20 ${
        imagePosition === "right" ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-full max-w-lg rounded-xl"
        />
      </div>

      {/* TEXT */}
      <div className="w-full lg:w-1/2">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-green-600 mb-3">
            {eyebrow}
          </p>

          <h3 className="text-2xl font-bold mb-4">{title}</h3>

          <p className="text-[#4b4b63] mb-6">{description}</p>

          {/* CONDITIONAL CONTENT */}
          {extraType === "features" && (
            <ul className="space-y-4 text-sm">
              {features.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> – {item.text}
                </li>
              ))}
            </ul>
          )}

          {extraType === "button" && (
            <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default KioskBlock;
