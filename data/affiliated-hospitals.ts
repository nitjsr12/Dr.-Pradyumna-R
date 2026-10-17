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

/**
 * Google Business Profile / Maps place URLs (shared with About maps).
 * Place IDs from official hospital embeds and the clinic listing on drpradyumna.com.
 */
export const affiliatedGmbLinks = {
  manipalKanakapura:
    "https://www.google.com/maps/place/Manipal+Hospitals,+Kanakpura+road/@12.8937875,77.5662821,17z/data=!4m6!3m5!1s0x3bae1599a9235df7:0x4359a567ae246c81!8m2!3d12.8937875!4d77.5662821",
  manipalJayanagar:
    "https://www.google.com/maps/place/Manipal+Hospital+Jayanagar/@12.917088,77.5943795,17z/data=!4m6!3m5!1s0x0:0xa5712ccedb6d0c26!8m2!3d12.917088!4d77.5943795",
  bangaloreOrthopaedicClinic:
    "https://www.google.com/maps/place/Bangalore+Orthopaedic+Clinic+-+Dr.+Pradyumna+R/@12.913448,77.6077179,17z/data=!4m6!3m5!1s0x3bae158818a07f8d:0x911b068b3691873!8m2!3d12.913448!4d77.6077179",
} as const;

/** Map embeds aligned with each GMB listing (About page). */
export const affiliatedGmbEmbeds = {
  manipalKanakapura:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.216628688862!2d77.56370717895378!3d12.893787454963489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1599a9235df7%3A0x4359a567ae246c81!2sManipal%20Hospitals%2C%20Kanakpura%20road!5e0!3m2!1sen!2sin!4v1748582907076!5m2!1sen!2sin",
  manipalJayanagar:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.708490765648!2d77.591805!3d12.917088000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5712ccedb6d0c26!2sManipal%20Hospital%20Jayanagar!5e0!3m2!1sen!2sin!4v1576394142051!5m2!1sen!2sin",
  bangaloreOrthopaedicClinic:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.4554495595578!2d77.605143!3d12.913448000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158818a07f8d%3A0x911b068b3691873!2sBangalore%20Orthopaedic%20Clinic%20-%20Dr.%20Pradyumna%20R%20-%20Best%20Orthopedic%20Doctor%20In%20Bangalore%2C%20knee%2C%20Joint%20Replacement%20%26%20Sports%20Injury!5e0!3m2!1sen!2sus!4v1730292953377!5m2!1sen!2sus",
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
