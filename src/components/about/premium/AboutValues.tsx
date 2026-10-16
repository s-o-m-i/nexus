"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutValues, type AboutValue } from "@/lib/about-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutValues() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<AboutValue>(aboutValues[0]);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-values-panel]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="border-y border-[var(--border)] bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro
          eyebrow="Our values"
          title="Principles That Guide Our Work"
          description="At DevMola, our values define who we are and how we approach every project — the foundation of our culture and our commitment to doing work we are proud of."
          className="max-w-2xl"
        />

        <div data-values-panel className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-12">
          <div className="flex flex-col gap-1" role="tablist" aria-label="Company values">
            {aboutValues.map((value) => {
              const isActive = active.id === value.id;
              return (
                <button
                  key={value.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`about-value-tab-${value.id}`}
                  aria-controls={`about-value-panel-${value.id}`}
                  onClick={() => setActive(value)}
                  onFocus={() => setActive(value)}
                  className={`rounded-lg px-4 py-3 text-left transition ${
                    isActive
                      ? "bg-[var(--ink)] text-white"
                      : "text-[var(--ink)] hover:bg-white/80"
                  }`}
                >
                  <span className="font-display text-lg tracking-[-0.02em]">{value.title}</span>
                  {!isActive ? (
                    <span className="mt-1 block text-sm text-[var(--text-muted)] line-clamp-1">{value.description}</span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`about-value-panel-${active.id}`}
            aria-labelledby={`about-value-tab-${active.id}`}
            className="rounded-lg border border-[var(--border-strong)] bg-white p-6 sm:p-8 lg:min-h-[280px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--eyebrow-muted)]">
              {active.title}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">{active.description}</p>
            <p className="mt-5 text-base leading-7 text-[var(--ink)]">{active.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
