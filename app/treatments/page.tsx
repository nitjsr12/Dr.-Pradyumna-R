import { redirect } from "next/navigation";

/** Legacy URL — content lives on Area of Specialties. */
export default function TreatmentsPage() {
  redirect("/area-of-specialties");
}
