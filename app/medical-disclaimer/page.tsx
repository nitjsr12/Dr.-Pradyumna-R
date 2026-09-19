import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Medical Disclaimer",
  "Important information about educational content on this website.",
  "/medical-disclaimer"
);

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Medical Disclaimer"
        variant="light"
        description="Please read this before relying on any information on this site."
      />
      <section className="section-y mesh-light pattern-grid">
        <Container className="max-w-3xl space-y-6">
          <p className="text-lg font-medium text-navy">
            This website is operated as a personal brand and patient-education
            resource for Dr. Pradyumna R. It is not an emergency service.
          </p>
          <p className="text-body">
            If you have severe pain, loss of function, numbness, or any urgent
            concern, seek immediate care at the nearest emergency facility or
            call local emergency services.
          </p>
          <p className="text-body">
            Articles, resources and condition descriptions are for general
            education only. They do not replace a clinical examination,
            diagnosis or treatment plan from a qualified healthcare provider.
          </p>
          <p className="text-body">
            Do not delay or disregard professional medical advice because of
            something you read here. Individual outcomes vary; no specific
            results are guaranteed.
          </p>
        </Container>
      </section>
    </>
  );
}
