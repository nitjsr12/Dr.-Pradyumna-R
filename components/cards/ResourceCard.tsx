import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ResourceSection } from "@/data/resources";

type Props = {
  resource: ResourceSection;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function ResourceCard({
  resource,
  href,
  variant = "light",
  className,
}: Props) {
  const link = href ?? `/patient-resources#${resource.id}`;
  const isDark = variant === "dark";

  return (
    <Link
      href={link}
      className={cn(
        "group flex flex-col rounded-[var(--radius-md)] p-6 transition-transform duration-300 hover:-translate-y-1",
        !isDark && "card-border bg-surface",
        isDark &&
          "surface-dark border border-white/10 bg-white/5 hover:border-teal-bright/30",
        className
      )}
    >
      <p
        className={cn(
          "text-[10px] font-bold uppercase tracking-[0.14em]",
          isDark ? "text-teal-bright" : "text-teal"
        )}
      >
        {resource.id.replace(/-/g, " ")}
      </p>
      <h3
        className={cn(
          "mt-3 text-lg font-bold",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {resource.title}
      </h3>
      <p
        className={cn(
          "text-secondary mt-3 flex-1"
        )}
      >
        {resource.body}
      </p>
      <span
        className={cn(
          "mt-6 inline-flex items-center gap-1 text-sm font-semibold",
          isDark ? "text-teal-bright" : "text-teal"
        )}
      >
        Read the Guide
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
