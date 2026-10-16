import WorkPage from "@/components/work/WorkPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | DevMola",
  description:
    "Explore DevMola works — web design, mobile apps, and e-commerce projects built for clarity, performance, and client-ready first impressions.",
  alternates: {
    canonical: "https://devmola.com/works/",
  },
  openGraph: {
    title: "Works | DevMola",
    description:
      "Web, mobile, and e-commerce work from DevMola — focused layouts and smooth experiences for growing businesses.",
    url: "https://devmola.com/works/",
    type: "website",
  },
};

export default function Page() {
  return <WorkPage />;
}
