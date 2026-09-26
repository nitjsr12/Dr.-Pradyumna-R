"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { treatmentHrefForLabel } from "@/data/treatments/slugs";
import {
  procedureAnchor,
  specialtiesClinicHighlights,
  specialtiesFaqs,
  specialtiesGroupVisuals,
  specialtiesProcedureGroups,
  specialtiesTrustStats,
} from "@/data/area-of-specialties";
import { doctor } from "@/data/doctor";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function ProcedureLink({ label, groupId }: { label: string; groupId: string }) {
  const id = procedureAnchor(label);
  const fallback = `/area-of-specialties#${groupId}`;
  const href = treatmentHrefForLabel(label, `${fallback}#${id}`);

  return (
    <Link
      href={href}
      id={id}
      className="focus-ring group flex items-center justify-between gap-3 rounded-xl border border-border-subtle/90 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/35 hover:shadow-[var(--shadow-soft)]"
    >
      <span className="text-sm font-medium leading-snug text-navy/88 group-hover:text-teal">
        {label}
      </span>
      <ArrowRight
        className="size-4 shrink-0 text-teal opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

export function AreaOfSpecialtiesContent() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="hero-banner relative overflow-hidden border-b border-border-subtle/80 pt-[4.75rem] lg:pt-[5.5rem]">
        <PageBannerBackground />
        <Container className="relative py-10 md:py-14 lg:py-16">
          <FadeIn className="max-w-2xl">
            <p className="label-caps-on-dark">Area of specialties</p>
            <h1 className="title-page mt-5 text-balance">
              Comprehensive joint care in Bangalore —{" "}
              <span className="text-accent">under one roof</span>
            </h1>
            <p className="text-body mt-6 max-w-xl">
              Knee, hip, shoulder and elbow care — arthroscopy, sports medicine, trauma and
              robotic-assisted joint replacement with Dr. Pradyumna R across Bengaluru.
            </p>
            <p className="mt-4 font-heading text-base font-semibold text-teal-bright md:text-lg">
              Knee · Hip · Shoulder · Elbow · Sports medicine
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90">
                <BookAppointmentLink>
                  Book a consultation
                  <ArrowRight className="size-4 opacity-90" />
                </BookAppointmentLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20"
              >
                <a href={`tel:${doctor.booking.clinicPhone}`}>
                  <Phone className="size-4" aria-hidden />
                  {doctor.booking.clinicPhoneDisplay}
                </a>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-border-subtle/80 bg-white py-10 md:py-14 lg:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-[26px] border border-border-subtle/80 shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/5] max-h-[420px] sm:max-h-none">
                  <Image
                    src="/images/expertise/doctor.webp"
                    alt="Dr. Pradyumna R, orthopaedic surgeon in Bangalore"
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-[22%_center]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="title-section text-balance">
                  About Dr. Pradyumna R —{" "}
                  <span className="text-accent">orthopaedic surgeon Bangalore</span>
                </h2>
                <p className="text-body mt-5 leading-relaxed">
                  Fellowship-trained in arthroscopy and sports medicine, Dr. Pradyumna treats
                  patients from paediatric cases to senior citizens and competitive athletes. Care
                  is evidence-based, personalised and focused on clear communication before any
                  procedure.
                </p>
              </FadeIn>
              <FadeIn delay={0.08} className="mt-8">
                <div className="rounded-[24px] border border-teal/15 bg-gradient-to-br from-mint/30 to-white p-6 md:p-8">
                  <h3 className="font-heading text-lg font-bold text-navy">Clinic highlights</h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {specialtiesClinicHighlights.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-navy/85">
                        <span
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-bg-warm py-10 md:py-14 lg:py-16">
        <div className="pattern-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <Container className="relative">
          <FadeIn className="max-w-2xl">
            <p className="label-caps">Treatments</p>
            <h2 className="title-section mt-4 text-balance">
              Areas of specialisation in{" "}
              <span className="text-accent">Bangalore</span>
            </h2>
            <p className="text-body mt-4 max-w-xl">
              Browse by joint or service. Select a procedure to read more or book a consultation.
            </p>
          </FadeIn>

          <nav
            className="mt-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Jump to treatment category"
          >
            {specialtiesProcedureGroups.map((group) => {
              const visual = specialtiesGroupVisuals[group.id];
              return (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="focus-ring shrink-0 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-semibold text-navy/80 shadow-sm transition-colors hover:border-teal/40 hover:text-teal"
                >
                  {visual?.shortLabel ?? group.title}
                </a>
              );
            })}
          </nav>

          <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
            {specialtiesProcedureGroups.map((group, groupIndex) => {
              const visual = specialtiesGroupVisuals[group.id];
              const imageFirst = groupIndex % 2 === 0;

              return (
                <motion.article
                  key={group.id}
                  id={group.id}
                  className="scroll-mt-28 overflow-hidden rounded-[28px] border border-border-subtle/80 bg-white shadow-[var(--shadow-card)]"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.04, ease }}
                >
                  <div className="grid lg:grid-cols-12 lg:items-stretch">
                    <div
                      className={cn(
                        "relative min-h-[200px] lg:col-span-5 lg:min-h-[300px]",
                        !imageFirst && "lg:order-2"
                      )}
                    >
                      {visual && (
                        <>
                          <Image
                            src={visual.image}
                            alt={group.title}
                            fill
                            quality={90}
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className={cn("object-cover", visual.imagePosition ?? "object-center")}
                          />
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/40 to-navy/10 lg:bg-gradient-to-r lg:from-navy/80 lg:via-navy/35 lg:to-transparent"
                            aria-hidden
                          />
                        </>
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-6 lg:inset-y-0 lg:flex lg:flex-col lg:justify-end lg:p-8">
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright">
                          {visual?.shortLabel ?? "Specialty"}
                        </p>
                        <h3 className="mt-2 font-heading text-2xl font-bold text-white md:text-[1.65rem]">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "p-6 md:p-8 lg:col-span-7",
                        !imageFirst && "lg:order-1"
                      )}
                    >
                      {group.intro && (
                        <p className="max-w-2xl text-[15px] leading-relaxed text-navy/75">
                          {group.intro}
                        </p>
                      )}
                      {!group.intro && groupIndex > 0 && (
                        <p className="text-sm text-muted">
                          Explore procedures in this category — tap any item for details.
                        </p>
                      )}
                      <Stagger
                        className={cn(
                          "grid gap-2.5 sm:grid-cols-2",
                          group.intro ? "mt-6" : "mt-4"
                        )}
                      >
                        {group.procedures.map((proc) => (
                          <StaggerChild key={proc}>
                            <ProcedureLink label={proc} groupId={group.id} />
                          </StaggerChild>
                        ))}
                      </Stagger>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border-subtle/80 bg-navy py-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          aria-hidden
        >
          <div className="relative size-full">
            <Image
              src="/images/hero/slide-doctor.jpg"
              alt=""
              fill
              className="object-cover object-[30%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-navy/88" />
        </div>
        <Container className="relative">
          <p className="label-caps-on-dark text-center">Advanced orthopaedic care</p>
          <h2 className="title-section mx-auto mt-4 max-w-xl text-center !text-white">
            Trusted <span className="text-teal-bright">orthopaedic expertise</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {specialtiesTrustStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-2xl border border-white/12 bg-white/8 p-6 text-center backdrop-blur-md"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-bright">
                  {stat.label}
                </p>
                <p className="mt-3 font-heading text-lg font-bold text-white">{stat.headline}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y bg-white">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="label-caps">FAQ</p>
            <h2 className="title-section mt-4">Frequently asked questions</h2>
          </FadeIn>
          <div className="mt-8">
            <FaqAccordion items={specialtiesFaqs} defaultOpenId={specialtiesFaqs[0]?.id} />
          </div>
        </Container>
      </section>
    </>
  );
}
