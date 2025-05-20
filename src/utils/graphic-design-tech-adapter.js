export const convertInteractiveTechs = () => {
    // Design software and tools data
    return {
        "adobe": {
            label: "Adobe Creative Cloud",
            short: "AC",
            description: "We utilize the full Adobe Creative Cloud suite including Photoshop for image editing, Illustrator for vector graphics, InDesign for layout design, and After Effects for motion graphics, ensuring industry-standard outputs for all design projects."
        },
        "figma": {
            label: "Figma",
            short: "FG",
            description: "Our collaborative design process leverages Figma's powerful design and prototyping capabilities, allowing for real-time collaboration with clients and seamless handoff to development teams for digital projects."
        },
        "cinema4d": {
            label: "Cinema 4D",
            short: "C4D",
            description: "For 3D modeling and visualization needs, we employ Cinema 4D to create stunning 3D elements that can be incorporated into branding, packaging, and marketing materials to create unique visual experiences."
        },
        "procreate": {
            label: "Procreate",
            short: "PR",
            description: "Our illustrators use Procreate to create custom illustrations, textures, and hand-drawn elements that add a unique, personal touch to design projects requiring a more organic, artistic approach."
        },
        "sketch": {
            label: "Sketch",
            short: "SK",
            description: "We use Sketch for UI design projects, particularly for macOS and iOS applications, leveraging its extensive plugin ecosystem and powerful symbol libraries for efficient design workflows."
        }
    };
};

export const convertTechCategories = () => {
    // Categories of design tools and technologies
    return [
        {
            title: "Design Software",
            items: [
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe InDesign",
                "Adobe XD",
                "Adobe After Effects",
                "Figma",
                "Sketch",
                "Procreate",
                "Cinema 4D",
                "Blender"
            ]
        },
        {
            title: "Typography & Fonts",
            items: [
                "Adobe Fonts",
                "Google Fonts",
                "Monotype Library",
                "FontExplorer X Pro",
                "Typekit",
                "Fontstand",
                "FontBase"
            ]
        },
        {
            title: "Prototyping Tools",
            items: [
                "InVision",
                "Figma Prototyping",
                "Adobe XD",
                "ProtoPie",
                "Marvel",
                "Principle",
                "Framer"
            ]
        },
        {
            title: "Collaboration & Workflow",
            items: [
                "Miro",
                "Adobe Creative Cloud",
                "Slack",
                "Notion",
                "Asana",
                "Zeplin",
                "Abstract",
                "Loom"
            ]
        }
    ];
}; 