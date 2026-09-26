import { AreaOfSpecialtiesContent } from "@/components/pages/AreaOfSpecialtiesContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Area of Specialties | Dr. Pradyumna R, Orthopaedic Surgeon Bangalore",
  "Knee, hip, shoulder and elbow procedures — arthroscopy, sports medicine, joint replacement and robotic TKR in Bangalore.",
  "/area-of-specialties"
);

export default function AreaOfSpecialtiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Area of Specialties", path: "/area-of-specialties" },
        ])}
      />
      <AreaOfSpecialtiesContent />
      <ConsultationCTA />
    </>
  );
}
