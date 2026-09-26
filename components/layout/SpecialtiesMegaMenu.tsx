"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, List } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  specialtiesMegaMenuColumns,
  specialtiesMenuItemHref,
} from "@/data/area-of-specialties";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/animations";

export function SpecialtiesMegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const active = pathname.startsWith("/area-of-specialties");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/area-of-specialties"
        className={cn(
          "focus-ring group relative inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14px] font-medium transition-colors xl:text-[15px]",
          active ? "font-semibold text-navy" : "text-text hover:text-navy"
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
      >
        {active && !reduce && (
          <motion.span
            layoutId="navbar-active-pill"
            className="absolute inset-0 rounded-lg bg-mint/70"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}
        <span className="relative z-[1]">Specialties</span>
        <ChevronDown
          className={cn(
            "relative z-[1] size-3.5 opacity-60 transition-transform duration-300",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 6 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="absolute left-1/2 top-full z-50 hidden w-[min(100vw-2rem,72rem)] -translate-x-1/2 pt-3 xl:block"
          >
            <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-[0_24px_60px_rgba(11,31,51,0.12)]">
              <div className="grid gap-0 lg:grid-cols-5 lg:divide-x lg:divide-border-subtle/80">
                {specialtiesMegaMenuColumns.map((column) => (
                  <div key={column.id} className="p-5 lg:p-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
                      {column.title}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {column.items.map((item) => (
                        <li key={item}>
                          <Link
                            href={specialtiesMenuItemHref(item, column)}
                            className="text-sm font-medium text-navy/80 underline decoration-teal/30 underline-offset-2 transition-colors hover:text-teal hover:decoration-teal"
                            onClick={() => setOpen(false)}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={column.moreHref}
                      className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-gold/90 px-3 py-1.5 text-xs font-bold text-navy transition-colors hover:bg-gold"
                      onClick={() => setOpen(false)}
                    >
                      <List className="size-3.5" aria-hidden />
                      More procedures
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-t border-border-subtle/80 bg-mint/25 px-6 py-3 text-center">
                <Link
                  href="/area-of-specialties"
                  className="text-sm font-semibold text-teal hover:text-navy"
                  onClick={() => setOpen(false)}
                >
                  View all areas of specialisation →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
