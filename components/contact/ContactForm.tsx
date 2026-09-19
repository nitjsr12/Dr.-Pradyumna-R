"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form
      className="rounded-[var(--radius-lg)] border border-border-subtle bg-surface p-8 shadow-[var(--shadow-soft)] md:p-10"
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className="text-lg font-bold text-navy">Send an enquiry</h2>
      <p className="mt-2 text-sm text-muted">
        UI only — submissions are not sent until a backend is connected.
      </p>
      <div className="mt-8 space-y-5">
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "phone", label: "Phone", type: "tel" },
          { id: "email", label: "Email", type: "email" },
          { id: "reason", label: "Reason for enquiry", type: "text" },
        ].map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="text-sm font-semibold text-navy">
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              className="focus-ring mt-2 h-12 w-full rounded-xl border border-border bg-bg-warm px-4 text-sm transition-colors focus:border-teal/40"
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="focus-ring mt-2 w-full rounded-xl border border-border bg-bg-warm px-4 py-3 text-sm focus:border-teal/40"
          />
        </div>
      </div>
      <Button type="submit" className="mt-8 w-full sm:w-auto">
        Send Enquiry
        <Send className="size-4" />
      </Button>
      <p className="mt-4 text-xs text-muted-light">
        Privacy: information submitted here will be handled per clinic policy once
        integrated.
      </p>
    </form>
  );
}
