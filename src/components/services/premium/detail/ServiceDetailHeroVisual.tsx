"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ServiceDetailHeroVisual({ number, label }: { number: string; label: string }) {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.to("[data-svc-detail-ring]", {
        rotate: 360,
        duration: 48,
        ease: "none",
        repeat: -1,
      });
      gsap.to("[data-svc-detail-glow]", {
        opacity: 0.55,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <div ref={root} className="relative mx-auto aspect-square w-full max-w-[min(100%,420px)]">
      <div
        data-svc-detail-glow
        className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(159,25,63,0.35),transparent_70%)] opacity-40"
        aria-hidden="true"
      />
      <div
        data-svc-detail-ring
        className="absolute inset-0 rounded-full border border-dashed border-white/15"
        aria-hidden="true"
      />
      <div className="absolute inset-[8%] rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute inset-[18%] flex flex-col items-center justify-center rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-sm">
        <p className="font-display text-[clamp(3.5rem,12vw,5.5rem)] leading-none tracking-[-0.06em] text-white/90">
          {number}
        </p>
        <p className="mt-3 max-w-[10rem] text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
          {label}
        </p>
      </div>
    </div>
  );
}
