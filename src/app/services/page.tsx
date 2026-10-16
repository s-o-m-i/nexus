import ServicesPage from "@/components/services/premium/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DevMola",
  description:
    "DevMola services — web development, mobile apps, UI/UX, SEO, digital marketing, and graphic design. One team for product, search, and growth.",
  alternates: {
    canonical: "https://devmola.com/services/",
  },
  openGraph: {
    title: "Services | DevMola",
    description:
      "Websites, apps, design, SEO, and marketing — crafted with the same standard as our homepage experience.",
    url: "https://devmola.com/services/",
    type: "website",
  },
};

export default function Page() {
  return <ServicesPage />;
}
