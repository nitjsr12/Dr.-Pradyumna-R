import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
