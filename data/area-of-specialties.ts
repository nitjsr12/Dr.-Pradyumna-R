/**
 * Area of Specialties — menu and page content aligned with drpradyumna.com structure.
 */

import { treatmentHrefForLabel } from "@/data/treatments/slugs";

export function procedureAnchor(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type SpecialtiesMenuColumn = {
  id: string;
  title: string;
  items: readonly string[];
  moreHref: string;
};

export const specialtiesMegaMenuColumns: SpecialtiesMenuColumn[] = [
  {
    id: "general",
    title: "Treatment & procedures",
    items: [
      "Arthroscopic Surgery",
      "Fractures & Trauma Care",
      "Joint Replacement Surgery",
      "Sports Medicine Solutions",
      "Orthopaedic Pain Management",
    ],
    moreHref: "/area-of-specialties#general-treatments",
  },
  {
    id: "knee",
    title: "Knee procedures",
    items: [
      "Knee Arthroscopy",
      "ACL Reconstruction",
      "PCL Reconstruction",
      "Total Knee Replacement",
      "Meniscal Surgery",
    ],
    moreHref: "/area-of-specialties#knee-procedures",
  },
  {
    id: "hip",
    title: "Hip procedures",
    items: [
      "Hip Arthroscopy",
      "Hip Cartilage Repair",
      "Hip Fracture Surgery",
      "Hip Labral Repair",
      "Total Hip Replacement",
    ],
    moreHref: "/area-of-specialties#hip-procedures",
  },
  {
    id: "shoulder",
    title: "Shoulder procedures",
    items: [
      "Shoulder Arthroscopy",
      "SLAP Repair",
      "Labrum Reconstruction",
      "Shoulder Joint Replacement",
      "Arthroscopic Bankart Repair in Bangalore",
    ],
    moreHref: "/area-of-specialties#shoulder-procedures",
  },
  {
    id: "elbow",
    title: "Elbow procedures",
    items: [
      "Elbow Arthroscopy",
      "Ligament Reconstruction",
      "Golfer Elbow Surgery",
      "Tennis Elbow Surgery",
      "Elbow Tendon Repair",
    ],
    moreHref: "/area-of-specialties#elbow-procedures",
  },
];

export type SpecialtiesProcedureGroup = {
  id: string;
  title: string;
  intro?: string;
  procedures: readonly string[];
};

export type SpecialtiesGroupVisual = {
  image: string;
  imagePosition?: string;
  shortLabel: string;
};

export const specialtiesGroupVisuals: Record<string, SpecialtiesGroupVisual> = {
  "general-treatments": {
    image: "/images/expertise/clinic.webp",
    imagePosition: "object-center",
    shortLabel: "General",
  },
  "knee-procedures": {
    image: "/images/expertise/knee.webp",
    imagePosition: "object-center",
    shortLabel: "Knee",
  },
  "hip-procedures": {
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[40%_center]",
    shortLabel: "Hip",
  },
  "shoulder-procedures": {
    image: "/images/expertise/shoulder.webp",
    imagePosition: "object-center",
    shortLabel: "Shoulder",
  },
  "elbow-procedures": {
    image: "/images/expertise/sports-medicine.webp",
    imagePosition: "object-center",
    shortLabel: "Elbow",
  },
  "other-procedures": {
    image: "/images/hero/slide-precision.jpg",
    imagePosition: "object-[30%_center]",
    shortLabel: "Other",
  },
};

export const specialtiesProcedureGroups: SpecialtiesProcedureGroup[] = [
  {
    id: "general-treatments",
    title: "Treatment & procedures",
    intro:
      "Core orthopaedic services — from keyhole arthroscopy to joint replacement and sports injury care.",
    procedures: specialtiesMegaMenuColumns[0].items,
  },
  {
    id: "knee-procedures",
    title: "Knee procedures",
    intro:
      "Comprehensive knee care in Bangalore — arthroscopic procedures, ligament reconstruction, and robotic-assisted replacement when indicated.",
    procedures: [
      "Knee Arthroscopy",
      "Total Knee Replacement Surgery",
      "Minimally Invasive Knee Joint Replacement",
      "Partial Knee Replacement",
      "ACL Reconstruction",
      "PCL Reconstruction Surgery",
      "MCL Reconstruction",
      "Intra-articular Injections",
      "Meniscal Surgery",
      "Cartilage Repair",
      "Patellar Tendon Repair",
      "Removal of Loose Bodies",
      "Lateral Collateral Ligament Surgery",
      "Knee Osteotomy",
      "Arthroscopy (Scopy)",
      "Robotic-Assisted Surgeries",
    ],
  },
  {
    id: "hip-procedures",
    title: "Hip procedures",
    procedures: [
      "Hip Arthroscopy",
      "Hip Fracture Surgery",
      "Minimally Invasive Total Hip Replacement",
      "Hip Labral Repair",
      "Proximal Hamstring Repair",
      "Gluteal Tendon Repair",
      "Hip Cartilage Repair",
      "Hip Hemiarthroplasty",
      "Revision Hip Surgery",
      "Complex Hip Reconstruction Surgery",
      "Ultrasound-Guided Hip Injections",
    ],
  },
  {
    id: "shoulder-procedures",
    title: "Shoulder procedures",
    procedures: [
      "Shoulder Arthroscopy",
      "SLAP Repair",
      "Arthroscopic Bankart Repair",
      "Shoulder Joint Replacement",
      "Partial Shoulder Replacement",
      "Arthroscopic Bankart Repair in Bangalore",
      "Revision Shoulder Replacement",
      "Shoulder Labrum Reconstruction",
      "SLAP (Superior Labrum Anterior and Posterior) Injury Treatment",
      "Latarjet Procedure — Shoulder Instability",
    ],
  },
  {
    id: "elbow-procedures",
    title: "Elbow procedures",
    procedures: [
      "Elbow Arthroscopy",
      "Elbow Tendon Repair",
      "Elbow Ligament Reconstruction",
      "Golfer Elbow Surgery",
      "Tennis Elbow Surgery",
      "Viscosupplementation for Elbow Arthritis",
      "Elbow Post-Traumatic Stiffness Treatment",
    ],
  },
  {
    id: "other-procedures",
    title: "Other procedures",
    procedures: [
      "Diabetic Foot Deformity Correction",
      "Ankle ATFL (Anterior Talofibular Ligament) Reconstruction",
      "Wrist TFCC (Triangular Fibrocartilage Complex) Reconstruction",
    ],
  },
];

export const specialtiesClinicHighlights = [
  "Fellowship-trained in Arthroscopy & Sports Medicine",
  "Visiting consultant at Manipal Hospitals, Bangalore (Jayanagar) and Kanakapura Road",
  "Advanced robotic-assisted surgeries (Robotic TKR)",
  "Minimally invasive procedures for faster recovery",
  "Multilingual patient care — Kannada, Hindi, English, Telugu & Tamil",
  "Open Monday to Saturday | 10 AM–3 PM & 6 PM–9:30 PM",
] as const;

export const specialtiesTrustStats = [
  {
    id: "experience",
    label: "Clinical experience",
    headline: "13+ years experience",
    detail: "Fellowship trained in Germany & South Korea · Shoulder & sports medicine focus",
  },
  {
    id: "volume",
    label: "Surgical track record",
    headline: "2,000+ shoulder & knee arthroscopies",
    detail: "Joint replacement · trauma · robotic knee surgery when indicated",
  },
  {
    id: "awards",
    label: "Recognised for excellence",
    headline: "Outlook Health Awards 2024 & 2025",
    detail: "Evidence-based, patient-first orthopaedic care in Bangalore",
  },
] as const;

export const specialtiesFaqs = [
  {
    id: "specialties-what-treats",
    question: "What does an orthopaedic surgeon in Bangalore treat?",
    answer:
      "An orthopaedic surgeon treats conditions affecting bones, joints, ligaments, tendons, and muscles — including knee pain, sports injuries, joint replacement needs, fractures, and arthritis.",
  },
  {
    id: "specialties-robotic",
    question: "Does Dr. Pradyumna perform robotic orthopaedic surgery in Bangalore?",
    answer:
      "Yes. Dr. Pradyumna is trained in robotic-assisted total knee replacement (Robotic TKR), offering greater precision and often faster recovery compared to conventional surgery when you are a suitable candidate.",
  },
  {
    id: "specialties-minimally-invasive",
    question: "What is minimally invasive orthopaedic surgery?",
    answer:
      "Minimally invasive surgery uses small incisions and often a camera (arthroscope) to diagnose and treat joint conditions with less tissue damage, reduced pain, and faster recovery than open surgery where appropriate.",
  },
  {
    id: "specialties-athletes",
    question: "Can athletes be treated at the clinic?",
    answer:
      "Yes. Dr. Pradyumna specialises in sports medicine, treating recreational and competitive athletes for ACL tears, meniscal injury, rotator cuff problems, shoulder instability, and related conditions.",
  },
  {
    id: "specialties-areas-served",
    question: "Which areas of Bangalore do patients visit from?",
    answer:
      "Patients visit from across Bengaluru — including Jayanagar, BTM Layout, Kanakapura Road, Indiranagar, Whitefield, JP Nagar, Koramangala, HSR Layout, Electronic City, and neighbouring areas.",
  },
  {
    id: "specialties-book",
    question: "How do I book an appointment?",
    answer:
      "Call the clinic, use WhatsApp from this website, or visit Bangalore Orthopaedic Clinic, BTM Layout. Appointments are available Monday–Saturday.",
  },
] as const;

export function specialtiesMenuItemHref(label: string, column: SpecialtiesMenuColumn) {
  const anchor = `${column.moreHref.split("#")[0]}#${procedureAnchor(label)}`;
  return treatmentHrefForLabel(label, anchor);
}
