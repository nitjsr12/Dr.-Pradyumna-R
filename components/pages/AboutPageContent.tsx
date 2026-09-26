"use client";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutProfessionalOverview } from "@/components/about/AboutProfessionalOverview";
import { AboutMediaSlider } from "@/components/about/AboutMediaSlider";
import { AboutProfileSection } from "@/components/about/AboutProfileSection";
import { AboutVisitMaps } from "@/components/about/AboutVisitMaps";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export function AboutPageContent() {
  return (
    <>
      <AboutIntro />
      <AboutMediaSlider />
      <AboutProfessionalOverview />
      <AboutProfileSection />
      <AchievementsSection />
      <AboutVisitMaps />
    </>
  );
}
