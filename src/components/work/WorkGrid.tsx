"use client";

import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  workFilterOptions,
  workFootnote,
  workPageCopy,
  workProjects,
  type WorkFilterType,
} from "@/lib/work-content";
import WorkProjectCard from "./WorkProjectCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function WorkGrid() {
  const root = useRef<HTMLElement | null>(null);
  const [activeType, setActiveType] = useState<WorkFilterType>("All");
  const reduced = usePrefersReducedMotion();

  const filtered = useMemo(
    () => (activeType === "All" ? workProjects : workProjects.filter((p) => p.type === activeType)),
    [activeType]
  );

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      gsap.fromTo(
        "[data-work-header]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.07, ease: "power3.out" }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  useGSAP(
    () => {
      if (!root.current || reduced) return;

      const cards = root.current.querySelectorAll("[data-work-card]");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    },
    { scope: root, dependencies: [activeType, reduced] }
  );

  return (
    <section id="work-index" ref={root} className="bg-[var(--bg-section)] pb-16 pt-6 sm:pb-20 sm:pt-8 lg:pb-24">
      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p
            data-work-header
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--eyebrow-muted)]"
          >
            {workPageCopy.eyebrow}
          </p>
          <h1
            data-work-header
            className="mt-4 font-display text-[clamp(2.75rem,8vw,5rem)] uppercase leading-[0.92] tracking-[-0.04em] text-[var(--ink)]"
          >
            {workPageCopy.title}
          </h1>
          <p data-work-header className="mt-5 text-base leading-7 text-[var(--text-muted)] sm:text-[17px]">
            {workPageCopy.description}
          </p>

          <div data-work-header className="mt-8 flex flex-col items-center gap-4">
            <label htmlFor="work-type-filter" className="sr-only">
              {workPageCopy.filterLabel}
            </label>
            <select
              id="work-type-filter"
              value={activeType}
              onChange={(e) => setActiveType(e.target.value as WorkFilterType)}
              className="w-full max-w-xs appearance-none rounded-full border border-[var(--border-strong)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] shadow-sm transition hover:border-[var(--ink)]/20 focus:border-[var(--ink)] focus:outline-none sm:hidden"
            >
              {workFilterOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            <nav
              aria-label={workPageCopy.filterLabel}
              className="hidden flex-wrap justify-center gap-2 sm:flex"
            >
              {workFilterOptions.map((opt) => {
                const isActive = activeType === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setActiveType(opt.value)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[var(--ink)] text-white"
                        : "border border-[var(--border-strong)] bg-white text-[var(--ink)] hover:border-[var(--ink)]/25"
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-3 md:gap-4 lg:mt-16">
          {filtered.map((project) => (
            <WorkProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-[var(--text-muted)]">No projects in this category yet.</p>
        ) : null}

        <p className="mx-auto mt-14 max-w-xl text-center text-sm leading-relaxed text-[var(--text-muted)]">
          {workFootnote}
        </p>
      </div>
    </section>
  );
}
