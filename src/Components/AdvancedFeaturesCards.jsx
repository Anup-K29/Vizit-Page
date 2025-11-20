import React from "react";


export const AdvancedFeaturesCards = ({ icon, title, description }) => {
  return (
    <div className="max-w-[280px] text-white ">
      
      {/* Icon + Title */}
      <div className="flex items-start gap-3 mb-3">
        <img src={icon} alt={title} className="w-8 h-8 shrink-0 scale-125" />
        <h3 className="font-medium text-[26px] leading-tight">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-[19px] leading-[1.45] opacity-90 mt-8 ">
        {description}
      </p>

    </div>
  );
};



