"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function SportsMedicineHeroGraphic({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("relative mx-auto w-full max-w-[min(100%,420px)]", className)} aria-hidden>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-bright/15 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 420 420"
        className="relative w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-48px" }}
        transition={{ duration: 0.65, ease }}
      >
        <defs>
          <linearGradient id="sm-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14a9a1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#14a9a1" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="sm-fill" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a7376" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#14a9a1" stopOpacity="0.12" />
          </linearGradient>
          <radialGradient id="sm-glow" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#14a9a1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#14a9a1" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="210" cy="210" r="198" fill="url(#sm-glow)" />
        <circle
          cx="210"
          cy="210"
          r="185"
          stroke="url(#sm-ring)"
          strokeWidth="1.5"
          strokeDasharray="8 14"
          opacity="0.55"
        />
        <circle cx="210" cy="210" r="148" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

        <motion.g
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "210px 210px" }}
        >
          <circle
            cx="210"
            cy="210"
            r="168"
            stroke="rgba(20,169,161,0.35)"
            strokeWidth="1"
            strokeDasharray="2 42"
          />
        </motion.g>

        <ellipse cx="210" cy="318" rx="72" ry="10" fill="rgba(0,0,0,0.35)" />

        {/* Stylised athlete — return to play */}
        <g strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M128 268c18-42 52-68 82-68s64 26 82 68"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="28"
            fill="none"
          />
          <circle cx="248" cy="118" r="22" fill="url(#sm-fill)" stroke="#14a9a1" strokeWidth="2" />
          <path
            d="M248 140v44l-36 28-14 52M248 184l42 22 28 54"
            stroke="#ffffff"
            strokeWidth="3.5"
            fill="none"
            opacity="0.92"
          />
          <path
            d="M212 212l-8 48 24 36M248 184l-20 76 18 32"
            stroke="#14a9a1"
            strokeWidth="3.5"
            fill="none"
            opacity="0.95"
          />
          <path
            d="M290 156l28-12 22 8"
            stroke="#ffffff"
            strokeWidth="3"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* Knee joint schematic */}
        <g transform="translate(72 168)">
          <circle cx="48" cy="48" r="46" fill="rgba(10,30,50,0.55)" stroke="rgba(20,169,161,0.45)" strokeWidth="1.5" />
          <ellipse cx="48" cy="52" rx="22" ry="26" stroke="#14a9a1" strokeWidth="2" fill="rgba(20,169,161,0.08)" />
          <path
            d="M32 44c8-10 24-10 32 0M32 60c8 10 24 10 32 0"
            stroke="rgba(255,255,255,0.65)"
            strokeWidth="1.75"
            fill="none"
          />
          <circle cx="48" cy="52" r="5" fill="#14a9a1" />
        </g>

        {/* Shoulder / motion arc */}
        <g transform="translate(268 72)">
          <path
            d="M0 64c24-40 72-40 96 0"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 64c20-28 56-28 76 0"
            stroke="#14a9a1"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="6 8"
            opacity="0.85"
          />
          <circle cx="88" cy="64" r="8" fill="#14a9a1" opacity="0.9" />
        </g>

        {/* Performance pulse */}
        <path
          d="M56 108h28l12-20 16 40 14-28 18 8h32"
          stroke="#14a9a1"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <motion.g
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="302"
            y="268"
            width="56"
            height="56"
            rx="16"
            fill="rgba(20,169,161,0.12)"
            stroke="rgba(20,169,161,0.5)"
            strokeWidth="1.5"
          />
          <path
            d="M318 296h28M330 284v24"
            stroke="#14a9a1"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
