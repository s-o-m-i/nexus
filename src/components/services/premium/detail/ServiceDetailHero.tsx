"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { ServiceDetail } from "@/lib/services-detail-content";
import { AgencyButton, Eyebrow } from "@/components/home/premium/PremiumUI";
import ServiceDetailHeroVisual from "./ServiceDetailHeroVisual";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function ServiceDetailHero({ detail }: { detail: ServiceDetail }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-svc-detail-hero]",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power3.out" }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[var(--ink)] pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_0%,rgba(159,25,63,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg-section)] to-transparent" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:px-12">
        <div className="max-w-xl">
          <nav data-svc-detail-hero aria-label="Breadcrumb">
            <Link
              href="/services/"
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45 transition hover:text-white/75"
            >
              ← All services
            </Link>
          </nav>
          <div data-svc-detail-hero className="mt-6">
            <Eyebrow light>{detail.hero.eyebrow}</Eyebrow>
          </div>
          <h1
            data-svc-detail-hero
            className="mt-4 font-display text-[clamp(2.35rem,5.5vw,4.15rem)] leading-[1.02] tracking-[-0.04em]"
          >
            {detail.hero.title}
          </h1>
          <p data-svc-detail-hero className="mt-5 text-base leading-7 text-white/65 sm:text-[17px]">
            {detail.hero.description}
          </p>
          <div data-svc-detail-hero className="mt-8 flex flex-wrap gap-3">
            <AgencyButton href="/contact/">Start a project</AgencyButton>
            <AgencyButton
              href="#service-offerings"
              variant="secondary"
              className="border-white/20 text-white hover:border-white hover:text-white"
            >
              What we deliver
            </AgencyButton>
          </div>
        </div>

        <div data-svc-detail-hero className="lg:justify-self-end">
          <ServiceDetailHeroVisual number={detail.number} label={detail.hero.eyebrow} />
        </div>
      </div>
    </section>
  );
}
