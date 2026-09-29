"use client";

import { AboutIntro } from "@/components/about/AboutIntro";
import { AboutMediaSlider } from "@/components/about/AboutMediaSlider";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { Container } from "@/components/ui/Container";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";

/** Unified navy opening: meet hero + media carousel without a light divider seam. */
export function AboutOpening() {
  return (
    <section
      className="dark-surface border-b border-white/10"
      aria-label="About Dr. Pradyumna R"
    >
      <PageBannerBackground overlayStrength="strong" imageClassName="opacity-70" />
      <DarkSectionBackdrop variant="overMedia" />

      <div className="relative z-10">
        <AboutIntro variant="opening" />

        <Container className="relative">
          <div
            className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
            aria-hidden
          />
        </Container>

        <AboutMediaSlider variant="opening" />
      </div>
    </section>
  );
}
