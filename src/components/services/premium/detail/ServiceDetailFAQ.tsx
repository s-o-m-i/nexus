"use client";

import { useId, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SectionIntro, AgencyButton } from "@/components/home/premium/PremiumUI";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Faq = { question: string; answer: string };

function FaqRow({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="premium-card overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="font-display text-base tracking-[-0.02em] text-[var(--ink)] sm:text-[17px]">
          {faq.question}
        </span>
        <span
          className={`mt-1 shrink-0 text-[var(--brand)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="border-t border-[var(--border)] px-5 pb-5 pt-0 text-sm leading-7 text-[var(--text-muted)] sm:px-6 sm:pb-6"
      >
        {faq.answer}
      </div>
    </div>
  );
}

export default function ServiceDetailFAQ({ faqs }: { faqs: Faq[] }) {
  const root = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  useGSAP(
    () => {
      const section = root.current;
      if (!section || reduced) return;
      const rows = section.querySelectorAll("[data-svc-faq]");
      gsap.set(rows, { opacity: 0, y: 20 });
      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          gsap.to(rows, { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "power3.out" });
          observer.disconnect();
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
      return () => observer.disconnect();
    },
    { scope: root, dependencies: [reduced] }
  );

  return (
    <section ref={root} className="border-t border-[var(--border)] bg-[var(--bg-section)] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[800px]">
        <SectionIntro eyebrow="FAQ" title="Common questions." className="mb-10 text-center sm:mx-auto" />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.question} data-svc-faq>
              <FaqRow faq={faq} />
            </div>
          ))}
        </div>
        <div data-svc-faq className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-8 text-center">
          <p className="font-display text-lg tracking-[-0.02em] text-[var(--ink)]">Still have questions?</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
            Tell us about your project — we will respond with scope, timing, and next steps.
          </p>
          <div className="mt-6 flex justify-center">
            <AgencyButton href="/contact/">Contact us</AgencyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
