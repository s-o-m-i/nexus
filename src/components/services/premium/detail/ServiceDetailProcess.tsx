"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/lib/home-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ServiceDetailProcess() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const cards = section.querySelectorAll("[data-svc-step]");
      gsap.set(cards, { opacity: 0, y: 28 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="How we work" title="From first conversation to launch." className="mb-12" />
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} data-svc-step>
              <div className="premium-card h-full p-6">
                <p className="font-display text-[2.75rem] leading-none tracking-[-0.06em] text-[var(--ink)]/10">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-xl tracking-[-0.03em] text-[var(--ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
