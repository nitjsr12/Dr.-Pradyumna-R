import { PageHero } from "@/components/hero/PageHero";
import { Container } from "@/components/ui/Container";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { CredentialsBar } from "@/components/sections/CredentialsBar";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Book a consultation",
  "Book a consultation with Dr. Pradyumna R.",
  "/book-appointment"
);

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        label="Appointments"
        title={
          <>
            Book a <span className="text-accent">consultation</span>
          </>
        }
        description="UI flow below—connect your hospital booking system, Calendly or API when ready."
      />
      <Container className="section-y flex justify-center pattern-grid relative">
        <BookingWizard />
      </Container>
      <CredentialsBar />
    </>
  );
}
