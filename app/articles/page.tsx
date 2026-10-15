import { ArticlesIndexContent } from "@/components/pages/ArticlesIndexContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Blogs & Guides",
  "Doctor-written guides on knee, shoulder, elbow, foot & ankle, non-surgical care, joint replacement and hip care in Bangalore.",
  "/articles",
  [
    "orthopaedic guides bangalore",
    "sports injury",
    "joint replacement bangalore",
    "foot and ankle treatment",
  ]
);

export default function ArticlesPage() {
  return (
    <>
      <ArticlesIndexContent />
      <ConsultationCTA />
    </>
  );
}
