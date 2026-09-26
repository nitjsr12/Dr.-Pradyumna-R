import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Dr. Pradyumna R | Orthopedic Surgeon in Bangalore",
  "Fellowship-trained orthopedic & sports medicine surgeon at Manipal Hospitals, Kanakapura Road. 2,000+ shoulder and 2,000+ knee arthroscopies.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <AboutPageContent />
      <ConsultationCTA />
    </>
  );
}
