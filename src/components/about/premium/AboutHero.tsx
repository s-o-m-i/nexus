"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { aboutHero } from "@/lib/about-content";
import { AgencyButton, Eyebrow } from "@/components/home/premium/PremiumUI";
import AboutHeroVisual from "./AboutHeroVisual";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function AboutHero() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-about-hero-copy] > *", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.09 })
        .fromTo("[data-about-hero-visual]", { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.55")
        .fromTo("[data-about-scroll-cue]", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="about-hero"
      ref={root}
      className="relative overflow-hidden bg-[var(--ink)] pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(159,25,63,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-section)] to-transparent" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-24 lg:px-12">
        <div data-about-hero-copy className="max-w-xl">
          <Eyebrow light>{aboutHero.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-[clamp(2.35rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.04em]">
            {aboutHero.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-white/65 sm:text-[17px]">{aboutHero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AgencyButton href={aboutHero.primaryCta.href} variant="primary">
              {aboutHero.primaryCta.label}
            </AgencyButton>
            <AgencyButton href={aboutHero.secondaryCta.href} variant="secondary" className="border-white/20 text-white hover:border-white hover:text-white">
              {aboutHero.secondaryCta.label}
            </AgencyButton>
          </div>
        </div>

        <div data-about-hero-visual className="lg:justify-self-end">
          <AboutHeroVisual />
        </div>
      </div>

      <a
        data-about-scroll-cue
        href="#about-story"
        className="relative mx-auto mb-6 flex w-fit flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 transition hover:text-white/70"
      >
        Scroll
        <span className="block h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </a>
    </section>
  );
}
