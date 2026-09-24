"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, Globe2, Languages } from "lucide-react";
import { aboutProfileHighlights } from "@/data/about-profile";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const icons = {
  globe: Globe2,
  hospital: Building2,
  languages: Languages,
} as const;

export function AboutAtAGlance() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-16 border-t border-teal/25 pt-12 md:mt-20 md:pt-14">
      <FadeIn>
        <p className="label-caps">At a glance</p>
        <h3 className="title-section mt-4 max-w-xl text-balance text-2xl md:text-3xl">
          Training, locations &{" "}
          <span className="text-accent">how we communicate</span>
        </h3>
      </FadeIn>

      <Stagger className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {aboutProfileHighlights.map((group, cardIndex) => {
          const Icon = icons[group.icon];
          return (
            <StaggerChild key={group.id}>
              <motion.article
                className="group relative overflow-hidden rounded-[24px] bg-white shadow-[var(--shadow-card)]"
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.45, ease }}
              >
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <Image
                      src={group.image}
                      alt=""
                      fill
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={cn("object-cover", group.imagePosition)}
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/35 to-teal/20"
                    aria-hidden
                  />
                  <motion.span
                    className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-teal-bright backdrop-blur-md"
                    initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.45, delay: cardIndex * 0.08, ease }}
                  >
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                  </motion.span>
                  <p className="absolute bottom-4 left-5 right-5 font-heading text-lg font-bold text-white">
                    {group.title}
                  </p>
                </div>

                <ul className="space-y-0 divide-y divide-border-subtle/80 p-5 sm:p-6">
                  {group.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      className="flex gap-3 py-3.5 first:pt-0 last:pb-0"
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-24px" }}
                      transition={{
                        duration: 0.4,
                        delay: 0.12 + itemIndex * 0.06,
                        ease,
                      }}
                    >
                      <span
                        className="mt-1.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-mint text-teal"
                        aria-hidden
                      >
                        <Icon className="size-3.5" strokeWidth={2.25} />
                      </span>
                      <span className="text-sm leading-relaxed text-navy/85">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </StaggerChild>
          );
        })}
      </Stagger>
    </div>
  );
}
