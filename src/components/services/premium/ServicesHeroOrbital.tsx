"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DESKTOP_MQ } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function Diamond({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.6 22.4 12 12 22.4 1.6 12 12 1.6Z" />
    </svg>
  );
}

export default function ServicesHeroOrbital() {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const tilt = root.current.querySelector("[data-orbit-tilt]");
      const ring = root.current.querySelector("[data-orbit-ring]");
      if (!ring || !tilt) return;

      gsap.to(ring, {
        rotateY: 360,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      gsap.to("[data-orbit-float]", {
        y: "+=10",
        duration: 2.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: { each: 0.2, from: "random" },
      });

      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MQ, () => {
        gsap.to(tilt, {
          rotateX: 12,
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        const onMove = (event: PointerEvent) => {
          const x = (event.clientX / window.innerWidth - 0.5) * 16;
          const y = (event.clientY / window.innerHeight - 0.5) * -12;
          gsap.to(tilt, { rotateY: x * 0.35, rotateX: y * 0.25, duration: 0.55, ease: "power2.out", overwrite: "auto" });
        };

        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
      });

      return () => mm.revert();
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
      className="perspective-3d relative mx-auto flex h-[min(72vw,420px)] w-full max-w-[480px] items-center justify-center lg:h-[460px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(159,25,63,0.22),transparent_65%)]" />

      <div data-orbit-tilt className="preserve-3d" style={{ transformStyle: "preserve-3d" }}>
        <div
          data-orbit-ring
          className="preserve-3d relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px] lg:h-[280px] lg:w-[280px]"
          style={{ transformStyle: "preserve-3d" }}
        >
        {services.map((service, index) => {
          const angle = (360 / services.length) * index;
          return (
            <div
              key={service.number}
              data-orbit-float
              className="absolute left-1/2 top-1/2 h-[108px] w-[148px] -translate-x-1/2 -translate-y-1/2 sm:h-[118px] sm:w-[162px]"
              style={{
                transform: `rotateY(${angle}deg) translateZ(168px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="playing-card-face backface-hidden flex h-full flex-col justify-between rounded-xl border border-white/15 bg-[var(--surface-dark-elevated)] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)] sm:p-4">
                <div className="flex items-center justify-between text-white/50">
                  <span className="font-display text-sm">{service.number}</span>
                  <Diamond className="text-[var(--brand-soft)]" />
                </div>
                <p className="font-display text-[13px] leading-tight tracking-[-0.03em] text-white sm:text-sm">
                  {service.title}
                </p>
              </div>
            </div>
          );
        })}

        <div
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--ink)] shadow-[0_0_40px_rgba(159,25,63,0.35)]"
          style={{ transform: "translateZ(0px)" }}
        >
          <Diamond className="h-6 w-6 text-[var(--brand)]" />
        </div>
        </div>
      </div>
    </div>
  );
}
