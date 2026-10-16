"use client";

import Image from "next/image";
import Link from "next/link";
import { useCardTilt } from "@/hooks/useCardTilt";
import type { TeamMember } from "@/lib/team-content";

export default function TeamMemberCard({
  member,
  featured = false,
}: {
  member: TeamMember;
  featured?: boolean;
}) {
  const tilt = useCardTilt(featured ? 8 : 6);

  return (
    <article
      className={`perspective-3d h-full ${featured ? "lg:row-span-2" : ""}`}
      data-team-profile
    >
      <div
        ref={tilt.ref}
        onPointerMove={tilt.onPointerMove}
        onPointerLeave={tilt.onPointerLeave}
        className={`premium-card group relative flex h-full flex-col overflow-hidden ${
          featured ? "min-h-[520px]" : "min-h-[420px]"
        }`}
      >
        <div className={`relative overflow-hidden bg-[var(--bg-alt)] ${featured ? "h-[58%]" : "h-[52%]"}`}>
          <Image
            src={member.image}
            alt={member.isPlaceholder ? `${member.role} profile placeholder` : `${member.name}, ${member.role}`}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 via-transparent to-transparent opacity-80" />
          {member.isPlaceholder && (
            <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90">
              Sample profile
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--eyebrow-muted)]">
            {member.role}
          </p>
          <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-[var(--ink)]">{member.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{member.bio}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${member.name} skills`}>
            {member.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]"
              >
                {skill}
              </li>
            ))}
          </ul>

          {member.social && (member.social.linkedin || member.social.github || member.social.portfolio) && (
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              {member.social.linkedin && (
                <Link href={member.social.linkedin} className="text-[var(--ink)] hover:text-[var(--brand)]" target="_blank" rel="noreferrer">
                  LinkedIn
                </Link>
              )}
              {member.social.github && (
                <Link href={member.social.github} className="text-[var(--ink)] hover:text-[var(--brand)]" target="_blank" rel="noreferrer">
                  GitHub
                </Link>
              )}
              {member.social.portfolio && (
                <Link href={member.social.portfolio} className="text-[var(--ink)] hover:text-[var(--brand)]" target="_blank" rel="noreferrer">
                  Portfolio
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
