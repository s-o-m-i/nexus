"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutTeamPreview } from "@/lib/about-content";
import { teamMembers as allMembers } from "@/lib/team-content";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { AgencyButton, SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const featuredTeam = allMembers.filter((m) => !m.isPlaceholder);

export default function AboutTeamPreview() {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      gsap.fromTo(
        "[data-about-team-card]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
        }
      );
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow={aboutTeamPreview.eyebrow}
            title={aboutTeamPreview.title}
            description={aboutTeamPreview.description}
            light
            className="max-w-xl"
          />
          <AgencyButton href={aboutTeamPreview.cta.href} variant="inverse" className="w-fit shrink-0">
            {aboutTeamPreview.cta.label}
          </AgencyButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-1 bg-white/10 sm:grid-cols-2">
          {featuredTeam.map((member) => (
            <div key={member.id} data-about-team-card>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
