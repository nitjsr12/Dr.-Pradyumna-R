"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  active: boolean;
};

export function NavLink({ href, label, active }: Props) {
  const reduce = useReducedMotion();

  return (
    <Link
      href={href}
      className={cn(
        "group focus-ring relative rounded-lg px-3.5 py-2 text-[14px] font-medium transition-colors duration-200 xl:text-[15px]",
        active ? "font-semibold text-navy" : "text-text hover:text-navy"
      )}
    >
      <span className="relative z-[1]">{label}</span>
      {active && !reduce && (
        <motion.span
          layoutId="navbar-active-pill"
          className="absolute inset-0 rounded-lg bg-mint/70"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      )}
      {!active && (
        <span
          className="absolute bottom-1.5 left-3.5 h-px w-0 bg-teal transition-all duration-300 group-hover:w-[calc(100%-1.75rem)]"
          aria-hidden
        />
      )}
    </Link>
  );
}
