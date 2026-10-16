"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { processSteps } from "@/lib/home-content";
import { SectionIntro } from "./PremiumUI";
import ProcessOrbitalStage from "./ProcessOrbitalStage";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const orbitalSteps = processSteps.map((step) => ({
  number: step.number,
  title: step.title,
  tag: "Process step",
}));

export default function Process() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;

      const ring = section.querySelector<HTMLElement>("[data-process-ring]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-process-orbit-card]");
      const inners = gsap.utils.toArray<HTMLElement>("[data-process-orbit-card-inner]");
      const panels = gsap.utils.toArray<HTMLElement>("[data-process-panel]");
      const count = processSteps.length;

      if (!ring || !cards.length) return;

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
            scale: 0.84 + focus * 0.16,
            opacity: 0.4 + focus * 0.6,
            filter: `brightness(${0.72 + focus * 0.38})`,
          });
        });
      };

      let trigger: ScrollTrigger | null = null;

      const build = () => {
        trigger?.kill();
        gsap.set(ring, { rotateY: 0 });

        const isNarrow = window.innerWidth < 1024;
        const scrollPerStep = window.innerHeight * (isNarrow ? 0.42 : 0.52);
        const endDistance = Math.max(scrollPerStep * count, window.innerHeight * (isNarrow ? 1.8 : 2.2));

        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 88px",
          end: `+=${endDistance}`,
          pin: true,
          pinType: "transform",
          scrub: 0.85,
          anticipatePin: 0,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const rotation = -self.progress * 360;
            gsap.set(ring, { rotateY: rotation });
            updateFocus();

            const idx = Math.min(count - 1, Math.floor(self.progress * count + 0.0001));
            setActiveIndex(idx);

            panels.forEach((panel, i) => {
              gsap.to(panel, {
                opacity: i === idx ? 1 : 0,
                y: i === idx ? 0 : 8,
                duration: 0.35,
                overwrite: "auto",
              });
            });
          },
        });

        updateFocus();
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
        trigger?.kill();
      };
    },
    { scope: root, dependencies: [reduced] }
  );

  if (reduced) {
    return (
      <section
        id="process"
        ref={root}
        className="relative overflow-x-hidden bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionIntro eyebrow="How we work" title="From first conversation to launch." className="mb-12" />
          <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <li key={step.number}>
                <div className="premium-card h-full p-6">
                  <p className="font-display text-[2.75rem] leading-none tracking-[-0.06em] text-[var(--ink)]/10">
                    {step.number}
                  </p>
                  <h3 className="mt-4 font-display text-xl tracking-[-0.03em] text-[var(--ink)]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section id="process" ref={root} className="relative bg-[var(--ink)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(159,25,63,0.12),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col items-center justify-center px-5 pb-14 pt-24 sm:px-8 lg:px-12">
        <SectionIntro
          eyebrow="How we work"
          title="From first conversation to launch."
          light
          className="mb-6 max-w-xl text-center sm:mb-8 [&_[data-upward-eyebrow-mark]]:justify-center [&_h2]:mx-auto"
        />

        <ProcessOrbitalStage steps={orbitalSteps} hubLabel="5" />

        <div className="relative mt-8 min-h-[140px] w-full max-w-xl text-center sm:mt-10">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              data-process-panel
              className="absolute inset-x-0 top-0 px-2"
              style={{ opacity: index === 0 ? 1 : 0 }}
              aria-hidden={activeIndex !== index}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-soft)]">
                Step {step.number}
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-white sm:text-[1.65rem]">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-white/65">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-2" aria-live="polite">
          {processSteps.map((step, index) => (
            <span
              key={step.number}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-[var(--brand-soft)]" : "w-1.5 bg-white/25"
              }`}
            />
          ))}
        </div>

        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Scroll to rotate through each step
        </p>
      </div>
    </section>
  );
}
