export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export const serviceLinks = [
  {
    name: "Web Development",
    description: "Custom, responsive websites and applications",
    path: "/services/web-development/",
  },
  {
    name: "Mobile App Development",
    description: "iOS and Android applications",
    path: "/services/mobile-app-development/",
  },
  {
    name: "UI/UX Design",
    description: "Intuitive, user-centered interfaces",
    path: "/services/ui-ux/",
  },
  {
    name: "Graphic Designing",
    description: "Brand identity and visual systems",
    path: "/services/graphic-design/",
  },
  {
    name: "Digital Marketing",
    description: "Strategic online marketing campaigns",
    path: "/services/digital-marketing/",
  },
  {
    name: "SEO",
    description: "Search engine visibility enhancement",
    path: "/services/seo-services/",
  },
];

export const capabilities = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "SEO",
  "Digital Marketing",
  "Branding",
  "Content",
  "Paid Ads",
  "Email Marketing",
  "Video Editing",
];

export const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performance websites built with modern stacks — from custom Next.js and MERN platforms to WordPress and Shopify — designed to load quickly, stay maintainable, and convert.",
    capabilities: ["Next.js & React", "MERN", "WordPress", "Shopify", "Custom platforms"],
    href: "/services/web-development/",
    tone: "light" as const,
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "iOS and Android applications that feel native, stay fast, and match the brand. We design, build, test, and ship products people actually want to use.",
    capabilities: ["iOS", "Android", "Cross-platform", "Product UI", "Launch support"],
    href: "/services/mobile-app-development/",
    tone: "dark" as const,
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Interfaces shaped around real user behaviour — wireframes, prototypes, and visual systems that make complex products feel simple and worth returning to.",
    capabilities: ["Research", "Wireframes", "Prototypes", "Design systems", "Responsive UI"],
    href: "/services/ui-ux/",
    tone: "light" as const,
  },
  {
    number: "04",
    title: "SEO",
    description:
      "Search work grounded in competitor analysis, technical health, and content — so the right people find you at the right time, not just for a week.",
    capabilities: ["Technical SEO", "On-page", "Keyword research", "Content", "Link building"],
    href: "/services/seo-services/",
    tone: "light" as const,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description:
      "Campaigns across search, social, email, and content — planned around qualified traffic, not vanity metrics. Ads, social, and storytelling under one strategy.",
    capabilities: ["PPC & ads", "Social media", "Email", "Content", "Video"],
    href: "/services/digital-marketing/",
    tone: "dark" as const,
  },
  {
    number: "06",
    title: "Graphic Design & Branding",
    description:
      "Visual identity that holds together — logos, brand kits, social graphics, and collateral that make a business look considered before a word is read.",
    capabilities: ["Logo", "Brand kits", "Social graphics", "Print", "Campaign visuals"],
    href: "/services/graphic-design/",
    tone: "light" as const,
  },
];

export const projects = [
  {
    title: "Plant Shop",
    category: "Web Design · E-commerce",
    description: "A modern storefront for plant enthusiasts, redesigned around a clearer shopping path and calmer visual system.",
    image: "/images/portfolio/projectOne.jpg",
    href: "https://plant-shop-website-app-redesign.vercel.app/",
  },
  {
    title: "Solar",
    category: "Web Design · Energy",
    description: "A clean-energy website that presents renewable solutions with a confident, contemporary layout.",
    image: "/images/portfolio/projectTwo.jpg",
    href: "https://solar-website-solution.vercel.app/",
  },
  {
    title: "Coworking Space",
    category: "App Design · Booking",
    description: "A mobile experience for finding, booking, and managing coworking spaces without friction.",
    image: "/images/portfolio/projectThree.jpg",
    href: "https://coworking-space-mobile-app-solution.vercel.app/",
  },
  {
    title: "Furniture Store",
    category: "E-commerce · Web Design",
    description: "A furniture commerce experience built to showcase product quality and make browsing feel physical.",
    image: "/images/portfolio/projectFour.png",
    href: "https://furniture-store-e-commerce-solution.vercel.app/",
  },
];

export const problems = [
  {
    number: "01",
    challenge: "A digital presence that fails to communicate value.",
    approach:
      "We start with positioning, structure, and visual hierarchy — then build a site or brand system that makes the offer unmistakable within seconds.",
    benefit: "Visitors understand what you do, why it matters, and what to do next.",
  },
  {
    number: "02",
    challenge: "A website that looks finished but does not convert.",
    approach:
      "Design, copy, and technical performance are treated as one system. We refine flows, page speed, SEO foundations, and calls to action together.",
    benefit: "The experience supports enquiries and sales instead of only looking current.",
  },
  {
    number: "03",
    challenge: "Design and development living in different rooms.",
    approach:
      "DevMola keeps strategy, design, and engineering in one team, so briefs are not reinterpreted three times before they ship.",
    benefit: "Fewer handoff gaps, less rework, and a product that matches the intended design.",
  },
  {
    number: "04",
    challenge: "A digital product that is slow or hard to maintain.",
    approach:
      "We build with modern, maintainable stacks and clear structure — so the work can grow with the business instead of being rebuilt every year.",
    benefit: "A faster, more durable foundation that teams can actually keep improving.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn the business, audience, market, and constraints. The goal is a shared picture of the problem before anyone opens a design file.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn research into a clear concept, brand direction, and plan — so the work has a point of view, not just a list of pages.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Interfaces, identity, and content are shaped together. You see the direction early, and we refine it with you rather than presenting a finished surprise.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Engineering follows the design system. We implement, integrate, and test with the same care used in the creative work.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We ship, measure, and stay close. Campaigns and products are refined with real data after they go live — not left on a launch-day snapshot.",
  },
];

export const principles = [
  {
    title: "Result-oriented work",
    description: "Campaigns and products are planned around traffic, leads, or sales — outcomes that can be reviewed, not just delivered.",
  },
  {
    title: "Specialists you can reach",
    description: "You work with marketers, designers, and developers who understand the brief, not a rotating chain of intermediaries.",
  },
  {
    title: "One team, end to end",
    description: "SEO, paid media, design, development, branding, and content sit under one roof so the pieces stay aligned.",
  },
  {
    title: "Transparent communication",
    description: "Clear reporting, regular updates, and direct conversation at every stage — so you always know what is happening and why.",
  },
];

export const formServices = [
  { value: "web-development", label: "Web Development" },
  { value: "mobile-app-development", label: "Mobile App Development" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "seo-services", label: "SEO Services" },
  { value: "graphic-design", label: "Graphic Design" },
  { value: "other", label: "Other Services" },
];

export const contact = {
  email: "info@devmola.com",
  whatsapp: "+92 370 5614842",
  whatsappHref: "https://wa.me/923705614842",
  location: "Islamabad, Pakistan",
};

export const contactQuickLinks = [
  { label: "WhatsApp", href: "https://wa.me/923705614842", external: true },
  { label: "Email us", href: "mailto:info@devmola.com", external: false },
  { label: "Book a meeting", href: "#", action: "calendly" as const },
  { label: "View portfolio", href: "/portfolio/", external: false },
];
