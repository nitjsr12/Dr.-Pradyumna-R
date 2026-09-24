/**
 * About page — professional overview and extended profile.
 * Wording aligned with Dr. Pradyumna R’s published profile on drpradyumna.com.
 */

export const aboutProfessionalOverview = `Dr. Pradyumna R is an experienced orthopaedic surgeon in Bengaluru, specialising in shoulder surgery, sports medicine, arthroscopy, and joint preservation. He is a Consultant — Arthroscopy, Knee & Shoulder Surgery, Robotic TKR, Joint Replacement Surgeon, and Sports Medicine Specialist — at Manipal Hospital, Kanakapura Road, and also consults at Bangalore Orthopaedic Clinic, BTM Layout. With over 15+ years of experience, he is recognised for shoulder and elbow surgery, sports injury management, and arthroscopic procedures of the knee, shoulder, and hip.`;

export const aboutProfileSections = [
  {
    id: "overview",
    title: "About Dr. Pradyumna R",
    paragraphs: [
      `Dr. Pradyumna R offers dedicated experience in advanced joint care, including robotic total knee replacement, complex keyhole arthroscopic surgeries, shoulder and elbow reconstruction, sports medicine, and customised recovery pathways. After completing an advanced clinical fellowship in Shoulder & Elbow Surgery at the Technical University of Munich (TUM), Germany, he brings minimally invasive European surgical techniques to patients across South India. His consultation style focuses on explaining diagnosis, surgical steps, and post-operative rehabilitation with clarity and transparency.`,
    ],
  },
  {
    id: "repertoire",
    title: "Surgical repertoire & fellowships",
    paragraphs: [
      `His surgical repertoire includes over 2,000 shoulder arthroscopy procedures, 2,000 knee arthroscopies, more than 100 shoulder replacements, and numerous elbow and ankle surgeries. Dr. Pradyumna completed his MBBS and MS in Orthopaedics, followed by prestigious international fellowships in Arthroscopy of Knee, Shoulder and Sports Medicine under ISAKOS, Shoulder and Elbow Surgery at TUM, Munich, Germany, and Complex Shoulder Arthroscopy and Arthroplasty at SNUBH, Seoul, South Korea. He also holds a FIFA Diploma in Football Medicine, reflecting his commitment to excellence in sports injury care.`,
    ],
  },
  {
    id: "expertise",
    title: "Clinical expertise",
    paragraphs: [
      `His expertise includes rotator cuff repair, SLAP and Bankart lesion treatment, Latarjet procedure, reverse and total shoulder arthroplasty, ACL and PCL reconstruction, meniscus root repair, multi-ligament knee injury management, MPFL reconstruction, cartilage transplantation, and robotic joint replacement surgeries. By using advanced minimally invasive techniques, Dr. Pradyumna has helped thousands of patients regain mobility, return to sports, and lead pain-free lives.`,
    ],
  },
  {
    id: "research",
    title: "Research & academics",
    paragraphs: [
      `Apart from his clinical practice, Dr. Pradyumna is actively involved in research and academics. He has published multiple peer-reviewed papers on proximal humerus fractures, femur fracture outcomes, bioinductive collagen patches in rotator cuff repair, and biomechanical aspects of degenerative shoulder arthritis and humeroscapular alignment. His evidence-based approach ensures patients receive current and effective treatment options.`,
    ],
  },
  {
    id: "faculty",
    title: "Academic faculty & memberships",
    paragraphs: [
      `Dr. Pradyumna regularly serves as faculty at national and international orthopaedic conferences and is an active member of renowned organisations such as ISAKOS, SICOT, ESSKA, IAS, SESI, and KAS. His patient-centred approach focuses on accurate diagnosis, personalised treatment, advanced surgical care, and comprehensive rehabilitation to achieve long-term outcomes and improved quality of life.`,
    ],
  },
  {
    id: "patient-care",
    title: "Patient-centred care",
    paragraphs: [
      `Known for ethical practice, compassionate care, and clear communication, Dr. Pradyumna R is fluent in English, Hindi, Kannada, Telugu, and Tamil. His dedication to world-class orthopaedic care, combined with expertise in sports medicine and arthroscopic surgery, has made him one of the most trusted orthopaedic surgeons in Bengaluru.`,
    ],
  },
] as const;

export const aboutProfileHighlights = [
  {
    id: "fellowships",
    title: "International fellowships",
    icon: "globe" as const,
    image: "/images/hero/slide-movement.jpg",
    imagePosition: "object-[68%_center]",
    items: [
      "Fellowship in Arthroscopy of Knee, Shoulder & Sports Medicine — ISAKOS",
      "Fellowship in Shoulder & Elbow Surgery — Technical University of Munich (TUM), Germany",
      "Fellowship in Complex Shoulder Arthroscopy & Arthroplasty — Seoul National University Bundang Hospital (SNUBH), Seoul, South Korea",
      "FIFA Diploma in Football Medicine",
    ],
  },
  {
    id: "affiliations",
    title: "Hospital affiliations",
    icon: "hospital" as const,
    image: "/images/hero/slide-doctor.jpg",
    imagePosition: "object-[22%_center]",
    items: [
      "Manipal Hospital — Kanakapura Road, Bengaluru",
      "Manipal Hospital — Jayanagar (9th Block), Bengaluru",
      "Bangalore Orthopaedic Clinic — BTM Layout, Bengaluru",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "languages" as const,
    image: "/images/hero/slide-sports.jpg",
    imagePosition: "object-center",
    items: ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
  },
] as const;
