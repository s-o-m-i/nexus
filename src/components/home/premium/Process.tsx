"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/lib/home-content";
import { Eyebrow } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Process() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const cards = gsap.utils.toArray<HTMLElement>("[data-step-card]");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, rotateX: 78, y: 64, z: -30, transformOrigin: "center bottom" },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            z: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="process"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 max-w-xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-[-0.04em]">
            From first conversation to launch.
          </h2>
        </div>

        <ol className="perspective-3d grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} data-step-card className="preserve-3d">
              <div className="slab-3d relative h-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-[0_18px_44px_rgba(17,17,17,0.08)]">
                <p className="font-display text-5xl tracking-[-0.06em] text-[var(--brand)]">{step.number}</p>
                <h3 className="mt-6 font-display text-xl tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
