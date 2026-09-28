"use client";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMediaSlider } from "@/components/about/AboutMediaSlider";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { Container } from "@/components/ui/Container";

/** Unified navy opening: meet hero + media carousel without a light divider seam. */
export function AboutOpening() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-navy mesh-navy pattern-dots-dark"
      aria-label="About Dr. Pradyumna R"
    >
      <PageBannerBackground overlayStrength="strong" imageClassName="opacity-70" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_30%_20%,rgba(20,169,161,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 size-96 rounded-full bg-teal-bright/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <AboutIntro variant="opening" />

      <Container className="relative">
        <div
          className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
          aria-hidden
        />
      </Container>

      <AboutMediaSlider variant="opening" />
    </section>
  );
}
