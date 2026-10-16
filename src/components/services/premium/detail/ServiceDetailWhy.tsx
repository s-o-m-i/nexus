"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type WhyItem = { title: string; description: string };

export default function ServiceDetailWhy({ items }: { items: WhyItem[] }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const cards = section.querySelectorAll("[data-svc-why]");
      gsap.set(cards, { opacity: 0, y: 24 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.75, stagger: 0.07, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.15 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="border-y border-[var(--border)] bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro eyebrow="Why DevMola" title="Partnership, not a handoff." className="mb-12 max-w-xl" />
        <ul className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <li key={item.title} data-svc-why>
              <div className="premium-card h-full p-6">
                <p className="font-display text-sm tracking-[0.12em] text-[var(--brand)]">0{index + 1}</p>
                <h3 className="mt-3 font-display text-lg tracking-[-0.02em] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
