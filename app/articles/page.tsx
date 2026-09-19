import { PageHero } from "@/components/hero/PageHero";
import { ArticleListing } from "@/components/articles/ArticleListing";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Articles",
  "Sample educational articles — not published medical advice.",
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
        description="Sample editorial layout. Articles marked as sample content."
      />
      <ArticleListing />
      <ConsultationCTA />
    </>
  );
}
