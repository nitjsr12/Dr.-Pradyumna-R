import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ExpertiseItem } from "@/data/expertise";

export function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className="group focus-ring relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-8 shadow-[var(--shadow-card)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-teal/25 hover:shadow-[var(--shadow-soft)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/0 to-mint/0 transition-colors duration-300 group-hover:from-mint/40 group-hover:to-transparent"
        aria-hidden
      />
      <div className="relative flex items-start justify-between">
        <span className="font-heading text-3xl font-light tabular-nums text-navy/15">
          {item.number}
        </span>
        <span className="flex size-10 items-center justify-center rounded-full border border-teal/15 bg-mint/60 text-teal transition-colors group-hover:border-teal/30 group-hover:bg-mint">
          <Icon className="size-[18px]" strokeWidth={1.75} aria-hidden />
        </span>
      </div>
      <h3 className="relative mt-6 text-lg font-bold tracking-tight text-navy lg:text-xl">
        {item.title}
      </h3>
      {item.kicker && (
        <p className="relative mt-2 text-sm font-semibold text-teal">{item.kicker}</p>
      )}
      <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-muted">
        {item.description}
      </p>
      <ArrowUpRight
        className="relative mt-8 size-5 text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
        aria-hidden
      />
    </Link>
  );
}
