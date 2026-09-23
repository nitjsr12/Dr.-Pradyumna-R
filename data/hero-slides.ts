/**
 * Homepage hero slides.
 * Images are local, higher-resolution crops so the slider does not upscale a tiny region.
 */

export type HeroSlide = {
  id: string;
  eyebrow: string;
  headline: { text: string; accent?: boolean }[];
  description: string;
  image: string;
  imageAlt: string;
  /** Where the subject sits inside the frame */
  imagePosition: "center" | "right";
  /** Muted autoplay. YouTube is embedded; a file path is a local mp4. */
  video?: { type: "youtube"; id: string } | { type: "file"; src: string };
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
      "Personalised orthopaedic and sports medicine care for shoulder, knee and ankle conditions, guided by detailed clinical assessment and focused on restoring movement, supporting recovery and helping you return to the activities that matter most.",
    image: "/images/hero/slide-movement.jpg",
    imageAlt: "Dr. Pradyumna R with the clinical team",
    imagePosition: "right",
    video: { type: "file", src: "/videos/hero-movement.mp4" },
    tagLabel: "SPORTS MEDICINE",
    tagSublabel: "ORTHOPAEDICS",
    primaryCta: { label: "Book a Consultation", href: "/book-appointment" },
    secondaryCta: { label: "Explore Expertise", href: "/expertise" },
  },
  {
    id: "sports-medicine",
    eyebrow: "SPORTS MEDICINE • BENGALURU",
    headline: [
      { text: "Built Around" },
      { text: "Your Movement.", accent: true },
    ],
    description:
      "Personalised sports medicine care for shoulder, knee and ankle conditions, from expert injury assessment and treatment to a confident return to activity.",
    image: "/images/hero/slide-sports.jpg",
    imageAlt: "Athlete during sport, illustrating a return to activity",
    imagePosition: "center",
    video: { type: "file", src: "/videos/hero-sports.mp4" },
    tagLabel: "ASSESS • TREAT • RECOVER",
    primaryCta: { label: "Sports Medicine", href: "/sports-medicine" },
    secondaryCta: { label: "Book a Consultation", href: "/book-appointment" },
  },
  {
    id: "musculoskeletal",
    eyebrow: "SHOULDER • KNEE • ANKLE",
    headline: [
      { text: "Precision in" },
      { text: "Musculoskeletal Care.", accent: true },
    ],
    description:
      "Expert orthopaedic care for shoulder, knee and ankle conditions, with every treatment plan guided by detailed clinical assessment and individual needs.",
    image: "/images/hero/slide-doctor.jpg",
    imageAlt: "Dr. Pradyumna R in clinical scrubs",
    imagePosition: "center",
    video: { type: "youtube", id: "56LvLRi3_iA" },
    tagLabel: "ORTHOPAEDICS",
    tagSublabel: "PATIENT-CENTRED",
    primaryCta: { label: "Book a Consultation", href: "/book-appointment" },
    secondaryCta: { label: "Gallery", href: "/gallery" },
  },
];

export const HERO_SLIDE_INTERVAL_MS = 6500;
