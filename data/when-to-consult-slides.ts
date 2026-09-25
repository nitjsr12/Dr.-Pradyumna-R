export type WhenToConsultSlide = {
  chip: string;
  title: string;
  description: string;
  link: { label: string; href: string };
};

export const whenToConsultSlides: WhenToConsultSlide[] = [
  {
    chip: "Lingering Pain",
    title: "Pain that won't settle",
    description:
      "Knee pain on the stairs, a shoulder that aches through the night, or an ankle that's still sore after weeks of rest. Pain that lingers is your body asking for a proper diagnosis, not another painkiller.",
    link: {
      label: "Knee & shoulder pain treatment",
      href: "/treatments#knee-shoulder-pain",
    },
  },
  {
    chip: "Stiff Joints",
    title: "Movement that feels limited",
    description:
      "Can't lift your arm overhead, fully straighten your knee, or reach behind your back? Stiffness like this can signal frozen shoulder, arthritis or a hidden tear, and most of these are easier to treat when caught early.",
    link: {
      label: "Frozen shoulder treatment",
      href: "/treatments#frozen-shoulder",
    },
  },
  {
    chip: "Sports Injury",
    title: "An injury that changed how you move",
    description:
      "A pop in the knee during football, a shoulder that slipped out, or an ankle you no longer trust. These can point to an ACL, meniscus or ligament injury that needs expert assessment before you play again.",
    link: {
      label: "ACL & meniscus treatment",
      href: "/treatments#acl-meniscus",
    },
  },
  {
    chip: "Keeps Returning",
    title: "A problem that keeps coming back",
    description:
      "The knee that gives way, the shoulder that dislocates again, the ankle you keep rolling. Repeated episodes often mean joint instability, which rest and physiotherapy alone may not fix.",
    link: {
      label: "Shoulder instability treatment",
      href: "/treatments#shoulder-instability",
    },
  },
  {
    chip: "Slow Recovery",
    title: "Stuck on the road back",
    description:
      "Weeks of rehab, yet you're still not running, lifting or playing like before. A specialist review can find what's holding your recovery back and get you moving forward again.",
    link: {
      label: "Sports medicine & rehab",
      href: "/sports-medicine",
    },
  },
  {
    chip: "Daily Struggles",
    title: "When everyday life gets harder",
    description:
      "Morning stiffness, swollen knees, or struggling to walk, climb stairs or sleep because of joint pain. From PRP therapy to robotic knee replacement, today there are more options than ever, and it starts with the right assessment.",
    link: {
      label: "Knee arthritis treatment",
      href: "/treatments#knee-arthritis",
    },
  },
];
