"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { problems } from "@/lib/home-content";
import { SectionIntro } from "./PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/** Peak fade of a covered card; deeper cards compound it (0.75, 0.56, 0.42…). */
const MAX_DIM = 0.75;

export default function ProblemSolution() {
  const list = useRef<HTMLOListElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const listEl = list.current;
      if (!listEl || reduced) return;

      const items = gsap.utils.toArray<HTMLElement>("[data-stack-item]", listEl);
      const cards = items.map((item) => item.querySelector<HTMLElement>("article"));
      const dims = items.map((item) => item.querySelector<HTMLElement>("[data-stack-dim]"));
      const setOpacity = dims.map((dim) => (dim ? gsap.quickSetter(dim, "opacity") : null));
      let docks: (number | null)[] = [];

      // Equal heights stop a taller covered card from peeking out below the next one.
      // Runs on refreshInit because layout must not change while ScrollTrigger measures.
      const fitHeights = () => {
        delete listEl.dataset.stackStatic;
        listEl.style.removeProperty("--stack-card-fit");
        const tallest = Math.max(...cards.map((card) => card?.offsetHeight ?? 0));
        listEl.style.setProperty("--stack-card-fit", `${tallest}px`);

        // A docked card taller than the viewport would hide its bottom text, so fall back to the plain list.
        const lastStyle = getComputedStyle(items[items.length - 1]);
        if (lastStyle.position === "sticky" && parseFloat(lastStyle.top) + tallest > window.innerHeight) {
          listEl.dataset.stackStatic = "";
        }
      };

      const measureDocks = () => {
        docks = items.map((item) => {
          const style = getComputedStyle(item);
          return style.position === "sticky" ? parseFloat(style.top) || 0 : null;
        });
      };

      const update = () => {
        const viewport = window.innerHeight;
        for (let i = 0; i < items.length - 1; i += 1) {
          const dock = docks[i + 1];
          if (dock == null) {
            setOpacity[i]?.(0);
            continue;
          }
          const top = items[i + 1].getBoundingClientRect().top;
          const progress = gsap.utils.clamp(0, 1, (viewport - top) / Math.max(1, viewport - dock));
          setOpacity[i]?.(MAX_DIM ** (i + 1) * progress * progress);
        }
      };

      fitHeights();
      measureDocks();
      update();

      let trigger: ScrollTrigger | null = null;
      ScrollTrigger.addEventListener("refreshInit", fitHeights);

      // Created a frame later, like the other homepage triggers, so sibling sections finish rebuilding first.
      const raf = requestAnimationFrame(() => {
        trigger = ScrollTrigger.create({
          trigger: listEl,
          start: "top bottom",
          end: "bottom top",
          onUpdate: update,
          onRefresh: () => {
            measureDocks();
            update();
          },
        });
      });

      return () => {
        cancelAnimationFrame(raf);
        trigger?.kill();
        ScrollTrigger.removeEventListener("refreshInit", fitHeights);
        gsap.set(dims, { clearProps: "opacity" });
        listEl.style.removeProperty("--stack-card-fit");
        delete listEl.dataset.stackStatic;
      };
    },
    { scope: list, dependencies: [reduced], revertOnUpdate: true }
  );

  return (
    <section
      id="approach"
      className="relative overflow-x-clip bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="We solve" title="The problems that quietly stall growth." className="mb-12 lg:mb-16" />

        <ol
          ref={list}
          className="problem-stack"
          style={{ "--stack-count": problems.length } as CSSProperties}
        >
          {problems.map((problem, index) => (
            <li
              key={problem.number}
              data-stack-item
              className="problem-stack__item"
              style={{ "--stack-index": index, zIndex: index + 1 } as CSSProperties}
            >
              <article className="problem-stack__card relative flex flex-col overflow-hidden rounded-[24px] bg-[var(--ink)] p-6 text-white sm:p-10 lg:p-12">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--navy)]/40 blur-3xl" />

                <div className="relative flex items-start justify-between gap-6">
                  <span className="font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-none tracking-[-0.05em] text-white/35">
                    {problem.number}
                  </span>
                  <p className="pt-2 text-[11px] uppercase tracking-[0.2em] text-white/45">The problem</p>
                </div>

                <h3 className="relative mb-8 mt-6 max-w-[22ch] font-display text-[clamp(1.75rem,3.4vw,3.25rem)] leading-[1.05] tracking-[-0.04em] lg:mt-7">
                  {problem.challenge}
                </h3>

                <div className="relative mt-auto grid gap-5 border-t border-white/10 pt-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12 lg:pt-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Our approach</p>
                    <p className="mt-3 font-display text-[15px] leading-relaxed tracking-[-0.02em] text-white/90 sm:text-lg xl:text-xl">
                      {problem.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">The outcome</p>
                    <p className="mt-3 text-[13px] leading-6 text-white/60 sm:text-sm sm:leading-7">{problem.benefit}</p>
                  </div>
                </div>

                <div data-stack-dim aria-hidden="true" className="problem-stack__dim" />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
