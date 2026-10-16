"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutClosing } from "@/lib/about-content";
import { AgencyButton } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutClosingCTA() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-about-close]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--bg-section)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,520px)] w-[min(80vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ink)]/[0.06]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 data-about-close className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
          {aboutClosing.title}
        </h2>
        <p data-about-close className="mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-[17px]">
          {aboutClosing.description}
        </p>
        <div data-about-close className="mt-8 flex justify-center">
          <AgencyButton href={aboutClosing.cta.href}>{aboutClosing.cta.label}</AgencyButton>
        </div>
      </div>
    </section>
  );
}
