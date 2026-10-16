"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { teamGrid, teamMembers } from "@/lib/team-content";
import TeamMemberCard from "./TeamMemberCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function TeamProfiles() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-team-header]",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 }
      ).fromTo(
        "[data-team-profile]",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
        "-=0.35"
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section id="team-profiles" ref={root} className="bg-[var(--bg)] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <header className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
          <p
            data-team-header
            className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--eyebrow-muted)]"
          >
            {teamGrid.eyebrow}
          </p>
          <h1
            data-team-header
            className="mt-4 font-display text-[clamp(2.5rem,7vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.04em] text-[var(--ink)]"
          >
            {teamGrid.title}
          </h1>
          <p data-team-header className="mt-5 text-base leading-7 text-[var(--text-muted)]">
            {teamGrid.description}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-1 bg-[var(--border)] sm:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
