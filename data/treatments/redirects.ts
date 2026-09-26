/** Old slugs → `-bangalore` SEO URLs (safe to import from next.config). */
export const legacyTreatmentSlugs: Record<string, string> = {
  "arthroscopic-surgery": "arthroscopic-surgery-bangalore",
  "fractures-trauma-care": "fracture-trauma-care-bangalore",
  "joint-replacement-surgery": "joint-replacement-surgery-bangalore",
  "sports-medicine-solutions": "sports-medicine-bangalore",
  "pain-management-specialist": "joint-pain-management-bangalore",
  "knee-arthroscopy": "knee-arthroscopy-bangalore",
  "acl-reconstruction": "acl-reconstruction-surgery-bangalore",
  "pcl-reconstruction": "pcl-reconstruction-surgery-bangalore",
  "total-knee-replacement": "total-knee-replacement-bangalore",
  "meniscal-surgery": "meniscus-surgery-bangalore",
  "hip-arthroscopy": "hip-arthroscopy-bangalore",
  "hip-cartilage-repair": "hip-cartilage-repair-bangalore",
  "hip-fracture-surgery": "hip-fracture-surgery-bangalore",
  "hip-labral-repair": "hip-labral-repair-bangalore",
  "total-hip-replacement": "total-hip-replacement-bangalore",
  "shoulder-arthroscopy": "shoulder-arthroscopy-bangalore",
  "slap-repair": "slap-repair-bangalore",
  "shoulder-labrum-reconstruction": "labrum-reconstruction-bangalore",
  "shoulder-joint-replacement": "shoulder-replacement-bangalore",
  "arthroscopic-bankart-repair": "bankart-repair-surgery-bangalore",
  "elbow-arthroscopy": "elbow-arthroscopy-bangalore",
  "elbow-ligament-reconstruction": "elbow-ligament-reconstruction-bangalore",
  "golfer-elbow-surgery": "golfers-elbow-treatment-bangalore",
  "tennis-elbow-surgery": "tennis-elbow-treatment-bangalore",
  "elbow-tendon-repair": "elbow-tendon-repair-bangalore",
  "elbow-pain": "tennis-elbow-treatment-bangalore",
};

export const treatmentLegacyRedirects = Object.entries(legacyTreatmentSlugs).map(
  ([source, destination]) => ({
    source: `/treatments/${source}`,
    destination: `/treatments/${destination}`,
  })
);
