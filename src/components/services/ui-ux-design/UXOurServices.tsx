"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GenericDevelopmentProcess from '@/components/GenericDevelopmentProcess';

const UXOurServices = () => {
    const services = [
        {
            title: "User Interface Design",
            description: "Create visually stunning and intuitive interfaces that enhance user engagement and brand identity.",
            features: [
                "Custom UI Components",
                "Responsive Design",
                "Visual Design Systems",
                "Interactive Prototypes"
            ],
            image: "/images/services/ui-design.jpg"
        },
        {
            title: "User Experience Design",
            description: "Design seamless user journeys that optimize conversion rates and user satisfaction.",
            features: [
                "User Research",
                "Information Architecture",
                "Wireframing",
                "Usability Testing"
            ],
            image: "/images/services/ux-design.jpg"
        },
        {
            title: "Design Strategy",
            description: "Develop comprehensive design strategies that align with business goals and user needs.",
            features: [
                "Brand Guidelines",
                "Design Systems",
                "User Personas",
                "Journey Mapping"
            ],
            image: "/images/services/design-strategy.jpg"
        },
        {
            title: "Mobile App Design",
            description: "Create engaging mobile experiences that users love and keep coming back to.",
            features: [
                "App UI Design",
                "Interaction Design",
                "Gesture Controls",
                "App Prototyping"
            ],
            image: "/images/services/mobile-design.jpg"
        }
    ];

    return <GenericDevelopmentProcess processSteps={services} />
};

export default UXOurServices; 