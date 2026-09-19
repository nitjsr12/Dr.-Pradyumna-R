import { PageHero } from "@/components/hero/PageHero";
import { FaqList } from "@/components/pages/FaqList";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FAQs",
  "Common questions about consultations and this website.",
  "/faqs"
);

export default function FaqsPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title={
          <>
            Questions patients{" "}
            <span className="text-accent">often ask</span>
          </>
        }
        description="General information only—not a substitute for medical assessment."
      />
      <FaqList />
    </>
  );
}
