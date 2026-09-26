"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { aboutLocations } from "@/data/about-locations";
import { getContactEnquiryWhatsAppUrl, type ContactEnquiryForm } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const enquiryTypes = [
  "Book a consultation",
  "Second opinion",
  "Treatment / procedure question",
  "Follow-up after injury",
  "Other",
] as const;

const initial: ContactEnquiryForm = {
  name: "",
  phone: "",
  email: "",
  location: aboutLocations[0]?.name ?? "",
  enquiryType: enquiryTypes[0],
  message: "",
};

const fieldClass =
  "focus-ring mt-2 h-12 w-full rounded-xl border border-border-subtle bg-white px-4 text-sm transition-shadow focus:border-teal/40 focus:shadow-[var(--shadow-soft)]";

export function ContactForm() {
  const [form, setForm] = useState<ContactEnquiryForm>(initial);
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof ContactEnquiryForm, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }
    const url = getContactEnquiryWhatsAppUrl({ ...form, name, phone });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-border-subtle/80 bg-white p-6 shadow-[var(--shadow-card)] md:p-8 lg:p-10"
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#128C7E]">
          <MessageCircle className="size-6" strokeWidth={1.75} aria-hidden />
        </span>
        <div>
          <h2 className="font-heading text-xl font-bold text-navy md:text-2xl">
            Send an enquiry
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Fill in the details below — you&apos;ll be taken to WhatsApp with a pre-filled
            message to the clinic team.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2 sm:grid sm:grid-cols-2 sm:gap-5">
          <div>
            <label htmlFor="contact-name" className="text-sm font-semibold text-navy">
              Full name <span className="text-teal">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={fieldClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="text-sm font-semibold text-navy">
              Phone <span className="text-teal">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className={fieldClass}
              placeholder="10-digit mobile"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-email" className="text-sm font-semibold text-navy">
            Email <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-type" className="text-sm font-semibold text-navy">
            Enquiry type
          </label>
          <select
            id="contact-type"
            name="enquiryType"
            value={form.enquiryType}
            onChange={(e) => update("enquiryType", e.target.value)}
            className={cn(fieldClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230C7F82' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
            }}
          >
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-location" className="text-sm font-semibold text-navy">
            Preferred location
          </label>
          <select
            id="contact-location"
            name="location"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className={cn(fieldClass, "appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10")}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230C7F82' stroke-width='2'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E")`,
            }}
          >
            {aboutLocations.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-navy">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(fieldClass, "h-auto min-h-[120px] py-3")}
            placeholder="Briefly describe your symptoms, injury or what you'd like help with…"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
        Continue on WhatsApp
        <MessageCircle className="size-4" aria-hidden />
      </Button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        By continuing, you open WhatsApp with your enquiry pre-written. Send the message there
        to reach the clinic. For emergencies, call the hospital directly.
      </p>
    </form>
  );
}
