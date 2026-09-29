import { doctor } from "@/data/doctor";

export type AffiliatedHospital = {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  href: string;
};

export const affiliatedHospitals: AffiliatedHospital[] = [
  {
    id: "manipal",
    name: "Manipal Hospitals Bengaluru",
    logoSrc: "/images/affiliations/manipal-hospitals.svg",
    logoAlt: "Manipal Hospitals",
    href: doctor.booking.manipalProfileUrl,
  },
];
