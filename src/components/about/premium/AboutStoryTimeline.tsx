"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutStory } from "@/lib/about-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function AboutStoryTimeline() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      aboutStory.stages.forEach((_, index) => {
        gsap.fromTo(
          `[data-story-stage="${index}"]`,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `[data-story-stage="${index}"]`,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      const line = root.current.querySelector("[data-story-line-fill]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current.querySelector("[data-story-track]"),
              start: "top 70%",
              end: "bottom 60%",
              scrub: 0.4,
            },
          }
        );
      }
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section id="about-story" ref={root} className="bg-[var(--bg-section)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <SectionIntro eyebrow={aboutStory.eyebrow} title={aboutStory.title} className="mx-auto max-w-2xl text-center" />

        <div className="relative mt-14 lg:mt-20">
          <div
            data-story-track
            className="relative space-y-12 lg:space-y-0 lg:grid lg:grid-cols-[48px_1fr] lg:gap-x-10"
          >
            <div className="absolute left-[23px] top-0 hidden h-full w-px origin-top bg-[var(--border-strong)] lg:block">
              <div
                data-story-line-fill
                className="h-full w-full origin-top bg-[var(--ink)]"
                style={{ transform: "scaleY(0)" }}
              />
            </div>

            <div className="hidden lg:block" aria-hidden="true" />

            <div className="space-y-14 lg:col-start-2 lg:space-y-20">
              {aboutStory.stages.map((stage, index) => (
                <article
                  key={stage.number}
                  data-story-stage={index}
                  className="relative grid gap-4 sm:grid-cols-[88px_1fr] sm:gap-8"
                >
                  <div className="flex items-start gap-4 sm:flex-col sm:gap-2">
                    <span className="font-display text-4xl tracking-[-0.04em] text-[var(--ink)]/15 sm:text-5xl">
                      {stage.number}
                    </span>
                    <span className="inline-flex h-2 w-2 rounded-full bg-[var(--brand)] lg:hidden" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.03em] text-[var(--ink)] sm:text-[1.65rem]">
                      {stage.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--text-muted)]">{stage.body}</p>
                  </div>
                </article>
              ))}

              <blockquote className="border-l-2 border-[var(--brand)] pl-5 font-display text-lg italic leading-relaxed text-[var(--ink)] sm:text-xl">
                &ldquo;{aboutStory.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
