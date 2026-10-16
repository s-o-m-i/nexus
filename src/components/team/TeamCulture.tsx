"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { cultureValues } from "@/lib/team-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TeamCulture() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-culture-card]",
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
    <section ref={root} className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          eyebrow="How we work together"
          title="Culture built for thoughtful delivery."
          description="Principles that guide how we collaborate with each other and with clients — without theatrics or buzzwords."
          light
          className="mb-12"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {cultureValues.map((value, index) => (
            <div
              key={value.id}
              data-culture-card
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-white/16 hover:bg-white/[0.06]"
            >
              <p className="font-display text-sm tracking-[0.2em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-xl tracking-[-0.03em]">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
