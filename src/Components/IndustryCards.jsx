import React from "react";
import TiltedCard from "./TiltedCard";

export const IndustryCards = ({ title, image, description }) => {
  return (
    <TiltedCard
      glare={true}                // enables light reflection
      max={20}                    // controls max tilt angle
      scale={1.04}                // zoom effect on hover
      perspective={1000}          // depth feel
      className="rounded-2xl cursor-pointer transition-transform duration-500"
    >
      {/* ✅ Actual card content goes inside */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-[#6730CF] font-semibold text-lg mb-1">
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-snug">
            {description}
          </p>
        </div>
      </div>
    </TiltedCard>
  );
};
