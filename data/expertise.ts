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

export const expertisePages = homeExpertise.map((item) => ({
  ...item,
  concerns: [
    "Symptoms affecting sport or daily activity",
    "Pain or instability after injury",
    "Need for specialist assessment",
  ],
  whenToConsult:
    "When symptoms persist, affect movement, or you need clarity on treatment options—after appropriate primary care where needed.",
}));

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
