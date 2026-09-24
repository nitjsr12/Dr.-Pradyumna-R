/**
 * Clinic locations for the About page map section.
 * Embed URLs open the location in Google Maps.
 */

export type AboutLocation = {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  embedSrc: string;
};

export const aboutLocations: AboutLocation[] = [
  {
    id: "kanakapura",
    name: "Manipal Hospital — Kanakapura Road",
    address:
      "Kanakapura Main Rd, Yelachenahalli, Bengaluru, Karnataka 560062 (near Yelachenahalli Metro)",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Manipal+Hospital+Kanakapura+Road+Bengaluru",
    embedSrc:
      "https://www.google.com/maps?q=Manipal+Hospital+Kanakapura+Road+Bengaluru&output=embed",
  },
  {
    id: "jayanagar",
    name: "Manipal Hospital — Jayanagar",
    address: "9th Block, Jayanagar, Bengaluru, Karnataka",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Manipal+Hospital+Jayanagar+Bengaluru",
    embedSrc:
      "https://www.google.com/maps?q=Manipal+Hospital+Jayanagar+9th+Block+Bengaluru&output=embed",
  },
  {
    id: "btm",
    name: "Bangalore Orthopaedic Clinic — BTM Layout",
    address: "BTM Layout 2nd Stage, Bengaluru, Karnataka 560076",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bangalore+Orthopaedic+Clinic+BTM+Layout",
    embedSrc:
      "https://www.google.com/maps?q=BTM+Layout+2+Stage+Orthopaedic+Clinic+Bengaluru&output=embed",
  },
];
