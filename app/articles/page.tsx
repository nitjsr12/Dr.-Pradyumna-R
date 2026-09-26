import { ArticlesIndexContent } from "@/components/pages/ArticlesIndexContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Blogs & Guides",
  "Doctor-written guides on knee, shoulder, hip, ankle and elbow care in Bangalore.",
  "/articles"
);

export default function ArticlesPage() {
  return (
    <>
      <ArticlesIndexContent />
      <ConsultationCTA />
    </>
  );
}
