"use client";

import { capabilities } from "@/lib/home-content";

export default function CapabilityStrip() {
  const items = [...capabilities, ...capabilities];

  return (
    <section className="bg-[var(--bg)] pb-2">
      <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--ink)] py-3.5">
        <div className="animate-marquee flex w-max gap-10 pr-10">
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-display text-xs uppercase tracking-[0.22em] text-white/80"
            >
              {item}
              <span className="ml-10 text-[var(--brand-soft)]">●</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
