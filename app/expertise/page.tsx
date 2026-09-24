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
        variant="dark"
        label="Expertise"
        title={
          <>
            Expertise focused on{" "}
            <span className="text-teal-bright">movement.</span>
          </>
        }
        description="Sports medicine, orthopaedics and musculoskeletal care — personalised assessment and treatment in Bengaluru."
      />
      <ExpertisePageContent />
      <ConsultationCTA />
    </>
  );
}
