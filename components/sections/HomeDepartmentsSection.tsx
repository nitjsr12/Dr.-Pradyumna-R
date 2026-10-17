"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { homeDepartmentBlocks } from "@/data/home-departments";
import { doctor } from "@/data/doctor";
import { treatmentHrefForLabel } from "@/data/treatments/slugs";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

const departmentsAsideImage = {
  src: "/images/sections/home-departments-surgery.webp",
  alt: "Dr. Pradyumna R performing minimally invasive arthroscopic orthopaedic surgery",
} as const;

export function HomeDepartmentsSection() {
  return (
    <section
      className="relative overflow-x-clip bg-bg-warm py-10 md:py-12 lg:py-14"
      aria-labelledby="home-departments-heading"
    >
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <Container className="relative max-w-[1360px] px-4 sm:px-5 lg:px-6">
        <FadeIn className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="label-caps justify-center lg:justify-start">Departments &amp; specialities</p>
          <h2 id="home-departments-heading" className="title-section mt-5 text-balance">
            Orthopaedic care across{" "}
            <span className="text-accent">every major joint.</span>
          </h2>
          <p className="text-body mx-auto mt-4 max-w-2xl leading-relaxed lg:mx-0">
            Dr. Pradyumna R offers fellowship-trained assessment and treatment across general
            orthopaedics, sports medicine, and dedicated knee, hip, shoulder, and elbow programmes
            — plus selected foot, ankle and wrist procedures.
          </p>
        </FadeIn>

        <div className="mt-8 grid items-start gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-12">
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[5/6] w-full sm:aspect-[4/5]">
                <Image
                  src={departmentsAsideImage.src}
                  alt={departmentsAsideImage.alt}
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="origin-[82%_45%] scale-[1.28] object-cover object-[82%_45%]"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-heading text-lg font-bold text-white sm:text-xl">
                    {doctor.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-teal-bright">{doctor.role}</p>
                  <p className="mt-2 inline-flex items-start gap-1.5 text-xs font-medium leading-snug text-white/90">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-teal-bright" aria-hidden />
                    {doctor.affiliation.name} · {doctor.city}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-xs leading-relaxed text-navy/65 lg:text-left">
              Manipal Hospital, Kanakapura Road &amp; Jayanagar · Bangalore Orthopaedic Clinic,
              BTM Layout
            </p>
          </aside>

          <div className="min-w-0">
            <Stagger className="space-y-5">
              {homeDepartmentBlocks.map((block) => (
                <StaggerChild key={block.id}>
                  <article className="rounded-2xl border border-navy/10 bg-white p-5 shadow-[var(--shadow-card)] sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-heading text-base font-bold text-navy sm:text-lg">
                        {block.title}
                      </h3>
                      <Link
                        href={block.href}
                        className="focus-ring shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-teal hover:text-navy"
                      >
                        View all
                      </Link>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {block.items.map((label) => (
                        <li key={label}>
                          <Link
                            href={treatmentHrefForLabel(label, block.href)}
                            className="focus-ring inline-flex rounded-full border border-teal/20 bg-mint/40 px-2.5 py-1 text-[12px] font-semibold leading-snug text-navy/90 transition-colors hover:border-teal/45 hover:bg-mint/70 sm:px-3 sm:text-[13px]"
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerChild>
              ))}
            </Stagger>

            <FadeIn className="mt-6">
              <Button
                asChild
                variant="secondary"
                className="w-full border-navy/15 sm:w-auto"
              >
                <Link href="/area-of-specialties">
                  Explore all specialities
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
