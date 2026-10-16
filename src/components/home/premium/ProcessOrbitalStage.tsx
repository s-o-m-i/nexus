"use client";

import OrbitMark from "@/components/motion/OrbitMark";

const ORBIT_RADIUS = 215;

export type OrbitalStep = {
  number: string;
  title: string;
  tag: string;
};

type ProcessOrbitalStageProps = {
  steps: OrbitalStep[];
  hubLabel?: string;
};

export default function ProcessOrbitalStage({ steps, hubLabel = "5" }: ProcessOrbitalStageProps) {
  return (
    <div
      className="perspective-3d relative mx-auto flex h-[min(76vw,400px)] w-full max-w-[540px] items-center justify-center sm:h-[440px] lg:h-[480px] lg:max-w-none"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(159,25,63,0.34),transparent_62%)]" />
      <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-10 w-[78%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.6),transparent_72%)] blur-md" />

      <div className="preserve-3d relative" style={{ transform: "rotateX(10deg)", transformStyle: "preserve-3d" }}>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]"
          style={{ transform: "rotateX(78deg) translateZ(-28px)" }}
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--brand-soft)]/30 sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]"
          style={{ transform: "rotateX(78deg) translateZ(-14px)" }}
        />

        <div
          data-process-ring
          className="preserve-3d relative h-[230px] w-[230px] sm:h-[260px] sm:w-[260px] lg:h-[290px] lg:w-[290px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {steps.map((step, index) => {
            const angle = (360 / steps.length) * index;
            return (
              <div
                key={step.number}
                data-process-orbit-card
                className="absolute left-1/2 top-1/2 w-[158px] -translate-x-1/2 -translate-y-1/2 sm:w-[176px] lg:w-[192px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  data-process-orbit-card-inner
                  className="origin-center will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="slab-3d relative preserve-3d">
                    <div
                      className="absolute inset-0 rounded-2xl bg-[#0a0a0a]"
                      style={{ transform: "translateZ(-10px) scale(0.98)" }}
                    />
                    <div className="playing-card-face playing-card-pips relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 p-4 shadow-[0_28px_60px_rgba(0,0,0,0.55)] sm:min-h-[130px]">
                      <div className="pointer-events-none absolute -right-6 -top-8 font-display text-[4.5rem] leading-none tracking-[-0.06em] text-white/[0.06]">
                        {step.number}
                      </div>
                      <div className="relative flex items-start justify-between gap-2">
                        <span className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 font-display text-[11px] tracking-[0.08em] text-white/75">
                          {step.number}
                        </span>
                        <OrbitMark className="h-4 w-4 shrink-0 text-[var(--brand-soft)]" />
                      </div>
                      <div className="relative mt-3">
                        <p className="font-display text-[15px] leading-snug tracking-[-0.03em] text-white sm:text-base">
                          {step.title}
                        </p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]/90">
                          {step.tag}
                        </p>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div
            className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/25 bg-[radial-gradient(circle_at_30%_25%,#2a1520,#0a0a0a)] shadow-[0_0_50px_rgba(159,25,63,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]"
            style={{ transform: "translateZ(0px)" }}
          >
            <OrbitMark className="h-7 w-7 text-[var(--brand-soft)]" />
            <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">{hubLabel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
