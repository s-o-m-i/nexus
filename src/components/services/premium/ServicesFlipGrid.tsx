"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import { servicesPageIntro } from "@/lib/services-page-content";
import { ArrowIcon, SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Diamond({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.6 22.4 12 12 22.4 1.6 12 12 1.6Z" />
    </svg>
  );
}

export default function ServicesFlipGrid() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-svc-flip]");
      cards.forEach((card, index) => {
        const inner = card.querySelector<HTMLElement>("[data-svc-flip-inner]");
        if (!inner) return;

        gsap.set(inner, { rotateY: 0, z: 0, force3D: true });
        gsap
          .timeline({
            delay: (index % 3) * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 58%",
              once: true,
            },
          })
          .to(inner, { rotateY: 94, z: 140, duration: 0.5, ease: "power2.in" })
          .to(inner, { rotateY: 180, z: 0, duration: 0.62, ease: "power2.out" });
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="services-catalog"
      ref={root}
      className="relative overflow-x-hidden bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          eyebrow={servicesPageIntro.eyebrow}
          title={servicesPageIntro.title}
          description={servicesPageIntro.description}
          className="max-w-xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} data-svc-flip className="perspective-3d">
              <div
                data-svc-flip-inner
                className="preserve-3d relative h-[440px] rounded-[22px] sm:h-[460px]"
                style={{ transform: reduced ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                <div className="playing-card-face backface-hidden absolute inset-0 overflow-hidden rounded-[22px] text-white shadow-[0_28px_60px_rgba(17,17,17,0.28)]">
                  <div className="playing-card-pips absolute inset-0" />
                  <div className="absolute inset-[10px] rounded-[16px] border border-white/15" />
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
                      <h3 className="mt-5 font-display text-[1.75rem] leading-[1.05] tracking-[-0.045em]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/35">Flip to explore</p>
                  </div>
                </div>

                <div
                  className="backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-[22px] border border-[var(--border-strong)] bg-white p-7 shadow-[0_24px_50px_rgba(17,17,17,0.1)]"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[var(--brand)]" />
                  <p className="font-display text-sm tracking-[0.22em] text-[var(--brand)]">{service.number}</p>
                  <h3 className="mt-4 font-display text-[1.55rem] leading-tight tracking-[-0.04em] text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.capabilities.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-[var(--bg-section)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
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
