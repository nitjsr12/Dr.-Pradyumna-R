import { PageHero } from "@/components/hero/PageHero";
import { AboutPageContent } from "@/components/pages/AboutPageContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { doctor } from "@/data/doctor";

export const metadata = pageMetadata(
  "About Dr. Pradyumna R | Orthopaedics & Sports Medicine",
  doctor.overview,
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
      <PageHero
        label="About"
        title={
          <>
            Meet <span className="text-accent">Dr. Pradyumna R</span>
          </>
        }
        description={doctor.descriptor + " · " + doctor.city}
      />
      <AboutPageContent />
      <ConsultationCTA />
    </>
  );
}
