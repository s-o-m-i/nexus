export const techCategories = [
    {
        title: "Design Tools",
        items: ["Figma", "Adobe XD", "Sketch", "Adobe Illustrator", "Adobe Photoshop"]
    },
    {
        title: "Prototyping",
        items: ["InVision", "Principle", "ProtoPie", "Framer", "Marvel"]
    },
    {
        title: "User Research",
        items: ["Hotjar", "UserTesting", "Maze", "Lookback", "Optimal Workshop"]
    },
    {
        title: "Collaboration",
        items: ["Zeplin", "Abstract", "Miro", "Notion", "Confluence"]
    }
];

export const interactiveTechs: Record<string, { label: string; short: string; description: string }> = {
    figma: {
        label: "Figma",
        short: "FIG",
        description: "Our primary design tool for creating responsive interfaces, design systems, and interactive prototypes with real-time collaboration."
    },
    research: {
        label: "User Research",
        short: "UXR",
        description: "Comprehensive user research tools and methodologies to understand user behavior, needs, and pain points."
    },
    prototyping: {
        label: "Prototyping",
        short: "PRO",
        description: "Advanced prototyping tools to create high-fidelity interactive prototypes for testing and validation."
    },
    accessibility: {
        label: "Accessibility Tools",
        short: "A11Y",
        description: "Specialized tools and frameworks to ensure designs are accessible to all users, following WCAG guidelines."
    }
}; 