import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How this website handles enquiries and personal information.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        variant="light"
        description="This personal brand website is operated for Dr. Pradyumna R. This page describes how information you submit may be handled."
      />
      <section className="section-y mesh-light pattern-grid">
        <Container className="max-w-3xl space-y-8">
          <h2 className="text-xl font-bold text-navy">
            Information you provide
          </h2>
          <p className="text-body mt-4">
            If you use the contact or appointment forms, you may share your
            name, phone number, email address and message content. This
            information is used only to respond to your enquiry or to support
            scheduling through verified channels—not for unrelated marketing.
          </p>
          <h2 className="mt-10 text-xl font-bold text-navy">No sale of data</h2>
          <p className="text-body mt-4">
            Personal information submitted through this site is not sold to
            third parties. It may be shared with the hospital or booking
            systems you choose when arranging a consultation, in line with
            their policies.
          </p>
          <h2 className="mt-10 text-xl font-bold text-navy">Analytics & cookies</h2>
          <p className="text-body mt-4">
            If analytics or cookies are enabled in the future, this page will be
            updated. Currently, the site prioritises minimal tracking.
          </p>
          <p className="text-caption mt-10">
            Questions: use the{" "}
            <a href="/contact" className="text-link underline-offset-4 hover:underline">
              contact page
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
