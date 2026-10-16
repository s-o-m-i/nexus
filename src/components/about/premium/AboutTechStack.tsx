"use client";

import type { ReactNode } from "react";
import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  aboutTech,
  aboutTechCategories,
  aboutTechnologies,
  type TechCategory,
} from "@/lib/about-content";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const iconMap: Record<string, ReactNode> = {
  react: <FaReact className="h-5 w-5" />,
  next: <SiNextdotjs className="h-5 w-5" />,
  typescript: <SiTypescript className="h-5 w-5" />,
  tailwind: <SiTailwindcss className="h-5 w-5" />,
  node: <FaNodeJs className="h-5 w-5" />,
  express: <SiExpress className="h-5 w-5" />,
  "react-native": <SiReact className="h-5 w-5" />,
  mongodb: <SiMongodb className="h-5 w-5" />,
  postgres: <SiPostgresql className="h-5 w-5" />,
  docker: <FaDocker className="h-5 w-5" />,
  aws: <FaAws className="h-5 w-5" />,
  github: <FaGithub className="h-5 w-5" />,
};

export default function AboutTechStack() {
  const root = useRef<HTMLElement | null>(null);
  const [category, setCategory] = useState<TechCategory>("All");
  const reduced = usePrefersReducedMotion();

  const filtered = useMemo(
    () => (category === "All" ? aboutTechnologies : aboutTechnologies.filter((t) => t.category === category)),
    [category]
  );

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const cards = root.current.querySelectorAll("[data-tech-item]");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.06, ease: "power3.out", overwrite: "auto" }
      );
    },
    { scope: root, dependencies: [category, reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <SectionIntro
          eyebrow={aboutTech.eyebrow}
          title={aboutTech.title}
          description={aboutTech.description}
          className="mx-auto max-w-2xl text-center"
        />

        <nav aria-label="Technology categories" className="mt-10 flex flex-wrap justify-center gap-2">
          {aboutTechCategories.map((opt) => {
            const isActive = category === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setCategory(opt.value)}
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

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {filtered.map((tech) => (
            <li
              key={tech.id}
              data-tech-item
              className="flex gap-4 rounded-lg border border-[var(--border-strong)] bg-white p-5 transition hover:border-[var(--ink)]/15"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-white">
                {iconMap[tech.id]}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-lg tracking-[-0.02em] text-[var(--ink)]">{tech.name}</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--eyebrow-muted)]">
                    {tech.category}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{tech.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
