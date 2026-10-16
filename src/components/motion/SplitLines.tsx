"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { duration, easeExpo, stagger } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(useGSAP);

type SplitLinesProps = {
  lines: string[];
  as?: "h1" | "h2" | "p";
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export default function SplitLines({
  lines,
  as = "h1",
  className,
  lineClassName,
  delay = 0,
}: SplitLinesProps) {
  const root = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const Tag = as;

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const inners = root.current.querySelectorAll("[data-line-inner]");
      gsap.fromTo(
        inners,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: duration.entrance,
          ease: easeExpo,
          stagger: stagger.base,
          delay,
          onComplete: () => {
            gsap.set(inners, { clearProps: "transform" });
          },
        }
      );
    },
    { scope: root, dependencies: [reduced, delay, lines.join("|")] }
  );

  return (
    <Tag ref={root as React.RefObject<HTMLHeadingElement>} className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {lines.map((line) => (
          <span key={line} className={`block overflow-hidden ${lineClassName ?? ""}`}>
            <span data-line-inner className="block">
              {line}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
