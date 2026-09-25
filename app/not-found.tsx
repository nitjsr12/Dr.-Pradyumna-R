import Link from "next/link";
import { BookAppointmentLink } from "@/components/layout/BookAppointmentLink";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-heading text-[clamp(5rem,15vw,8rem)] font-bold leading-none text-teal/20">
        404
      </p>
      <h1 className="title-section mt-6 max-w-md">
        Looks like this page took a wrong turn.
      </h1>
      <p className="text-secondary mt-4 max-w-sm">
        The link may be outdated, or the page may have moved.
      </p>
      <svg
        className="mt-10 w-56 opacity-25"
        viewBox="0 0 200 40"
        aria-hidden
      >
        <path
          d="M0 30 Q50 5 100 25 T200 15"
          fill="none"
          stroke="#0C7F82"
          strokeWidth="1.5"
        />
      </svg>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back Home</Link>
        </Button>
        <Button asChild variant="secondary">
          <BookAppointmentLink>Book Consultation</BookAppointmentLink>
        </Button>
      </div>
    </Container>
  );
}
