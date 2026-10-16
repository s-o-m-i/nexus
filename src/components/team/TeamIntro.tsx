"use client";

import Reveal from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { teamIntro } from "@/lib/team-content";

export default function TeamIntro() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <SectionIntro eyebrow={teamIntro.eyebrow} title={teamIntro.title} description={teamIntro.body} />
        </Reveal>
      </div>
    </section>
  );
}
