import { DoctorHero } from "@/components/hero/DoctorHero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { WhenToConsult } from "@/components/sections/WhenToConsult";
import { BlogSlider } from "@/components/sections/BlogSlider";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { TestimonialVideos } from "@/components/sections/TestimonialVideos";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <DoctorHero />
      <TrustStrip />
      <CredentialsBar />
      <ApproachSection />
      <AboutPreview />
      <AchievementsSection />
      <SportsMedicineFeature />
      <div
        className="bg-bg-warm py-5 md:py-6 lg:py-8"
        aria-hidden
      />
      <WhenToConsult />
      <BlogSlider />
      <ConsultationCTA />
      <GoogleReviews />
      <TestimonialVideos />
      <FaqSection />
    </>
  );
}
