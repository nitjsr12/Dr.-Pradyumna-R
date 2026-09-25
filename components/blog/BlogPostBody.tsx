import type { BlogBlock } from "@/data/blog/types";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import type { FaqItem } from "@/data/faqs";

function blocksToFaqs(
  block: Extract<BlogBlock, { type: "faqs" }>,
  keyPrefix: string
): FaqItem[] {
  return block.items.map((item, i) => ({
    id: `${keyPrefix}-faq-${i}`,
    question: item.question,
    answer: item.answer,
  }));
}

export function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="blog-prose space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-[15px] leading-relaxed text-muted md:text-base md:leading-relaxed">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-heading text-2xl font-bold tracking-tight text-navy md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="font-heading text-xl font-bold text-navy">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-border-subtle">
                <table className="w-full min-w-[280px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle bg-mint/40">
                      <th className="px-4 py-3 font-bold text-navy">{block.headers[0]}</th>
                      <th className="px-4 py-3 font-bold text-navy">{block.headers[1]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map(([a, b]) => (
                      <tr key={a} className="border-b border-border-subtle last:border-0">
                        <td className="px-4 py-3 font-medium text-navy">{a}</td>
                        <td className="px-4 py-3 text-muted">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "faqs": {
            const faqs = blocksToFaqs(block, `block-${i}`);
            return (
              <div key={i} className="pt-4">
                {block.title && (
                  <h2 className="mb-4 font-heading text-2xl font-bold text-navy">{block.title}</h2>
                )}
                <FaqAccordion items={faqs} defaultOpenId={null} compact />
              </div>
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
