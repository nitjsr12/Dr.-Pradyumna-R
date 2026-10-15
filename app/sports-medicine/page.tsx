import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { Container } from "@/components/ui/Container";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { SportsMedicineSections } from "@/components/pages/SportsMedicineSections";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Sports Medicine in Bangalore",
  "Sports injury assessment, arthroscopy and return-to-sport planning with a FIFA-diploma sports medicine specialist in Bangalore.",
  "/sports-medicine",
  [
    "sports injury",
    "sports injury treatment bangalore",
    "sports medicine bangalore",
    "sports injury doctor bangalore",
  ]
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
