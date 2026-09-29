"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sports medicine hero — clinical stock-style photography (local asset). */
const SPORTS_INJURY_IMAGE = "/images/expertise/sports-medicine.webp";

export function SportsMedicineHeroGraphic({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative mx-auto w-full max-w-[min(100%,420px)]", className)}>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-bright/12 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <motion.div
        className="relative"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px" }}
        transition={{ duration: 0.65, ease }}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-br from-teal-bright/45 via-white/10 to-gold/20 opacity-90"
          aria-hidden
        />
        <div className="relative overflow-hidden rounded-[27px] border border-white/15 bg-navy shadow-[0_24px_56px_rgba(0,0,0,0.45)]">
          <div className="relative aspect-[4/5] sm:aspect-[5/6]">
            <Image
              src={SPORTS_INJURY_IMAGE}
              alt="Sports injury assessment and recovery care"
              fill
              quality={90}
              sizes="(max-width: 1024px) 50vw, 420px"
              className="object-cover object-center"
              priority={false}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teal-bright/10 via-transparent to-navy/20"
              aria-hidden
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
