"use client";

import TeamHero from "./TeamHero";
import TeamIntro from "./TeamIntro";
import TeamProfiles from "./TeamProfiles";
import TeamExpertise from "./TeamExpertise";
import TeamCulture from "./TeamCulture";
import HomeContact from "@/components/home/premium/HomeContact";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <TeamHero />
      <TeamIntro />
      <TeamProfiles />
      <TeamExpertise />
      <TeamCulture />
      <HomeContact />
    </div>
  );
}
