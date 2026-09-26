"use client";

import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { mobileNav } from "@/data/navigation";
import {
  specialtiesMegaMenuColumns,
  specialtiesMenuItemHref,
} from "@/data/area-of-specialties";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { cn } from "@/lib/utils";
import { easeOut } from "@/lib/animations";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-navy/20 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[min(100vw,28rem)] flex-col border-l border-border bg-surface pt-[env(safe-area-inset-top)] shadow-[var(--shadow-soft)] xl:hidden"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <SiteLogo showTagline={false} />
              <span className="label-caps text-muted">Menu</span>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 pb-8"
              aria-label="Mobile"
            >
              <div className="border-b border-border/80 py-3">
                <button
                  type="button"
                  onClick={() => setSpecialtiesOpen((v) => !v)}
                  className="focus-ring flex w-full items-center justify-between py-2 text-left"
                  aria-expanded={specialtiesOpen}
                >
                  <span className="text-xl font-semibold tracking-tight text-navy">
                    Area of Specialties
                  </span>
                  <ChevronDown
                    className={cn(
                      "size-5 text-muted transition-transform",
                      specialtiesOpen && "rotate-180"
                    )}
                  />
                </button>
                {specialtiesOpen && (
                  <div className="mt-2 space-y-4 pb-2 pl-1">
                    {specialtiesMegaMenuColumns.map((column) => (
                      <div key={column.id}>
                        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-teal">
                          {column.title}
                        </p>
                        <ul className="mt-2 space-y-1.5">
                          {column.items.map((item) => (
                            <li key={item}>
                              <Link
                                href={specialtiesMenuItemHref(item, column)}
                                onClick={onClose}
                                className="text-sm font-medium text-navy/80 hover:text-teal"
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={column.moreHref}
                          onClick={onClose}
                          className="mt-2 inline-block text-xs font-bold text-teal"
                        >
                          More procedures →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {mobileNav.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href + link.label}
                    initial={reduce ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{
                      duration: 0.4,
                      delay: reduce ? 0 : 0.04 * i + 0.06,
                      ease: easeOut,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "group flex items-center justify-between border-b border-border/80 py-4",
                        active ? "text-teal" : "text-navy"
                      )}
                    >
                      <span className="text-xl font-semibold tracking-tight">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "size-5 transition-transform duration-300",
                          active
                            ? "translate-x-0.5 -translate-y-0.5 text-teal"
                            : "text-muted opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-border p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
              <Button asChild size="lg" className="w-full">
                <BookAppointmentLink onClick={onClose}>
                  Book Appointment
                  <ArrowUpRight className="size-4" />
                </BookAppointmentLink>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
