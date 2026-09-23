import {
  Activity,
  Bone,
  Building2,
  ClipboardCheck,
  DoorOpen,
  HeartHandshake,
  HeartPulse,
  Scissors,
  Smile,
  Stethoscope,
  TrendingUp,
} from "lucide-react";

const items = [
  { label: "2K+ Shoulder Arthroscopy", icon: Activity },
  { label: "Hospital", icon: Building2 },
  { label: "Entering the Hospital", icon: DoorOpen },
  { label: "Consultation", icon: Stethoscope },
  { label: "Examining the Patient", icon: ClipboardCheck },
  { label: "Surgery", icon: Scissors },
  { label: "Knee Replacement", icon: Bone },
  { label: "Happy Patients", icon: Smile },
  { label: "Recovery", icon: HeartHandshake },
  { label: "Orthopaedics", icon: Bone },
  { label: "Sports Medicine", icon: Activity },
  { label: "Patient-Centred Care", icon: HeartPulse },
  { label: "Movement & Recovery", icon: TrendingUp },
] as const;

function StripRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className="flex items-center">
            <span className="inline-flex items-center gap-2.5 px-3 md:px-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint text-teal">
                <Icon className="size-3.5" strokeWidth={2} aria-hidden />
              </span>
              <span className="whitespace-nowrap text-[11px] font-bold tracking-[0.12em] text-navy md:text-xs">
                {item.label}
              </span>
            </span>
            <span className="size-1 shrink-0 rounded-full bg-gold/70" aria-hidden />
          </li>
        );
      })}
    </ul>
  );
}

export function TrustStrip() {
  return (
    <section
      className="trust-marquee relative overflow-hidden border-y border-border-subtle bg-surface py-5"
      aria-label="Care highlights"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent md:w-24"
        aria-hidden
      />
      <div className="trust-track flex w-max">
        <StripRow />
        <StripRow hidden />
      </div>
    </section>
  );
}
