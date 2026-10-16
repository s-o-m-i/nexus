"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STORAGE_KEY = "devmola-loader-seen";

function Diamond({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.6 22.4 12 12 22.4 1.6 12 12 1.6Z" />
    </svg>
  );
}

function waitForReady(minMs: number) {
  return new Promise<void>((resolve) => {
    const start = performance.now();
    const done = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, minMs - elapsed);
      window.setTimeout(resolve, remaining);
    };

    if (document.readyState === "complete") {
      void document.fonts?.ready?.then(done).catch(done);
    } else {
      window.addEventListener("load", () => {
        void document.fonts?.ready?.then(done).catch(done);
      }, { once: true });
    }
  });
}

export default function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    setMounted(true);
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      return;
    }
    setVisible(true);
    document.body.classList.add("page-loader-active");
  }, []);

  useGSAP(
    () => {
      if (!visible || !root.current || reduced) {
        if (visible && reduced && root.current) {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
          document.body.classList.remove("page-loader-active");
        }
        return;
      }

      const scope = root.current;
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          sessionStorage.setItem(STORAGE_KEY, "1");
          setVisible(false);
          document.body.classList.remove("page-loader-active");
          ScrollTrigger.refresh();
        },
      });

      gsap.set(scope.querySelector("[data-loader-panel]"), { transformPerspective: 1200 });

      tl.fromTo(scope, { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.01 })
        .fromTo(
          "[data-loader-grid]",
          { opacity: 0 },
          { opacity: 0.35, duration: 0.8 },
          0
        )
        .fromTo(
          "[data-loader-orbit-item]",
          { opacity: 0, scale: 0, rotateY: -120 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 0.9, stagger: 0.08 },
          0.1
        )
        .fromTo(
          "[data-loader-char]",
          { yPercent: 120, rotateX: -72, opacity: 0 },
          { yPercent: 0, rotateX: 0, opacity: 1, duration: 0.85, stagger: 0.045, ease: "power4.out" },
          0.35
        )
        .fromTo(
          "[data-loader-accent]",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, ease: "power2.inOut" },
          0.75
        )
        .fromTo(
          "[data-loader-tagline]",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55 },
          0.95
        )
        .fromTo(
          "[data-loader-progress]",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.05, ease: "power2.inOut" },
          0.5
        )
        .to("[data-loader-orbit]", { rotateY: 360, duration: 2.4, ease: "none" }, 0.2)
        .to({}, { duration: 0.35 })
        .to("[data-loader-panel]", {
          rotateX: -8,
          y: -24,
          scale: 0.96,
          opacity: 0,
          duration: 0.55,
          ease: "power2.in",
        })
        .to(
          scope,
          {
            yPercent: -100,
            duration: 0.85,
            ease: "power4.inOut",
          },
          "-=0.2"
        );

      void waitForReady(1600).then(() => {
        if (tl.progress() < 0.72) {
          tl.timeScale(1.15);
        }
      });

      return () => {
        tl.kill();
      };
    },
    { scope: root, dependencies: [visible, reduced] }
  );

  if (!mounted || !visible) return null;

  const word = "DevMola";
  const chars = word.split("");

  return (
    <div
      ref={root}
      className="page-loader fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-[var(--ink)] text-white"
      aria-hidden={!visible}
      aria-live="polite"
    >
      <div
        data-loader-grid
        className="playing-card-pips pointer-events-none absolute inset-0 opacity-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(159,25,63,0.22),transparent_52%)]"
        aria-hidden="true"
      />

      <div data-loader-panel className="perspective-3d preserve-3d relative z-10 flex flex-col items-center px-6">
        <div
          data-loader-orbit
          className="preserve-3d relative mb-10 h-28 w-28 sm:h-32 sm:w-32"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              data-loader-orbit-item
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{
                transform: `rotate(${i * 60}deg) translateY(-46px) rotate(-${i * 60}deg)`,
              }}
            >
              <Diamond
                className={`h-3 w-3 ${i % 2 === 0 ? "text-[var(--brand-soft)]" : "text-white/35"} drop-shadow-[0_0_12px_rgba(196,33,85,0.35)]`}
              />
            </div>
          ))}
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Diamond className="h-6 w-6 text-[var(--brand)]" />
          </div>
        </div>

        <div className="overflow-hidden">
          <h1 className="flex font-display text-[clamp(2.75rem,11vw,4.75rem)] leading-none tracking-[-0.06em]">
            {chars.map((char, index) => (
              <span key={`${char}-${index}`} className="inline-block overflow-hidden px-[0.02em]">
                <span
                  data-loader-char
                  className={`inline-block will-change-transform ${
                    index >= 3 ? "text-[var(--brand-soft)]" : "text-white"
                  }`}
                >
                  {char}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div
          data-loader-accent
          className="mt-5 h-px w-24 origin-left bg-gradient-to-r from-[var(--brand)] via-[var(--brand-soft)] to-transparent"
        />

        <p
          data-loader-tagline
          className="mt-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/50"
        >
          Design · Build · Grow
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left bg-white/10">
        <div
          data-loader-progress
          className="h-full w-full origin-left bg-gradient-to-r from-[var(--brand-deep)] via-[var(--brand)] to-[var(--brand-soft)]"
        />
      </div>
    </div>
  );
}
