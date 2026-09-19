"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { NavLink } from "@/components/layout/NavLink";
import { MenuToggle } from "@/components/layout/MenuToggle";
import { easeOut } from "@/lib/animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 48],
    ["0 0 0 rgba(11,31,51,0)", "0 10px 36px rgba(11,31,51,0.07)"]
  );

  const showSolidBar = scrolled || !isHome;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={reduce ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: easeOut }}
        style={reduce ? undefined : { boxShadow: headerShadow }}
      >
        <motion.div
          className={cn(
            "border-b transition-[border-color,background-color,backdrop-filter] duration-400",
            showSolidBar
              ? "border-border bg-[rgba(255,255,255,0.94)] backdrop-blur-[16px]"
              : isHome
                ? "border-transparent bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-[8px]"
                : "border-transparent bg-[rgba(255,255,255,0.92)] backdrop-blur-[16px]"
          )}
        >
          <div className="container-site flex h-16 items-center justify-between gap-3 lg:h-[5rem]">
            <SiteLogo
              showTagline={false}
              className="min-w-0 shrink lg:max-w-none"
              compactOnMobile
            />

            <nav
              className="hidden items-center gap-0.5 xl:flex"
              aria-label="Main"
            >
              {mainNav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.03 * i + 0.08,
                    ease: easeOut,
                  }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    active={
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href)
                    }
                  />
                </motion.div>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                asChild
                size="default"
                className="hidden shadow-[0_6px_20px_rgba(11,31,51,0.1)] md:inline-flex"
              >
                <Link href="/book-appointment" className="gap-1.5 text-[15px]">
                  Book Appointment
                  <ArrowUpRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Link
                href="/book-appointment"
                className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-white/90 md:hidden"
                aria-label="Book appointment"
              >
                <Calendar className="size-[18px] text-navy" />
              </Link>
              <MenuToggle open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </motion.div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
