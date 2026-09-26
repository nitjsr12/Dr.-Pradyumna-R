import type { NextConfig } from "next";
import { treatmentLegacyRedirects } from "./data/treatments/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/expertise", destination: "/area-of-specialties", permanent: true },
      { source: "/blog/:slug", destination: "/articles/:slug", permanent: true },
      ...treatmentLegacyRedirects.map((r) => ({ ...r, permanent: true as const })),
    ];
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.manipalhospitals.com",
      },
      {
        protocol: "https",
        hostname: "www.drpradyumna.com",
      },
    ],
  },
};

export default nextConfig;
