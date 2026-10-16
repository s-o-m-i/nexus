import { contact } from "@/lib/home-content";

export const contactPageHero = {
  eyebrow: "Contact DevMola",
  title: "Let's build what's next.",
  description:
    "Share a brief, book a call, or reach out directly — we will point you to the right next step, whether that is strategy, design, engineering, or growth.",
  primaryCta: { label: "Send a message", href: "#contact-form" },
  secondaryCta: { label: "View our work", href: "/works/" },
};

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
