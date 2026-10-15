"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { aboutDoctorPhotoAlt } from "@/data/about-profile";
import { homeDepartmentBlocks } from "@/data/home-departments";
import { doctor } from "@/data/doctor";
import { treatmentHrefForLabel } from "@/data/treatments/slugs";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

export function HomeDepartmentsSection() {
  return (
    <section
      className="relative overflow-hidden bg-bg-warm py-10 md:py-14 lg:py-16"
      aria-labelledby="home-departments-heading"
    >
      <div className="pattern-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <FadeIn className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-1 rounded-[32px] bg-gradient-to-br from-teal-bright/40 via-white to-gold/30 opacity-90"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-navy shadow-[var(--shadow-soft)]">
                <div className="relative aspect-[4/5] sm:aspect-[5/6]">
                  <Image
                    src="/images/hero/slide-doctor.jpg"
                    alt={aboutDoctorPhotoAlt}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 88vw, 420px"
                    className="object-cover object-[22%_center]"
                    priority={false}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/15 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                    <p className="font-heading text-xl font-bold text-white">{doctor.name}</p>
                    <p className="mt-1 text-sm font-medium text-teal-bright">{doctor.role}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/85">
                      <MapPin className="size-3.5 shrink-0 text-teal-bright" aria-hidden />
                      {doctor.affiliation.name} · {doctor.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="lg:col-span-7">
            <FadeIn>
              <p className="label-caps">Departments &amp; specialities</p>
              <h2 id="home-departments-heading" className="title-section mt-5 text-balance">
                Orthopaedic care across{" "}
                <span className="text-accent">every major joint.</span>
              </h2>
              <p className="text-body mt-5 max-w-xl leading-relaxed">
                Dr. Pradyumna R offers fellowship-trained assessment and treatment across general
                orthopaedics, sports medicine, and dedicated knee, hip, shoulder, and elbow
                programmes — plus selected foot, ankle and wrist procedures.
              </p>
            </FadeIn>

            <Stagger className="mt-8 space-y-8 md:mt-10">
              {homeDepartmentBlocks.map((block) => (
                <StaggerChild key={block.id}>
                  <article className="rounded-[22px] border border-navy/[0.08] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-heading text-lg font-bold text-navy md:text-xl">
                        {block.title}
                      </h3>
                      <Link
                        href={block.href}
                        className="focus-ring text-xs font-bold uppercase tracking-[0.12em] text-teal hover:text-navy"
                      >
                        View all
                      </Link>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {block.items.map((label) => (
                        <li key={label}>
                          <Link
                            href={treatmentHrefForLabel(label, block.href)}
                            className="focus-ring inline-flex rounded-full border border-teal/20 bg-mint/40 px-3 py-1.5 text-[13px] font-semibold text-navy/90 transition-colors hover:border-teal/45 hover:bg-mint/70 hover:text-navy"
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

            <FadeIn className="mt-8">
              <Button asChild variant="outlineLight" className="border-navy/15">
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
