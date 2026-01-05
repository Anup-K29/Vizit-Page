import React from "react";
import SeamlessEntrySectionImg from "../assets/images/HomePage/SeamlessEntrySection.png";

export const SeamlessEntrySection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f0f1a] mb-16">
          The Seamless Entry Experience
        </h2>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={SeamlessEntrySectionImg}
            alt="Seamless Entry Experience"
          />
        </div>

      </div>
    </section>
  );
};
