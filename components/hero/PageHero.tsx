import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  label?: string;
  title: ReactNode;
  description?: string;
  className?: string;
  variant?: "light" | "mesh" | "dark";
};

export function PageHero({
  label,
  title,
  description,
  className,
  variant = "mesh",
}: Props) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border-subtle pt-[4.75rem] lg:pt-[5.5rem]",
        isDark && "surface-dark border-white/10 bg-navy mesh-navy",
        variant === "mesh" && "bg-bg-warm pattern-dots mesh-light",
        variant === "light" && "bg-surface",
        className
      )}
    >
      <Container className="relative pb-8 pt-8 lg:pb-10 lg:pt-10">
        {label && (
          <p className={cn(isDark ? "label-caps-on-dark" : "label-caps")}>
            {label}
          </p>
        )}
        <h1
          className={cn(
            "title-page mt-5 max-w-3xl text-balance",
            isDark && "text-white [&_.text-accent]:text-teal-bright"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "text-body mt-5 max-w-2xl",
              isDark && "text-white/80"
            )}
          >
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
