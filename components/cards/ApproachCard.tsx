"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";

export type ApproachStep = {
  n: string;
  title: string;
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
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tabular-nums tracking-[0.14em] text-teal shadow-sm backdrop-blur-sm">
          {step.n}
        </span>
      </div>

      <div className="relative -mt-7 flex flex-1 flex-col px-7 pb-8 lg:px-8">
        <IconBadge
          name={step.icon}
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <h3 className="mt-5 text-base font-bold tracking-[0.05em] text-navy lg:text-[17px]">
          {step.title}
        </h3>

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
