/** Direct lines for DevMola leadership — CTO first for new project inquiries. */

export type LeadershipContact = {
  id: "cto" | "ceo";
  name: string;
  role: string;
  email: string;
  phone: string;
  telHref: string;
  whatsappHref: string;
  /** Show “contact first” guidance on this profile */
  contactFirst?: boolean;
};

export const contactLeadershipNote =
  "For new projects, reach out to our CTO first — you'll get a clear read on scope, stack, and feasibility. Once we're aligned technically, we'll bring in our CEO, Dawood, on partnership and delivery.";

export const leadershipContacts: LeadershipContact[] = [
  {
    id: "cto",
    name: "M. Suleman",
    role: "CTO & Full Stack Developer",
    email: "sulemandevofficial@gmail.com",
    phone: "0319 9828336",
    telHref: "tel:+923199828336",
    whatsappHref: "https://wa.me/923199828336",
    contactFirst: true,
  },
  {
    id: "ceo",
    name: "M. Dawood",
    role: "CEO & Founder",
    email: "info@devmola.com",
    phone: "+92 370 5614842",
    telHref: "tel:+923705614842",
    whatsappHref: "https://wa.me/923705614842",
  },
];

export const ctoContact = leadershipContacts.find((person) => person.id === "cto")!;
export const ceoContact = leadershipContacts.find((person) => person.id === "ceo")!;
