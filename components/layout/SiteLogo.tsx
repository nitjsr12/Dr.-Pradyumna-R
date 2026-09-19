"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/animations";

type Props = {
  className?: string;
  showTagline?: boolean;
  onDark?: boolean;
  /** Shorter wordmark on small screens */
  compactOnMobile?: boolean;
};

export function SiteLogo({
  className,
  showTagline = true,
  onDark = false,
  compactOnMobile = false,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <Link
      href="/"
      className={cn(
        "group focus-ring flex min-w-0 items-center gap-2.5 sm:gap-3",
        className
      )}
      aria-label={`${doctor.name} — home`}
    >
      <motion.div
        className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[rgba(11,31,51,0.08)] bg-gradient-to-br from-mint/80 to-surface sm:h-11 sm:w-11 sm:rounded-2xl"
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: easeOut }}
        whileHover={reduce ? undefined : { scale: 1.03 }}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-teal/30"
          viewBox="0 0 44 44"
          aria-hidden
        >
          <motion.path
            d="M6 32 Q22 8 38 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeOut }}
          />
        </svg>
        <span className="relative z-[1] font-heading text-sm font-bold text-navy">
          PR
        </span>
      </motion.div>

      <div className="min-w-0 leading-tight">
        <span
          className={cn(
            "block font-bold tracking-[0.08em] text-navy",
            compactOnMobile
              ? "text-[11px] sm:text-xs lg:text-sm lg:tracking-[0.1em]"
              : "text-xs sm:text-sm",
            onDark && "text-white"
          )}
        >
          <span className={cn(compactOnMobile && "hidden sm:inline")}>
            {doctor.shortName}
          </span>
          {compactOnMobile && (
            <span className="sm:hidden">DR. PRADYUMNA R</span>
          )}
        </span>
        {showTagline && (
          <span
            className={cn(
              "mt-0.5 hidden text-[10px] tracking-[0.08em] text-muted sm:block lg:text-[11px]",
              onDark && "text-white/55"
            )}
          >
            ORTHOPAEDICS • SPORTS MEDICINE
          </span>
        )}
      </div>
    </Link>
  );
}
