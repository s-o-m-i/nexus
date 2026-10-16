"use client";

import TeamProfiles from "./TeamProfiles";
import TeamIntro from "./TeamIntro";
import TeamExpertise from "./TeamExpertise";
import TeamCulture from "./TeamCulture";
import HomeContact from "@/components/home/premium/HomeContact";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <TeamProfiles />
      <TeamIntro />
      <TeamExpertise />
      <TeamCulture />
      <HomeContact />
    </div>
  );
}
