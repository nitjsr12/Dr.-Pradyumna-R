import Image from "next/image";
import Link from "next/link";
import { affiliatedHospitals } from "@/data/affiliated-hospitals";
import { Container } from "@/components/ui/Container";

const cardClass =
  "focus-ring flex h-full min-h-[200px] flex-col items-center justify-between rounded-2xl border-2 border-[#7eb8dc] bg-white px-4 py-6 text-center shadow-[0_4px_24px_rgba(26,40,86,0.08)] transition-shadow hover:shadow-[0_8px_32px_rgba(26,40,86,0.12)] sm:px-5 sm:py-7";

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
          Affiliated Hospitals
        </h2>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:mt-10 lg:grid-cols-3 xl:grid-cols-6">
          {affiliatedHospitals.map((hospital) => (
            <li key={hospital.id} className="flex">
              <Link
                href={hospital.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
                aria-label={`${hospital.name} — open link`}
              >
                <span className="flex flex-1 items-center justify-center py-2">
                  <Image
                    src={hospital.logoSrc}
                    alt={hospital.logoAlt}
                    width={160}
                    height={64}
                    className="h-auto max-h-16 w-full max-w-[160px] object-contain"
                  />
                </span>
                <span className="mt-3 font-heading text-[13px] font-bold leading-snug text-navy sm:text-sm">
                  {hospital.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
