import { PageHero } from "@/components/hero/PageHero";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Contact",
  "Consultation information and enquiries.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="dark"
        label="Contact"
        title={
          <>
            Let&apos;s start the{" "}
            <span className="text-accent">conversation.</span>
          </>
        }
        description="Clinic line, hospital location and enquiry form — we’ll guide you to the right next step."
      />
      <ContactPageContent />
    </>
  );
}
