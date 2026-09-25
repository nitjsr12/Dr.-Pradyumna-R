"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { doctor } from "@/data/doctor";
import { cn } from "@/lib/utils";

const steps = [
  { id: "info", label: "Your information", icon: User },
  { id: "time", label: "Preferred date / time", icon: Calendar },
  { id: "done", label: "Confirmation", icon: CheckCircle2 },
] as const;

export function BookingWizard() {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full max-w-xl rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-8 shadow-[var(--shadow-soft)] md:p-10">
      <ol className="flex gap-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const active = i === step;
          const done = i < step;
          return (
            <li
              key={s.id}
              className={cn(
                "flex flex-1 flex-col items-center gap-2 rounded-xl border px-2 py-3 text-center transition-colors",
                active && "border-teal/30 bg-mint/50",
                done && "border-teal/20 bg-mint/30",
                !active && !done && "border-border-subtle bg-bg-warm"
              )}
            >
              <Icon
                className={cn(
                  "size-5",
                  active || done ? "text-teal" : "text-muted-light"
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "hidden text-[10px] font-bold uppercase tracking-wide sm:block",
                  active ? "text-teal" : "text-muted"
                )}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      {step === 0 && (
        <div className="mt-10 space-y-4">
          <p className="text-sm text-muted">
            UI placeholder — no booking API connected.
          </p>
          {["Full name", "Phone", "Email"].map((label) => (
            <div key={label}>
              <label className="text-sm font-semibold text-navy">{label}</label>
              <input className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-bg-warm px-4 text-sm" />
            </div>
          ))}
          <Button type="button" onClick={() => setStep(1)} className="mt-4">
            Continue
          </Button>
        </div>
      )}

      {step === 1 && (
        <div className="mt-10 space-y-4">
          <label className="text-sm font-semibold text-navy">Preferred date</label>
          <input
            type="date"
            className="focus-ring h-12 w-full rounded-xl border border-border bg-bg-warm px-4"
          />
          <label className="text-sm font-semibold text-navy">Preferred time</label>
          <input
            type="time"
            className="focus-ring h-12 w-full rounded-xl border border-border bg-bg-warm px-4"
          />
          <div className="flex gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button type="button" onClick={() => setStep(2)}>
              Continue
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-10 space-y-4 text-center">
          <CheckCircle2 className="mx-auto size-12 text-teal" aria-hidden />
          <p className="text-muted">
            For live booking, use the hospital system:
          </p>
          <Button asChild className="w-full">
            <Link
              href={doctor.booking.manipalProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on Manipal Hospitals
            </Link>
          </Button>
          <p className="text-xs text-muted-light">
            Prefer to speak first? Call{" "}
            <a
              href={`tel:+91${doctor.booking.clinicPhone}`}
              className="font-semibold text-teal hover:underline"
            >
              {doctor.booking.clinicPhoneDisplay}
            </a>
            .
          </p>
          <Button
            type="button"
            variant="ghost"
            className="mx-auto"
            onClick={() => setStep(0)}
          >
            Start over
          </Button>
        </div>
      )}
    </div>
  );
}
