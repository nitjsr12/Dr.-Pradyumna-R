export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { type: "specialties" as const, href: "/area-of-specialties", label: "Specialties" },
  { href: "/articles", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/area-of-specialties", label: "Specialties" },
  { href: "/articles", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerExplore = [
  { href: "/about", label: "About Dr. Pradyumna R" },
  { href: "/articles", label: "Blogs & guides" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
] as const;

export const footerSpecialistServices = [
  { href: "/sports-medicine", label: "Sports Medicine" },
  { href: "/orthopaedics", label: "Orthopaedics" },
  { href: "/area-of-specialties#general-treatments", label: "Treatments & procedures" },
  { href: "/area-of-specialties#knee-procedures", label: "Knee procedures" },
  { href: "/area-of-specialties#shoulder-procedures", label: "Shoulder procedures" },
  { href: "/area-of-specialties#elbow-procedures", label: "Elbow procedures" },
  { href: "/area-of-specialties#other-procedures", label: "Foot & ankle procedures" },
  { href: "/area-of-specialties#hip-procedures", label: "Hip procedures" },
] as const;

export const footerResources = [{ href: "/book-appointment", label: "Book appointment" }] as const;
