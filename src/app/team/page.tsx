import TeamPage from "@/components/team/TeamPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | DevMola",
  description:
    "Meet the DevMola team — designers, developers, and strategists building digital products, websites, and growth programs from Islamabad and beyond.",
  alternates: {
    canonical: "https://devmola.com/team/",
  },
  openGraph: {
    title: "Team | DevMola",
    description:
      "Meet the DevMola team — designers, developers, and strategists building digital products, websites, and growth programs.",
    url: "https://devmola.com/team/",
    type: "website",
  },
};

export default function Page() {
  return <TeamPage />;
}
