/** Maps procedure labels (mega menu / listing) to treatment page slugs. */
export const procedureLabelToSlug: Record<string, string> = {
  "Arthroscopic Surgery": "arthroscopic-surgery-bangalore",
  "Fractures & Trauma Care": "fracture-trauma-care-bangalore",
  "Joint Replacement Surgery": "joint-replacement-surgery-bangalore",
  "Sports Medicine Solutions": "sports-medicine-bangalore",
  "Orthopaedic Pain Management": "joint-pain-management-bangalore",
  "Pain Management Specialist": "joint-pain-management-bangalore",
  "Knee Arthroscopy": "knee-arthroscopy-bangalore",
  "ACL Reconstruction": "acl-reconstruction-surgery-bangalore",
  "PCL Reconstruction": "pcl-reconstruction-surgery-bangalore",
  "Total Knee Replacement": "total-knee-replacement-bangalore",
  "Total Knee Replacement Surgery": "total-knee-replacement-bangalore",
  "Meniscal Surgery": "meniscus-surgery-bangalore",
  "Hip Arthroscopy": "hip-arthroscopy-bangalore",
  "Hip Cartilage Repair": "hip-cartilage-repair-bangalore",
  "Hip Fracture Surgery": "hip-fracture-surgery-bangalore",
  "Hip Labral Repair": "hip-labral-repair-bangalore",
  "Total Hip Replacement": "total-hip-replacement-bangalore",
  "Shoulder Arthroscopy": "shoulder-arthroscopy-bangalore",
  "SLAP Repair": "slap-repair-bangalore",
  "Labrum Reconstruction": "labrum-reconstruction-bangalore",
  "Shoulder Joint Replacement": "shoulder-replacement-bangalore",
  "Arthroscopic Bankart Repair in Bangalore": "bankart-repair-surgery-bangalore",
  "Arthroscopic Bankart Repair": "bankart-repair-surgery-bangalore",
  "Elbow Arthroscopy": "elbow-arthroscopy-bangalore",
  "Ligament Reconstruction": "elbow-ligament-reconstruction-bangalore",
  "Golfer Elbow Surgery": "golfers-elbow-treatment-bangalore",
  "Tennis Elbow Surgery": "tennis-elbow-treatment-bangalore",
  "Elbow Tendon Repair": "elbow-tendon-repair-bangalore",
};

export function treatmentSlugForLabel(label: string): string | undefined {
  return procedureLabelToSlug[label];
}

export function treatmentHrefForLabel(label: string, fallbackAnchor: string): string {
  const slug = treatmentSlugForLabel(label);
  if (slug) return `/treatments/${slug}`;
  return fallbackAnchor;
}
