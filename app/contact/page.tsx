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
        label="Contact"
        title={
          <>
            Let&apos;s start the{" "}
            <span className="text-accent">conversation.</span>
          </>
        }
        description="Call, WhatsApp, or send an enquiry — we’ll guide you to booking and directions across Bengaluru clinics."
      />
      <ContactPageContent />
    </>
  );
}
