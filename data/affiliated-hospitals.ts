/**
 * Affiliated & associated hospitals — logos, locations, Google Maps / GMB links.
 */

export type AffiliatedLocation = {
  id: string;
  name: string;
  /** Optional address line shown under the location name */
  address?: string;
  gmbHref: string;
};

export type AffiliatedOrganization = {
  id: string;
  name: string;
  tagline?: string;
  logoSrc?: string;
  /** `wide` for horizontal clinic branding; default fits hospital logos */
  logoLayout?: "standard" | "wide";
  logoAlt: string;
  websiteHref?: string;
  websiteLabel?: string;
  locations: AffiliatedLocation[];
};

/** Google Maps / Business Profile URLs (shared with About maps where applicable). */
export const affiliatedGmbLinks = {
  manipalKanakapura:
    "https://www.google.com/maps/search/?api=1&query=Manipal+Hospital+Kanakapura+Road+Bangalore",
  manipalJayanagar:
    "https://www.google.com/maps/search/?api=1&query=Manipal+Hospital+Jayanagar+Bangalore",
  bangaloreOrthopaedicClinic:
    "https://www.google.com/maps/search/?api=1&query=Bangalore+Orthopaedic+Clinic+Mico+Layout+BTM+Bangalore",
} as const;

export const bangaloreOrthopaedicClinicWebsite = "https://www.drpradyumna.com/" as const;

export const bangaloreOrthopaedicClinicAddress =
  "GF-450, 6th Main, 7th Cross, Mico Layout (behind MedPlus), BTM Layout 2nd Stage, Bangalore, Karnataka 560076";

export const affiliatedOrganizations: AffiliatedOrganization[] = [
  {
    id: "manipal",
    name: "Manipal Hospitals",
    logoSrc: "/images/affiliations/manipal-hospitals.svg",
    logoAlt: "Manipal Hospitals",
    websiteHref: "https://www.manipalhospitals.com/",
    websiteLabel: "Hospital website",
    locations: [
      {
        id: "kanakapura",
        name: "Manipal Hospital, Kanakapura Road",
        gmbHref: affiliatedGmbLinks.manipalKanakapura,
      },
      {
        id: "jayanagar",
        name: "Manipal Hospital, Jayanagar",
        gmbHref: affiliatedGmbLinks.manipalJayanagar,
      },
    ],
  },
  {
    id: "bangalore-orthopaedic-clinic",
    name: "Bangalore Orthopaedic Clinic",
    tagline: "Bone & Joint Care",
    logoSrc: "/images/affiliations/bangalore-orthopaedic-clinic.webp",
    logoLayout: "wide",
    logoAlt:
      "Bangalore Orthopaedic Clinic — Bone & Joint Care, Dr. Pradyumna R, Orthopaedic Surgeon",
    websiteHref: bangaloreOrthopaedicClinicWebsite,
    websiteLabel: "Clinic website",
    locations: [
      {
        id: "btm",
        name: "Bangalore Orthopaedic Clinic, BTM Layout",
        address: bangaloreOrthopaedicClinicAddress,
        gmbHref: affiliatedGmbLinks.bangaloreOrthopaedicClinic,
      },
    ],
  },
];

/** @deprecated Use `affiliatedOrganizations` — kept for any legacy imports. */
export const affiliatedHospitals = affiliatedOrganizations;
