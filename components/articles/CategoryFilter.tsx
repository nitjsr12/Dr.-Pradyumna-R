"use client";

import { articleCategories } from "@/data/articles";

type Props = {
  value: (typeof articleCategories)[number];
  onChange: (category: (typeof articleCategories)[number]) => void;
};

export function CategoryFilter({ value, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {articleCategories.map((c) => (
        <button
          key={c}
          type="button"
          aria-pressed={value === c}
          onClick={() => onChange(c)}
          className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            value === c
              ? "bg-navy text-white"
              : "border border-border text-muted hover:border-navy/30"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
