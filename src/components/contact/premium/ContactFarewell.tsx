"use client";

import FarewellByeSection from "@/components/motion/FarewellByeSection";
import { contactFarewell } from "@/lib/contact-page-content";

export default function ContactFarewell() {
  return <FarewellByeSection content={contactFarewell} ariaLabel="Farewell message" />;
}
