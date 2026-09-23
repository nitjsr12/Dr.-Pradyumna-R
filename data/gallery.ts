export type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/images/hero/slide-movement.jpg",
    alt: "Dr. Pradyumna R with the clinical team",
  },
  {
    type: "video",
    src: "/videos/hero-movement.mp4",
    alt: "Clinical care video",
  },
  {
    type: "image",
    src: "/images/hero/slide-doctor.jpg",
    alt: "Dr. Pradyumna R in clinical scrubs",
  },
  {
    type: "video",
    src: "/videos/hero-sports.mp4",
    alt: "Movement and sports medicine video",
  },
];
