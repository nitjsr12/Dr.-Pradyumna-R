import type { Metadata } from "next";
import { doctor } from "@/data/doctor";
import { siteConfig } from "@/lib/utils";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | Dr. Pradyumna R`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Dr. Pradyumna R`,
      description,
      url: `${siteConfig.url}${path}`,
    },
    twitter: { title: `${title} | Dr. Pradyumna R`, description },
  };
}

export function medicalDoctorJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.overview,
    medicalSpecialty: ["Orthopaedic Surgery", "Sports Medicine"],
    knowsLanguage: [...doctor.languages],
    hasCredential: doctor.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q,
    })),
    memberOf: doctor.memberships.map((m) => ({
      "@type": "Organization",
      name: m,
    })),
    worksFor: {
      "@type": "Hospital",
      name: doctor.affiliation.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: doctor.address.hospital,
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560062",
        addressCountry: "IN",
      },
      telephone: doctor.booking.hospitalLine,
    },
    areaServed: { "@type": "City", name: "Bengaluru" },
    url: siteConfig.url,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
