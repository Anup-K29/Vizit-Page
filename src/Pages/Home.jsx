import React from "react";
import { HeroSection } from "../Components/HeroSection.jsx";

import { FeaturesSection } from "@/Components/FeatureSection.jsx";
import { OverviewSection } from "@/Components/OverViewSection.jsx";
import { Lobby } from "@/Components/Lobby.jsx";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <OverviewSection/>
      <Lobby/>
      {/* <VisitorIntro/>
      <VisitorTypes/>
      <FeatureBlocksSection />
      <KioskSection/>
      <WorkplaceFeatures/>
      <DashboardOverview/>
      <TestimonialsSection/> */}
    </>
  );
};  
