export const aboutHero = {
  eyebrow: "About DevMola",
  title: "We Turn Ambitious Ideas Into Digital Reality.",
  description:
    "We combine thoughtful strategy, creative design, and engineering expertise to help businesses build meaningful digital experiences and grow with confidence.",
  primaryCta: { label: "Explore Our Story", href: "#about-story" },
  secondaryCta: { label: "Meet Our Team", href: "/team/" },
};

export const aboutStory = {
  eyebrow: "Our story",
  title: "Every Great Product Begins With a Question.",
  quote: "We didn't wait for the future to arrive — we built it, one pixel at a time.",
  stages: [
    {
      number: "01",
      title: "The Beginning",
      body: "Founded in 2021, DevMola started in a small apartment with a whiteboard full of ideas and a team of three friends who believed technology should do more than work — it should inspire. With laptops, long nights, and an unshakable drive, we built our first custom app for a local business — and from that moment on, there was no looking back.",
    },
    {
      number: "02",
      title: "The Evolution",
      body: "Over the next few years, we evolved from a passion project into a full-fledged digital partner, delivering solutions across e-commerce, SaaS, and enterprise tools. With each project, we refined our craft, expanded our team, and earned trust through transparency, reliability, and results.",
    },
    {
      number: "03",
      title: "The Vision Ahead",
      body: "Today we help startups and businesses unlock their potential through intuitive, scalable, and thoughtfully engineered software. The tools may change, but our purpose stays the same: create with care, code with purpose, and build with heart.",
    },
  ],
};

export const aboutPhilosophy = {
  eyebrow: "Our philosophy",
  title: "Technology Is the Tool. Progress Is the Purpose.",
  description:
    "We believe the best digital solutions do more than function. They solve meaningful problems, create better experiences, and help businesses move forward.",
  principles: [
    {
      title: "Think Strategically",
      description: "Understand the problem before choosing the solution.",
    },
    {
      title: "Design Intentionally",
      description: "Create experiences that balance clarity, usability, and visual quality.",
    },
    {
      title: "Build for Growth",
      description: "Develop reliable, scalable solutions that evolve with the business.",
    },
  ],
};

export const aboutDifferentiators = {
  eyebrow: "Why DevMola",
  title: "More Than a Development Partner.",
  items: [
    {
      number: "01",
      title: "Business-First Thinking",
      description:
        "We start with your objectives and connect technical decisions to real business needs — not the other way around.",
    },
    {
      number: "02",
      title: "Design Meets Engineering",
      description:
        "User experience, visual design, and dependable implementation stay in the same conversation from brief to launch.",
    },
    {
      number: "03",
      title: "Transparent Collaboration",
      description:
        "Clear communication, realistic expectations, and visibility throughout the project — so you always know where things stand.",
    },
    {
      number: "04",
      title: "Built to Evolve",
      description:
        "Maintainable architecture and thoughtful structure so products can adapt as requirements and opportunities change.",
    },
  ],
};

export type AboutValue = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export const aboutValues: AboutValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description: "We explore new approaches and technologies to deliver solutions that stay relevant.",
    detail: "Innovation at DevMola means practical experimentation — choosing tools and methods that serve the product, not chasing trends for their own sake.",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "We work closely with clients and with each other, with open communication at every stage.",
    detail: "The best outcomes come from shared context. We treat clients as partners in the build, not spectators waiting for a handoff.",
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "We hold ourselves to high standards in design, code, and how we show up for projects.",
    detail: "Excellence is consistency — polished details, tested flows, and work we are willing to stand behind after launch.",
  },
  {
    id: "adaptability",
    title: "Adaptability",
    description: "We evolve our skills and processes as platforms, markets, and client needs change.",
    detail: "Digital products rarely stay static. We plan for change so teams can respond without starting from zero.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description: "We take ownership of commitments and follow through on what we agree to deliver.",
    detail: "Accountability means honest timelines, clear scope, and fixing issues when they appear — not hiding behind process.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical principles.",
    detail: "Trust is built through straight answers, fair recommendations, and relationships that outlast a single project.",
  },
];

export type TechCategory =
  | "All"
  | "Frontend"
  | "Backend"
  | "Mobile Development"
  | "Databases"
  | "Cloud & DevOps";

export const aboutTechCategories: { value: TechCategory; label: string }[] = [
  { value: "All", label: "All" },
  { value: "Frontend", label: "Frontend" },
  { value: "Backend", label: "Backend" },
  { value: "Mobile Development", label: "Mobile" },
  { value: "Databases", label: "Databases" },
  { value: "Cloud & DevOps", label: "Cloud & DevOps" },
];

export type AboutTechnology = {
  id: string;
  name: string;
  category: Exclude<TechCategory, "All">;
  description: string;
};

export const aboutTechnologies: AboutTechnology[] = [
  { id: "react", name: "React", category: "Frontend", description: "Interactive user interfaces and component-driven UI." },
  { id: "next", name: "Next.js", category: "Frontend", description: "Modern web apps with SSR, routing, and performance in mind." },
  { id: "typescript", name: "TypeScript", category: "Frontend", description: "Type-safe development for maintainable frontends." },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling aligned with design systems." },
  { id: "node", name: "Node.js", category: "Backend", description: "Server-side JavaScript for APIs and application logic." },
  { id: "express", name: "Express", category: "Backend", description: "Structured HTTP APIs and backend services." },
  { id: "react-native", name: "React Native", category: "Mobile Development", description: "Cross-platform mobile experiences from a shared codebase." },
  { id: "mongodb", name: "MongoDB", category: "Databases", description: "Flexible document storage for evolving product data." },
  { id: "postgres", name: "PostgreSQL", category: "Databases", description: "Reliable relational data for structured applications." },
  { id: "docker", name: "Docker", category: "Cloud & DevOps", description: "Consistent environments from development to deployment." },
  { id: "aws", name: "AWS", category: "Cloud & DevOps", description: "Cloud hosting and services where projects require scale." },
  { id: "github", name: "GitHub", category: "Cloud & DevOps", description: "Version control, reviews, and collaborative delivery." },
];

export const aboutTech = {
  eyebrow: "Technology",
  title: "The Right Tools for the Right Challenges.",
  description:
    "We choose technologies based on project needs — balancing performance, maintainability, and what your team can realistically operate after launch.",
};

export const aboutTeamPreview = {
  eyebrow: "The people",
  title: "Great Work Starts With Great People.",
  description:
    "Behind every solution is a team bringing different perspectives, technical skills, and creative thinking to the same goal.",
  cta: { label: "Meet the Team", href: "/team/" },
};

export const aboutClosing = {
  title: "Let's Build Something That Moves Your Business Forward.",
  description:
    "Have an idea to explore or a challenge to solve? Let's talk about what the right digital solution could make possible.",
  cta: { label: "Let's Talk About Your Project", href: "/contact/" },
};
