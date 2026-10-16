import AboutPage from "@/components/about/premium/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | DevMola",
  description:
    "Learn about DevMola — our story since 2021, how we think about design and engineering, the team behind the work, and how we partner with businesses to build digital products.",
  alternates: {
    canonical: "https://devmola.com/about/",
  },
  openGraph: {
    title: "About | DevMola",
    description:
      "DevMola combines strategy, design, and engineering to help businesses build meaningful digital experiences.",
    url: "https://devmola.com/about/",
    type: "website",
  },
};

export default function Page() {
  return <AboutPage />;
}
