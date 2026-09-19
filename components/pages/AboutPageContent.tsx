"use client";

import {
  BookOpen,
  Building2,
  GraduationCap,
  Languages,
  Stethoscope,
  Target,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PageBlock } from "@/components/ui/PageBlock";
import { Container } from "@/components/ui/Container";
import { ProfessionalTimeline } from "@/components/sections/ProfessionalTimeline";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";
import { images } from "@/lib/images";

export function AboutPageContent() {
  return (
    <>
      <Container className="section-y pattern-grid relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <FadeIn className="lg:col-span-5">
            <ImagePlaceholder
              src={images.doctorPortrait}
              remoteFallback={images.remote.doctorPortrait}
              alt="Dr. Pradyumna R portrait placeholder"
              overlay
              position="top"
              className="shadow-[var(--shadow-soft)]"
            />
          </FadeIn>
          <Stagger className="space-y-6 lg:col-span-7">
            <StaggerChild>
              <PageBlock icon={Stethoscope} title="Professional overview">
                <p>{doctor.overview}</p>
                <p className="mt-3 text-sm text-muted-light">
                  {doctor.experienceNote}
                </p>
              </PageBlock>
            </StaggerChild>
            <StaggerChild>
              <PageBlock icon={GraduationCap} title="Education">
                <ul className="list-none space-y-2">
                  {doctor.qualifications.map((q) => (
                    <li key={q} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                      {q}
                    </li>
                  ))}
                </ul>
              </PageBlock>
            </StaggerChild>
            <StaggerChild>
              <PageBlock icon={Target} title="Specialisation">
                <p>{doctor.role}</p>
              </PageBlock>
            </StaggerChild>
          </Stagger>
        </div>

        <Stagger className="mt-10 space-y-6">
          <StaggerChild>
            <PageBlock icon={Stethoscope} title="Areas of expertise">
              <ul className="grid gap-2 sm:grid-cols-2">
                {doctor.fieldOfExpertise.map((f) => (
                  <li
                    key={f}
                    className="rounded-lg border border-border-subtle bg-bg-warm px-3 py-2.5 text-sm font-medium text-navy"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </PageBlock>
          </StaggerChild>
          <StaggerChild>
            <PageBlock icon={Building2} title="Hospital affiliation">
              <p className="font-semibold text-navy">{doctor.affiliation.name}</p>
              <p className="mt-2 text-sm">{doctor.address.hospital}</p>
              <p className="mt-3 text-xs text-muted-light">
                {doctor.affiliation.note}
              </p>
            </PageBlock>
          </StaggerChild>
          <div className="grid gap-6 md:grid-cols-2">
            <StaggerChild>
              <PageBlock icon={Languages} title="Languages">
                <p>{doctor.languages.join(" · ")}</p>
              </PageBlock>
            </StaggerChild>
            <StaggerChild>
              <PageBlock icon={BookOpen} title="Publications">
                <ul className="list-none space-y-2">
                  {doctor.publicationsSummary.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </PageBlock>
            </StaggerChild>
          </div>
        </Stagger>
      </Container>
      <ProfessionalTimeline />
      <AchievementsSection />
    </>
  );
}
