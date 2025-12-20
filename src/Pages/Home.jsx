import React from "react";
import { HeroSection } from "../Components/HeroSection.jsx";
import { ProcessSection } from "../Components/ProcessSection.jsx";
import { FeatureSection } from "../Components/FeatureSection.jsx";
import { IndustrySection } from "../Components/IndustrySection.jsx";
import { ContactSection } from "../Components/ContactSection.jsx";
import { VisitorIntro } from "../Components/VisitorIntro.jsx"
import { VisitorTypes } from "../Components/VisitorTypes.jsx";
import FeatureBlocksSection from "@/Components/FeatureBlocksSection.jsx";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <VisitorIntro/>
      <VisitorTypes/>
      <FeatureBlocksSection />
      {/* <ProcessSection />
      <FeatureSection />
      <IndustrySection />
      <ContactSection /> */}
    </>
  );
};  
