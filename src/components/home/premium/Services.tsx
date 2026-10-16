"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import { ArrowIcon, Eyebrow } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Diamond({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.6 22.4 12 12 22.4 1.6 12 12 1.6Z" />
    </svg>
  );
}

export default function Services() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-flip-card]");
      cards.forEach((card, index) => {
        const inner = card.querySelector<HTMLElement>("[data-flip-inner]");
        if (!inner) return;

        gsap.set(inner, { rotateY: 0, z: 0, force3D: true });
        gsap
          .timeline({
            delay: (index % 3) * 0.12,
            scrollTrigger: {
              trigger: card,
              start: "top 54%",
              once: true,
            },
          })
          .to(inner, { rotateY: 92, z: 120, duration: 0.48, ease: "power2.in" })
          .to(inner, { rotateY: 180, z: 0, duration: 0.58, ease: "power2.out" });
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="services"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--brand)]/10 blur-3xl" />
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 max-w-xl">
          <Eyebrow>What we deliver</Eyebrow>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.04em]">
            Services that hold their own.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[var(--text-muted)]">
            One team for product, search, and growth — each offer treated as a crafted piece, not a template tile.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} data-flip-card className="perspective-3d">
              <div
                data-flip-inner
                className="preserve-3d relative h-[460px] rounded-[26px]"
                style={{ transform: reduced ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <div className="playing-card-face backface-hidden absolute inset-0 overflow-hidden rounded-[26px] text-white shadow-[0_28px_60px_rgba(17,17,17,0.28)]">
                  <div className="playing-card-pips absolute inset-0" />
                  <div className="absolute inset-[10px] rounded-[18px] border border-white/15" />
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-display text-2xl tracking-[-0.04em]">{service.number}</p>
                        <Diamond className="mt-1 h-3.5 w-3.5 text-[var(--brand-soft)]" />
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">DevMola</p>
                    </div>
                    <div className="text-center">
                      <Diamond className="mx-auto h-10 w-10 text-[var(--brand)]/80" />
                      <h3 className="mt-5 font-display text-[1.85rem] leading-[1.05] tracking-[-0.045em]">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-end justify-between">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">Reveal</p>
                      <div className="rotate-180 text-right">
                        <p className="font-display text-2xl tracking-[-0.04em]">{service.number}</p>
                        <Diamond className="ml-auto mt-1 h-3.5 w-3.5 text-[var(--brand-soft)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[linear-gradient(180deg,#fff_0%,#f8f3ee_100%)] p-7 shadow-[0_24px_50px_rgba(17,17,17,0.12)]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--brand)]" />
                  <div className="flex items-center justify-between">
                    <p className="font-display text-sm tracking-[0.22em] text-[var(--brand)]">{service.number}</p>
                    <Diamond className="h-3 w-3 text-[var(--brand)]" />
                  </div>
                  <h3 className="mt-5 font-display text-[1.65rem] leading-tight tracking-[-0.04em]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 4).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--bg)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[var(--ink)] hover:text-[var(--brand)]"
                  >
                    View service
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
