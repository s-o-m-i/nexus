"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutDifferentiators } from "@/lib/about-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutDifferentiators() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-diff-item]",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro
          eyebrow={aboutDifferentiators.eyebrow}
          title={aboutDifferentiators.title}
          className="mx-auto max-w-2xl text-center"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-x-12 lg:gap-y-14">
          {aboutDifferentiators.items.map((item) => (
            <article key={item.number} data-diff-item className="group relative sm:pl-1">
              <p
                aria-hidden="true"
                className="font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-none tracking-[-0.05em] text-[var(--ink)]/[0.09] transition-colors duration-300 group-hover:text-[var(--brand)]/22"
              >
                {item.number}
              </p>
              <h3 className="mt-4 font-display text-xl tracking-[-0.03em] text-[var(--ink)] sm:mt-5 sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-7 text-[var(--text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
