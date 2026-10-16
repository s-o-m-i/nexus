"use client";

import HomeContact from "@/components/home/premium/HomeContact";
import WorkGrid from "./WorkGrid";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-section)]">
      <WorkGrid />
      <HomeContact />
    </div>
  );
}
