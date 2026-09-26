"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { doctor } from "@/data/doctor";
import {
  treatmentCoverByCategory,
  type TreatmentPage,
} from "@/data/treatments/types";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  page: TreatmentPage;
};

export function TreatmentPageContent({ page }: Props) {
  const reduce = useReducedMotion();
  const cover =
    page.coverImage ??
    treatmentCoverByCategory[page.category]?.src ??
    "/images/expertise/clinic.webp";
  const coverPosition =
    page.coverPosition ?? treatmentCoverByCategory[page.category]?.position ?? "object-center";

  const firstP = page.blocks.find((b) => b.type === "p");
  const excerpt = page.excerpt ?? (firstP?.type === "p" ? firstP.text : undefined);

  return (
    <>
      <header className="hero-banner relative overflow-hidden border-b border-border-subtle pt-[4.75rem] lg:pt-[5.5rem]">
        <PageBannerBackground />
        <Container className="relative py-10 md:py-14 lg:py-16">
          <nav className="text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-teal-bright">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/area-of-specialties" className="hover:text-teal-bright">
              Specialties
            </Link>
            {page.category !== "General" && (
              <>
                <span className="mx-2">/</span>
                <span>{page.category}</span>
              </>
            )}
          </nav>
          <Link
            href="/area-of-specialties"
            className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-bright hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All specialties
          </Link>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright">
              {page.category === "General" ? "Treatment & procedures" : `${page.category} procedures`}
            </p>
            <h1 className="title-page mt-4 max-w-4xl text-balance">{page.pageTitle}</h1>
            {excerpt && (
              <p className="text-body mt-5 max-w-2xl md:text-lg">
                {excerpt.length > 320 ? `${excerpt.slice(0, 317)}…` : excerpt}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-teal hover:bg-teal/90">
                <BookAppointmentLink>
                  Book an appointment
                  <ArrowRight className="size-4" />
                </BookAppointmentLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
                <a href={`tel:${doctor.booking.clinicPhone}`}>
                  <Phone className="size-4" aria-hidden />
                  {doctor.booking.clinicPhoneDisplay}
                </a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </header>

      <Container className="section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.article
            className="lg:col-span-8"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease }}
          >
            <BlogPostBody blocks={page.blocks} />
            <p className="mt-12 border-t border-border-subtle pt-8 text-sm leading-relaxed text-muted">
              This page is for general information only and does not replace medical advice.
              Treatment plans vary by individual assessment with Dr. Pradyumna R.
            </p>
          </motion.article>

          <aside className="lg:col-span-4">
            <motion.div
              className="sticky top-28 space-y-6"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.06, ease }}
            >
              <div className="overflow-hidden rounded-[24px] border border-border-subtle bg-white shadow-[var(--shadow-card)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={cover}
                    alt=""
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className={cn("object-cover", coverPosition)}
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-navy">Book a consultation</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Discuss your symptoms with Dr. Pradyumna R. An in-person assessment confirms
                    diagnosis and suitability for any procedure.
                  </p>
                  <Button asChild className="mt-5 w-full" size="lg">
                    <BookAppointmentLink>
                      Book appointment
                      <ArrowRight className="size-4" aria-hidden />
                    </BookAppointmentLink>
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted">
                    Manipal Hospitals, Kanakapura Road · Jayanagar · BTM Layout
                  </p>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </Container>
    </>
  );
}
