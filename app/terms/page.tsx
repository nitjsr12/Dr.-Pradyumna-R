import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms of Use",
  "Terms for using Dr. Pradyumna R's personal brand website.",
  "/terms"
);

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Use"
        variant="light"
        description="By using this website, you agree to the following terms."
      />
      <section className="section-y mesh-light pattern-grid">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-bold text-navy">Educational purpose</h2>
            <p className="text-body mt-4">
              Content on this site is for general information about orthopaedic
              and sports medicine topics. It does not create a doctor–patient
              relationship and is not a substitute for an in-person assessment.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy">Accuracy</h2>
            <p className="text-body mt-4">
              Professional details are sourced from verified hospital profiles
              where noted. Other editorial content may be updated without notice.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy">External links</h2>
            <p className="text-body mt-4">
              Links to hospital or third-party sites are provided for convenience.
              Dr. Pradyumna R is not responsible for content on external websites.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
