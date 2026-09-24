/**
 * Centralized image paths.
 * TODO: Replace placeholders with Dr. Pradyumna's professional photography.
 */

const local = (path: string) => path;

/** Optional remote fallback until local assets are provided */
const remote = {
  doctorPortrait:
    "https://www.drpradyumna.com/images/B2/dr-Pradyumna-r-photo-3107074.webp",
  sportsMedicine:
    "https://www.drpradyumna.com/images/B2/sports-injury-medicine-knee-doctor-pradyumna-3635820.webp",
  knee: "https://www.drpradyumna.com/images/B2/knee-procedures-img1-3103470.webp",
  shoulder:
    "https://www.drpradyumna.com/images/B2/shoulder-procedures-img1-3104557.webp",
  clinic:
    "https://www.drpradyumna.com/images/B2/bangalore-orthopaedics-clinic-drpradyumna-3256890.webp",
} as const;

export const images = {
  doctorHero: local("/images/doctor/hero-placeholder.jpg"),
  doctorPortrait: local("/images/doctor/portrait-placeholder.jpg"),
  sportsMedicine: local("/images/expertise/sports-medicine.webp"),
  orthopaedics: local("/images/expertise/knee.webp"),
  knee: local("/images/expertise/knee.webp"),
  shoulder: local("/images/expertise/shoulder.webp"),
  rehabilitation: local("/images/sections/rehabilitation-placeholder.jpg"),
  patientConsultation: local("/images/sections/consultation-placeholder.jpg"),
  clinic: local("/images/expertise/clinic.webp"),
  clinicInterior: local("/images/sections/clinic-interior-placeholder.jpg"),
  movement: local("/images/sections/movement-placeholder.jpg"),
  athlete: local("/images/sections/athlete-placeholder.jpg"),
  specialtiesBanner: local("/images/sections/specialties-placeholder.jpg"),
  heroClinicalBanner: local("/images/hero/slide-clinical-banner.jpg"),
  /** Fallback URLs when local placeholders are not yet uploaded */
  remote,
} as const;
