import React from "react";
import { HeroSectionHome } from "../Components/HeroSectionHome.jsx";
import { FeaturesSection } from "@/Components/FeatureSection.jsx";
import { OverviewSection } from "@/Components/OverViewSection.jsx";
import { Lobby } from "@/Components/Lobby.jsx";
import { SeamlessEntrySection } from "@/Components/SeamlessEntrySection.jsx";
import { TestimonialSection } from "@/Components/TestimonialSection.jsx";
import { ContactUsHomePage } from "@/Components/ContactUsHomePage.jsx";
import { FAQs } from "@/Components/FAQs.jsx";

export const Home = () => {
  return (
    <>
      <HeroSectionHome />
      <FeaturesSection />
      <OverviewSection />
      <Lobby />
      <SeamlessEntrySection />
      <TestimonialSection />
      <ContactUsHomePage />
      <FAQs />
    </>
  );
};
