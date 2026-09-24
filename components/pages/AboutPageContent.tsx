"use client";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMediaSlider } from "@/components/about/AboutMediaSlider";
import { AboutProfileSection } from "@/components/about/AboutProfileSection";
import { ProfessionalTimeline } from "@/components/sections/ProfessionalTimeline";
import { AchievementsSection } from "@/components/sections/AchievementsSection";

export function AboutPageContent() {
  return (
    <>
      <AboutIntro />
      <AboutMediaSlider />
      <AboutProfileSection />
      <ProfessionalTimeline variant="vertical" />
      <AchievementsSection />
    </>
  );
}
