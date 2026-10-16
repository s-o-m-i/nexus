import { contact } from "@/lib/home-content";

export const contactPageHero = {
  eyebrow: "Contact DevMola",
  title: "Let's build what's next.",
  description:
    "Share a brief, book a call, or reach out directly — we will point you to the right next step, whether that is strategy, design, engineering, or growth.",
  primaryCta: { label: "Send a message", href: "#contact-form" },
  secondaryCta: { label: "View our work", href: "/works/" },
};

/** Orbit cards in the contact hero — CTAs that point clients toward starting work. */
export const contactOrbitCards = [
  {
    number: "01",
    title: "Share your brief",
    tag: "Tell us the goal",
    href: "#contact-form",
    external: false,
  },
  {
    number: "02",
    title: "Book a discovery call",
    tag: "Align on scope",
    href: "#contact-form",
    external: false,
  },
  {
    number: "03",
    title: "Email the team",
    tag: contact.email,
    href: `mailto:${contact.email}`,
    external: true,
  },
  {
    number: "04",
    title: "Message on WhatsApp",
    tag: "Quick questions",
    href: contact.whatsappHref,
    external: true,
  },
  {
    number: "05",
    title: "Review our work",
    tag: "Proof before you write",
    href: "/works/",
    external: false,
  },
  {
    number: "06",
    title: "One team to launch",
    tag: "Strategy · Build · Grow",
    href: "#contact-form",
    external: false,
  },
];

export const contactPageForm = {
  title: "Tell us about your project",
  description: "A short note is enough. We typically respond within one business day.",
};

export const contactPageDetails = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappHref },
  { label: "Location", value: contact.location, href: undefined as string | undefined },
];

export const contactPageSocial = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "WhatsApp", href: contact.whatsappHref },
];
