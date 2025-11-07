import React from "react";
import { PitchStrip } from "../Components/PitchStrip.jsx";
import { ProcessSection } from "../Components/ProcessSection.jsx";
import { FeatureSection } from "../Components/FeatureSection.jsx";
import { IndustrySection } from "../Components/IndustrySection.jsx";
import { ContactSection } from "../Components/ContactSection.jsx";

export const Home = () => {
  return (
    <>
      <PitchStrip />
      <ProcessSection />
      <FeatureSection />
      <IndustrySection />
      <ContactSection />
    </>
  );
};  
