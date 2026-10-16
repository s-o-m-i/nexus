"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { servicesPageClosing } from "@/lib/services-page-content";
import { AgencyButton } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesClosing() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-svc-close]",
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
    <section ref={root} className="relative overflow-hidden bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70vw,480px)] w-[min(70vw,480px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ink)]/[0.06]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 data-svc-close className="font-display text-[clamp(1.85rem,4vw,2.75rem)] leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
          {servicesPageClosing.title}
        </h2>
        <p data-svc-close className="mt-4 text-base leading-7 text-[var(--text-muted)]">
          {servicesPageClosing.description}
        </p>
        <div data-svc-close className="mt-8 flex justify-center">
          <AgencyButton href={servicesPageClosing.cta.href}>{servicesPageClosing.cta.label}</AgencyButton>
        </div>
      </div>
    </section>
  );
}
