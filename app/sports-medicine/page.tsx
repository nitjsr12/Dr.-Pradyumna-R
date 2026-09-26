import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { Container } from "@/components/ui/Container";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { SportsMedicineSections } from "@/components/pages/SportsMedicineSections";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Sports Medicine in Bengaluru",
  "Sports medicine care focused on movement and recovery.",
  "/sports-medicine"
);

export default function SportsMedicinePage() {
  return (
    <>
      <div className="hero-banner relative overflow-hidden border-b border-border-subtle pt-[4.75rem] lg:pt-[5.5rem]">
        <PageBannerBackground />
        <Container className="relative py-10 md:py-14 lg:pb-16">
          <p className="label-caps-on-dark">Sports medicine</p>
          <h1 className="title-page mt-5 max-w-3xl text-balance">
            Movement is part of the{" "}
            <span className="text-teal-bright">treatment conversation.</span>
          </h1>
        </Container>
      </div>
      <SportsMedicineFeature />
      <SportsMedicineSections />
      <ConsultationCTA />
    </>
  );
}
