"use client";

import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { mobileNav } from "@/data/navigation";
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
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-border bg-surface shadow-[var(--shadow-soft)] xl:hidden"
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
              className="flex flex-1 flex-col justify-center gap-1 px-6 pb-8"
              aria-label="Mobile"
            >
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
