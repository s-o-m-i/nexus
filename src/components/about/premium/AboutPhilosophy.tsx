"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutPhilosophy } from "@/lib/about-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPhilosophy() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-philosophy-item]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro
          eyebrow={aboutPhilosophy.eyebrow}
          title={aboutPhilosophy.title}
          description={aboutPhilosophy.description}
          light
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {aboutPhilosophy.principles.map((item, index) => (
            <div
              key={item.title}
              data-philosophy-item
              className="border-t border-white/12 pt-6 lg:border-t-0 lg:border-l lg:border-white/12 lg:pl-8 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
