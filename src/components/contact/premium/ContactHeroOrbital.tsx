"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { contactOrbitCards } from "@/lib/contact-page-content";
import OrbitMark from "@/components/motion/OrbitMark";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DESKTOP_MQ } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const ORBIT_RADIUS = 248;
const cards = contactOrbitCards;

export default function ContactHeroOrbital() {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const tilt = root.current.querySelector<HTMLElement>("[data-contact-orbit-tilt]");
      const ring = root.current.querySelector<HTMLElement>("[data-contact-orbit-ring]");
      if (!ring || !tilt) return;

      const cardNodes = gsap.utils.toArray<HTMLElement>("[data-contact-orbit-card]");
      const inners = gsap.utils.toArray<HTMLElement>("[data-contact-orbit-inner]");
      const count = cards.length;

      const updateFocus = () => {
        const ringRot = Number(gsap.getProperty(ring, "rotateY")) || 0;
        cardNodes.forEach((card, index) => {
          const angle = (360 / count) * index;
          const world = (((angle + ringRot) % 360) + 360) % 360;
          const focus = (Math.cos((world * Math.PI) / 180) + 1) / 2;
          const inner = inners[index];
          if (!inner) return;
          gsap.set(card, { zIndex: Math.round(10 + focus * 90) });
          gsap.set(inner, {
            scale: 0.84 + focus * 0.16,
            opacity: 0.42 + focus * 0.58,
            filter: `brightness(${0.72 + focus * 0.38})`,
          });
        });
      };

      const spin = gsap.to(ring, {
        rotateY: "+=360",
        duration: 50,
        ease: "none",
        repeat: -1,
        onUpdate: updateFocus,
      });

      gsap.ticker.add(updateFocus);

      gsap.to("[data-contact-orbit-float]", {
        y: "+=7",
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: { each: 0.28, from: "random" },
      });

      const pause = () => spin.pause();
      const resume = () => spin.resume();
      root.current.addEventListener("pointerenter", pause);
      root.current.addEventListener("pointerleave", resume);

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => gsap.set(tilt, { y: self.progress * -22 }),
      });

      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MQ, () => {
        const onMove = (event: PointerEvent) => {
          const rect = root.current!.getBoundingClientRect();
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          gsap.to(tilt, {
            rotateY: nx * 10,
            rotateX: 8 + ny * -6,
            duration: 0.65,
            ease: "power2.out",
            overwrite: "auto",
          });
        };
        root.current!.addEventListener("pointermove", onMove);
        return () => root.current?.removeEventListener("pointermove", onMove);
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
      <ul className="flex flex-wrap justify-center gap-2 px-2">
        {cards.slice(0, 4).map((item) => (
          <li key={item.number}>
            <a
              href={item.href}
              className="block rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/75"
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  const renderCardLink = (item: (typeof cards)[number], className: string) => {
    const inner = (
      <div className="slab-3d relative preserve-3d">
        <div
          className="absolute inset-0 rounded-2xl bg-[#0a0a0a] lg:rounded-3xl"
          style={{ transform: "translateZ(-10px) scale(0.98)" }}
        />
        <div className="playing-card-face playing-card-pips relative flex min-h-[128px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 p-4 shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:min-h-[136px] lg:min-h-[142px] lg:rounded-3xl lg:p-5">
          <div className="pointer-events-none absolute -right-5 -top-7 font-display text-[4.75rem] leading-none tracking-[-0.06em] text-white/[0.06]">
            {item.number}
          </div>
          <div className="relative flex items-start justify-between gap-2">
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 font-display text-[11px] tracking-[0.08em] text-white/75">
              {item.number}
            </span>
            <OrbitMark className="h-4 w-4 shrink-0 text-[var(--brand-soft)]" />
          </div>
          <div className="relative mt-2">
            <p className="font-display text-[15px] leading-snug tracking-[-0.03em] text-white sm:text-[16px]">
              {item.title}
            </p>
            <p className="mt-2 line-clamp-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-soft)]/90">
              {item.tag}
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />
        </div>
      </div>
    );

    if (item.external) {
      return (
        <a href={item.href} target="_blank" rel="noreferrer" className={className} data-contact-orbit-inner>
          {inner}
        </a>
      );
    }

    return (
      <Link href={item.href} className={className} data-contact-orbit-inner>
        {inner}
      </Link>
    );
  };

  return (
    <div
      ref={root}
      className="contact-orbit perspective-3d group/contact-orbit relative mx-auto flex h-[min(82vw,460px)] w-full max-w-[540px] items-center justify-center lg:h-[500px] lg:max-w-none"
      aria-label="Ways to start a project with DevMola"
    >
      <div className="pointer-events-none absolute inset-[5%] rounded-full bg-[radial-gradient(circle_at_50%_54%,rgba(159,25,63,0.32),transparent_63%)]" />
      <div className="pointer-events-none absolute bottom-[3%] left-1/2 h-11 w-[80%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.55),transparent_72%)] blur-md" />

      {/* Message pulse — points toward form */}
      <svg
        className="pointer-events-none absolute right-[8%] top-[18%] h-16 w-16 text-[var(--brand-soft)]/40 lg:right-[12%]"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 12h48v32H22L8 56V12Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="rgba(159,25,63,0.08)"
        />
        <path d="M16 24h32M16 32h24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      </svg>

      <div
        data-contact-orbit-tilt
        className="preserve-3d relative w-full"
        style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]"
          style={{ transform: "rotateX(78deg) translateZ(-28px)" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--brand-soft)]/28 sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]"
          style={{ transform: "rotateX(78deg) translateZ(-14px)" }}
        />

        <div
          data-contact-orbit-ring
          className="preserve-3d relative mx-auto h-[250px] w-[250px] sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map((item, index) => {
            const angle = (360 / cards.length) * index;
            return (
              <div
                key={item.number}
                data-contact-orbit-card
                data-contact-orbit-float
                className="absolute left-1/2 top-1/2 w-[168px] -translate-x-1/2 -translate-y-1/2 sm:w-[184px] lg:w-[200px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {renderCardLink(item, "pointer-events-auto block origin-center will-change-transform")}
              </div>
            );
          })}

          <Link
            href="#contact-form"
            className="absolute left-1/2 top-1/2 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_25%,#2a1520,#0a0a0a)] shadow-[0_0_55px_rgba(159,25,63,0.48),inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-[var(--brand-soft)]/50 lg:h-[92px] lg:w-[92px]"
            style={{ transform: "translateZ(0px)" }}
          >
            <OrbitMark className="h-8 w-8 text-[var(--brand-soft)]" />
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">Start</span>
          </Link>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 opacity-0 transition group-hover/contact-orbit:opacity-100">
        Hover to choose · Tap to connect
      </p>
    </div>
  );
}
