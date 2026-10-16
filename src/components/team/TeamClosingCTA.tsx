"use client";

import Reveal from "@/components/motion/Reveal";
import { AgencyButton } from "@/components/home/premium/PremiumUI";
import { teamClosing } from "@/lib/team-content";

export default function TeamClosingCTA() {
  return (
    <section className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="rounded-[28px] border border-[var(--border)] bg-white px-8 py-12 sm:px-12 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.06] tracking-[-0.04em] text-[var(--ink)]">
                {teamClosing.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--text-muted)]">{teamClosing.body}</p>
            </div>
            <div className="mt-8 shrink-0 lg:mt-0">
              <AgencyButton href={teamClosing.ctaHref}>{teamClosing.ctaLabel}</AgencyButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
