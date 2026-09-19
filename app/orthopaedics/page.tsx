import { PageHero } from "@/components/hero/PageHero";
import { OrthopaedicsSection } from "@/components/sections/OrthopaedicsSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Container } from "@/components/ui/Container";
import { Bone, Move, Activity, HeartPulse, BookOpen, TrendingUp } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Orthopaedic Care in Bengaluru",
  "Orthopaedic care built around function and movement.",
  "/orthopaedics"
);

const topics = [
  { label: "Musculoskeletal concerns", icon: Bone },
  { label: "Joint concerns", icon: Move },
  { label: "Sports injuries", icon: Activity },
  { label: "Movement limitations", icon: TrendingUp },
  { label: "Recovery", icon: HeartPulse },
  { label: "Patient education", icon: BookOpen },
] as const;

export default function OrthopaedicsPage() {
  return (
    <>
      <PageHero
        label="Orthopaedics"
        title={
          <>
            Orthopaedic care built around{" "}
            <span className="text-accent">function.</span>
          </>
        }
      />
      <Container className="border-b border-border-subtle py-10 mesh-light">
        <ul className="flex flex-wrap justify-center gap-3">
          {topics.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2.5 text-sm font-semibold text-navy shadow-[var(--shadow-card)]"
            >
              <Icon className="size-4 text-teal" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
      </Container>
      <OrthopaedicsSection />
      <ConsultationCTA />
    </>
  );
}
