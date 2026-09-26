import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import {
  ArrowUpRight,
  Calendar,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { PageBannerBackground } from "@/components/hero/PageBannerBackground";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { footerExplore, footerResources, mainNav } from "@/data/navigation";
import { doctor } from "@/data/doctor";
import { Button } from "@/components/ui/button";

const clinicTel = `+91${doctor.booking.clinicPhone}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doctor.booking.mapsQuery)}`;

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/medical-disclaimer", label: "Medical Disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      <PageBannerBackground overlayStrength="footer" />

      <div className="relative border-b border-white/10 bg-navy/40 backdrop-blur-[2px]">
        <div className="container-site relative flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-teal-bright">
              Next step
            </p>
            <p className="mt-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Ready for a consultation?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              Book online or call the clinic line — we&apos;ll help you plan the right visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="teal" className="shadow-lg shadow-teal/20">
              <BookAppointmentLink>
                Book appointment
                <ArrowUpRight className="size-4 opacity-90" aria-hidden />
              </BookAppointmentLink>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href={`tel:${clinicTel}`}>
                <Phone className="size-4" aria-hidden />
                {doctor.booking.clinicPhoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:24px_24px]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-bright/40 to-transparent"
          aria-hidden
        />
        <div className="container-site py-14 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="lg:col-span-4">
              <SiteLogo showTagline onDark />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
                Specialist care in shoulder and elbow surgery, sports injuries, arthroscopy and
                orthopaedic conditions — with clear communication at every step.
              </p>
              <p className="mt-4 text-sm text-white/80">
                <span className="text-white/50">Affiliation</span>
                <br />
                {doctor.affiliation.name}
                <br />
                {doctor.city}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-4">
              <div>
                <p className="footer-heading">Explore</p>
                <ul className="mt-5 space-y-2.5">
                  {footerExplore.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="focus-ring text-sm text-white/70 transition-colors hover:text-teal-bright"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="footer-heading">Site</p>
                <ul className="mt-5 space-y-2.5">
                  {mainNav.map((l) => (
                    <li key={"type" in l ? l.label : l.href}>
                      <Link
                        href={l.href}
                        className="focus-ring text-sm text-white/70 transition-colors hover:text-teal-bright"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  {footerResources.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="focus-ring text-sm text-white/70 transition-colors hover:text-teal-bright"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4">
              <p className="footer-heading">Get in touch</p>
              <ul className="mt-5 grid gap-3">
                <li>
                  <a
                    href={`tel:${clinicTel}`}
                    className="focus-ring flex gap-3 rounded-2xl border border-white/10 bg-navy/50 p-4 backdrop-blur-sm transition-colors hover:border-teal-bright/30 hover:bg-navy/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                      <Phone className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                        Clinic line
                      </span>
                      <span className="mt-1 block text-sm font-bold text-white">
                        {doctor.booking.clinicPhoneDisplay}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <BookAppointmentLink className="focus-ring flex gap-3 rounded-2xl border border-white/10 bg-navy/50 p-4 backdrop-blur-sm transition-colors hover:border-teal-bright/30 hover:bg-navy/60">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                      <Calendar className="size-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                        Appointments
                      </span>
                      <span className="mt-1 block text-sm font-bold text-white">
                        Book a consultation
                      </span>
                    </span>
                  </BookAppointmentLink>
                </li>
                <li>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex gap-3 rounded-2xl border border-white/10 bg-navy/50 p-4 backdrop-blur-sm transition-colors hover:border-teal-bright/30 hover:bg-navy/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                      <MapPin className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                        Location
                      </span>
                      <span className="mt-1 block text-sm font-bold leading-snug text-white">
                        {doctor.affiliation.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-white/60">
                        Near {doctor.address.landmark}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${doctor.booking.hospitalEmail}`}
                    className="focus-ring flex gap-3 rounded-2xl border border-white/10 bg-navy/50 p-4 backdrop-blur-sm transition-colors hover:border-teal-bright/30 hover:bg-navy/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-bright/15 text-teal-bright">
                      <Mail className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                        Email
                      </span>
                      <span className="mt-1 block text-sm font-bold leading-snug text-white break-all">
                        {doctor.booking.hospitalEmail}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-white/50">
                Hospital desk {doctor.booking.hospitalLine} · Central{" "}
                {doctor.booking.centralPhone}
              </p>
            </div>
          </div>
        </div>

        <div className="container-site border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs text-white/50 transition-colors hover:text-white/75"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} Dr. Pradyumna R.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
