"use client";

type Props = {
  value: string;
  onChange: (query: string) => void;
};

export function SearchArticles({ value, onChange }: Props) {
  return (
    <div className="w-full md:max-w-xs">
      <label className="sr-only" htmlFor="article-search">
        Search articles
      </label>
      <input
        id="article-search"
        type="search"
        placeholder="Search sample articles…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="focus-ring h-11 w-full rounded-full border border-border bg-surface px-4 text-sm"
      />
    </div>
  );
}
