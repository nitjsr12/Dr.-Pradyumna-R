import { bookAppointmentUrl } from "@/lib/whatsapp";

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
    id: "precision",
    eyebrow: "ORTHOPEDIC SURGEON IN BANGALORE • SPORTS MEDICINE",
    headline: [
      { text: "Move Better." },
      { text: "Recover Stronger." },
      { text: "Live Fully.", accent: true },
    ],
    description:
      "Dr. Pradyumna R is a fellowship-trained orthopedic surgeon in Bangalore, trained in Munich, Seoul and under ISAKOS. With 2,000+ shoulder and 2,000+ knee arthroscopies, he treats ACL, meniscus, rotator cuff and sports injuries through keyhole surgery, so you can return to the activities that matter most.",
    image: "/images/hero/slide-movement.jpg",
    imageAlt: "Keyhole orthopaedic surgery in progress",
    imagePosition: "right",
    video: { type: "file", src: "/videos/hero-sports.mp4" },
    tagLabel: "KEYHOLE SURGERY",
    tagSublabel: "ACL • MENISCUS • ROTATOR CUFF",
    primaryCta: { label: "Book a Consultation", href: bookAppointmentUrl },
    secondaryCta: { label: "Explore Treatments", href: "/treatments" },
  },
  {
    id: "recovery",
    eyebrow: "ROBOTIC KNEE REPLACEMENT • JOINT CARE",
    headline: [
      { text: "Back on Your Feet." },
      { text: "Step by Step.", accent: true },
    ],
    description:
      "Joint specialist care in Bangalore for knee arthritis and damaged joints, including MAKO robotic knee replacement for precise implant alignment and 100+ shoulder replacements performed. Recovery is planned from day one, with assisted walking and physiotherapy paced around your age, health and lifestyle.",
    image: "/images/hero/slide-sports.jpg",
    imageAlt: "Patient recovery and assisted walking after joint care",
    imagePosition: "center",
    video: { type: "file", src: "/videos/hero-movement.mp4" },
    tagLabel: "ROBOTIC KNEE REPLACEMENT",
    tagSublabel: "ASSESS • TREAT • RECOVER",
    primaryCta: { label: "Book a Consultation", href: bookAppointmentUrl },
    secondaryCta: { label: "Knee Replacement & Costs", href: "/treatments" },
  },
  {
    id: "your-doctor",
    eyebrow: "OUTLOOK HEALTH AWARDS 2024 & 2025",
    headline: [
      { text: "Surgery Only" },
      { text: "When You Need It.", accent: true },
    ],
    description:
      "Not every joint problem needs an operation. Dr. Pradyumna starts with a detailed assessment, explains your diagnosis clearly, and where suitable offers non-surgical care like PRP therapy and physiotherapy. Consult him at Manipal Hospitals, Kanakapura Road or Jayanagar, in English, Kannada, Hindi, Telugu or Tamil.",
    image: "/images/hero/slide-doctor.jpg",
    imageAlt: "Dr. Pradyumna R speaking with a patient",
    imagePosition: "center",
    video: { type: "file", src: "/videos/hero-musculoskeletal.mp4" },
    tagLabel: "DR. PRADYUMNA R",
    tagSublabel: "FIFA DIPLOMA • ISAKOS FELLOW",
    primaryCta: { label: "Book a Consultation", href: bookAppointmentUrl },
    secondaryCta: { label: "Meet Dr. Pradyumna", href: "/about" },
  },
];

export const HERO_SLIDE_INTERVAL_MS = 6500;
