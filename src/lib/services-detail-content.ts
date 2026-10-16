export type ServiceDetailSlug =
  | "web-development"
  | "mobile-app-development"
  | "ui-ux"
  | "seo-services"
  | "digital-marketing"
  | "graphic-design";

export type ServiceDetail = {
  slug: ServiceDetailSlug;
  number: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  overview: string;
  offerings: { title: string; description: string }[];
  why: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const sharedWhy = [
  {
    title: "One team end to end",
    description: "Strategy, design, and delivery stay aligned — fewer handoffs and clearer accountability.",
  },
  {
    title: "Built for your business",
    description: "We tie scope and technical choices to outcomes you can measure, not vanity deliverables.",
  },
  {
    title: "Transparent collaboration",
    description: "Regular updates, honest timelines, and direct access to the people doing the work.",
  },
];

export const serviceDetails: Record<ServiceDetailSlug, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    number: "01",
    meta: {
      title: "Web Development",
      description:
        "Custom websites and web applications with Next.js, React, WordPress, and Shopify — fast, maintainable, and built to convert.",
    },
    hero: {
      eyebrow: "Website development",
      title: "Websites that load fast and earn trust.",
      description:
        "From marketing sites to custom platforms, we build with modern stacks, clean structure, and UX that guides visitors toward action.",
    },
    overview:
      "We design and develop websites that balance performance, maintainability, and brand clarity. Whether you need a custom Next.js product, a WordPress or Shopify storefront, or a MERN application, the same team owns strategy through launch.",
    offerings: [
      { title: "Custom web apps", description: "Next.js, React, and Node platforms tailored to your workflows and scale." },
      { title: "Marketing websites", description: "High-converting sites with strong hierarchy, speed, and SEO foundations." },
      { title: "E-commerce", description: "Shopify and custom commerce experiences that make browsing and checkout feel effortless." },
      { title: "CMS & integrations", description: "WordPress, headless CMS, APIs, and third-party tools wired into one coherent system." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "What types of web development do you offer?",
        answer:
          "Custom websites, web applications, e-commerce, CMS builds, PWAs, and API integrations — frontend and backend under one team.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "Timelines depend on scope. A focused marketing site often takes several weeks; complex applications may take a few months. We share a clear plan after discovery.",
      },
      {
        question: "Do you provide maintenance after launch?",
        answer:
          "Yes — security updates, performance tuning, content support, and iterative improvements as your business grows.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "We choose stacks for the job — commonly Next.js, React, Node, WordPress, and Shopify — prioritizing speed, maintainability, and your team's ability to operate the site.",
      },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    number: "02",
    meta: {
      title: "Mobile App Development",
      description:
        "iOS and Android apps and cross-platform products — designed, built, tested, and launched with DevMola.",
    },
    hero: {
      eyebrow: "Mobile apps",
      title: "Mobile products people return to.",
      description:
        "Native-feeling apps for iOS and Android, with UX and engineering in one loop from prototype to App Store and Play Store.",
    },
    overview:
      "We help you ship mobile experiences that match your brand and stay fast in real-world use. From MVPs to mature products, we cover design, development, testing, and launch support.",
    offerings: [
      { title: "iOS & Android", description: "Platform-appropriate UI and performance for each ecosystem." },
      { title: "Cross-platform", description: "Shared codebase approaches when speed-to-market and budget matter." },
      { title: "Product UI", description: "Flows, states, and visual systems that feel intentional on small screens." },
      { title: "Launch & support", description: "Store submission guidance, analytics hooks, and post-launch fixes." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "Which platforms do you build for?",
        answer: "iOS and Android, using native or cross-platform approaches based on your audience and roadmap.",
      },
      {
        question: "How long does app development take?",
        answer: "A focused MVP might take a few months; larger products longer. We outline phases after discovery.",
      },
      {
        question: "Do you help with app store submission?",
        answer: "Yes — we support store listings, assets, and compliance checks for Apple and Google.",
      },
      {
        question: "Can you maintain the app after launch?",
        answer: "We offer ongoing fixes, OS updates, feature iterations, and performance monitoring.",
      },
    ],
  },
  "ui-ux": {
    slug: "ui-ux",
    number: "03",
    meta: {
      title: "UI/UX Design",
      description:
        "Research, wireframes, prototypes, and design systems — interfaces that feel simple and support real user goals.",
    },
    hero: {
      eyebrow: "UI/UX design",
      title: "Interfaces shaped around real behaviour.",
      description:
        "We research, structure, and visualise digital products so complex tasks feel clear — before a single line of production code.",
    },
    overview:
      "UI and UX are one practice here: understanding users, mapping flows, prototyping interactions, and delivering systems developers can implement faithfully.",
    offerings: [
      { title: "Research & discovery", description: "Interviews, audits, and journey mapping to ground design in evidence." },
      { title: "Wireframes & flows", description: "Structure and logic before polish — so everyone agrees on the job the product must do." },
      { title: "Visual & UI design", description: "Typography, layout, and components that match your brand and accessibility needs." },
      { title: "Prototypes & handoff", description: "Interactive prototypes and specs that translate cleanly to engineering." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "What is the difference between UI and UX?",
        answer:
          "UX covers the full journey — research, structure, and usability. UI is the visual layer. We treat both as one continuous process.",
      },
      {
        question: "What deliverables should I expect?",
        answer: "Research summaries, flows, wireframes, high-fidelity screens, prototypes, and design-system documentation as scope requires.",
      },
      {
        question: "Do you design for accessibility?",
        answer: "Yes — contrast, type scale, focus states, and WCAG-oriented patterns are part of our default practice.",
      },
      {
        question: "Do you support after launch?",
        answer: "We can iterate from user feedback, analytics, and A/B learnings after release.",
      },
    ],
  },
  "seo-services": {
    slug: "seo-services",
    number: "04",
    meta: {
      title: "SEO Services",
      description:
        "Technical SEO, content, and keyword strategy — sustainable visibility, not short-lived ranking tricks.",
    },
    hero: {
      eyebrow: "SEO",
      title: "Search visibility that compounds.",
      description:
        "Technical health, on-page structure, and content aligned to how your customers actually search — measured over time, not for a week.",
    },
    overview:
      "SEO at DevMola connects site performance, content, and competitor context. We fix foundations, improve pages, and build a roadmap you can maintain.",
    offerings: [
      { title: "Technical SEO", description: "Crawlability, speed, structure, and fixes that unblock search engines." },
      { title: "On-page optimisation", description: "Titles, metadata, internal links, and templates that scale." },
      { title: "Keyword & content", description: "Research and content plans tied to intent, not vanity volume." },
      { title: "Reporting", description: "Clear metrics and next steps — so you know what changed and why." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "How long until SEO results show?",
        answer: "SEO is cumulative. Some fixes show quickly; meaningful traffic shifts often take months of consistent work.",
      },
      {
        question: "Do you work with existing sites?",
        answer: "Yes — audits and phased improvements for sites built by other teams or in-house.",
      },
      {
        question: "Is content included?",
        answer: "We can advise, outline, and optimise content; full copywriting can be scoped separately.",
      },
      {
        question: "How do you measure success?",
        answer: "Rankings, organic traffic, conversions, and technical health — agreed with you upfront.",
      },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    number: "05",
    meta: {
      title: "Digital Marketing",
      description:
        "Paid media, social, email, and content campaigns planned around qualified traffic and measurable outcomes.",
    },
    hero: {
      eyebrow: "Digital marketing",
      title: "Campaigns tied to outcomes.",
      description:
        "Search, social, email, and content under one strategy — so spend and creative work toward leads and sales, not vanity metrics alone.",
    },
    overview:
      "We plan and run marketing that fits your funnel: audience definition, channel mix, creative direction, and reporting you can act on.",
    offerings: [
      { title: "Paid search & social", description: "Campaign setup, targeting, and ongoing optimisation." },
      { title: "Social media", description: "Content rhythms and paid support aligned with brand voice." },
      { title: "Email marketing", description: "Flows and newsletters that nurture leads without noise." },
      { title: "Content & creative", description: "Assets and copy that match landing pages and product truth." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "Which channels do you manage?",
        answer: "Common channels include Google Ads, Meta, LinkedIn, email, and organic social — scoped to your market.",
      },
      {
        question: "Do you need an existing website?",
        answer: "A solid site or landing experience helps conversion; we can partner with our dev team if improvements are needed.",
      },
      {
        question: "How is performance reported?",
        answer: "Regular reports with spend, traffic, leads, and recommendations — in plain language.",
      },
      {
        question: "Can you work with our in-house team?",
        answer: "Yes — we can lead strategy, execute hands-on, or support your internal marketers.",
      },
    ],
  },
  "graphic-design": {
    slug: "graphic-design",
    number: "06",
    meta: {
      title: "Graphic Design & Branding",
      description:
        "Logos, brand kits, social graphics, and campaign visuals — identity that looks considered before a word is read.",
    },
    hero: {
      eyebrow: "Graphic design & branding",
      title: "Visual identity that holds together.",
      description:
        "Logos, brand systems, and campaign graphics that make your business look deliberate across every touchpoint.",
    },
    overview:
      "We build visual systems — not one-off files — so your team and partners can stay on-brand across web, social, and print.",
    offerings: [
      { title: "Logo & identity", description: "Core mark, typography, and colour direction for new or evolving brands." },
      { title: "Brand kits", description: "Guidelines and assets so usage stays consistent." },
      { title: "Social & campaign", description: "Templates and one-offs for launches, ads, and organic content." },
      { title: "Print & collateral", description: "Business cards, decks, and physical pieces when you need them." },
    ],
    why: sharedWhy,
    faqs: [
      {
        question: "Do you only design logos?",
        answer: "No — logos are one part of broader identity, social, and campaign work.",
      },
      {
        question: "What files will I receive?",
        answer: "Source and export formats agreed in scope — typically vector, PNG, and guideline PDFs.",
      },
      {
        question: "Can you match our existing brand?",
        answer: "Yes — we extend or refine existing systems as well as create new ones.",
      },
      {
        question: "Do you design for web and apps?",
        answer: "Yes — often alongside our UI/UX and development teams for a single visual language.",
      },
    ],
  },
};

export function getServiceDetail(slug: ServiceDetailSlug): ServiceDetail {
  return serviceDetails[slug];
}

export function buildServiceDetailMetadata(slug: ServiceDetailSlug) {
  const { meta } = serviceDetails[slug];
  const canonical = `https://devmola.com/services/${slug}/`;
  return {
    title: `${meta.title} | DevMola`,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: `${meta.title} | DevMola`,
      description: meta.description,
      url: canonical,
      type: "website" as const,
    },
  };
}
