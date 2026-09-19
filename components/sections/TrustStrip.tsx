import { Activity, HeartPulse, Stethoscope, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

const items = [
  { label: "ORTHOPAEDICS", icon: Stethoscope },
  { label: "SPORTS MEDICINE", icon: Activity },
  { label: "PATIENT-CENTRED CARE", icon: HeartPulse },
  { label: "MOVEMENT & RECOVERY", icon: TrendingUp },
] as const;

export function TrustStrip() {
  return (
    <section
      className="border-y border-border-subtle bg-surface py-6"
      aria-label="Focus areas"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-8 md:gap-12"
              >
                {i > 0 && (
                  <span
                    className="hidden size-1 rounded-full bg-gold/60 sm:inline"
                    aria-hidden
                  />
                )}
                <span className="inline-flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-full bg-mint text-teal">
                    <Icon className="size-3.5" strokeWidth={2} aria-hidden />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.12em] text-navy md:text-xs">
                    {item.label}
                  </span>
                </span>
              </span>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
