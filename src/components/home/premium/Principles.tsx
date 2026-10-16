"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { principles } from "@/lib/home-content";
import { Eyebrow } from "./PremiumUI";
import { useCardTilt } from "@/hooks/useCardTilt";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PrincipleCard({ item }: { item: (typeof principles)[number] }) {
  const tilt = useCardTilt(10);

  return (
    <div className="perspective-3d" data-principle-card>
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className="slab-3d relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-7 will-change-transform"
      >
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-[var(--brand)]/20 blur-3xl" />
        <p className="font-display text-2xl tracking-[-0.04em]">{item.title}</p>
        <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
      </div>
    </div>
  );
}

export default function Principles() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-principle-card]",
        { opacity: 0, y: 40, rotateX: 20, rotateY: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.95,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
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
        <div className="mb-12 max-w-xl">
          <Eyebrow light>How we work with you</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-[-0.04em]">
            Standards, not slogans.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <PrincipleCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
