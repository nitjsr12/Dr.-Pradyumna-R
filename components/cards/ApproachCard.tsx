"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";

export type ApproachStep = {
  n: string;
  title: string;
  text: string;
  icon: IconBadgeName;
};

export function ApproachCard({
  step,
  className,
}: {
  step: ApproachStep;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-8 lg:p-9",
        "shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]",
        className
      )}
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-teal/[0.06] blur-2xl transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none font-heading text-[5rem] font-light leading-none text-navy/[0.04] lg:text-[5.5rem]"
        aria-hidden
      >
        {step.n}
      </span>

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <IconBadge
            name={step.icon}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-bold tabular-nums tracking-[0.12em] text-teal">
            {step.n}
          </span>
        </div>

        <h3 className="mt-6 text-base font-bold tracking-[0.05em] text-navy lg:text-[17px]">
          {step.title}
        </h3>

        <p className="mt-3.5 text-[15px] leading-[1.65] text-muted lg:text-base lg:leading-relaxed">
          {step.text}
        </p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-teal transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
    </motion.article>
  );
}
