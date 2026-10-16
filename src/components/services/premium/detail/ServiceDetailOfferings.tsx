"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionIntro } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Offering = { title: string; description: string };

export default function ServiceDetailOfferings({ offerings }: { offerings: Offering[] }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const cards = section.querySelectorAll("[data-svc-offering]");
      gsap.set(cards, { opacity: 0, y: 28 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(cards, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section
      id="service-offerings"
      ref={root}
      className="bg-[var(--bg)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <SectionIntro
          eyebrow="Capabilities"
          title="What we deliver on this service."
          description="Focused offerings you can mix with design, engineering, or growth work from the same team."
          className="mb-12 max-w-2xl"
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {offerings.map((item) => (
            <li key={item.title} data-svc-offering>
              <div className="premium-card h-full p-6 sm:p-7">
                <h3 className="font-display text-xl tracking-[-0.03em] text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
