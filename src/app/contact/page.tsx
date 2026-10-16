import ContactPage from "@/components/contact/premium/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DevMola",
  description:
    "Contact DevMola — project inquiries, partnerships, and support. Email, WhatsApp, book a meeting, or send a message through our form.",
  alternates: {
    canonical: "https://devmola.com/contact/",
  },
  openGraph: {
    title: "Contact | DevMola",
    description: "Get in touch with DevMola for web, mobile, design, SEO, and marketing projects.",
    url: "https://devmola.com/contact/",
    type: "website",
  },
};

export default function Page() {
  return <ContactPage />;
}
