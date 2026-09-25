import { PageHero } from "@/components/hero/PageHero";
import { ArticleListing } from "@/components/articles/ArticleListing";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Articles",
  "Doctor-written guides on knee, shoulder, hip, ankle and elbow care in Bangalore.",
  "/articles"
);

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        label="Articles"
        title={
          <>
            Move better.{" "}
            <span className="text-accent">Know better.</span>
          </>
        }
        description="In-depth guides on common orthopaedic and sports medicine conditions — for education only, not medical advice."
      />
      <ArticleListing />
      <ConsultationCTA />
    </>
  );
}
