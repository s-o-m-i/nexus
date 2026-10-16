export type WorkFilterType = "All" | "Web" | "Mobile" | "E-commerce";

export const workPageCopy = {
  eyebrow: "DevMola portfolio",
  title: "Our work",
  description:
    "A focused look at websites and products we have designed and built — clear layouts, fast performance, and experiences that help clients win trust at first glance.",
  filterLabel: "Project type",
};

export const workFilterOptions: { value: WorkFilterType; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" },
  { value: "E-commerce", label: "E-commerce" },
];

export type WorkProject = {
  id: string;
  title: string;
  type: Exclude<WorkFilterType, "All">;
  category: string;
  description: string;
  image: string;
  href: string;
};

export const workProjects: WorkProject[] = [
  {
    id: "plant-shop",
    title: "Plant Shop",
    type: "E-commerce",
    category: "Web · E-commerce",
    description:
      "Storefront redesign with a calmer shopping path, clearer product hierarchy, and a visual system that feels organic without clutter.",
    image: "/images/portfolio/projectOne.jpg",
    href: "https://plant-shop-website-app-redesign.vercel.app/",
  },
  {
    id: "solar",
    title: "Solar",
    type: "Web",
    category: "Web · Energy",
    description:
      "Renewable-energy marketing site with confident typography, structured service sections, and a layout built to explain complex offers simply.",
    image: "/images/portfolio/projectTwo.jpg",
    href: "https://solar-website-solution.vercel.app/",
  },
  {
    id: "coworking",
    title: "Coworking Space",
    type: "Mobile",
    category: "Mobile · Booking",
    description:
      "Mobile app concept for discovering and booking desks — focused flows, readable UI, and booking steps that stay out of the way.",
    image: "/images/portfolio/projectThree.jpg",
    href: "https://coworking-space-mobile-app-solution.vercel.app/",
  },
  {
    id: "furniture",
    title: "Furniture Store",
    type: "E-commerce",
    category: "E-commerce · Retail",
    description:
      "Commerce experience for premium furniture — large imagery, category clarity, and a browse flow that mirrors in-store discovery.",
    image: "/images/portfolio/projectFour.png",
    href: "https://furniture-store-e-commerce-solution.vercel.app/",
  },
];

export const workFootnote =
  "More client work is available on request — including NDA builds across web, product, and growth.";
