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
    id: "sakra-world",
    name: "Sakra World Hospital",
    logoSrc: "/images/affiliations/sakra-world.svg",
    logoAlt: "Sakra World Hospital",
    href: "https://www.google.com/maps/search/?api=1&query=Sakra+World+Hospital+Bengaluru",
  },
  {
    id: "sakra-ikoc",
    name: "Sakra IKOC Hospital",
    logoSrc: "/images/affiliations/sakra-ikoc.svg",
    logoAlt: "Sakra IKOC Hospital",
    href: "https://www.google.com/maps/search/?api=1&query=Sakra+IKOC+Hospital+Bengaluru",
  },
  {
    id: "sparsh",
    name: "Sparsh Hospital",
    logoSrc: "/images/affiliations/sparsh.svg",
    logoAlt: "Sparsh Hospital",
    href: "https://www.google.com/maps/search/?api=1&query=Sparsh+Hospital+Bengaluru",
  },
  {
    id: "gm",
    name: "GM Hospital",
    logoSrc: "/images/affiliations/gm-hospital.svg",
    logoAlt: "GM Hospital",
    href: "https://www.google.com/maps/search/?api=1&query=GM+Hospital+Bengaluru",
  },
  {
    id: "rangadore",
    name: "Rangadore Memorial Hospital",
    logoSrc: "/images/affiliations/rangadore.svg",
    logoAlt: "Rangadore Memorial Hospital",
    href: "https://www.google.com/maps/search/?api=1&query=Rangadore+Memorial+Hospital+Bengaluru",
  },
  {
    id: "manipal",
    name: "Manipal Hospitals Bengaluru",
    logoSrc: "/images/affiliations/manipal-hospitals.svg",
    logoAlt: "Manipal Hospitals",
    href: doctor.booking.manipalProfileUrl,
  },
];
