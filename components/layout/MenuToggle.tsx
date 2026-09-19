"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
};

export function MenuToggle({ open, onClick, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <button
      type="button"
      className={cn(
        "focus-ring relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur-sm xl:hidden",
        className
      )}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onClick}
    >
      <span className="sr-only">{open ? "Close" : "Menu"}</span>
      <div className="relative h-3.5 w-[18px]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-0 h-[1.5px] w-full rounded-full bg-navy"
            style={{ top: i === 0 ? 0 : i === 1 ? 7 : 14 }}
            animate={
              reduce
                ? undefined
                : open
                  ? i === 0
                    ? { top: 7, rotate: 45 }
                    : i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : { top: 7, rotate: -45 }
                  : { top: i === 0 ? 0 : i === 1 ? 7 : 14, rotate: 0, opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </button>
  );
}
