import React from "react";
import { HeroSection } from "../Components/HeroSection.jsx";

import { FeaturesSection } from "@/Components/FeatureSection.jsx";
import { OverviewSection } from "@/Components/OverViewSection.jsx";
import { Lobby } from "@/Components/Lobby.jsx";
import { SeamlessEntrySection } from "@/Components/SeamlessEntrySection.jsx";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection/>
      <OverviewSection/>
      <Lobby/>
      <SeamlessEntrySection/>
    </>
  );
};  
