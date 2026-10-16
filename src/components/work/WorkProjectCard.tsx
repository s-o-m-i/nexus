"use client";

import Image from "next/image";
import { ArrowIcon } from "@/components/home/premium/PremiumUI";
import type { WorkProject } from "@/lib/work-content";

export default function WorkProjectCard({ project }: { project: WorkProject }) {
  return (
    <article data-work-card className="group">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand)]"
        aria-label={`Open ${project.title} live preview`}
      >
        <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[var(--ink)]">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-[var(--ink)]/10 transition-colors duration-500 group-hover:bg-[var(--ink)]/25" />

          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-[220px] rounded-2xl border border-white/20 bg-white/12 px-5 py-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:bg-white/18 sm:max-w-[240px] sm:px-6 sm:py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                {project.type}
              </p>
              <h2 className="mt-2 font-display text-xl leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 opacity-0 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <div className="bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
              <p className="line-clamp-2 text-sm leading-relaxed text-white/75">{project.description}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                View live site
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4 px-1 sm:hidden">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--eyebrow-muted)]">
              {project.category}
            </p>
            <h3 className="mt-1 font-display text-lg tracking-[-0.03em] text-[var(--ink)]">{project.title}</h3>
          </div>
        </div>
      </a>
    </article>
  );
}
