// ---------------------------------------------------------------
// Edit this file to change the brand, text, links and images.
// ---------------------------------------------------------------
const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const BRAND = {
  name: "The Cubik Spaces",
  // suffix: "Interiors",
  email: "thecubikspaces@gmail.com",
  phone: "+91 8074553374",
  city: "Hyderabad, India",
};

export const BENEFITS = [
  "Fixed pricing, no hidden fees",
  "Free design consultation",
  "On-time project handover",
  "10-year warranty on woodwork",
];

export const NAV = {
  spaces: [
    { label: "Living rooms", href: "#portfolio" },
    { label: "Modular kitchens", href: "#portfolio" },
    { label: "Bedrooms", href: "#portfolio" },
    { label: "Wardrobes", href: "#portfolio" },
  ],
  commercial: [
    { label: "Offices", href: "#portfolio" },
    { label: "Retail stores", href: "#portfolio" },
    { label: "Cafés & restaurants", href: "#portfolio" },
  ],
  learn: [
    { label: "Our services", href: "#services" },
    { label: "How it works", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

export const PILLS = [
  "Living room",
  "Kitchen",
  "Bedroom",
  "Wardrobes",
  "Home office",
  "Full home",
  "Commercial",
];

export const PROMOS = [
  { text: "Full-home interiors from design to handover", href: "#services" },
  { text: "Modular kitchens built to last a decade", href: "#portfolio" },
  { text: "Book a free design consultation this week", href: "#contact" },
];

export const IMAGES = {
  hero: img("photo-1618221195710-dd6b41faaea6", 2000),
  banner: img("photo-1616486338812-3dadae4b4ace", 2000),
  feature: img("photo-1600210492486-724fe5c67fb0", 1400),
  living: img("photo-1586023492125-27b2c045efd7", 1600),
  kitchen: img("photo-1556909114-f6e7ad7d3136", 1600),
  bedroom: img("photo-1505693416388-ac5ce068fe85", 1600),
  office: img("photo-1497366216548-37526070297c", 1600),
  cardA: img("photo-1600585154340-be6161a56a0c", 900),
  cardB: img("photo-1615874959474-d609969a20ed", 900),
  cardC: img("photo-1600607687939-ce8a6c25118c", 900),
  cta: img("photo-1600566753086-00f18fb6b3ea", 1400),
};

export const SERVICES = [
  {
    title: "Modular kitchens",
    text: "Efficient layouts, durable finishes and storage that fits how you cook.",
    image: IMAGES.cardA,
  },
  {
    title: "Wardrobes & storage",
    text: "Custom wardrobes, shoe units and loft storage sized to your walls.",
    image: IMAGES.cardB,
  },
  {
    title: "Living & bedrooms",
    text: "Furniture, lighting and finishes chosen as one complete, calm scheme.",
    image: IMAGES.cardC,
  },
];

export const FEATURE_POINTS = [
  "Space planning around your routine",
  "Materials chosen for durability",
  "One team from design to handover",
  "All of the above",
];

export const STEPS = [
  {
    title: "Free consultation",
    text: "Tell us about your space, budget and taste. We visit the site and take measurements.",
    cta: "Book a consultation",
  },
  {
    title: "Design & quote",
    text: "You get 3D views, a material list and a fixed quote before any work begins.",
    cta: "See how quotes work",
  },
  {
  
  title: "Build & Install",
  text: "Our experienced in-house team brings your design to life with skilled craftsmanship, quality materials, and professional installation. From manufacturing to final handover, we manage every detail with regular progress updates and quality checks.",
  cta: "See our process",
  },
  {
    title: "Handover & support",
    text: "We do a final walkthrough, fix snags quickly and stand behind our warranty.",
    cta: "Read the warranty",
  },
];

export const PORTFOLIO = [
  {
    key: "living",
    label: "Living",
    title: "Living rooms that feel calm and lived in",
    image: IMAGES.living,
  },
  {
    key: "kitchen",
    label: "Kitchen",
    title: "Kitchens planned around the way you cook",
    image: IMAGES.kitchen,
  },
  {
    key: "bedroom",
    label: "Bedroom",
    title: "Bedrooms made for proper rest",
    image: IMAGES.bedroom,
  },
  {
    key: "office",
    label: "Workspace",
    title: "Workspaces your team enjoys using",
    image: IMAGES.office,
  },
];

export const FOOTER = {
  Popular: ["Living rooms", "Modular kitchens", "Bedrooms", "Wardrobes", "Home office", "Full home"],
  Services: ["Interior design", "Turnkey projects", "Modular furniture", "Renovation", "Commercial fit-outs"],
  Resources: ["Design ideas", "Blog", "FAQs", "Cost calculator", "Material guide"],
  Company: ["About us", "Our process", "Projects", "Careers", "Warranty"],
};
