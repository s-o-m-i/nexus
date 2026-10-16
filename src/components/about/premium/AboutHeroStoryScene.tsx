"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutStory } from "@/lib/about-content";
import OrbitMark from "@/components/motion/OrbitMark";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DESKTOP_MQ } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const ORBIT_RADIUS = 252;

const chapterTags: Record<string, string> = {
  "01": "Founded · 2021",
  "02": "Craft & trust",
  "03": "Vision forward",
};

function storyExcerpt(body: string, max = 78) {
  const first = body.split(".")[0]?.trim() ?? body;
  if (first.length <= max) return `${first}.`;
  return `${first.slice(0, max).trim()}…`;
}

export default function AboutHeroStoryScene() {
  const root = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const stages = aboutStory.stages;

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const tilt = root.current.querySelector<HTMLElement>("[data-about-story-tilt]");
      const ring = root.current.querySelector<HTMLElement>("[data-about-story-ring]");
      if (!ring || !tilt) return;

      const cards = gsap.utils.toArray<HTMLElement>("[data-about-story-card]");
      const inners = gsap.utils.toArray<HTMLElement>("[data-about-story-card-inner]");
      const count = stages.length;

      const updateFocus = () => {
        const ringRot = Number(gsap.getProperty(ring, "rotateY")) || 0;
        cards.forEach((card, index) => {
          const angle = (360 / count) * index;
          const world = (((angle + ringRot) % 360) + 360) % 360;
          const focus = (Math.cos((world * Math.PI) / 180) + 1) / 2;
          const inner = inners[index];
          if (!inner) return;
          gsap.set(card, { zIndex: Math.round(10 + focus * 90) });
          gsap.set(inner, {
            scale: 0.86 + focus * 0.14,
            opacity: 0.45 + focus * 0.55,
            filter: `brightness(${0.74 + focus * 0.36})`,
          });
        });
      };

      const spin = gsap.to(ring, {
        rotateY: "+=360",
        duration: 44,
        ease: "none",
        repeat: -1,
        onUpdate: updateFocus,
      });

      gsap.ticker.add(updateFocus);

      gsap.to("[data-about-story-float]", {
        y: "+=8",
        duration: 3.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: { each: 0.45, from: "random" },
      });

      const pause = () => spin.pause();
      const resume = () => spin.resume();
      root.current.addEventListener("pointerenter", pause);
      root.current.addEventListener("pointerleave", resume);

      ScrollTrigger.create({
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.65,
        onUpdate: (self) => {
          gsap.set(tilt, { y: self.progress * -28 });
        },
      });

      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MQ, () => {
        const onMove = (event: PointerEvent) => {
          const rect = root.current!.getBoundingClientRect();
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          gsap.to(tilt, {
            rotateY: nx * 11,
            rotateX: 8 + ny * -7,
            duration: 0.7,
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
      <ul className="space-y-3 px-2" aria-label="Story chapters">
        {stages.map((stage) => (
          <li key={stage.number} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-soft)]">
              Chapter {stage.number}
            </p>
            <p className="mt-1 font-display text-base text-white">{stage.title}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      ref={root}
      className="about-story-orbit perspective-3d group/story relative mx-auto flex h-[min(88vw,480px)] w-full max-w-[560px] items-center justify-center lg:h-[520px] lg:max-w-none"
    >
      <div className="pointer-events-none absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_52%,rgba(159,25,63,0.3),transparent_64%)]" />
      <div className="pointer-events-none absolute bottom-[2%] left-1/2 h-12 w-[82%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.55),transparent_70%)] blur-md" />

      {/* Ascending story arc */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[8%] h-[84%] w-[42%] -translate-x-1/2 text-white/10"
        viewBox="0 0 120 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M60 300 C60 220 28 180 28 120 C28 70 60 40 60 20"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle cx="60" cy="20" r="3" fill="rgba(196,33,85,0.6)" />
      </svg>

      <div
        data-about-story-tilt
        className="preserve-3d relative w-full"
        style={{ transform: "rotateX(8deg)", transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]"
          style={{ transform: "rotateX(78deg) translateZ(-30px)" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--brand-soft)]/28 sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]"
          style={{ transform: "rotateX(78deg) translateZ(-16px)" }}
        />

        <div
          data-about-story-ring
          className="preserve-3d relative mx-auto h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] lg:h-[340px] lg:w-[340px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {stages.map((stage, index) => {
            const angle = (360 / stages.length) * index;
            return (
              <div
                key={stage.number}
                data-about-story-card
                data-about-story-float
                className="absolute left-1/2 top-1/2 w-[200px] -translate-x-1/2 -translate-y-1/2 sm:w-[220px] lg:w-[248px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <Link
                  href="#about-story"
                  data-about-story-card-inner
                  className="block origin-center will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="slab-3d relative preserve-3d">
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#0a0a0a] lg:rounded-3xl"
                      style={{ transform: "translateZ(-12px) scale(0.98)" }}
                    />
                    <div className="playing-card-face playing-card-pips relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 p-5 shadow-[0_32px_70px_rgba(0,0,0,0.55)] lg:min-h-[178px] lg:rounded-3xl">
                      <div className="pointer-events-none absolute -right-4 -top-6 font-display text-[5rem] leading-none tracking-[-0.06em] text-white/[0.06]">
                        {stage.number}
                      </div>
                      <div className="relative flex items-start justify-between gap-2">
                        <span className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                          Chapter {stage.number}
                        </span>
                        <OrbitMark className="h-4 w-4 shrink-0 text-[var(--brand-soft)]" />
                      </div>
                      <div className="relative mt-3">
                        <p className="font-display text-[17px] leading-snug tracking-[-0.03em] text-white lg:text-lg">
                          {stage.title}
                        </p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]/90">
                          {chapterTags[stage.number] ?? "Our journey"}
                        </p>
                        <p className="mt-3 line-clamp-3 text-[12px] leading-5 text-white/55">
                          {storyExcerpt(stage.body)}
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.1] to-transparent" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 flex h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_25%,#2a1520,#0a0a0a)] shadow-[0_0_55px_rgba(159,25,63,0.48),inset_0_1px_0_rgba(255,255,255,0.12)]"
            style={{ transform: "translateZ(0px)" }}
          >
            <OrbitMark className="h-8 w-8 text-[var(--brand-soft)]" />
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">Story</span>
          </div>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 opacity-0 transition group-hover/story:opacity-100">
        Hover to read · Click to jump to timeline
      </p>
    </div>
  );
}
