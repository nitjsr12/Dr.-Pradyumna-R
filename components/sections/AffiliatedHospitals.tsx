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

        <ul className="mt-8 flex justify-center md:mt-10">
          {affiliatedHospitals.map((hospital) => (
            <li key={hospital.id}>
              <Link
                href={hospital.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} w-[min(100%,240px)]`}
                aria-label={`${hospital.name} — open link`}
              >
                <span className="flex flex-1 items-center justify-center py-2">
                  <Image
                    src={hospital.logoSrc}
                    alt={hospital.logoAlt}
                    width={190}
                    height={56}
                    className="h-auto max-h-14 w-full max-w-[190px] object-contain"
                  />
                </span>
                <span className="mt-5 font-heading text-[15px] font-bold leading-snug text-navy">
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
