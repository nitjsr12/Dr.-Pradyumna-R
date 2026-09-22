/**
 * Professional journey — verified from hospital profile only.
 * Dates omitted where not published on the official source.
 */

export const professionalTimeline = [
  {
    id: "foundation",
    title: "Medical & Orthopaedic Training",
    detail:
      "MBBS & MS – Orthopaedics. A strong foundation in medical and orthopaedic training, supporting focused care across musculoskeletal conditions.",
    icon: "graduation" as const,
  },
  {
    id: "isakos",
    title: "ISAKOS Sports Medicine Fellowship",
    detail:
      "International Fellowship in Arthroscopy of Knee, Shoulder & Sports Medicine. Specialised fellowship training focused on knee and shoulder arthroscopy, sports injuries and sports medicine under ISAKOS.",
    icon: "activity" as const,
  },
  {
    id: "germany",
    title: "Advanced Shoulder & Elbow Training",
    detail:
      "TUM, Munich, Germany. Advanced training focused on shoulder and elbow surgery, strengthening expertise in complex upper-limb conditions.",
    icon: "globe" as const,
  },
  {
    id: "korea",
    title: "Complex Shoulder Arthroscopy & Arthroplasty",
    detail:
      "SNUBH, Seoul, South Korea. Specialised exposure to complex shoulder arthroscopy and arthroplasty, with an emphasis on advanced shoulder care.",
    icon: "globe" as const,
  },
  {
    id: "fifa",
    title: "FIFA Diploma in Football Medicine",
    detail:
      "Football Medicine. A specialised qualification reflecting focused training in the assessment and management of football-related sports injuries.",
    icon: "trophy" as const,
  },
  {
    id: "practice",
    title: "Consultant, Bengaluru",
    detail:
      "Shoulder & Sports Medicine. Consultant at Manipal Hospital, Kanakapura Road, Bengaluru, with a specialist focus on shoulder, knee and sports medicine.",
    icon: "hospital" as const,
  },
] as const;

export const credentialHighlights = [
  {
    id: "experience",
    label: "Clinical Experience",
    value: "13+ years",
    note: "As stated on official hospital profile",
    icon: "clock" as const,
  },
  {
    id: "degrees",
    label: "Qualifications & Fellowships",
    value: "6+ credentials",
    note: "Including fellowships & diploma",
    icon: "graduation" as const,
  },
  {
    id: "global",
    label: "International Training",
    value: "3 regions",
    note: "ISAKOS · Germany · South Korea",
    icon: "globe" as const,
  },
  {
    id: "bodies",
    label: "Professional Orthopaedic Bodies",
    value: "6+ memberships",
    note: "ISAKOS, SICOT, ESSKSA & more",
    icon: "badge" as const,
  },
] as const;
