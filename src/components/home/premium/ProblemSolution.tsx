"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { problems } from "@/lib/home-content";
import { SectionIntro } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ProblemSolution() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const current = problems[active];

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;

      const items = section.querySelectorAll("[data-problem-item]");
      const panelEl = section.querySelector("[data-problem-panel]");
      gsap.set(items, { opacity: 0, y: 24 });
      if (panelEl) gsap.set(panelEl, { opacity: 0, y: 24 });

      const play = () => {
        gsap.to(items, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: "power3.out" });
        if (panelEl) gsap.to(panelEl, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
      };

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          play();
          observer.disconnect();
        },
        { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
      );

      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  const select = (index: number) => {
    if (index === active) return;
    if (reduced || !panel.current) {
      setActive(index);
      return;
    }

    gsap.to(panel.current, {
      opacity: 0,
      y: 12,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActive(index);
        gsap.fromTo(panel.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" });
      },
    });
  };

  return (
    <section
      id="approach"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="We solve" title="The problems that quietly stall growth." className="mb-12" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="space-y-2">
            {problems.map((problem, index) => (
              <button
                key={problem.number}
                type="button"
                data-problem-item
                onClick={() => select(index)}
                className={`w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  active === index
                    ? "border-[var(--ink)]/12 bg-white shadow-[var(--shadow-soft)]"
                    : "border-transparent bg-transparent hover:border-[var(--border)] hover:bg-white/80"
                }`}
                aria-expanded={active === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-[1.05rem] leading-snug tracking-[-0.03em] text-[var(--ink)] sm:text-lg">
                    {problem.challenge}
                  </span>
                  <span className="shrink-0 font-display text-xs tracking-[0.16em] text-[var(--text-subtle)]">
                    {problem.number}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div
            ref={panel}
            data-problem-panel
            className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-white/10 bg-[var(--ink)] p-8 text-white lg:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--navy)]/35 blur-3xl" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Our approach</p>
            <p className="mt-5 font-display text-2xl leading-snug tracking-[-0.03em]">{current.approach}</p>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/60">{current.benefit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
