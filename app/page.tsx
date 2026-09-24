import { DoctorHero } from "@/components/hero/DoctorHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ExpertiseGrid } from "@/components/sections/ExpertiseGrid";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { WhenToConsult } from "@/components/sections/WhenToConsult";
import { BlogSlider } from "@/components/sections/BlogSlider";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { TestimonialVideos } from "@/components/sections/TestimonialVideos";

export default function HomePage() {
  return (
    <>
      <DoctorHero />
      <TrustStrip />
      <CredentialsBar />
      <ApproachSection />
      <AboutPreview />
      <AchievementsSection />
      <ExpertiseGrid />
      <SportsMedicineFeature />
      <div
        className="bg-bg-warm py-10 md:py-12 lg:py-16"
        aria-hidden
      />
      <WhenToConsult />
      <BlogSlider />
      <ConsultationCTA />
      <GoogleReviews />
      <TestimonialVideos />
    </>
  );
}
