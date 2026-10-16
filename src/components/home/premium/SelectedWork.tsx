"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/home-content";
import { ArrowIcon, Eyebrow } from "./PremiumUI";
import { DESKTOP_MQ } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const mm = gsap.matchMedia();

      mm.add(DESKTOP_MQ, () => {
        const section = root.current;
        if (!section) return;

        const track = section.querySelector<HTMLElement>("[data-work-track]");
        if (!track) return;

        let tween: gsap.core.Tween | null = null;

        const getTravel = () => {
          const viewport = track.parentElement?.clientWidth ?? window.innerWidth;
          return Math.max(0, track.scrollWidth - viewport);
        };

        const killTween = () => {
          if (!tween) return;
          const st = tween.scrollTrigger;
          if (st) st.kill();
          tween.kill();
          tween = null;
          gsap.set(track, { clearProps: "transform" });
        };

        const createTween = () => {
          killTween();

          const travel = getTravel();
          if (travel < 12) return;

          const endDistance = Math.max(travel * 1.8, window.innerHeight * 0.9);

          tween = gsap.to(track, {
            x: () => -getTravel(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80px",
              end: `+=${endDistance}`,
              pin: true,
              pinType: "transform",
              scrub: 0.7,
              invalidateOnRefresh: true,
              anticipatePin: 0,
            },
          });
        };

        const rafId = requestAnimationFrame(() => {
          createTween();
          ScrollTrigger.refresh();
        });

        const onResize = () => {
          createTween();
        };

        const refresh = () => ScrollTrigger.refresh();
        const images = track.querySelectorAll("img");
        images.forEach((image) => {
          if (!image.complete) image.addEventListener("load", refresh, { once: true });
        });

        window.addEventListener("resize", onResize);

        return () => {
          cancelAnimationFrame(rafId);
          window.removeEventListener("resize", onResize);
          images.forEach((image) => image.removeEventListener("load", refresh));
          killTween();
        };
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section id="work" ref={root} className="relative bg-[var(--ink)] py-14 text-white sm:py-16 lg:py-10">
      <div className="mb-6 flex items-end justify-between gap-6 px-5 sm:px-8 lg:mb-6 lg:px-10">
        <div>
          <Eyebrow light>Selected work</Eyebrow>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-[-0.04em]">
            Projects, up close.
          </h2>
        </div>
        <Link href="/portfolio/" className="group hidden items-center gap-2 text-sm font-semibold text-white sm:inline-flex">
          All projects
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="overflow-hidden">
        <div
          data-work-track
          className="work-track flex w-max gap-3 will-change-transform max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory"
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="work-card group shrink-0 snap-start"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#1a1a1a]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 70vw, 32vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-4 pt-16">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">{project.category}</p>
                  <h3 className="mt-1 font-display text-lg tracking-[-0.03em]">{project.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 px-5 sm:hidden">
        <Link href="/portfolio/" className="inline-flex items-center gap-2 text-sm font-semibold">
          All projects
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
