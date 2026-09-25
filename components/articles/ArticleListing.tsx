"use client";

import { useMemo, useState } from "react";
import { articleCategories, sampleArticles } from "@/data/articles";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ArticleGrid } from "@/components/articles/ArticleGrid";
import { CategoryFilter } from "@/components/articles/CategoryFilter";
import { SearchArticles } from "@/components/articles/SearchArticles";
import { Container } from "@/components/ui/Container";

const PAGE_SIZE = 6;

export function ArticleListing() {
  const [category, setCategory] =
    useState<(typeof articleCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const featured = sampleArticles.find((a) => a.featured);

  const filtered = useMemo(() => {
    return sampleArticles.filter((a) => {
      const matchCat = category === "All" || a.category === category;
      const matchQ =
        !query ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const onCategoryChange = (c: (typeof articleCategories)[number]) => {
    setCategory(c);
    setPage(1);
  };

  const onQueryChange = (q: string) => {
    setQuery(q);
    setPage(1);
  };

  return (
    <Container className="section-y">
      {featured && (
        <div className="mb-16 rounded-[var(--radius-lg)] border border-border bg-mint/30 p-8 md:p-12">
          <p className="label-caps">Featured guide</p>
          <ArticleCard article={featured} />
        </div>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CategoryFilter value={category} onChange={onCategoryChange} />
        <SearchArticles value={query} onChange={onQueryChange} />
      </div>

      <ArticleGrid articles={paged} />

      {filtered.length > PAGE_SIZE && (
        <nav
          className="mt-12 flex items-center justify-center gap-4"
          aria-label="Article pagination"
        >
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="focus-ring rounded-full border border-border px-5 py-2 text-sm font-medium disabled:opacity-40"
          >
            Previous
          </button>
          <span className="text-sm text-muted">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="focus-ring rounded-full border border-border px-5 py-2 text-sm font-medium disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}

      <p className="mt-8 text-center text-xs text-muted">
        Sample articles for layout preview—not published medical content.
      </p>
    </Container>
  );
}
