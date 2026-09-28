/** Shared inner-page hero banner (doctor + clinical scene). */
export const pageBanner = {
  src: "/images/hero/page-banner.webp",
  /** Doctor portrait sits on the right — keep copy on the left. */
  position: "object-[72%_center]",
  /**
   * Shorter heroes (e.g. articles index) — shift focal point up so the head stays in frame.
   */
  articlesPosition: "object-[68%_18%]",
} as const;
