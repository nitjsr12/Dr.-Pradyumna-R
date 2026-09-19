import { PageHero } from "@/components/hero/PageHero";
import { ExpertisePageContent } from "@/components/pages/ExpertisePageContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Expertise focused on movement",
  "Sports medicine, orthopaedics and musculoskeletal care in Bengaluru.",
  "/expertise"
);

export default function ExpertisePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Expertise", path: "/expertise" },
        ])}
      />
      <PageHero
        label="Expertise"
        title={
          <>
            Expertise focused on{" "}
            <span className="text-accent">movement.</span>
          </>
        }
      />
      <ExpertisePageContent />
      <ConsultationCTA />
    </>
  );
}
