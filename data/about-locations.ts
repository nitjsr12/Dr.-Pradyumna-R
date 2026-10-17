/**
 * Clinic locations for the About page map section.
 * Embed URLs open the location in Google Maps.
 */

import {
  affiliatedGmbEmbeds,
  affiliatedGmbLinks,
  bangaloreOrthopaedicClinicAddress,
} from "@/data/affiliated-hospitals";

export type AboutLocation = {
  id: string;
  name: string;
  /** Short label for map toggle pills */
  shortLabel: string;
  address: string;
  mapsUrl: string;
  embedSrc: string;
};

export const aboutLocations: AboutLocation[] = [
  {
    id: "kanakapura",
    name: "Manipal Hospital, Kanakapura Road",
    shortLabel: "Manipal, Kanakapura Road",
    address:
      "Kanakapura Main Rd, Yelachenahalli, Bangalore, Karnataka 560062 (near Yelachenahalli Metro)",
    mapsUrl: affiliatedGmbLinks.manipalKanakapura,
    embedSrc: affiliatedGmbEmbeds.manipalKanakapura,
  },
  {
    id: "jayanagar",
    name: "Manipal Hospital, Jayanagar",
    shortLabel: "Manipal, Jayanagar",
    address: "45/1, 45th Cross, Jayanagar 9th Block, Bangalore, Karnataka 560069",
    mapsUrl: affiliatedGmbLinks.manipalJayanagar,
    embedSrc: affiliatedGmbEmbeds.manipalJayanagar,
  },
  {
    id: "btm",
    name: "Bangalore Orthopaedic Clinic, BTM Layout",
    shortLabel: "Bangalore Orthopaedic Clinic",
    address: bangaloreOrthopaedicClinicAddress,
    mapsUrl: affiliatedGmbLinks.bangaloreOrthopaedicClinic,
    embedSrc: affiliatedGmbEmbeds.bangaloreOrthopaedicClinic,
  },
];
