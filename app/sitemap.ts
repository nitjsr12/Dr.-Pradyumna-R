import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";

const routes = [
  "",
  "/about",
  "/treatments",
  "/expertise",
  "/sports-medicine",
  "/orthopaedics",
  "/patient-resources",
  "/gallery",
  "/articles",
  "/contact",
  "/book-appointment",
  "/privacy-policy",
  "/terms",
  "/medical-disclaimer",
  "/faqs",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
