"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import { servicesPageRail } from "@/lib/services-page-content";
import { ArrowIcon, SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DESKTOP_MQ } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesScrollRail() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        const section = root.current;
        if (!section) return;

        const track = section.querySelector<HTMLElement>("[data-svc-rail-track]");
        if (!track) return;

        const getTravel = () => Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? 0));

        let tween: gsap.core.Tween | null = null;

        const kill = () => {
          if (!tween) return;
          tween.scrollTrigger?.kill();
          tween.kill();
          tween = null;
          gsap.set(track, { clearProps: "transform" });
        };

        const build = () => {
          kill();
          const travel = getTravel();
          if (travel < 24) return;

          tween = gsap.to(track, {
            x: () => -getTravel(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${Math.max(travel * 1.15, window.innerHeight * 0.85)}`,
              pin: true,
              pinType: "transform",
              scrub: 0.85,
              invalidateOnRefresh: true,
              anticipatePin: 0,
            },
          });
        };

        const raf = requestAnimationFrame(() => {
          build();
          ScrollTrigger.refresh();
        });

        const onResize = () => build();
        window.addEventListener("resize", onResize);

        return () => {
          cancelAnimationFrame(raf);
          window.removeEventListener("resize", onResize);
          kill();
        };
      });

      gsap.fromTo(
        "[data-svc-rail-panel]",
        { opacity: 0, rotateY: -16, z: -80 },
        {
          opacity: 1,
          rotateY: 0,
          z: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      return () => mm.revert();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <SectionIntro
          eyebrow={servicesPageRail.eyebrow}
          title={servicesPageRail.title}
          description={servicesPageRail.description}
          light
          className="max-w-xl"
        />
      </div>

      <div className="overflow-hidden pb-20 lg:pb-24">
        <div
          data-svc-rail-track
          className="flex w-max gap-5 px-5 will-change-transform max-lg:flex-col max-lg:w-full max-lg:px-5 sm:gap-6 sm:px-8 lg:px-12 lg:gap-8"
        >
          {services.map((service) => (
            <article
              key={service.number}
              data-svc-rail-panel
              className="perspective-3d w-[min(88vw,520px)] shrink-0 max-lg:w-full"
            >
              <div className="preserve-3d relative min-h-[320px] overflow-hidden rounded-lg border border-white/12 bg-[var(--surface-dark-elevated)] p-6 sm:min-h-[360px] sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-soft)]">
                  {service.number}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.05] tracking-[-0.04em]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/60">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.capabilities.slice(0, 4).map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-white/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[var(--brand-soft)]"
                >
                  Open service page
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
