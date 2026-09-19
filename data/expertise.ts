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
  concerns?: string[];
  whenToConsult?: string;
};

export const homeExpertise: ExpertiseItem[] = [
  {
    number: "01",
    title: "Sports Medicine",
    description:
      "Care aligned with activity, sport and return-to-movement goals after assessment.",
    href: "/sports-medicine",
    icon: Activity,
  },
  {
    number: "02",
    title: "Orthopaedics",
    description:
      "Bone, joint and musculoskeletal conditions affecting daily function.",
    href: "/orthopaedics",
    icon: Bone,
  },
  {
    number: "03",
    title: "Sports Injuries",
    description:
      "Evaluation of acute and recurring injuries of shoulder, knee, hip and related areas.",
    href: "/sports-medicine",
    icon: Move,
  },
  {
    number: "04",
    title: "Musculoskeletal Care",
    description:
      "Assessment of soft tissue, joint and movement-related concerns.",
    href: "/expertise",
    icon: Stethoscope,
  },
  {
    number: "05",
    title: "Movement & Recovery",
    description:
      "Follow-up and guidance focused on function and safe progression.",
    href: "/patient-resources",
    icon: Dumbbell,
  },
  {
    number: "06",
    title: "Patient Education",
    description:
      "Resources to help you prepare for consultations and understand common topics.",
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
    title: "Joint & Musculoskeletal Concerns",
    description:
      "General orthopaedic evaluation of joints and supporting structures.",
    href: "/orthopaedics",
  },
  {
    title: "Sports-Related Injuries",
    description: "Injuries related to sport and physical activity.",
    href: "/sports-medicine",
  },
  {
    title: "Movement-Related Pain",
    description: "Pain linked to loading, rotation or functional movement.",
    href: "/expertise",
  },
  {
    title: "Injury Recovery",
    description: "Post-injury and post-treatment follow-up focused on function.",
    href: "/patient-resources#recovery",
  },
  {
    title: "Patient Guidance",
    description: "Educational material to support informed conversations.",
    href: "/patient-resources",
  },
] as const;

export const whenToConsultCards = [
  "Persistent joint discomfort",
  "Pain affecting movement",
  "Sports-related injury",
  "Recurring injuries",
  "Difficulty returning to activity",
  "Musculoskeletal concerns",
] as const;
