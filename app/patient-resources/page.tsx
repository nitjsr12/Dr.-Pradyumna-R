import { PageHero } from "@/components/hero/PageHero";
import { PatientResourcesContent } from "@/components/pages/PatientResourcesContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Patient Resources",
  "Understand your health and prepare for informed conversations.",
  "/patient-resources"
);

export default function PatientResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title={
          <>
            Understand your health.{" "}
            <span className="text-accent">Make informed conversations.</span>
          </>
        }
      />
      <PatientResourcesContent />
      <ConsultationCTA />
    </>
  );
}
