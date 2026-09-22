import { DoctorHero } from "@/components/hero/DoctorHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ProfessionalTimeline } from "@/components/sections/ProfessionalTimeline";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { OrthopaedicsSection } from "@/components/sections/OrthopaedicsSection";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { WhenToConsult } from "@/components/sections/WhenToConsult";
import { CarePhilosophy } from "@/components/sections/CarePhilosophy";
import { ArticlesPreview } from "@/components/sections/ArticlesPreview";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GoogleReviews } from "@/components/sections/GoogleReviews";

export default function HomePage() {
  return (
    <>
      <DoctorHero />
      <TrustStrip />
      <CredentialsBar />
      <ApproachSection />
      <AboutPreview />
      <ProfessionalTimeline />
      <AchievementsSection />
      <ExpertiseGrid />
      <SportsMedicineFeature />
      <OrthopaedicsSection />
      <PatientJourney />
      <WhenToConsult />
      <CarePhilosophy />
      <ArticlesPreview />
      <ResourcesPreview />
      <ConsultationCTA />
      <GoogleReviews />
    </>
  );
}
