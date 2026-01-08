import React from "react";
import { testimonials } from "../DataObjects/TestimonialSection.js";

export const TestimonialSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          Testimonials
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#f6e6fb] rounded-2xl shadow-lg overflow-hidden h-[260px]"
            >
              {/* IMAGE LEFT */}
              <div className="w-[45%] h-full">
                <img
                  src={item.image}
                  alt={item.author}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT RIGHT */}
              <div className="w-[55%] p-6 flex flex-col justify-between">
                <p className="text-sm text-[#121213] leading-relaxed">
                  “{item.quote}”
                </p>

                <span className="text-sm font-semibold text-black">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
