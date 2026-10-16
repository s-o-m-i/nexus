"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function AboutHeroVisual() {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      gsap.to("[data-about-float]", {
        y: "+=14",
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.35, from: "random" },
      });

      gsap.to("[data-about-orbit]", {
        rotateY: 8,
        rotateX: -6,
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <div
      ref={root}
      className="perspective-3d relative mx-auto flex h-[280px] w-full max-w-[420px] items-center justify-center sm:h-[340px] lg:mx-0 lg:h-[400px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(159,25,63,0.18),transparent_62%)]" />
      <div className="absolute inset-10 rounded-full border border-white/10 bg-white/[0.02]" />

      <div
        data-about-orbit
        className="relative h-[220px] w-[220px] [transform-style:preserve-3d] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]"
      >
        <div
          data-about-float
          className="absolute left-1/2 top-1/2 w-[148px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/15 bg-[var(--surface-dark-elevated)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)] [transform:translateZ(40px)]"
        >
          <div className="mb-2 h-2 w-8 rounded-full bg-[var(--brand-soft)]/80" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-white/15" />
            <div className="h-1.5 w-[85%] rounded bg-white/10" />
            <div className="h-1.5 w-[70%] rounded bg-white/10" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1">
            <div className="aspect-square rounded bg-white/8" />
            <div className="aspect-square rounded bg-white/12" />
            <div className="aspect-square rounded bg-white/8" />
          </div>
        </div>

        <div
          data-about-float
          className="absolute -left-2 top-6 w-[100px] rounded-md border border-white/12 bg-white/[0.06] p-2.5 [transform:rotateY(-18deg)_translateZ(20px)]"
        >
          <div className="h-1 w-6 rounded bg-white/25" />
          <div className="mt-2 h-8 rounded bg-[var(--brand)]/35" />
        </div>

        <div
          data-about-float
          className="absolute -right-1 bottom-8 w-[92px] rounded-md border border-white/12 bg-white/[0.05] p-2.5 [transform:rotateY(16deg)_translateZ(28px)]"
        >
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
          </div>
          <div className="mt-2 space-y-1">
            <div className="h-1 w-full rounded bg-white/15" />
            <div className="h-1 w-4/5 rounded bg-white/10" />
          </div>
        </div>

        <div className="absolute left-1/2 top-0 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent [transform:translateZ(8px)]" />
        <div className="absolute bottom-2 left-1/2 h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--brand-soft)]/40 to-transparent [transform:translateZ(12px)]" />
      </div>
    </div>
  );
}
