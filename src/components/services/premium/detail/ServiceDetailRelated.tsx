"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { services } from "@/lib/home-content";
import type { ServiceDetailSlug } from "@/lib/services-detail-content";
import { DiagonalArrowIcon, SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const slugFromHref = (href: string): ServiceDetailSlug | null => {
  const match = href.match(/\/services\/([^/]+)\//);
  if (!match) return null;
  return match[1] as ServiceDetailSlug;
};

export default function ServiceDetailRelated({ currentSlug }: { currentSlug: ServiceDetailSlug }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const related = services.filter((s) => slugFromHref(s.href) !== currentSlug);

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const links = section.querySelectorAll("[data-svc-related]");
      gsap.set(links, { opacity: 0, y: 20 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(links, { opacity: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.12 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="Explore more" title="Other services from DevMola." className="mb-10" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <li key={service.href} data-svc-related>
              <Link
                href={service.href}
                className="group premium-card flex h-full items-center justify-between gap-4 p-5 transition hover:border-[var(--ink)]/20"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {service.number}
                  </p>
                  <p className="mt-2 font-display text-lg tracking-[-0.02em] text-[var(--ink)]">{service.title}</p>
                </div>
                <DiagonalArrowIcon className="h-4 w-4 shrink-0 text-[var(--ink)]/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--brand)]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
