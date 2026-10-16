"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { contactPageHero } from "@/lib/contact-page-content";
import { AgencyButton, Eyebrow } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ContactHero() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current) return;
      if (reduced) {
        gsap.set("[data-contact-hero]", { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        "[data-contact-hero]",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[var(--ink)] pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_80%_0%,rgba(159,25,63,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--surface-dark)] to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-16 sm:px-8 lg:pb-20 lg:px-12">
        <div className="max-w-2xl">
          <div data-contact-hero>
            <Eyebrow light>{contactPageHero.eyebrow}</Eyebrow>
          </div>
          <h1
            data-contact-hero
            className="mt-4 font-display text-[clamp(2.4rem,5.6vw,4.2rem)] leading-[1.02] tracking-[-0.04em]"
          >
            {contactPageHero.title}
          </h1>
          <p data-contact-hero className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-[17px]">
            {contactPageHero.description}
          </p>
          <div data-contact-hero className="mt-8 flex flex-wrap gap-3">
            <AgencyButton href={contactPageHero.primaryCta.href}>{contactPageHero.primaryCta.label}</AgencyButton>
            <AgencyButton
              href={contactPageHero.secondaryCta.href}
              variant="secondary"
              className="border-white/20 text-white hover:border-white hover:text-white"
            >
              {contactPageHero.secondaryCta.label}
            </AgencyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
