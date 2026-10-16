"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DESKTOP_MQ } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const ORBIT_RADIUS = 215;

function OrbitMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 20.5 12 12 21.5 3.5 12 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="rgba(159,25,63,0.15)"
      />
      <path d="M12 6v12M12 6l4 4M12 6 8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesHeroOrbital() {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const tilt = root.current.querySelector<HTMLElement>("[data-orbit-tilt]");
      const ring = root.current.querySelector<HTMLElement>("[data-orbit-ring]");
      if (!ring || !tilt) return;

      const cardNodes = gsap.utils.toArray<HTMLElement>("[data-orbit-card]");
      const innerNodes = gsap.utils.toArray<HTMLElement>("[data-orbit-card-inner]");
      const count = services.length;

      const updateFocus = () => {
        const ringRot = Number(gsap.getProperty(ring, "rotateY")) || 0;
        cardNodes.forEach((card, index) => {
          const angle = (360 / count) * index;
          const world = (((angle + ringRot) % 360) + 360) % 360;
          const focus = (Math.cos((world * Math.PI) / 180) + 1) / 2;
          const inner = innerNodes[index];
          if (!inner) return;

          gsap.set(card, { zIndex: Math.round(10 + focus * 90) });
          gsap.set(inner, {
            scale: 0.84 + focus * 0.16,
            opacity: 0.42 + focus * 0.58,
            filter: `brightness(${0.72 + focus * 0.38}) saturate(${0.85 + focus * 0.25})`,
          });
        });
      };

      const spin = gsap.to(ring, {
        rotateY: "+=360",
        duration: 52,
        ease: "none",
        repeat: -1,
        onUpdate: updateFocus,
      });

      gsap.ticker.add(updateFocus);

      gsap.to("[data-orbit-float]", {
        y: "+=6",
        duration: 3.4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: { each: 0.35, from: "random" },
      });

      const pause = () => spin.pause();
      const resume = () => spin.resume();
      root.current.addEventListener("pointerenter", pause);
      root.current.addEventListener("pointerleave", resume);

      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MQ, () => {
        gsap.to(tilt, {
          rotateX: 14,
          y: -32,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.55,
          },
        });

        const onMove = (event: PointerEvent) => {
          const x = (event.clientX / window.innerWidth - 0.5) * 18;
          const y = (event.clientY / window.innerHeight - 0.5) * -14;
          gsap.to(tilt, {
            rotateY: x * 0.4,
            rotateX: 14 + y * 0.22,
            duration: 0.65,
            ease: "power2.out",
            overwrite: "auto",
          });
        };

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });

      return () => {
        gsap.ticker.remove(updateFocus);
        root.current?.removeEventListener("pointerenter", pause);
        root.current?.removeEventListener("pointerleave", resume);
        mm.revert();
      };
    },
    { scope: root, dependencies: [reduced] }
  );

  if (reduced) {
    return (
      <div className="flex flex-wrap justify-center gap-2 px-4" aria-hidden="true">
        {services.slice(0, 4).map((s) => (
          <span
            key={s.number}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70"
          >
            {s.title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={root}
      className="perspective-3d group/orbit relative mx-auto flex h-[min(78vw,440px)] w-full max-w-[520px] items-center justify-center lg:h-[480px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(159,25,63,0.32),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-[6%] left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.55),transparent_70%)] blur-md" />

      <div
        data-orbit-tilt
        className="preserve-3d relative"
        style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}
      >
        {/* Orbit track */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]"
          style={{ transform: "rotateX(78deg) translateZ(-24px)" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--brand-soft)]/25 sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]"
          style={{ transform: "rotateX(78deg) translateZ(-12px)" }}
        />

        <div
          data-orbit-ring
          className="preserve-3d relative h-[220px] w-[220px] sm:h-[250px] sm:w-[250px] lg:h-[280px] lg:w-[280px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {services.map((service, index) => {
            const angle = (360 / services.length) * index;
            return (
              <div
                key={service.number}
                data-orbit-card
                data-orbit-float
                className="absolute left-1/2 top-1/2 w-[156px] -translate-x-1/2 -translate-y-1/2 sm:w-[172px] lg:w-[188px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <Link
                  href={service.href}
                  data-orbit-card-inner
                  className="pointer-events-auto block origin-center will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                  tabIndex={-1}
                >
                  <div className="slab-3d relative preserve-3d">
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#0a0a0a]"
                      style={{ transform: "translateZ(-10px) scale(0.98)" }}
                    />
                    <div className="playing-card-face playing-card-pips relative flex min-h-[118px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 p-4 shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:min-h-[128px]">
                      <div className="pointer-events-none absolute -right-6 -top-8 font-display text-[4.5rem] leading-none tracking-[-0.06em] text-white/[0.06]">
                        {service.number}
                      </div>
                      <div className="relative flex items-start justify-between gap-2">
                        <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 font-display text-[11px] tracking-[0.08em] text-white/75">
                          {service.number}
                        </span>
                        <OrbitMark className="h-4 w-4 shrink-0 text-[var(--brand-soft)]" />
                      </div>
                      <div className="relative mt-3">
                        <p className="font-display text-[14px] leading-snug tracking-[-0.03em] text-white sm:text-[15px]">
                          {service.title}
                        </p>
                        {service.capabilities[0] ? (
                          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]/90">
                            {service.capabilities[0]}
                          </p>
                        ) : null}
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_25%,#2a1520,#0a0a0a)] shadow-[0_0_50px_rgba(159,25,63,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]"
            style={{ transform: "translateZ(0px)" }}
          >
            <OrbitMark className="h-7 w-7 text-[var(--brand-soft)]" />
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">6</span>
          </div>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30 opacity-0 transition group-hover/orbit:opacity-100">
        Hover to pause · Click a card
      </p>
    </div>
  );
}
