"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { problems } from "@/lib/home-content";
import { Eyebrow } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProblemSolution() {
  const [active, setActive] = useState(0);
  const root = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const current = problems[active];

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-problem-card]",
        { opacity: 0, y: 36, rotateX: 22, z: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          z: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
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
      rotateY: 88,
      z: 40,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        setActive(index);
        gsap.fromTo(
          panel.current,
          { rotateY: -88, z: 40 },
          { rotateY: 0, z: 0, duration: 0.36, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <section
      id="approach"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg-alt)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-xl">
          <Eyebrow>We solve</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-[-0.04em]">
            The problems that quietly stall growth.
          </h2>
        </div>

        <div className="perspective-3d grid gap-5 lg:grid-cols-2">
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <button
                key={problem.number}
                type="button"
                data-problem-card
                onClick={() => select(index)}
                className={`slab-3d w-full rounded-2xl border p-5 text-left transition-all duration-500 ${
                  active === index
                    ? "border-[var(--brand)] bg-white shadow-[0_22px_50px_rgba(159,25,63,0.14)]"
                    : "border-[var(--border)] bg-white/70 hover:-translate-y-0.5"
                }`}
                aria-expanded={active === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-[1.15rem] leading-snug tracking-[-0.03em] sm:text-xl">
                    {problem.challenge}
                  </span>
                  <span className="shrink-0 font-display text-xs tracking-[0.16em] text-[var(--brand)]">
                    {problem.number}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="perspective-3d">
            <div
              ref={panel}
              data-problem-card
              className="preserve-3d relative min-h-[340px] overflow-hidden rounded-[28px] bg-[var(--ink)] p-8 text-white shadow-[0_32px_70px_rgba(17,17,17,0.28)] lg:p-10"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--brand)]/30 blur-3xl" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Our approach</p>
              <p className="mt-5 font-display text-2xl leading-snug tracking-[-0.03em]">{current.approach}</p>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/65">{current.benefit}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
