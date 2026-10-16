import { contact } from "@/lib/home-content";
import { ceoContact, contactLeadershipNote, ctoContact } from "@/lib/contact-leadership";

export const contactPageHero = {
  eyebrow: "Contact DevMola",
  title: "Let's build what's next.",
  description:
    "Share a brief or book a call. For new builds, start with our CTO (Suleman) so we nail scope and stack early — then we'll loop in CEO Dawood when it's time to align on partnership and delivery.",
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
    title: "Talk to our CTO",
    tag: "Technical scope first",
    href: ctoContact.whatsappHref,
    external: true,
  },
  {
    number: "03",
    title: "Email our CTO",
    tag: ctoContact.email,
    href: `mailto:${ctoContact.email}`,
    external: true,
  },
  {
    number: "04",
    title: "Reach our CEO",
    tag: ceoContact.name,
    href: ceoContact.whatsappHref,
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

export const contactFarewell = {
  word: "Bye",
  line: "For now — talk soon.",
  subline: "We’re glad you reached out. When you’re ready, we’ll be here to build what’s next with you.",
};

export const contactPageForm = {
  title: "Tell us about your project",
  description: `${contactLeadershipNote} A short note is enough — we typically respond within one business day.`,
};

export const contactPageDetails = [
  { label: "Location", value: contact.location, href: undefined as string | undefined },
];

export const contactPageSocial = [
  { label: "WhatsApp (CTO)", href: ctoContact.whatsappHref },
  { label: "WhatsApp (CEO)", href: ceoContact.whatsappHref },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];
