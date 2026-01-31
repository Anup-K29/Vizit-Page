import React from "react";
import { useParams } from "react-router-dom";
import { solutionsData } from "../DataObjects/SolutionSection";
import { ContactUsFeaturePage } from "@/Components/ContactUsFeaturePage.jsx";

export const SolutionDetails = () => {
  const { slug } = useParams();

  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return <div className="p-10">Not found</div>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 text-justify">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            {solution.details.introHeading}
          </h1>
          <p className="text-gray-600 text-2xl">
            {solution.details.introSubtext}
          </p>
        </div>

        <img
          src={solution.detailsImage}
          alt={solution.title}
          className="w-full max-w-md rounded-xl object-contain"
        />
      </div>

      {/* here later you can add the long content like in your screenshot */}
      <div className="mt-12 space-y-10">
        {/* Text sections */}
        {solution.details.sections.map((sec, i) => (
          <div key={i}>
            <h3 className="text-3xl font-semibold mb-2">{sec.heading}</h3>
            <p className="text-gray-600 text-2xl">{sec.text}</p>
          </div>
        ))}

        {/* Key features list */}
        <div>
          <h3 className="text-3xl font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-2xl ">
            {solution.details.features.map((item, i) => (
              <li key={i}>
                <span className="font-semibold">{item.title}: </span>
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <ContactUsFeaturePage />
      </div>
    </section>
  );
};
