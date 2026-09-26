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

export type ContactEnquiryForm = {
  name: string;
  phone: string;
  email: string;
  location: string;
  enquiryType: string;
  message: string;
};

export function formatContactEnquiryMessage(data: ContactEnquiryForm): string {
  const lines = [
    "Hello, I am contacting you through the Dr. Pradyumna R website.",
    "",
    `*Name:* ${data.name.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
  ];
  if (data.email.trim()) {
    lines.push(`*Email:* ${data.email.trim()}`);
  }
  if (data.location.trim()) {
    lines.push(`*Preferred location:* ${data.location.trim()}`);
  }
  if (data.enquiryType.trim()) {
    lines.push(`*Enquiry type:* ${data.enquiryType.trim()}`);
  }
  lines.push("", "*Message:*", data.message.trim() || "—", "", "Thank you.");
  return lines.join("\n");
}

export function getContactEnquiryWhatsAppUrl(data: ContactEnquiryForm): string {
  return getWhatsAppUrl(formatContactEnquiryMessage(data));
}
