import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { affiliatedOrganizations } from "@/data/affiliated-hospitals";
import { Container } from "@/components/ui/Container";
const cardClass =
  "flex h-full flex-col rounded-2xl border-2 border-[#7eb8dc] bg-white px-5 py-6 text-center shadow-[0_4px_24px_rgba(26,40,86,0.08)] sm:px-6 sm:py-7";

export function AffiliatedHospitals() {
  return (
    <section
      aria-labelledby="affiliated-hospitals-heading"
      className="border-t border-border-subtle bg-[#f2f6fa] py-10 md:py-14"
    >
      <Container>
        <h2
          id="affiliated-hospitals-heading"
          className="text-center font-heading text-2xl font-bold tracking-tight text-[#1e2a5a] md:text-[1.75rem]"
        >
          Affiliated &amp; Associated Hospitals
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-navy/70">
          Consultation locations in Bangalore — open each listing on Google for directions and
          reviews.
        </p>

        <ul className="mx-auto mt-8 grid max-w-4xl gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          {affiliatedOrganizations.map((org) => (
            <li key={org.id}>
              <article className={cardClass}>
                <div className="flex flex-1 flex-col items-center">
                  {org.logoSrc ? (
                    <>
                      <span className="flex min-h-[72px] items-center justify-center py-2">
                        <Image
                          src={org.logoSrc}
                          alt={org.logoAlt}
                          width={org.logoLayout === "wide" ? 280 : 190}
                          height={org.logoLayout === "wide" ? 80 : 56}
                          className={
                            org.logoLayout === "wide"
                              ? "h-auto max-h-[88px] w-full max-w-[280px] object-contain"
                              : "h-auto max-h-14 w-full max-w-[190px] object-contain"
                          }
                        />
                      </span>
                      {org.logoLayout === "wide" ? (
                        org.tagline && (
                          <p className="mt-2 text-xs font-medium text-navy/70">{org.tagline}</p>
                        )
                      ) : (
                        <h3 className="mt-4 font-heading text-[15px] font-bold leading-snug text-navy">
                          {org.name}
                        </h3>
                      )}
                    </>
                  ) : (
                    <h3 className="flex min-h-[72px] items-center justify-center py-2 font-heading text-lg font-bold leading-tight text-navy md:text-xl">
                      {org.name}
                    </h3>
                  )}

                  {org.websiteHref && (
                    <a
                      href={org.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal hover:text-navy"
                    >
                      {org.websiteLabel ?? "Website"}
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  )}
                </div>

                <ul className="mt-6 space-y-2 border-t border-navy/10 pt-5 text-left">
                  {org.locations.map((location) => (
                    <li key={location.id}>
                      <Link
                        href={location.gmbHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group flex items-start gap-2.5 rounded-xl px-2 py-2 transition-colors hover:bg-mint/50"
                      >
                        <MapPin
                          className="mt-0.5 size-4 shrink-0 text-teal group-hover:text-navy"
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-snug text-navy group-hover:text-teal">
                            {location.name}
                          </span>
                          {location.address && (
                            <span className="mt-1 block text-xs leading-relaxed text-navy/65">
                              {location.address}
                            </span>
                          )}
                          <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-muted group-hover:text-teal/90">
                            View on Google Maps
                            <ExternalLink className="size-3" aria-hidden />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
