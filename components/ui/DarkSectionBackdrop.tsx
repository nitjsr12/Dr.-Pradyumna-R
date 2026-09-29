"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Use on top of photography — keeps mesh lighter so the image still reads. */
  variant?: "default" | "overMedia";
};

/** Teal + navy mesh, dot grid, and soft glow orbs — shared across dark sections. */
export function DarkSectionBackdrop({ className, variant = "default" }: Props) {
  const reduce = useReducedMotion();
  const overMedia = variant === "overMedia";

  return (
    <div className={cn("pointer-events-none absolute inset-0 z-0", className)} aria-hidden>
      <div className={cn("absolute inset-0 mesh-navy", overMedia ? "opacity-70" : "opacity-100")} />
      <div
        className={cn("pattern-dots-dark absolute inset-0", overMedia ? "opacity-15" : "opacity-20")}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(20,169,161,0.14),transparent_55%)]",
          overMedia && "opacity-80"
        )}
      />
      <div
        className={cn(
          "absolute -left-40 top-0 size-[28rem] rounded-full blur-3xl",
          overMedia ? "bg-teal-bright/12" : "bg-teal-bright/15"
        )}
        style={reduce ? undefined : { animation: "hero-drift 20s ease-in-out infinite" }}
      />
      <div
        className={cn(
          "absolute -right-32 bottom-0 size-80 rounded-full blur-3xl",
          overMedia ? "bg-gold/8" : "bg-gold/10"
        )}
        style={reduce ? undefined : { animation: "hero-drift-alt 22s ease-in-out infinite" }}
      />
    </div>
  );
}
