/**
 * Sample hero slides — educational positioning only.
 * Replace imagery with approved professional photography when available.
 */

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: { text: string; accent?: boolean }[];
  description: string;
  image: string;
  imageAlt: string;
  /** portrait = rounded card; banner = wide clinical style */
  imageLayout: "portrait" | "banner";
  imagePosition?: "center" | "top" | "right";
  tagLabel: string;
  tagSublabel?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export const heroSlides: HeroSlide[] = [
  {
    id: "movement",
    eyebrow: "ORTHOPAEDICS • SPORTS MEDICINE",
    headline: [
      { text: "Move Better." },
      { text: "Recover Stronger." },
      { text: "Live Fully.", accent: true },
    ],
    description:
      "Personalised orthopaedic and sports medicine care focused on understanding your condition, restoring movement and helping you return to the activities that matter to you.",
    image: "https://www.drpradyumna.com/images/B2/dr-Pradyumna-r-photo-3107074.webp",
    imageAlt: "Dr. Pradyumna R — orthopaedic and sports medicine specialist",
    imageLayout: "portrait",
    imagePosition: "top",
    tagLabel: "SPORTS MEDICINE",
    tagSublabel: "ORTHOPAEDICS",
    primaryCta: { label: "Book a Consultation", href: "/book-appointment" },
    secondaryCta: { label: "Explore Expertise", href: "/expertise" },
  },
  {
    id: "sports-medicine",
    eyebrow: "SPORTS MEDICINE • BENGALURU",
    headline: [
      { text: "Built around" },
      { text: "movement.", accent: true },
    ],
    description:
      "Sample slide — sports medicine care that considers your sport, goals and clinical assessment, from injury evaluation through return to activity.",
    image: "/images/hero/slide-clinical-banner.jpg", // TODO: replace with approved brand photography
    imageAlt: "Clinical care environment — illustrative sample image",
    imageLayout: "banner",
    imagePosition: "right",
    tagLabel: "ASSESS • TREAT • RECOVER",
    primaryCta: { label: "Sports Medicine", href: "/sports-medicine" },
    secondaryCta: { label: "Book a Consultation", href: "/book-appointment" },
  },
  {
    id: "shoulder-knee",
    eyebrow: "SHOULDER • KNEE • HIP",
    headline: [
      { text: "Precision in" },
      { text: "musculoskeletal care.", accent: true },
    ],
    description:
      "Sample slide — expertise in shoulder, knee and sports-related conditions. Specific treatments are discussed only after individual clinical assessment.",
    image: "https://www.drpradyumna.com/images/B2/dr-Pradyumna-r-photo-3107074.webp",
    imageAlt: "Dr. Pradyumna R professional portrait",
    imageLayout: "portrait",
    imagePosition: "top",
    tagLabel: "ORTHOPAEDICS",
    tagSublabel: "PATIENT-CENTRED",
    primaryCta: { label: "View Expertise", href: "/expertise" },
    secondaryCta: { label: "Patient Resources", href: "/patient-resources" },
  },
];

export const HERO_SLIDE_INTERVAL_MS = 7000;
