import {
  contactLeadershipNote,
  leadershipContacts,
  type LeadershipContact,
} from "@/lib/contact-leadership";

function LeadershipCard({ person }: { person: LeadershipContact }) {
  return (
    <article
      className={`relative rounded-[20px] border bg-[var(--surface-dark-elevated)] p-4 sm:p-5 ${
        person.contactFirst ? "border-[var(--brand)]/45 ring-1 ring-[var(--brand)]/20" : "border-white/[0.08]"
      }`}
    >
      {person.contactFirst ? (
        <span className="mb-3 inline-block rounded-full bg-[var(--brand)]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">
          Contact first
        </span>
      ) : null}
      <h3 className="font-display text-lg tracking-[-0.03em] text-white">{person.name}</h3>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">{person.role}</p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>
          <a
            href={person.telHref}
            className="text-white/85 transition hover:text-[var(--brand-soft)]"
          >
            {person.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${person.email}`}
            className="break-all text-white/85 transition hover:text-[var(--brand-soft)]"
          >
            {person.email}
          </a>
        </li>
        <li>
          <a
            href={person.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex font-semibold text-[var(--brand-soft)] transition hover:text-white"
          >
            WhatsApp →
          </a>
        </li>
      </ul>
    </article>
  );
}

type LeadershipContactPanelProps = {
  className?: string;
  markForSideAnimation?: boolean;
};

export default function LeadershipContactPanel({ className = "", markForSideAnimation }: LeadershipContactPanelProps) {
  return (
    <div className={className} {...(markForSideAnimation ? { "data-contact-side": true } : {})}>
      <p className="text-sm leading-6 text-white/60">{contactLeadershipNote}</p>
      <div className="mt-4 space-y-3">
        {leadershipContacts.map((person) => (
          <LeadershipCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
