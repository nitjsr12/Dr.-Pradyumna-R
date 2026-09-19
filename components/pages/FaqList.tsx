"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerChild } from "@/components/animations/Reveal";
import Link from "next/link";
import { disclaimer } from "@/data/resources";

export function FaqList() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);
  const reduce = useReducedMotion();

  return (
    <Container className="section-y max-w-3xl">
      <Stagger className="space-y-3">
        {faqs.map((f) => {
          const open = openId === f.id;
          return (
            <StaggerChild key={f.id}>
              <div className="overflow-hidden rounded-[var(--radius-md)] border border-border-subtle bg-surface shadow-[var(--shadow-card)]">
                <button
                  type="button"
                  className="focus-ring flex w-full items-start gap-3 p-5 text-left md:p-6"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : f.id)}
                >
                  <HelpCircle
                    className="mt-0.5 size-5 shrink-0 text-teal"
                    aria-hidden
                  />
                  <span className="flex-1 font-bold text-navy">{f.question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
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
                      <p className="border-t border-border-subtle px-5 pb-5 pl-14 text-[15px] leading-relaxed text-muted md:px-6 md:pb-6">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerChild>
          );
        })}
      </Stagger>
      <p className="mt-10 text-sm text-muted-light">{disclaimer}</p>
      <Link
        href="/contact"
        className="link-underline mt-6 inline-block text-sm font-semibold text-teal"
      >
        Contact us →
      </Link>
    </Container>
  );
}
