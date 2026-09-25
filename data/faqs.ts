/** Educational FAQs — not clinical advice */
export const faqs = [
  {
    id: "booking",
    question: "How do I book a consultation?",
    answer:
      "Tap Book Appointment anywhere on this site to open WhatsApp with a pre-filled message, or call the clinic line on the Contact page. You can also use the official Manipal Hospitals doctor profile.",
  },
  {
    id: "first-visit",
    question: "What should I bring to my first visit?",
    answer:
      "Bring prior imaging reports (if available), a list of medications, and notes about when symptoms started and what activities affect your pain or movement. See Patient Resources for a fuller checklist.",
  },
  {
    id: "sports-injury",
    question: "When should I see a sports medicine specialist?",
    answer:
      "Consider specialist advice when an injury limits sport or daily movement, pain persists despite rest, or you are unsure about safely returning to activity. An in-person assessment is required for diagnosis.",
  },
  {
    id: "website",
    question: "Is this the Manipal Hospitals website?",
    answer:
      "No. This is Dr. Pradyumna R's personal brand and patient-education site. Hospital affiliation is noted for transparency; clinical care is delivered through affiliated hospital channels.",
  },
  {
    id: "emergency",
    question: "Can I use this site for emergencies?",
    answer:
      "No. For urgent or severe symptoms, go to the nearest emergency facility or call local emergency services immediately.",
  },
] as const;

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
