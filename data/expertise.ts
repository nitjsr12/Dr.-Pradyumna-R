import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bone,
  BookOpen,
  Dumbbell,
  Move,
  Stethoscope,
} from "lucide-react";

export type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  kicker?: string;
  concerns?: string[];
  whenToConsult?: string;
  image?: string;
  imagePosition?: string;
  imageAlt?: string;
};

export const homeExpertise: ExpertiseItem[] = [
  {
    number: "01",
    title: "Sports Medicine",
    kicker: "Move with confidence.",
    description:
      "Specialised care for sports injuries and activity-related conditions, with a focus on assessment, recovery and return to movement.",
    href: "/sports-medicine",
    icon: Activity,
  },
  {
    number: "02",
    title: "Orthopaedics",
    kicker: "Care for better movement.",
    description:
      "Comprehensive orthopaedic care for bone, joint and musculoskeletal conditions affecting everyday life.",
    href: "/orthopaedics",
    icon: Bone,
  },
  {
    number: "03",
    title: "Sports Injuries",
    kicker: "From injury to recovery.",
    description:
      "Assessment and treatment of acute and recurring injuries involving the shoulder, knee, hip and related areas.",
    href: "/sports-medicine",
    icon: Move,
  },
  {
    number: "04",
    title: "Musculoskeletal Care",
    kicker: "Understand the problem. Treat the cause.",
    description:
      "Focused assessment of soft-tissue, joint and movement-related conditions to support better function.",
    href: "/expertise",
    icon: Stethoscope,
  },
  {
    number: "05",
    title: "Movement & Recovery",
    kicker: "Recover well. Move forward.",
    description:
      "Guidance and follow-up focused on restoring function and supporting a safe, progressive return to activity.",
    href: "/patient-resources",
    icon: Dumbbell,
  },
  {
    number: "06",
    title: "Patient Education",
    kicker: "Know more. Move better.",
    description:
      "Clear, practical resources to help you prepare for consultations and better understand common orthopaedic and sports medicine conditions.",
    href: "/patient-resources",
    icon: BookOpen,
  },
];

const expertisePageDetails: Record<
  string,
  {
    image: string;
    imagePosition: string;
    imageAlt: string;
    concerns: string[];
    whenToConsult: string;
  }
> = {
  "Sports Medicine": {
    image: "/images/expertise/sports-medicine.webp",
    imagePosition: "object-center",
    imageAlt: "Sports medicine and knee injury assessment",
    concerns: [
      "Activity-related pain or instability",
      "Return-to-sport planning after injury",
      "Overuse or training-related symptoms",
    ],
    whenToConsult:
      "When pain or injury is limiting sport, exercise or daily movement and you need a specialist assessment.",
  },
  Orthopaedics: {
    image: "/images/expertise/knee.webp",
    imagePosition: "object-center",
    imageAlt: "Orthopaedic and knee care",
    concerns: [
      "Joint, bone and musculoskeletal symptoms",
      "Persistent pain affecting everyday function",
      "Need for surgical or non-surgical treatment guidance",
    ],
    whenToConsult:
      "When orthopaedic symptoms continue despite rest or basic care, or when function and quality of life are affected.",
  },
  "Sports Injuries": {
    image: "/images/expertise/shoulder.webp",
    imagePosition: "object-[center_20%]",
    imageAlt: "Shoulder and sports injury care",
    concerns: [
      "Acute injuries from sport or exercise",
      "Shoulder, knee, hip or ankle symptoms after impact",
      "Recurrent sprains, strains or instability",
    ],
    whenToConsult:
      "After an injury that changes how you move, or when symptoms do not settle with initial rest and care.",
  },
  "Musculoskeletal Care": {
    image: "/images/expertise/doctor.webp",
    imagePosition: "object-[center_12%]",
    imageAlt: "Musculoskeletal clinical assessment",
    concerns: [
      "Soft-tissue and joint-related discomfort",
      "Movement limitations during work or daily tasks",
      "Symptoms linked to loading, posture or repetition",
    ],
    whenToConsult:
      "When musculoskeletal symptoms persist and you need a clear diagnosis and personalised treatment plan.",
  },
  "Movement & Recovery": {
    image: "/images/hero/slide-sports.jpg",
    imagePosition: "object-center",
    imageAlt: "Recovery and return to activity",
    concerns: [
      "Rehabilitation after injury or surgery",
      "Gradual return to training or sport",
      "Ongoing stiffness, weakness or fear of re-injury",
    ],
    whenToConsult:
      "When you are recovering from treatment and need structured guidance to restore strength and confidence in movement.",
  },
  "Patient Education": {
    image: "/images/expertise/clinic.webp",
    imagePosition: "object-center",
    imageAlt: "Bangalore orthopaedic clinic consultation",
    concerns: [
      "Understanding your condition before treatment",
      "Preparing questions for a specialist visit",
      "Learning about recovery timelines and self-care",
    ],
    whenToConsult:
      "Whenever you want clearer information about orthopaedic or sports medicine conditions alongside clinical care.",
  },
};

export const expertisePages = homeExpertise.map((item) => {
  const detail = expertisePageDetails[item.title];
  return {
    ...item,
    image: detail.image,
    imagePosition: detail.imagePosition,
    imageAlt: detail.imageAlt,
    concerns: detail.concerns,
    whenToConsult: detail.whenToConsult,
  };
});

export const orthopaedicCards = [
  {
    number: "01",
    title: "Joint & Musculoskeletal Care",
    description:
      "Assessment of joint, bone, muscle and soft-tissue concerns affecting comfort, mobility and everyday function.",
    href: "/orthopaedics",
  },
  {
    number: "02",
    title: "Sports & Activity-Related Injuries",
    description:
      "Focused evaluation of injuries related to sport, exercise and physical activity, including conditions affecting the shoulder, knee and ankle.",
    href: "/sports-medicine",
  },
  {
    number: "03",
    title: "Movement-Related Pain",
    description:
      "Assessment of pain associated with loading, rotation, repetitive movement or changes in everyday function.",
    href: "/expertise",
  },
  {
    number: "04",
    title: "Injury Recovery",
    description:
      "Follow-up care focused on restoring movement, rebuilding function and progressing safely after injury or treatment.",
    href: "/patient-resources#recovery",
  },
  {
    number: "05",
    title: "Patient Guidance",
    description:
      "Clear, practical information to help you understand common orthopaedic and sports medicine conditions and prepare for your consultation.",
    href: "/patient-resources",
  },
] as const;

export const whenToConsultCards = [
  {
    title: "Pain that doesn’t settle",
    description:
      "Persistent joint or musculoskeletal discomfort that continues to affect daily life.",
  },
  {
    title: "Movement that feels limited",
    description:
      "Difficulty walking, lifting, bending, rotating or performing familiar movements.",
  },
  {
    title: "An injury that changes how you move",
    description: "Especially after sport, exercise, a fall or sudden impact.",
  },
  {
    title: "A problem that keeps coming back",
    description: "Recurring pain or injuries despite rest or previous treatment.",
  },
  {
    title: "Trouble returning to activity",
    description:
      "Difficulty getting back to exercise, sport or normal daily activities.",
  },
  {
    title: "Ongoing shoulder, knee or ankle concerns",
    description:
      "Symptoms affecting areas commonly involved in movement and physical activity.",
  },
] as const;
