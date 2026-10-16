"use client";

import Image from "next/image";
import type { TeamMember } from "@/lib/team-content";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article
      data-team-profile
      className="group relative min-h-[320px] overflow-hidden bg-[var(--ink)] sm:min-h-[380px] lg:min-h-[460px] xl:min-h-[520px]"
    >
      <Image
        src={member.image}
        alt={member.isPlaceholder ? `${member.role} profile placeholder` : `${member.name}, ${member.role}`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover object-top grayscale contrast-[1.12] brightness-[0.88] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-[0.35]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-[var(--ink)]/10 mix-blend-multiply" />

      {member.isPlaceholder && (
        <span className="absolute left-4 top-4 z-10 rounded-sm bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85">
          Sample profile
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 lg:p-8">
        <h3 className="font-display text-[clamp(1.65rem,3.2vw,2.35rem)] italic leading-[1.05] tracking-[-0.03em] text-white">
          {member.name}
        </h3>
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">{member.role}</p>
        {member.contact ? (
          <div className="mt-4 space-y-1.5 border-t border-white/15 pt-3 text-xs text-white/75">
            {member.contact.contactFirst ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
                Contact first for new projects
              </p>
            ) : null}
            <a href={member.contact.telHref} className="block transition hover:text-white">
              {member.contact.phone}
            </a>
            <a href={`mailto:${member.contact.email}`} className="block break-all transition hover:text-white">
              {member.contact.email}
            </a>
          </div>
        ) : null}
        <p className="sr-only">{member.bio}</p>
      </div>
    </article>
  );
}
