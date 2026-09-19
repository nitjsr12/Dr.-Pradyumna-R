"use client";

import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 flex h-16 items-center border-t border-border bg-[rgba(255,255,255,0.95)] px-3 backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]">
      <Link
        href="/book-appointment"
        className="focus-ring flex h-11 w-full items-center justify-center rounded-full bg-navy text-sm font-semibold text-white"
      >
        Book Consultation
      </Link>
    </div>
  );
}
