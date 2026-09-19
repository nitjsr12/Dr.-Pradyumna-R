import { Container } from "@/components/ui/Container";
import { SportsMedicineFeature } from "@/components/sections/SportsMedicineFeature";
import { SportsMedicineSections } from "@/components/pages/SportsMedicineSections";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Sports Medicine in Bengaluru",
  "Sports medicine care focused on movement and recovery.",
  "/sports-medicine"
);

export default function SportsMedicinePage() {
  return (
    <>
      <div className="surface-dark relative overflow-hidden bg-navy pt-[4.75rem] mesh-navy pattern-dots-dark lg:pt-[5.5rem]">
        <Container className="relative py-14 md:py-20">
          <p className="label-caps-on-dark">Sports medicine</p>
          <h1 className="title-page mt-5 max-w-3xl text-balance text-white">
            Movement is part of the{" "}
            <span className="text-teal-bright">treatment conversation.</span>
          </h1>
        </Container>
        <div className="container-site relative pb-12">
          <ImagePlaceholder
            src={images.athlete}
            remoteFallback={images.remote.sportsMedicine}
            alt="Athlete movement placeholder"
            aspectRatio="aspect-[21/9]"
            overlay
            rounded="lg"
            className="shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
      <SportsMedicineFeature />
      <SportsMedicineSections />
      <ConsultationCTA />
    </>
  );
}
