import Link from "next/link";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
        light ? "text-white/70" : "text-[var(--brand)]"
      }`}
    >
      {children}
    </p>
  );
}

export function DiagonalArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-xl ${className}`}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-white/55" : "text-[var(--eyebrow-muted)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.05] tracking-[-0.04em] ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-[15px] leading-7 ${light ? "text-white/65" : "text-[var(--text-muted)]"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  className?: string;
  onClick?: () => void;
};

export function AgencyButton({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-[var(--brand)] text-white hover:bg-[var(--brand-deep)] shadow-[0_12px_30px_rgba(159,25,63,0.22)]",
    secondary:
      "bg-transparent text-[var(--ink)] border border-[var(--ink)]/15 hover:border-[var(--brand)] hover:text-[var(--brand)]",
    ghost: "bg-white text-[var(--ink)] hover:bg-[var(--bg-alt)]",
    inverse: "bg-white text-[var(--ink)] hover:bg-[var(--bg-alt)]",
  }[variant];

  const isHash = href.startsWith("#");
  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  );

  const shared = `group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] ${styles} ${className}`;

  if (isHash || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a href={href} className={shared} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={shared} onClick={onClick}>
      {content}
    </Link>
  );
}

export function SectionShell({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28 ${
        dark ? "bg-[var(--ink)] text-white" : "bg-[var(--bg)] text-[var(--ink)]"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  );
}
