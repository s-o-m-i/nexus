"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/lib/home-content";
import { SectionIntro } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Process() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-step-card]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="process"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="How we work" title="From first conversation to launch." className="mb-12" />

        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} data-step-card>
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
