import React from "react";
import two from "../assets/images/proVisit/two.png";
import three from "../assets/images/proVisit/three.png";
import four from "../assets/images/proVisit/four.png";
import five from "../assets/images/proVisit/five.png";

const visitorTypes = [
  {
    title: "Manage contractors",
    description: "Contractor headaches, now transformed seamlessly.",
    image: two,
  },
  {
    title: "Simplify visitor arrivals",
    description: "Say goodbye to the unexpected and welcome the expected.",
    image: three,
  },
  {
    title: "Employee insights",
    description: "Everything in one place, saving time and effort.",
    image: four,
  },
  {
    title: "Events reimagined",
    description: "A modern approach to event accreditation.",
    image: five,
  },
];

export const VisitorTypes = () => {
  return (
    <section className="w-full pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {visitorTypes.map((item, index) => (
            <div key={index} className="text-center">
              {/* Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 h-36 object-contain"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg font-semibold text-[#0f0f1a] mb-3">
                {item.title}
              </h3>

              <p className="text-[#4b4b63] text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <button className="text-green-600 font-medium text-sm hover:underline">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
