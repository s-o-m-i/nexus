"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitLines from "@/components/motion/SplitLines";
import { AgencyButton, Eyebrow } from "./PremiumUI";
import { projects } from "@/lib/home-content";
import { duration, easeOut, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const tl = gsap.timeline({ defaults: { ease: easeOut } });
      tl.fromTo("[data-hero-meta]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, delay: 0.1 })
        .fromTo("[data-hero-copy]", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .fromTo("[data-hero-cta]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, stagger: stagger.tight }, "-=0.28")
        .fromTo(
          "[data-hero-card]",
          { opacity: 0, y: 28, rotateY: -18 },
          { opacity: 1, y: 0, rotateY: 0, duration: duration.reveal, stagger: 0.1 },
          "-=0.35"
        );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[var(--bg)] px-5 pb-10 pt-8 sm:px-8 md:px-12 lg:px-16 lg:pb-16 lg:pt-10"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[var(--brand)]/8 blur-3xl" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16">
        <div className="relative z-10 max-w-[640px]">
          <div data-hero-meta>
            <Eyebrow>Digital agency · Islamabad</Eyebrow>
          </div>
          <SplitLines
            className="mt-4 font-display text-[clamp(2rem,5.2vw,3.75rem)] leading-[1.08] font-semibold tracking-[-0.04em] text-[var(--ink)]"
            lines={["We design and build", "brands that perform."]}
            delay={0.18}
          />
          <p data-hero-copy className="mt-5 max-w-md text-[15px] leading-7 text-[var(--text-muted)] sm:text-base">
            SEO, SEM, web, and app development for businesses in Islamabad, Pakistan, and globally.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span data-hero-cta>
              <AgencyButton href="#contact">Start a Project</AgencyButton>
            </span>
            <span data-hero-cta>
              <AgencyButton href="/portfolio/" variant="secondary">
                Explore Our Work
              </AgencyButton>
            </span>
          </div>
        </div>

        <div className="perspective-3d relative mx-auto h-[260px] w-full max-w-[400px] sm:h-[320px] lg:h-[360px]">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.title}
              data-hero-card
              className="absolute overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_18px_40px_rgba(17,17,17,0.12)]"
              style={{
                width: "70%",
                height: "78%",
                top: `${index * 10}%`,
                left: `${index * 13}%`,
                zIndex: index + 1,
                transform: `rotate(${index === 1 ? -5 : index === 2 ? 6 : 2}deg)`,
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={index === 2}
                className="object-cover object-top"
                sizes="(max-width: 768px) 60vw, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
