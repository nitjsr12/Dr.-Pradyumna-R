"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs, type FaqItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

type Props = {
  items?: readonly FaqItem[];
  defaultOpenId?: string | null;
  className?: string;
  compact?: boolean;
};

export function FaqAccordion({
  items = faqs,
  defaultOpenId = items[0]?.id ?? null,
  className,
  compact = false,
}: Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const reduce = useReducedMotion();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((f) => {
        const open = openId === f.id;
        return (
          <div
            key={f.id}
            className={cn(
              "overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-[var(--shadow-card)] transition-shadow",
              open && "border-teal/25 shadow-[var(--shadow-soft)]"
            )}
          >
            <button
              type="button"
              className={cn(
                "focus-ring flex w-full items-start gap-3 text-left",
                compact ? "p-4 md:p-5" : "p-5 md:p-6"
              )}
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : f.id)}
            >
              <HelpCircle
                className="mt-0.5 size-5 shrink-0 text-teal"
                aria-hidden
              />
              <span className="flex-1 font-bold text-navy">{f.question}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-muted transition-transform duration-300",
                  open && "rotate-180 text-teal"
                )}
                aria-hidden
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p
                    className={cn(
                      "border-t border-border-subtle text-[15px] leading-relaxed text-muted",
                      compact
                        ? "px-4 pb-4 pl-12 md:px-5 md:pb-5"
                        : "px-5 pb-5 pl-14 md:px-6 md:pb-6"
                    )}
                  >
                    {f.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
