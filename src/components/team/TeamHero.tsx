"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitLines from "@/components/motion/SplitLines";
import { AgencyButton } from "@/components/home/premium/PremiumUI";
import { teamHero } from "@/lib/team-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP);

function OrbitNode({
  style,
  className = "",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }) {
  return (
    <div
      {...rest}
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_0_24px_rgba(159,25,63,0.15)] ${className}`}
      style={style}
    >
      <span className="h-2 w-2 rounded-full bg-[var(--brand-soft)]" />
    </div>
  );
}

export default function TeamHero() {
  const root = useRef<HTMLElement | null>(null);
  const scene = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo("[data-team-hero-copy]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.45 })
        .fromTo(
          "[data-team-hero-cta]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          "[data-team-orbit-ring]",
          { opacity: 0, scale: 0.85, rotateX: 24 },
          { opacity: 1, scale: 1, rotateX: 0, duration: 1.1, stagger: 0.12 },
          0.15
        )
        .fromTo(
          "[data-team-orbit-node]",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.65, stagger: 0.06 },
          0.35
        );
    },
    { scope: root, dependencies: [reduced] }
  );

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !scene.current || event.pointerType === "touch") return;
    const rect = scene.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    gsap.to(scene.current, {
      rotateY: x * 10,
      rotateX: -y * 8,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const onPointerLeave = () => {
    if (!scene.current) return;
    gsap.to(scene.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[var(--bg)] px-5 pb-20 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[var(--navy)]/8 blur-3xl" />
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16">
        <div className="relative z-10 max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--eyebrow-muted)]">
            {teamHero.eyebrow}
          </p>
          <SplitLines
            as="h1"
            className="mt-4 font-display text-[clamp(2.2rem,5.5vw,3.75rem)] leading-[1.06] font-semibold tracking-[-0.04em] text-[var(--ink)]"
            lines={teamHero.headline}
            delay={0.12}
          />
          <p data-team-hero-copy className="mt-6 max-w-lg text-base leading-7 text-[var(--text-muted)]">
            {teamHero.subcopy}
          </p>
          <div data-team-hero-cta className="mt-8">
            <AgencyButton href={teamHero.ctaTarget}>{teamHero.ctaLabel}</AgencyButton>
          </div>
        </div>

        <div
          className="perspective-3d relative mx-auto h-[300px] w-full max-w-[420px] sm:h-[360px]"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <div
            ref={scene}
            className="preserve-3d relative h-full w-full"
            aria-hidden="true"
          >
            <div
              data-team-orbit-ring
              className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--ink)]/10 bg-[linear-gradient(145deg,#ffffff_0%,#f3f1ed_100%)] shadow-[var(--shadow-card)]"
            />
            <div
              data-team-orbit-ring
              className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--brand)]/15"
            />
            <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--brand)]" fill="currentColor" aria-hidden="true">
                <path d="M12 1.6 22.4 12 12 22.4 1.6 12 12 1.6Z" />
              </svg>
            </div>
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <OrbitNode
                key={deg}
                data-team-orbit-node
                className="left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-132px) rotate(-${deg}deg)`,
                }}
              />
            ))}
            <div
              data-team-orbit-node
              className="absolute bottom-6 left-6 rounded-full border border-[var(--border)] bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]"
            >
              Collaborate
            </div>
            <div
              data-team-orbit-node
              className="absolute right-4 top-8 rounded-full border border-[var(--border)] bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]"
            >
              Ship
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
