import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SampleArticle } from "@/data/articles";
import { Badge } from "@/components/ui/Badge";

export function ArticleCard({ article }: { article: SampleArticle }) {
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-md)] border border-border-subtle bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/15 hover:shadow-[var(--shadow-soft)]">
      <Badge className="w-fit bg-mint/80 text-teal">Sample</Badge>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
        {article.category}
      </p>
      <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-teal">
        {article.title}
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
        {article.excerpt}
      </p>
      <Link
        href={`/articles#${article.slug}`}
        className="focus-ring mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-teal"
      >
        Read Article
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
