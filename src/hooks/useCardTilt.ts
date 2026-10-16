"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export function useCardTilt(maxTilt = 7) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = usePrefersReducedMotion();

  const isCoarsePointer = () =>
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || reduced || isCoarsePointer() || event.pointerType === "touch") return;

      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = clamp((x - 0.5) * maxTilt * 2, -maxTilt, maxTilt);
      const rotateX = clamp((0.5 - y) * maxTilt * 2, -maxTilt, maxTilt);

      gsap.to(el, {
        rotateX,
        rotateY,
        transformPerspective: 900,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [maxTilt, reduced]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  }, []);

  return { ref, onPointerMove, onPointerLeave };
}
