"use client";

import ContactHero from "./ContactHero";
import ContactFarewell from "./ContactFarewell";
import HomeContact from "@/components/home/premium/HomeContact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <ContactHero />
      <HomeContact variant="page" sectionId="contact-form" />
      <ContactFarewell />
    </div>
  );
}
