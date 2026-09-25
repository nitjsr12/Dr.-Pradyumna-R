/**
 * Homepage / About credentials carousel (5 slides).
 */

export type CredentialSlide = {
  id: string;
  title: string;
  intro: string;
  caption: string;
  image: string;
  imagePosition: string;
  items: readonly string[];
};

export const credentialsSlides: CredentialSlide[] = [
  {
    id: "qualifications",
    title: "Qualifications",
    intro: "A strong foundation, built one milestone at a time.",
    caption:
      "The groundwork behind one of Bangalore's most experienced shoulder, knee and sports medicine surgeons.",
    image: "/images/hero/slide-doctor.jpg",
    imagePosition: "object-[22%_center]",
    items: [
      "MBBS",
      "MS – Orthopaedics (RGUHS)",
      "13+ years of clinical and surgical experience",
      "Consultant – Shoulder & Sports Medicine, Manipal Hospitals, Kanakapura Road",
      "Outlook Health Awards 2024 & 2025",
    ],
  },
  {
    id: "fellowships",
    title: "Fellowships & Advanced Training",
    intro: "Techniques learned where modern orthopaedics is being shaped.",
    caption:
      "European precision and Korean innovation in shoulder surgery, brought home to patients in South Bangalore.",
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[74%_center]",
    items: [
      "Fellowship in Arthroscopy & Sports Medicine — ISAKOS",
      "Fellowship in Arthroscopy & Sports Medicine — Sanjay Gandhi Institute of Trauma & Orthopaedics, Bangalore",
      "Fellowship in Shoulder & Elbow Surgery — Klinikum rechts der Isar, Technical University of Munich (TUM), Germany",
      "Fellowship in Complex Shoulder Arthroscopy & Arthroplasty — Seoul National University Bundang Hospital (SNUBH), South Korea",
      "FIFA Diploma in Football Medicine",
    ],
  },
  {
    id: "memberships",
    title: "Professional Memberships",
    intro: "Connected to the global community that sets the standards.",
    caption:
      "Active membership in leading orthopaedic societies keeps his practice aligned with the latest global evidence.",
    image: "/images/hero/slide-sports.jpg",
    imagePosition: "object-center",
    items: [
      "ISAKOS — International Society of Arthroscopy, Knee Surgery & Orthopaedic Sports Medicine",
      "SICOT — International Society of Orthopaedic Surgery & Traumatology",
      "ESSKA — European Society of Sports Traumatology, Knee Surgery & Arthroscopy",
      "AO Trauma, Switzerland",
      "IAS — Indian Arthroscopy Society",
      "SESI — Shoulder & Elbow Society of India",
      "KAS",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    intro: "Explain your pain in the language you think in.",
    caption:
      "Clear conversations lead to better decisions. Patients across Bangalore can discuss their diagnosis and treatment in their own language.",
    image: "/images/hero/slide-precision.jpg",
    imagePosition: "object-[30%_center]",
    items: ["English", "ಕನ್ನಡ Kannada", "हिन्दी Hindi", "తెలుగు Telugu", "தமிழ் Tamil"],
  },
  {
    id: "research",
    title: "Research & Publications",
    intro: "Evidence first. Always.",
    caption:
      "Research that shapes how he treats: every recommendation is grounded in current evidence, not habit.",
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[18%_center]",
    items: [
      "Peer-reviewed research on bioinductive collagen patches in rotator cuff repair",
      "Published studies on proximal humerus fractures and femur fracture outcomes",
      "Faculty at national and international orthopaedic conferences",
      "Training the next generation of orthopaedic surgeons",
      "Featured guest on On The RawX podcast, discussing joint health, keyhole surgery and workplace ergonomics",
    ],
  },
];
