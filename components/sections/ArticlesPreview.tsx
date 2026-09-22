import Link from "next/link";
import { sampleArticles } from "@/data/articles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";

export function ArticlesPreview() {
  return (
    <section className="section-y mesh-light bg-surface">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            label="Journal & patient resources"
            title={
              <>
                Clarity for every{" "}
                <span className="text-accent">step of your care.</span>
              </>
            }
            description="Medical information can often feel complicated. This space brings together practical insights on orthopaedics, sports medicine, injuries, joint health and recovery — explained in a way that is useful, accessible and easy to understand."
          />
          <Link
            href="/articles"
            className="link-underline shrink-0 text-sm font-semibold text-teal"
          >
            View All Articles →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {sampleArticles.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
