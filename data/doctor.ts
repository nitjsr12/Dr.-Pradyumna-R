/**
 * Single source of truth — verified from Manipal Hospitals profile only.
 * https://www.manipalhospitals.com/kanakapuraroad/doctors/dr-pradyumna-r-sports-medicine-specialist/
 */

export const doctor = {
  name: "Dr. Pradyumna R",
  shortName: "DR. PRADYUMNA R",
  descriptor: "Orthopaedics & Sports Medicine",
  tagline: "Precision in movement",
  location: "Bengaluru, India",
  city: "Bengaluru",

  role: "Consultant – Shoulder and Sports Medicine",
  affiliation: {
    name: "Manipal Hospital, Kanakapura Road",
    city: "Bengaluru, Karnataka",
    note:
      "Professional affiliation. This website is Dr. Pradyumna R's personal brand—not Manipal Hospitals' website.",
  },

  overview: `Dr. Pradyumna R is a Consultant, Shoulder and Sports Medicine at Manipal Hospital, Kanakapura Road, Bengaluru, specialising in shoulder and elbow surgery, sports injury management and arthroscopic procedures of the shoulder, knee and hip.`,
  approach: `His approach to orthopaedic care is centred on accurate assessment, personalised treatment and restoring movement, helping patients move forward with confidence.`,

  experienceNote:
    "With over 13+ years of experience (as stated on the official hospital profile).",

  qualifications: [
    "MBBS",
    "MS – Orthopaedics",
    "Fellowship in Arthroscopy & Sports Medicine — ISAKOS",
    "Fellowship in Shoulder & Elbow Surgery — Germany",
    "Fellowship in Complex Shoulder Arthroscopy & Arthroplasty — South Korea",
    "FIFA Diploma in Football Medicine",
  ] as const,

  fellowships: [
    "International Fellowship in Arthroscopy of Knee, Shoulder & Sports Medicine under ISAKOS",
    "Shoulder & Elbow Surgery at TUM, Munich, Germany",
    "Complex Shoulder Arthroscopy & Arthroplasty at SNUBH, Seoul, South Korea",
    "FIFA Diploma in Football Medicine",
  ] as const,

  memberships: ["ISAKOS", "SICOT", "ESSKSA", "IAS", "SESI", "KAS"] as const,

  languages: ["English", "Hindi", "Kannada", "Telugu", "Tamil"] as const,

  fieldOfExpertise: [
    "Rotator cuff repair",
    "SLAP and Bankart lesions",
    "Latarjet procedure",
    "Reverse and total shoulder arthroplasty",
    "ACL/PCL reconstruction",
    "Meniscus root repair",
    "Multi-ligament knee injuries",
    "MPFL reconstruction",
    "Cartilage transplantation",
    "Robotic joint replacements",
  ] as const,

  publicationsSummary: [
    "Peer-reviewed research including studies on proximal humerus fractures and femur fracture outcomes",
    "Research exploring bioinductive collagen patches in rotator cuff repair",
    "Biomechanical research related to degenerative shoulder arthritis and humeroscapular alignment",
  ] as const,

  booking: {
    manipalProfileUrl:
      "https://www.manipalhospitals.com/kanakapuraroad/doctors/dr-pradyumna-r-sports-medicine-specialist/",
    centralPhone: "1800 102 5555",
    hospitalLine: "080-22221111",
    hospitalEmail: "info@manipalhospitals.com",
  },

  address: {
    hospital:
      "No.241/359/358/314/13/3, Konanakunte Village, Ward No.197, Vasanthapura, Uttarahalli Hobli, Kanakapura Road, Bengaluru, Karnataka 560062",
    landmark: "Yelachenahalli Metro Station",
  },

  carePrinciples: [
    {
      number: "01",
      title: "Clear Communication",
      description: "Understand your condition and treatment options.",
    },
    {
      number: "02",
      title: "Personalised Care",
      description: "Planning based on individual needs and clinical assessment.",
    },
    {
      number: "03",
      title: "Evidence-Informed Practice",
      description: "Decisions explained with appropriate medical context.",
    },
    {
      number: "04",
      title: "Focus on Function",
      description: "Movement, activity and quality of life at the centre of care.",
    },
  ] as const,
} as const;

export type Doctor = typeof doctor;
