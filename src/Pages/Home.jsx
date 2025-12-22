import React from "react";
import { HeroSection } from "../Components/HeroSection.jsx";
import { ProcessSection } from "../Components/ProcessSection.jsx";
import { FeatureSection } from "../Components/FeatureSection.jsx";
import { IndustrySection } from "../Components/IndustrySection.jsx";
import { ContactSection } from "../Components/ContactSection.jsx";
import { VisitorIntro } from "../Components/VisitorIntro.jsx"
import { VisitorTypes } from "../Components/VisitorTypes.jsx";
import KioskSection from "../Components/KioskSection.jsx"
import FeatureBlocksSection from "@/Components/FeatureBlocksSection.jsx";
import WorkplaceFeatures from "@/Components/WorkplaceFeatures.jsx";
import DashboardOverview from "@/Components/DashboardOverview.jsx";
import TestimonialsSection from "@/Components/TestimonialsSection.jsx";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <VisitorIntro/>
      <VisitorTypes/>
      <FeatureBlocksSection />
      <KioskSection/>
      <WorkplaceFeatures/>
      <DashboardOverview/>
      <TestimonialsSection/>
      {/* <ProcessSection />
      <FeatureSection />
      <IndustrySection />
      <ContactSection /> */}
    </>
  );
};  
