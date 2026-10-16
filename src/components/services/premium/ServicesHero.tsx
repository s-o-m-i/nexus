"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { servicesPageHero } from "@/lib/services-page-content";
import { AgencyButton, Eyebrow } from "@/components/home/premium/PremiumUI";
import ServicesHeroOrbital from "./ServicesHeroOrbital";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ServicesHero() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-svc-hero]",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="services-hero"
      ref={root}
      className="relative overflow-hidden bg-[var(--ink)] pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgba(159,25,63,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-section)] to-transparent" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:px-12">
        <div className="max-w-xl">
          <div data-svc-hero>
            <Eyebrow light>{servicesPageHero.eyebrow}</Eyebrow>
          </div>
          <h1
            data-svc-hero
            className="mt-4 font-display text-[clamp(2.4rem,5.8vw,4.35rem)] leading-[1.02] tracking-[-0.04em]"
          >
            {servicesPageHero.title}
          </h1>
          <p data-svc-hero className="mt-5 text-base leading-7 text-white/65 sm:text-[17px]">
            {servicesPageHero.description}
          </p>
          <div data-svc-hero className="mt-8 flex flex-wrap gap-3">
            <AgencyButton href={servicesPageHero.primaryCta.href}>{servicesPageHero.primaryCta.label}</AgencyButton>
            <AgencyButton
              href={servicesPageHero.secondaryCta.href}
              variant="secondary"
              className="border-white/20 text-white hover:border-white hover:text-white"
            >
              {servicesPageHero.secondaryCta.label}
            </AgencyButton>
          </div>
        </div>

        <div data-svc-hero className="lg:justify-self-end">
          <ServicesHeroOrbital />
        </div>
      </div>
    </section>
  );
}
