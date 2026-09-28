"use client";

import { AboutOpening } from "@/components/about/AboutOpening";
import { AboutProfessionalOverview } from "@/components/about/AboutProfessionalOverview";
import { AboutProfileSection } from "@/components/about/AboutProfileSection";
import { AboutVisitMaps } from "@/components/about/AboutVisitMaps";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export function AboutPageContent() {
  return (
    <>
      <AboutOpening />
      <AboutProfessionalOverview />
      <AboutProfileSection />
      <AchievementsSection />
      <AboutVisitMaps />
    </>
  );
}
