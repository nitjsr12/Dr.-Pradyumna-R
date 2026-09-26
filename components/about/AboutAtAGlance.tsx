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

type Highlight = (typeof aboutProfileHighlights)[number];

function GlanceCard({
  group,
  reduce,
}: {
  group: Highlight;
  reduce: boolean | null;
}) {
  const Icon = icons[group.icon];
  const isLanguages = group.id === "languages";

  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-navy/[0.08] bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.4, ease }}
    >
      <div className="relative h-[120px] shrink-0 overflow-hidden sm:h-[128px]">
        <Image
          src={group.image}
          alt=""
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.04]",
            group.imagePosition
          )}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/55"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-end gap-3 p-5 sm:p-6">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-teal-bright backdrop-blur-sm">
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="font-heading text-lg font-bold leading-tight text-white sm:text-xl">
            {group.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {isLanguages ? (
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item}>
                <span className="inline-flex items-center rounded-full border border-teal/20 bg-mint/50 px-3.5 py-2 text-sm font-semibold text-navy/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-1 flex-col gap-3.5">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-[0.55rem] flex size-5 shrink-0 items-center justify-center rounded-full bg-teal/12 text-teal"
                  aria-hidden
                >
                  <span className="size-1.5 rounded-full bg-teal" />
                </span>
                <span className="text-[13px] leading-relaxed text-navy/85 sm:text-sm sm:leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}

export function AboutAtAGlance() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-14 md:mt-16">
      <div className="rounded-[28px] border border-teal/15 bg-gradient-to-br from-white via-white to-mint/25 p-6 shadow-[var(--shadow-card)] md:p-8 lg:p-10">
        <FadeIn className="max-w-2xl">
          <p className="label-caps">At a glance</p>
          <h3 className="title-section mt-4 text-balance text-2xl md:text-[1.75rem] lg:text-3xl">
            Training, locations &{" "}
            <span className="text-accent">how we communicate</span>
          </h3>
        </FadeIn>

        <Stagger className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
          {aboutProfileHighlights.map((group) => (
            <StaggerChild key={group.id} className="h-full min-h-0">
              <GlanceCard group={group} reduce={reduce} />
            </StaggerChild>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
