"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/animations";

export const siteLogoSrc = "/images/logo.png";

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
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl sm:h-11 sm:w-11 sm:rounded-2xl",
          onDark
            ? "bg-white shadow-sm ring-1 ring-white/20"
            : "bg-white shadow-sm ring-1 ring-navy/5"
        )}
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: easeOut }}
        whileHover={reduce ? undefined : { scale: 1.03 }}
      >
        <Image
          src={siteLogoSrc}
          alt=""
          width={88}
          height={88}
          priority
          className="h-[85%] w-[85%] object-contain"
        />
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
