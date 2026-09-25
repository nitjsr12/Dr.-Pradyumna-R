import { doctor } from "@/data/doctor";

/** WhatsApp click-to-chat number (India country code, no +). */
export const whatsappNumber = `91${doctor.booking.clinicPhone}`;

export const defaultWhatsAppBookMessage =
  "Hello, I would like to book a consultation with Dr. Pradyumna R. Please share available appointment slots.";

export function getWhatsAppUrl(text: string = defaultWhatsAppBookMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** All “Book appointment” CTAs open this chat. */
export const bookAppointmentUrl = getWhatsAppUrl();

export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
