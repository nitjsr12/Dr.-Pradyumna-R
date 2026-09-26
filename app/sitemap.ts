import type { MetadataRoute } from "next";
import { blogPostSlugs } from "@/data/blog";
import { treatmentSlugs } from "@/data/treatments";
import { siteConfig } from "@/lib/utils";

const routes = [
  "",
  "/about",
  "/treatments",
  "/area-of-specialties",
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
  const staticPages = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPages = blogPostSlugs.map((slug) => ({
    url: `${siteConfig.url}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const treatmentPages = treatmentSlugs.map((slug) => ({
    url: `${siteConfig.url}/treatments/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...treatmentPages, ...blogPages];
}
