/**
 * About page media slider — replace YouTube ids with your channel videos when ready.
 * Local file clips are used where no YouTube id is set yet.
 */

export type AboutMediaItem = {
  id: string;
  label: string;
  caption: string;
  youtubeId?: string;
  fileSrc?: string;
};

export const aboutMediaItems: AboutMediaItem[] = [
  {
    id: "about",
    label: "About him",
    caption: "Introduction to Dr. Pradyumna R and his approach to orthopaedic care.",
    fileSrc: "/videos/hero-musculoskeletal.mp4",
  },
  {
    id: "podcast",
    label: "Podcast",
    caption: "Conversations on sports medicine, recovery and movement.",
    youtubeId: "56LvLRi3_iA",
  },
  {
    id: "shoulder",
    label: "Shoulder",
    caption: "Shoulder arthroscopy and shoulder-focused care.",
    fileSrc: "/videos/credentials/shoulder.mp4",
  },
  {
    id: "knee",
    label: "Knee / Video",
    caption: "Knee arthroscopy and knee treatment pathways.",
    fileSrc: "/videos/credentials/knee-arthroscopy.mp4",
  },
  {
    id: "testimonial",
    label: "Testimonial",
    caption: "Patient stories in their own words.",
    fileSrc: "/videos/testimonials/testimonial-1.mp4",
  },
];
