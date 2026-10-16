"use client";

import HomeContact from "@/components/home/premium/HomeContact";
import ServicesHero from "./ServicesHero";
import ServicesFlipGrid from "./ServicesFlipGrid";
import ServicesScrollRail from "./ServicesScrollRail";
import ServicesClosing from "./ServicesClosing";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <ServicesHero />
      <ServicesFlipGrid />
      <ServicesScrollRail />
      <ServicesClosing />
      <HomeContact />
    </div>
  );
}
