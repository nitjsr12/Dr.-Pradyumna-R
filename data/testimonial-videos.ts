/**
 * Client testimonial videos for the homepage section before the footer.
 */

export type TestimonialVideo = {
  id: string;
  title: string;
  caption: string;
  poster: string;
  posterPosition?: string;
  video?: { type: "youtube"; id: string } | { type: "file"; src: string };
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "story-1",
    title: "Patient testimonial",
    caption: "Recovery and return to movement.",
    poster: "/images/hero/slide-precision.jpg",
    posterPosition: "object-[30%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-1.mp4" },
  },
  {
    id: "story-2",
    title: "Patient testimonial",
    caption: "Shoulder care experience.",
    poster: "/images/hero/slide-doctor.jpg",
    posterPosition: "object-[22%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-2.mp4" },
  },
  {
    id: "story-3",
    title: "Patient testimonial",
    caption: "Knee treatment journey.",
    poster: "/images/hero/slide-movement.jpg",
    posterPosition: "object-[70%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-3.mp4" },
  },
];
