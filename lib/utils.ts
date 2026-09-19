import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { doctor } from "@/data/doctor";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: doctor.name,
  title:
    "Dr. Pradyumna R | Orthopaedics & Sports Medicine Specialist in Bengaluru",
  description:
    "Personal orthopaedic and sports medicine practice of Dr. Pradyumna R in Bengaluru. Expertise, patient resources and consultation information.",
  url: "https://www.drpradyumna.com",
  locale: "en_IN",
  manipalProfileUrl: doctor.booking.manipalProfileUrl,
  appointmentPhone: doctor.booking.centralPhone,
  hospitalPhone: doctor.booking.hospitalLine,
  hospitalEmail: doctor.booking.hospitalEmail,
  address: {
    line: doctor.affiliation.name,
    city: doctor.city,
    full: doctor.address.hospital,
    landmark: doctor.address.landmark,
    mapsQuery: "Manipal+Hospital+Kanakapura+Road+Yelachenahalli",
  },
  clinic: {
    name: "Consultation — Bengaluru",
    full: doctor.address.hospital,
    mapsQuery: "Manipal+Hospital+Kanakapura+Road+Yelachenahalli",
  },
  manipalLocations: [
    {
      name: doctor.affiliation.name,
      address: doctor.address.hospital,
      mapsQuery: "Manipal+Hospital+Kanakapura+Road+Yelachenahalli",
    },
  ],
  workingHours: {
    days: "Information coming soon",
    slots: ["Contact hospital for clinic hours"],
  },
  clinicPhone: doctor.booking.centralPhone,
  clinicPhoneTel: doctor.booking.centralPhone.replace(/\s/g, ""),
} as const;
