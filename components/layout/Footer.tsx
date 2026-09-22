import Link from "next/link";
import { footerExplore, footerResources } from "@/data/navigation";
import { doctor } from "@/data/doctor";

export function Footer() {
  return (
    <footer className="surface-dark relative bg-navy-deep pt-16 pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-14">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-bright/40 to-transparent"
        aria-hidden
      />
      <div className="container-site grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-sm font-bold tracking-[0.12em] text-white">
            {doctor.shortName}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.1em] text-white/55">
            ORTHOPAEDICS • SHOULDER • SPORTS MEDICINE
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Specialist practice focused on shoulder and elbow surgery, sports
            injuries, arthroscopy and orthopaedic conditions.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            <span className="text-white/45">Professional affiliation</span>
            <br />
            {doctor.affiliation.name}, {doctor.city}
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="footer-heading">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {footerExplore.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring text-sm text-white/65 transition-colors hover:text-teal-bright"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="footer-heading">Patient Information</p>
          <ul className="mt-5 space-y-2.5">
            {footerResources.map((l) => (
              <li key={l.href + l.label}>
                <Link
                  href={l.href}
                  className="focus-ring text-sm text-white/65 transition-colors hover:text-teal-bright"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="footer-heading">Contact</p>
          <p className="mt-5 text-sm font-medium text-white/90">{doctor.city}</p>
          <Link
            href="/book-appointment"
            className="focus-ring mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-bright transition-opacity hover:opacity-90"
          >
            Book an Appointment →
          </Link>
        </div>
      </div>
      <div className="container-site mt-14 border-t border-white/10 pt-8">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/40">
          <Link href="/privacy-policy" className="hover:text-white/65">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white/65">
            Terms
          </Link>
          <Link href="/medical-disclaimer" className="hover:text-white/65">
            Medical Disclaimer
          </Link>
        </div>
        <p className="mt-4 text-xs text-white/35">
          © 2026 Dr. Pradyumna R. Educational content only—not medical advice.
        </p>
      </div>
    </footer>
  );
}
