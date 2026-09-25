import { ArticleCard } from "@/components/cards/ArticleCard";
import type { SampleArticle } from "@/data/articles";

type Props = {
  articles: SampleArticle[];
};

export function ArticleGrid({ articles }: Props) {
  if (articles.length === 0) {
    return (
      <p className="mt-8 text-center text-muted">
        No sample articles match your filters.
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((a) => (
        <ArticleCard key={a.slug} article={a} />
      ))}
    </div>
  );
}
