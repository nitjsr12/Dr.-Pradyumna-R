/**
 * Professional journey — verified from hospital profile only.
 * Dates omitted where not published on the official source.
 */

export const professionalTimeline = [
  {
    id: "foundation",
    title: "Medical & orthopaedic training",
    detail: "MBBS and MS – Orthopaedics.",
    icon: "graduation" as const,
  },
  {
    id: "isakos",
    title: "ISAKOS sports medicine fellowship",
    detail:
      "International Fellowship in Arthroscopy of Knee, Shoulder and Sports Medicine under ISAKOS.",
    icon: "activity" as const,
  },
  {
    id: "germany",
    title: "Shoulder & elbow surgery — Germany",
    detail: "Advanced training at TUM, Munich, Germany.",
    icon: "globe" as const,
  },
  {
    id: "korea",
    title: "Complex shoulder — South Korea",
    detail:
      "Complex Shoulder Arthroscopy and Arthroplasty at SNUBH, Seoul.",
    icon: "globe" as const,
  },
  {
    id: "fifa",
    title: "FIFA Diploma in Football Medicine",
    detail: "Football medicine credential listed on official profile.",
    icon: "trophy" as const,
  },
  {
    id: "practice",
    title: "Consultant — Bengaluru",
    detail:
      "Consultant – Shoulder and Sports Medicine, Manipal Hospital, Kanakapura Road.",
    icon: "hospital" as const,
  },
] as const;

export const credentialHighlights = [
  {
    id: "experience",
    label: "Experience",
    value: "13+ years",
    note: "As stated on official hospital profile",
    icon: "clock" as const,
  },
  {
    id: "degrees",
    label: "Qualifications",
    value: "6+ credentials",
    note: "Including fellowships & diploma",
    icon: "graduation" as const,
  },
  {
    id: "global",
    label: "International training",
    value: "3 regions",
    note: "ISAKOS · Germany · South Korea",
    icon: "globe" as const,
  },
  {
    id: "bodies",
    label: "Professional bodies",
    value: "6 memberships",
    note: "ISAKOS, SICOT, ESSKSA & more",
    icon: "badge" as const,
  },
] as const;
