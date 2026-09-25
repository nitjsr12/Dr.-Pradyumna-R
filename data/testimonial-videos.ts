/**
 * Client testimonial videos for the homepage section before the footer.
 */

export const testimonialTopics = [
  { id: "all", label: "All" },
  { id: "knee", label: "Knee" },
  { id: "shoulder", label: "Shoulder" },
  { id: "hip", label: "Hip" },
  { id: "ankle", label: "Ankle" },
] as const;

export type TestimonialTopicId = (typeof testimonialTopics)[number]["id"];
export type TestimonialBodyTopic = Exclude<TestimonialTopicId, "all">;

export type TestimonialVideo = {
  id: string;
  title: string;
  caption: string;
  topic: TestimonialBodyTopic;
  poster: string;
  posterPosition?: string;
  video?: { type: "youtube"; id: string } | { type: "file"; src: string };
};

export const testimonialVideos: TestimonialVideo[] = [
  {
    id: "story-shoulder",
    title: "Shoulder recovery",
    caption: "Shoulder care experience.",
    topic: "shoulder",
    poster: "/images/hero/slide-doctor.jpg",
    posterPosition: "object-[22%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-2.mp4" },
  },
  {
    id: "story-knee",
    title: "Knee treatment journey",
    caption: "Back to walking and sport.",
    topic: "knee",
    poster: "/images/hero/slide-movement.jpg",
    posterPosition: "object-[70%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-3.mp4" },
  },
  {
    id: "story-hip",
    title: "Hip & movement",
    caption: "Recovery and return to movement.",
    topic: "hip",
    poster: "/images/hero/slide-precision.jpg",
    posterPosition: "object-[30%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-1.mp4" },
  },
  {
    id: "story-knee-2",
    title: "Knee rehabilitation",
    caption: "Patient perspective on rehab.",
    topic: "knee",
    poster: "/images/hero/slide-sports.jpg",
    posterPosition: "object-center",
    video: { type: "file", src: "/videos/testimonials/testimonial-1.mp4" },
  },
  {
    id: "story-ankle",
    title: "Ankle injury care",
    caption: "Getting back on your feet.",
    topic: "ankle",
    poster: "/images/hero/slide-movement.jpg",
    posterPosition: "object-[40%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-2.mp4" },
  },
  {
    id: "story-shoulder-2",
    title: "Rotator cuff journey",
    caption: "Confidence in daily activity.",
    topic: "shoulder",
    poster: "/images/hero/slide-precision.jpg",
    posterPosition: "object-[50%_center]",
    video: { type: "file", src: "/videos/testimonials/testimonial-3.mp4" },
  },
];
