"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

/** Reference: blue / teal alternating wash, bottom → mid then clear top half. */
const washBlue =
  "bg-[linear-gradient(to_top,rgba(32,82,130,0.97)_0%,rgba(32,82,130,0.78)_28%,rgba(32,82,130,0.42)_46%,rgba(32,82,130,0.08)_52%,transparent_56%)]";
const washTeal =
  "bg-[linear-gradient(to_top,rgba(14,118,108,0.97)_0%,rgba(14,118,108,0.76)_28%,rgba(14,118,108,0.4)_46%,rgba(14,118,108,0.07)_52%,transparent_56%)]";

function cardWash(index: number) {
  return index % 2 === 0 ? washBlue : washTeal;
}

function figureOf(value: string) {
  const match = value.match(/^[\d,.]+K?\+/i);
  return match ? match[0] : value;
}

function credentialVideoSrc(item: (typeof credentialHighlights)[number]) {
  return "video" in item ? item.video : undefined;
}

function CardVideo({ src, position }: { src: string; position: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true;
    const pending = el.play();
    if (pending) pending.catch(() => undefined);
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      autoPlay
      loop
      playsInline
      preload="auto"
      className={cn("absolute inset-0 size-full object-cover", position)}
    />
  );
}

export function CredentialsBar() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const selected = active === null ? null : credentialHighlights[active];
  const selectedVideo = selected ? credentialVideoSrc(selected) : undefined;

  return (
    <section
      className="relative overflow-hidden bg-[#f4f7fa] py-8 md:py-12"
      aria-label="Professional credentials summary"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(180,210,230,0.35)_0%,transparent_100%)]"
        aria-hidden
      />
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />

      <Container className="relative">
        <FadeIn>
          <p className="label-caps mb-8 md:mb-10">Verified professional profile</p>
        </FadeIn>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {credentialHighlights.map((item, i) => {
            const poster = posters[i % posters.length];
            const figure = figureOf(item.value);
            const videoSrc = credentialVideoSrc(item);
            const showVideo = Boolean(videoSrc && !reduce);
            return (
              <StaggerChild key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group focus-ring relative block w-full overflow-hidden rounded-[20px] text-left",
                    "bg-white shadow-[0_8px_24px_rgba(15,45,75,0.12),0_16px_40px_rgba(15,45,75,0.08)]",
                    "transition-all duration-500 ease-out",
                    "hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(15,45,75,0.16),0_24px_48px_rgba(15,45,75,0.1)]"
                  )}
                  aria-label={`View ${item.label}`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-navy sm:aspect-[16/11]">
                    {!showVideo && (
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
                    )}
                    {showVideo && videoSrc && (
                      <CardVideo src={videoSrc} position={poster.position} />
                    )}
                    <span
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500",
                        cardWash(i)
                      )}
                      aria-hidden
                    />
                    <span className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                      <span className="block font-heading text-[2rem] font-bold leading-none tracking-tight text-white sm:text-[2.35rem] md:text-[2.5rem]">
                        {figure}
                      </span>
                      <span className="mt-2.5 max-w-[16rem] text-[13px] font-medium leading-snug text-white sm:text-sm">
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
              aria-label={selected.label}
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
                aria-label="Close video"
              >
                <X className="size-4" />
              </button>
              <div className="relative aspect-video bg-navy">
                {selectedVideo ? (
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    playsInline
                    className="absolute inset-0 size-full bg-black object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-navy via-[#12324d] to-teal/40 px-6 text-center text-white">
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
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
