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
  { href: "/about", label: "About Dr. Pradyumna" },
  { href: "/area-of-specialties", label: "Area of Specialties" },
  { href: "/sports-medicine", label: "Sports Medicine" },
  { href: "/orthopaedics", label: "Orthopaedics" },
] as const;

export const footerResources = [{ href: "/faqs", label: "FAQs" }] as const;
