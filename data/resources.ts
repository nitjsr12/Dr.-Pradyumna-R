export const resourceSections = [
  {
    id: "before-appointment",
    title: "Before Your Appointment",
    body: "A simple guide to preparing for your consultation and making the most of your time with the specialist.",
  },
  {
    id: "what-to-bring",
    title: "What to Bring",
    body: "Bring relevant reports, previous imaging, medication details, referral documents and other information that may help your clinician understand your history.",
  },
  {
    id: "questions",
    title: "Questions Worth Asking",
    body: "From diagnosis and treatment options to recovery timelines and activity restrictions, know what you may want to discuss during your consultation.",
  },
  {
    id: "understanding-diagnosis",
    title: "Understanding Your Diagnosis",
    body: "Explore explanations of commonly used orthopaedic terms so you can better understand your diagnosis and discuss your options with confidence.",
  },
  {
    id: "recovery",
    title: "Recovery & Follow-Up",
    body: "General education on recovery phases—timelines vary by individual and treatment.",
  },
  {
    id: "prevention",
    title: "Sports Injury Prevention",
    body: "Sample educational notes on preparation, load management and injury awareness.",
  },
] as const;

export type ResourceSection = (typeof resourceSections)[number];

export const disclaimer =
  "Educational content on this website is not a substitute for professional medical advice, diagnosis or treatment.";
