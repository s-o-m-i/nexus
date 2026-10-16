"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { teamExpertise } from "@/lib/team-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TeamExpertise() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const current = teamExpertise[active];

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-expertise-item]",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
      gsap.fromTo(
        "[data-expertise-panel]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          eyebrow="Collective expertise"
          title="Capabilities that connect."
          description="DevMola’s service areas are designed to overlap — so design, build, and growth reinforce each other instead of living in silos."
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-2">
            {teamExpertise.map((item, index) => (
              <button
                key={item.id}
                type="button"
                data-expertise-item
                onClick={() => setActive(index)}
                className={`w-full rounded-2xl border px-5 py-4 text-left transition duration-300 ${
                  active === index
                    ? "border-[var(--ink)]/12 bg-white shadow-[var(--shadow-soft)]"
                    : "border-transparent hover:border-[var(--border)] hover:bg-white/70"
                }`}
                aria-expanded={active === index}
              >
                <span className="font-display text-lg tracking-[-0.03em] text-[var(--ink)]">{item.title}</span>
              </button>
            ))}
          </div>

          <div
            data-expertise-panel
            className="premium-card relative overflow-hidden p-8 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--navy)]/8 blur-3xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--eyebrow-muted)]">
              {current.title}
            </p>
            <p className="mt-4 font-display text-2xl leading-snug tracking-[-0.03em] text-[var(--ink)]">
              {current.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-[11px] font-medium text-[var(--text-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <svg
              className="pointer-events-none absolute bottom-6 right-6 h-24 w-24 text-[var(--ink)]/[0.04]"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle cx="20" cy="50" r="4" fill="currentColor" />
              <circle cx="50" cy="20" r="4" fill="currentColor" />
              <circle cx="80" cy="50" r="4" fill="currentColor" />
              <circle cx="50" cy="80" r="4" fill="currentColor" />
              <path d="M20 50 L50 20 L80 50 L50 80 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
