import { doctor } from "@/data/doctor";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center bg-bg-warm">
      <p className="text-[11px] font-bold tracking-[0.14em] text-navy">
        {doctor.shortName}
      </p>
      <div className="mt-6 h-px w-28 overflow-hidden rounded-full bg-border">
        <div className="h-full w-1/2 animate-[shimmer_1.2s_ease-in-out_infinite] rounded-full bg-teal" />
      </div>
    </div>
  );
}
