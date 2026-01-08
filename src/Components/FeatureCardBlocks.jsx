import React from "react";

export const FeatureCardBlocks = ({ image, title, description }) => {
  return (
    <div className="rounded-xl  border-purple-300 bg-purple-50 p-5 transition shadow-xl inset-shadow-sm inset-shadow-[#AA60C8] ">
      <div className="flex items-start gap-4">
        {/* Image */}
        <div className="mb-3 h-10 w-10">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Title */}
        <h4 className="text-md font-semibold text-gray-900 ">{title}</h4>
      </div>

      {/* Description */}
      <p className="mt-1  text-sm text-gray-600">{description}</p>
    </div>
  );
};
