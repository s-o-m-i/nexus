"use client";

import AboutHero from "./AboutHero";
import AboutStoryTimeline from "./AboutStoryTimeline";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutDifferentiators from "./AboutDifferentiators";
import AboutValues from "./AboutValues";
import AboutTechStack from "./AboutTechStack";
import AboutTeamPreview from "./AboutTeamPreview";
import HomeContact from "@/components/home/premium/HomeContact";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <AboutHero />
      <AboutStoryTimeline />
      <AboutPhilosophy />
      <AboutDifferentiators />
      <AboutValues />
      <AboutTechStack />
      <AboutTeamPreview />
      <HomeContact />
    </div>
  );
}
