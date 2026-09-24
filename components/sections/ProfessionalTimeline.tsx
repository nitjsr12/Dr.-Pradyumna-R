"use client";

import { professionalTimeline } from "@/data/journey";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge, type IconBadgeName } from "@/components/ui/IconBadge";
import { FadeIn, Stagger, StaggerChild } from "@/components/animations/Reveal";

type ProfessionalTimelineProps = {
  /** Vertical line layout — cleaner on About page */
  variant?: "grid" | "vertical";
};

export function ProfessionalTimeline({ variant = "grid" }: ProfessionalTimelineProps) {
  const vertical = variant === "vertical";

  return (
    <section
      className={
        vertical
          ? "border-t border-border-subtle/80 bg-white py-14 md:py-20 lg:py-24"
          : "section-y relative overflow-hidden bg-gradient-to-b from-mint via-white to-bg-warm"
      }
    >
      <div
        className="pointer-events-none absolute -left-20 top-16 size-72 rounded-full bg-teal/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            label="Professional journey"
            title={
              <>
                Training, expertise &{" "}
                <span className="text-accent">global experience.</span>
              </>
            }
            description="A career shaped by specialised orthopaedic training, international exposure and a focused interest in shoulder, knee and sports medicine."
          />
        </FadeIn>

        {vertical ? (
          <Stagger className="mx-auto mt-12 max-w-3xl lg:mt-14">
            {professionalTimeline.map((item, index) => (
              <StaggerChild key={item.id}>
                <article className="relative flex gap-6 pb-10 last:pb-0 md:gap-8 md:pb-12">
                  {index < professionalTimeline.length - 1 && (
                    <span
                      className="absolute left-[11px] top-8 bottom-0 w-px bg-teal/25 md:left-[13px]"
                      aria-hidden
                    />
                  )}
                  <div className="relative z-[1] flex shrink-0 flex-col items-center gap-2 pt-0.5">
                    <IconBadge name={item.icon as IconBadgeName} size="sm" />
                    <span className="text-[10px] font-bold tabular-nums tracking-[0.14em] text-teal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="font-heading text-lg font-bold text-navy md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-navy/75">{item.detail}</p>
                  </div>
                </article>
              </StaggerChild>
            ))}
          </Stagger>
        ) : (
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14">
            {professionalTimeline.map((item, index) => {
              const current = index === professionalTimeline.length - 1;
              return (
                <StaggerChild key={item.id} className={current ? "md:col-span-2" : undefined}>
                  <article
                    className={
                      current
                        ? "flex h-full flex-col gap-4 rounded-[28px] bg-navy p-6 text-white shadow-[var(--shadow-soft)] sm:flex-row sm:items-start sm:gap-6 sm:p-8"
                        : "flex h-full flex-col rounded-[28px] border border-white bg-white p-6 shadow-[var(--shadow-card)]"
                    }
                  >
                    <div className="flex items-center gap-3">
                      <IconBadge
                        name={item.icon as IconBadgeName}
                        size="sm"
                        className={
                          current ? "border-white/15 bg-white/10 text-teal-bright" : undefined
                        }
                      />
                      <span
                        className={
                          current
                            ? "text-[11px] font-bold tabular-nums tracking-[0.16em] text-teal-bright"
                            : "text-[11px] font-bold tabular-nums tracking-[0.16em] text-teal"
                        }
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3
                        className={
                          current
                            ? "text-lg font-bold text-white"
                            : "mt-5 text-lg font-bold text-navy"
                        }
                      >
                        {item.title}
                      </h3>
                      <p
                        className={
                          current
                            ? "mt-2 max-w-3xl text-[15px] leading-relaxed text-white/75"
                            : "mt-2 text-[15px] leading-relaxed text-muted"
                        }
                      >
                        {item.detail}
                      </p>
                    </div>
                  </article>
                </StaggerChild>
              );
            })}
          </Stagger>
        )}
      </Container>
    </section>
  );
}
