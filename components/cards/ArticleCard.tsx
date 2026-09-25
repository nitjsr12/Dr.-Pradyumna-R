import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SampleArticle } from "@/data/articles";
import { cn } from "@/lib/utils";

export function ArticleCard({ article }: { article: SampleArticle }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="focus-ring group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-teal/15 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="relative aspect-[16/10] bg-mint/30">
        <Image
          src={article.coverImage}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 400px"
          className={cn("object-cover", article.coverPosition ?? "object-center")}
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-teal">
          {article.chipLabel}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
          {article.conditionName}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-teal">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-teal">
          {article.readingTime} read
          <span className="text-border font-normal" aria-hidden>
            ·
          </span>
          Read Guide
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
