/**
 * Edit this file to update team profiles, skills, and images.
 * Set `isPlaceholder: false` and replace sample copy when adding real members.
 */

import { ceoContact, ctoContact } from "@/lib/contact-leadership";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  featured?: boolean;
  isPlaceholder?: boolean;
  /** Direct line for leadership profiles */
  contact?: {
    email: string;
    phone: string;
    telHref: string;
    whatsappHref: string;
    contactFirst?: boolean;
  };
  social?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
};

export type TeamExpertise = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export type CultureValue = {
  id: string;
  title: string;
  description: string;
};

export const teamGrid = {
  eyebrow: "Meet the team",
  title: "Our team",
  description:
    "Founders, builders, and strategists behind DevMola — the people who turn briefs into shipped websites, products, and growth programs.",
};

export const teamIntro = {
  eyebrow: "Our people, our strength",
  title: "Different Perspectives. One Shared Vision.",
  body: "Design, engineering, strategy, and growth sit at the same table at DevMola. We combine craft and accountability so websites, products, and campaigns feel cohesive from first sketch to launch.",
};

export const teamMembers: TeamMember[] = [
  {
    id: "dawood",
    name: "M. Dawood",
    role: "Chief Executive Officer",
    image: "/images/dawoodCEO.jpg",
    bio: "Leads DevMola’s direction, client partnerships, and delivery standards — keeping every project aligned with business outcomes and long-term growth.",
    skills: ["Leadership", "Strategy", "Client partnerships", "Product direction"],
    featured: true,
    contact: {
      email: ceoContact.email,
      phone: ceoContact.phone,
      telHref: ceoContact.telHref,
      whatsappHref: ceoContact.whatsappHref,
    },
  },
  {
    id: "suleman",
    name: "M. Suleman",
    role: "CTO & Full Stack Developer",
    image: "/images/somi.png",
    bio: "Leads engineering at DevMola and builds performant web applications end to end — the first point of contact for technical scope, stack choices, and feasibility.",
    skills: ["Next.js", "React", "Node.js", "Architecture", "Performance"],
    featured: true,
    contact: {
      email: ctoContact.email,
      phone: ctoContact.phone,
      telHref: ctoContact.telHref,
      whatsappHref: ctoContact.whatsappHref,
      contactFirst: true,
    },
  },
  {
    id: "nasir",
    name: "Nasir Ghaffar",
    role: "Team Lead & Project Manager",
    image: "/images/nasirghaffar.avif",
    bio: "Coordinates DevMola’s delivery teams and keeps projects on scope, on schedule, and in sync with client goals — from kickoff and planning through launch and support.",
    skills: ["Project management", "Team leadership", "Agile delivery", "Client communication"],
    featured: true,
  },
  {
    id: "zainab",
    name: "Zainab",
    role: "Creative Director",
    image: "/images/womenTwo.jpg",
    bio: "Shapes DevMola’s creative vision across brand, UI, and campaigns — making sure every visual and experience feels consistent, intentional, and on-brand.",
    skills: ["Creative direction", "Brand identity", "UI/UX", "Art direction"],
    featured: true,
  },
  {
    id: "design-slot",
    name: "Add team member",
    role: "UI/UX & Visual Design",
    image: "/images/womenOne.jpg",
    bio: "Replace this profile in team-content.ts with your designer’s name, portrait, bio, and portfolio links.",
    skills: ["UI/UX", "Design systems", "Prototyping", "Brand visuals"],
    isPlaceholder: true,
  },
  {
    id: "marketing-slot",
    name: "Add team member",
    role: "Digital Marketing & SEO",
    image: "/images/menTwo.jpg",
    bio: "Replace this profile in team-content.ts with your strategist’s details, campaigns focus, and professional links.",
    skills: ["SEO", "Paid media", "Content", "Analytics"],
    isPlaceholder: true,
  },
];

export const teamExpertise: TeamExpertise[] = [
  {
    id: "design",
    title: "Design & experience",
    description: "Interfaces, identity, and content structure shaped around clarity, accessibility, and brand consistency.",
    tags: ["UI/UX", "Brand", "Prototypes", "Design systems"],
  },
  {
    id: "engineering",
    title: "Web & product engineering",
    description: "Modern stacks, maintainable architecture, and performance tuned for real users and real traffic.",
    tags: ["Next.js", "React", "WordPress", "Shopify", "Mobile"],
  },
  {
    id: "strategy",
    title: "Digital strategy",
    description: "Positioning, funnels, and measurement plans that connect creative work to leads, sales, and retention.",
    tags: ["SEO", "SEM", "Analytics", "Content"],
  },
  {
    id: "delivery",
    title: "Delivery & collaboration",
    description: "Transparent timelines, shared ownership, and iterative releases — so stakeholders always know what ships next.",
    tags: ["Agile delivery", "QA", "Handoff", "Support"],
  },
];

export const cultureValues: CultureValue[] = [
  {
    id: "curiosity",
    title: "Curiosity by default",
    description: "We ask better questions early so solutions fit the problem — not the other way around.",
  },
  {
    id: "craft",
    title: "Craft in the details",
    description: "Typography, spacing, motion, and code quality matter because users feel the difference.",
  },
  {
    id: "collaboration",
    title: "One team, one brief",
    description: "Designers, developers, and marketers work in the same loop to avoid costly handoff gaps.",
  },
  {
    id: "purpose",
    title: "Built with purpose",
    description: "We prioritize work that helps businesses communicate clearly and convert with integrity.",
  },
];

export const teamClosing = {
  title: "Great Things Start With Great People.",
  body: "Have an ambitious idea or a challenging project? Let's explore what we can build together.",
  ctaHref: "/contact/",
  ctaLabel: "Start a conversation",
};
