/**
 * Clinic locations for the About page map section.
 * Embed URLs open the location in Google Maps.
 */

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
    name: "Manipal Hospital — Kanakapura Road",
    shortLabel: "Manipal — Kanakapura Road",
    address:
      "Kanakapura Main Rd, Yelachenahalli, Bengaluru, Karnataka 560062 (near Yelachenahalli Metro)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Manipal+Hospital+Kanakapura+Road+Bengaluru",
    embedSrc:
      "https://www.google.com/maps?q=Manipal+Hospital+Kanakapura+Road+Bengaluru&output=embed",
  },
  {
    id: "btm",
    name: "Bangalore Orthopaedic Clinic — BTM Layout",
    shortLabel: "Bangalore Orthopaedic Clinic",
    address: "BTM Layout 2nd Stage, Bengaluru, Karnataka 560076",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bangalore+Orthopaedic+Clinic+BTM+Layout",
    embedSrc:
      "https://www.google.com/maps?q=BTM+Layout+2+Stage+Orthopaedic+Clinic+Bengaluru&output=embed",
  },
];
