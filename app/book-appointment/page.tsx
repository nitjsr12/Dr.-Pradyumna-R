import { redirect } from "next/navigation";
import { bookAppointmentUrl } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Book a consultation",
  "Book a consultation with Dr. Pradyumna R via WhatsApp.",
  "/book-appointment"
);

export default function BookAppointmentPage() {
  redirect(bookAppointmentUrl);
}
