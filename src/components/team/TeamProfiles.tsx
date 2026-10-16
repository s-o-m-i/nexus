"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { teamMembers } from "@/lib/team-content";
import TeamMemberCard from "./TeamMemberCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function TeamProfiles() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const featured = teamMembers.find((m) => m.featured);
  const others = teamMembers.filter((m) => !m.featured);

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-team-profile]",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section id="team-profiles" ref={root} className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          eyebrow="Profiles"
          title="The people who ship the work."
          description="Replace sample profiles in src/lib/team-content.ts with your team’s names, portraits, and links."
          className="mb-12"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {featured && <TeamMemberCard member={featured} featured />}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {others.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
