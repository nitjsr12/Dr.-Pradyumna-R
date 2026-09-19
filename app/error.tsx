"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="title-section max-w-md">
        Something didn&apos;t go as planned.
      </h1>
      <p className="text-secondary mt-4 max-w-sm">
        Please try again. If the problem continues, use the contact page.
      </p>
      <Button type="button" className="mt-8" onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  );
}
