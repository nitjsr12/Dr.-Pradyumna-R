"use client";

import Image from "next/image";
import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { expertisePages } from "@/data/expertise";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function ExpertiseBlock({
  item,
  index,
}: {
  item: (typeof expertisePages)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const Icon = item.icon;
  const flip = index % 2 === 1;
  const tinted = index % 2 === 0;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-10 md:py-14 lg:py-16",
        tinted
          ? "bg-gradient-to-br from-mint/40 via-white to-bg-warm"
          : "bg-white"
      )}
    >
      {tinted && (
        <div
          className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-teal/10 blur-3xl"
          aria-hidden
        />
      )}

      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16",
            flip && "lg:[direction:rtl]"
          )}
        >
          <motion.div
            className={cn("lg:col-span-6", flip && "lg:[direction:ltr]")}
            initial={reduce ? false : { opacity: 0, x: flip ? 32 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="group relative overflow-hidden rounded-[28px] bg-navy shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                <motion.div
                  className="absolute inset-0"
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  transition={{ duration: 0.65, ease }}
                >
                  <Image
                    src={item.image ?? "/images/hero/slide-doctor.jpg"}
                    alt={item.imageAlt ?? item.title}
                    fill
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className={cn(
                      "object-cover transition-transform duration-700",
                      item.imagePosition ?? "object-center"
                    )}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"
                  aria-hidden
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-teal">
                  {item.number}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={cn("lg:col-span-6", flip && "lg:[direction:ltr]")}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.06, ease }}
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
              <Icon className="size-6" strokeWidth={1.75} aria-hidden />
            </span>
            {item.kicker && (
              <p className="mt-5 text-sm font-semibold text-teal">{item.kicker}</p>
            )}
            <h2 className="title-section mt-2 text-balance !text-[clamp(1.65rem,3.2vw,2.25rem)]">
              {item.title}
            </h2>
            <p className="text-body mt-5 max-w-xl text-[16px] leading-relaxed">
              {item.description}
            </p>

            <h3 className="label-caps mt-8">Common concerns</h3>
            <ul className="mt-4 space-y-3">
              {item.concerns?.map((concern, concernIndex) => (
                <motion.li
                  key={concern}
                  className="flex gap-3 text-[15px] leading-relaxed text-navy/80"
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + concernIndex * 0.06, ease }}
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                  {concern}
                </motion.li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
              {item.whenToConsult}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <BookAppointmentLink>
                  Book consultation
                  <ArrowRight className="size-4" />
                </BookAppointmentLink>
              </Button>
              {item.href !== "/expertise" && (
                <Button asChild variant="secondary">
                  <Link href={item.href}>Learn more</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function ExpertisePageContent() {
  return (
    <div className="relative">
      {expertisePages.map((item, index) => (
        <ExpertiseBlock key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}
