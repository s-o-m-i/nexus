"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { principles } from "@/lib/home-content";
import { SectionIntro } from "./PremiumUI";
import { useCardTilt } from "@/hooks/useCardTilt";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

function PrincipleCard({ item }: { item: (typeof principles)[number] }) {
  const tilt = useCardTilt(6);

  return (
    <div data-principle-card className="h-full">
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-7 will-change-transform transition-colors duration-300 hover:border-white/16 hover:bg-white/[0.06]"
      >
        <p className="font-display text-2xl tracking-[-0.04em] text-white">{item.title}</p>
        <p className="mt-4 text-sm leading-7 text-white/58">{item.description}</p>
      </div>
    </div>
  );
}

export default function Principles() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;

      const cards = section.querySelectorAll("[data-principle-card]");
      gsap.set(cards, { opacity: 0, y: 32 });

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.85, stagger: 0.1, ease: "power3.out" });
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
    <section
      id="principles"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="How we work with you" title="Standards, not slogans." light className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <PrincipleCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
