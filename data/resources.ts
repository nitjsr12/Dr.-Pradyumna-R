export const resourceSections = [
  {
    id: "before-appointment",
    title: "Before Your Appointment",
    body: "Review what to expect and how to prepare for a productive consultation.",
  },
  {
    id: "what-to-bring",
    title: "What to Bring",
    body: "Relevant medical records, prior imaging, medication lists, insurance details and referral documents where applicable (per hospital guidance).",
  },
  {
    id: "questions",
    title: "Questions to Ask",
    body: "Consider asking about diagnosis, options, recovery expectations, follow-up and activity modification.",
  },
  {
    id: "understanding-diagnosis",
    title: "Understanding Your Diagnosis",
    body: "Plain-language context on common orthopaedic terms to support conversations with your clinician.",
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
