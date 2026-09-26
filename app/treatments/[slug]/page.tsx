import { notFound } from "next/navigation";
import { TreatmentPageContent } from "@/components/pages/TreatmentPageContent";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { JsonLd } from "@/components/json-ld";
import { getTreatmentPage, treatmentSlugs } from "@/data/treatments";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) return {};
  return {
    ...pageMetadata(page.metaTitle, page.metaDescription, `/treatments/${page.slug}`),
    keywords: page.keywords,
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Area of Specialties", path: "/area-of-specialties" },
          { name: page.pageTitle, path: `/treatments/${page.slug}` },
        ])}
      />
      <TreatmentPageContent page={page} />
      <ConsultationCTA />
    </>
  );
}
