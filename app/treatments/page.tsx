import { PageHero } from "@/components/hero/PageHero";
import { TreatmentsGrid } from "@/components/pages/TreatmentsGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Treatments",
  "Clinical expertise areas documented on the official hospital profile.",
  "/treatments"
);

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        label="Treatments"
        title={
          <>
            Clinical <span className="text-accent">expertise</span>
          </>
        }
        description="Listed on the official Manipal Hospitals profile. Suitability is determined after individual assessment."
      />
      <TreatmentsGrid />
      <ConsultationCTA />
    </>
  );
}
