"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ServiceDetailOverview({ overview }: { overview: string }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const targets = section.querySelectorAll("[data-svc-overview]");
      gsap.set(targets, { opacity: 0, y: 24 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(targets, { opacity: 1, y: 0, duration: 0.75, stagger: 0.06, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="border-b border-[var(--border)] bg-[var(--bg-section)] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start">
        <div data-svc-overview>
          <SectionIntro eyebrow="Overview" title="Scope with clarity." />
        </div>
        <p data-svc-overview className="text-[17px] leading-8 text-[var(--text-muted)] lg:pt-2">
          {overview}
        </p>
      </div>
    </section>
  );
}
