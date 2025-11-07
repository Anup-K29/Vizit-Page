import React from "react";
import {IndustryCards} from "./IndustryCards.jsx"
import CorporateOffice from "../assets/images/CorporateOffice.png";
import Manufacturing from "../assets/images/Manufacturing.png";
import Education from "../assets/images/Education.png";
import Hospitality from "../assets/images/Hospitality.png";
import RealEstate from "../assets/images/RealEstate.png";
import Healthcare from "../assets/images/Healthcare.png";

export const IndustrySection = () => {
  const industries = [
    {
      title: "Corporate Office",
      description:"Streamlines guest sign-in; enhances security and professionalism.",
      image: CorporateOffice,
    },
    {
      title: "Manufacturing",
      description:"Ensures safety, contractor tracking, and site access control.",
      image: Manufacturing,
    },
    {
      title: "Education",
      description:"Screens visitors to prioritize student safety and campus security.",
      image: Education,
    },
    {
      title: "Hospitality",
      description: "Speeds up guest check-in and manages venue capacity/flow.",
      image: Hospitality,
    },
    {
      title: "Real Estate",
      description:"Standardizes security for multi-tenant property visitors and vendors.",
      image: RealEstate,
    },
    {
      title: "Healthcare",
      description:"Controls access, protects patient data, and manages infection risk.",
      image: Healthcare,
    },
  ];
  return( 
  <section className="bg-linear-to-b from-[#C493FF] to-[#B77DFF] py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
          Vzizt Is Used In
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <IndustryCards key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
    );
};
