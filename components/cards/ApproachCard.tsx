"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";

export type ApproachStep = {
  n: string;
  title: string;
  /** Short teal subline under the card title (e.g. Understand, Plan). */
  subtitle?: string;
  text: string;
  icon: IconBadgeName;
  image: string;
  imagePosition?: string;
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
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/80 bg-white",
        "shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]",
        className
      )}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="relative h-40 overflow-hidden sm:h-44">
        <Image
          src={step.image}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700",
            step.imagePosition ?? "object-center",
            !reduce && "group-hover:scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/35 via-navy/10 to-white" />
      </div>

      <div className="relative -mt-7 flex flex-1 flex-col px-7 pb-8 lg:px-8">
        <IconBadge
          name={step.icon}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-5 text-base font-bold tracking-[0.05em] text-navy lg:text-[17px]">
          {step.title}
        </h3>
        {step.subtitle && (
          <p className="mt-1.5 text-xs font-bold uppercase tracking-[0.14em] text-teal">
            {step.subtitle}
          </p>
        )}

        <p className="mt-3.5 text-[15px] leading-[1.65] text-muted lg:text-base lg:leading-relaxed">
          {step.text}
        </p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-teal to-teal-bright transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
    </motion.article>
  );
}
