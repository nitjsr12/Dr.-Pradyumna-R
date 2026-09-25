"use client";

import Link from "next/link";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { disclaimer } from "@/data/resources";

export function FaqList() {
  return (
    <Container className="section-y max-w-3xl">
      <FaqAccordion />
      <p className="mt-10 text-sm text-muted-light">{disclaimer}</p>
      <Link
        href="/contact"
        className="link-underline mt-6 inline-block text-sm font-semibold text-teal"
      >
        Contact us →
      </Link>
    </Container>
  );
}
