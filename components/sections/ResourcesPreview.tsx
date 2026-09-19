import Link from "next/link";
import { resourceSections, disclaimer } from "@/data/resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResourceCard } from "@/components/cards/ResourceCard";

export function ResourcesPreview() {
  return (
    <section className="section-y surface-dark relative overflow-hidden bg-navy mesh-navy">
      <Container className="relative">
        <SectionHeading
          label="Resources"
          dark
          title={
            <>
              Patient <span className="text-teal-bright">resources</span>
            </>
          }
          description="Prepare for informed conversations with your clinician."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {resourceSections.slice(0, 4).map((r) => (
            <li key={r.id}>
              <ResourceCard resource={r} variant="dark" />
            </li>
          ))}
        </ul>
        <Link
          href="/patient-resources"
          className="link-underline mt-10 inline-block text-sm font-semibold text-teal-bright"
        >
          View all resources →
        </Link>
        <p className="text-caption mt-10 max-w-2xl">
          {disclaimer}
        </p>
      </Container>
    </section>
  );
}
