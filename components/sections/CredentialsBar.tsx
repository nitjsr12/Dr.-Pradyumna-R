"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import { credentialHighlights } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const posters = [
  { src: "/images/hero/slide-movement.jpg", position: "object-[70%_center]" },
  { src: "/images/hero/slide-sports.jpg", position: "object-center" },
  { src: "/images/hero/slide-precision.jpg", position: "object-center" },
  { src: "/images/hero/slide-movement.jpg", position: "object-[28%_center]" },
  { src: "/images/hero/slide-sports.jpg", position: "object-[40%_center]" },
  { src: "/images/hero/slide-precision.jpg", position: "object-[60%_center]" },
] as const;

const washes = [
  "from-[#0a3a6b]/80 via-[#0a3a6b]/25 to-teal/20",
  "from-teal/75 via-navy/20 to-transparent",
  "from-[#0d6b62]/75 via-navy/15 to-transparent",
  "from-navy/75 via-navy/20 to-gold/25",
  "from-[#145a7a]/75 via-teal/20 to-transparent",
  "from-[#0a4a55]/80 via-navy/20 to-gold/15",
] as const;

function figureOf(value: string) {
  const match = value.match(/^[\d,.]+K?\+/i);
  return match ? match[0] : value;
}

export function CredentialsBar() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const selected = active === null ? null : credentialHighlights[active];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-mint/30 via-surface to-bg-warm py-12 md:py-16"
      aria-label="Professional credentials summary"
    >
      <Container>
        <FadeIn>
          <p className="label-caps mb-8 md:mb-10">Verified professional profile</p>
        </FadeIn>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {credentialHighlights.map((item, i) => {
            const poster = posters[i % posters.length];
            const figure = figureOf(item.value);
            return (
              <StaggerChild key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="group focus-ring relative block w-full overflow-hidden rounded-[22px] text-left shadow-[0_16px_40px_rgba(10,30,50,0.12)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(10,30,50,0.2)]"
                  aria-label={`Play video placeholder: ${item.value}`}
                >
                  <span className="relative block aspect-[16/10] overflow-hidden bg-navy">
                    <Image
                      src={poster.src}
                      alt=""
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={cn(
                        "object-cover transition-transform duration-700 ease-out",
                        poster.position,
                        !reduce && "group-hover:scale-[1.06]"
                      )}
                    />
                    <span
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t transition-opacity duration-500 group-hover:opacity-90",
                        washes[i % washes.length]
                      )}
                      aria-hidden
                    />
                    <span className="absolute left-1/2 top-[38%] flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[#ff0033] shadow-[0_10px_30px_rgba(0,0,0,0.28)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-[#ff0033] group-hover:text-white">
                      <Play className="ml-0.5 size-6 fill-current" aria-hidden />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 px-4 pb-5 text-center sm:pb-6">
                      <span className="block font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {figure}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-white/90 sm:text-base">
                        {item.label}
                      </span>
                    </span>
                  </span>
                </button>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setActive(null)}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`YouTube placeholder for ${selected.label}`}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-navy shadow-2xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="focus-ring absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                aria-label="Close video placeholder"
              >
                <X className="size-4" />
              </button>
              <div className="relative aspect-video bg-gradient-to-br from-navy via-[#12324d] to-teal/40">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                  <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-[#ff0033] shadow-lg">
                    <Play className="ml-1 size-7 fill-white text-white" aria-hidden />
                  </span>
                  <p className="text-[11px] font-bold tracking-[0.16em] text-white/70">
                    YOUTUBE VIDEO
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold">
                    {figureOf(selected.value)}
                  </p>
                  <p className="mt-1 text-sm text-white/80">{selected.label}</p>
                  <p className="mt-4 max-w-sm text-sm text-white/60">
                    Placeholder — the YouTube film for this highlight will play here.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
