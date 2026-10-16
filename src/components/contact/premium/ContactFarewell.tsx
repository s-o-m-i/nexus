"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { contactFarewell } from "@/lib/contact-page-content";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const letters = contactFarewell.word.split("");

function WaveHand({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 26V14c0-2.2 3.6-2.2 3.6 0v10M18 26V11c0-2.4 3.8-2.4 3.8 0v15M24 26V13c0-2.3 3.5-2.3 3.5 0v16M30 24l2-10c.6-2.5 4-1.8 3.4 1.2l-3 14c-1 4.5-5.5 7.5-10 7.5H14c-4.2 0-7.5-3-7.5-7.2 0-3.8 2.8-7 6.5-7.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactFarewell() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;

      const letterEls = section.querySelectorAll("[data-bye-letter]");
      const extras = section.querySelectorAll("[data-bye-extra]");
      gsap.set(letterEls, { opacity: 0, y: 48, rotateX: -40, transformPerspective: 800 });
      gsap.set(extras, { opacity: 0, y: 16 });

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap
            .timeline({ defaults: { ease: "back.out(1.4)" } })
            .to(letterEls, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.95,
              stagger: 0.12,
            })
            .to(extras, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.35");

          gsap.to("[data-bye-wave]", {
            rotate: 18,
            duration: 0.45,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            transformOrigin: "70% 80%",
          });

          gsap.to(letterEls, {
            y: "+=6",
            duration: 2.4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            stagger: { each: 0.15, from: "center" },
          });

          observer.disconnect();
        },
        { threshold: 0.25 }
      );

      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      ref={root}
      className="contact-farewell relative overflow-hidden bg-[var(--ink)] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
      aria-label="Farewell message"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(159,25,63,0.2),transparent_62%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(80vw,420px)] w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
        <div data-bye-extra className="mb-4 flex items-center gap-2 text-[var(--brand-soft)]">
          <WaveHand data-bye-wave className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
            {contactFarewell.line}
          </span>
        </div>

        <div
          className="contact-bye-3d perspective-3d flex items-center justify-center gap-1 sm:gap-2"
          style={{ perspective: "900px" }}
        >
          {letters.map((char, index) => (
            <span
              key={`${char}-${index}`}
              data-bye-letter
              className="inline-block origin-bottom font-display text-[clamp(4.5rem,22vw,10.5rem)] leading-none tracking-[-0.06em]"
              style={{
                transformStyle: "preserve-3d",
                background: "linear-gradient(180deg, #ffffff 0%, #f0e8ec 45%, #c42155 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <p
          data-bye-extra
          className="mt-8 max-w-md text-[15px] leading-7 text-white/55 sm:text-base"
        >
          {contactFarewell.subline}
        </p>

        <div data-bye-extra className="mt-6 flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-[var(--brand-soft)]"
              style={{ opacity: 0.35 + i * 0.25 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
