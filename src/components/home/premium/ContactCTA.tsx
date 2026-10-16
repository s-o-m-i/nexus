"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AgencyButton } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactCTA() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-cta-stack]",
        { opacity: 0, y: 48, rotateX: 16 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="relative bg-[var(--bg)] px-5 py-16 sm:px-8 lg:px-12 lg:pb-20">
      <div className="perspective-3d mx-auto max-w-[1200px]">
        <div data-cta-stack className="relative preserve-3d">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] bg-[var(--navy)]" />
          <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[32px] bg-[#1b0d12]" />
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--brand)] px-8 py-16 text-white shadow-[0_34px_80px_rgba(159,25,63,0.3)] sm:px-12">
            <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">Start a conversation</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.06] tracking-[-0.04em]">
              Tell us what you want to build.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/80">
              Share the brief or the half-formed idea. We reply with a clear next step.
            </p>
            <div className="mt-8">
              <AgencyButton href="#contact" variant="inverse">
                Start a Project
              </AgencyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
