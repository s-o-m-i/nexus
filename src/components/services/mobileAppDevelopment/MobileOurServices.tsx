"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaApple, FaMobile, FaCode } from 'react-icons/fa';
import { MdUpdate, MdAnalytics } from 'react-icons/md';
import FancyCard from '@/ui/FancyCard';

const MobileOurServices = () => {
    const services = [
        {
            icon: <FaAndroid className="w-8 h-8" />,
            title: "Android App Development",
            description: "Native Android applications built with Kotlin and Java, following Material Design principles."
        },
        {
            icon: <FaApple className="w-8 h-8" />,
            title: "iOS App Development",
            description: "Native iOS applications developed with Swift, adhering to Apple's Human Interface Guidelines."
        },
        {
            icon: <FaMobile className="w-8 h-8" />,
            title: "Cross-Platform Development",
            description: "Cost-effective solutions using React Native and Flutter for both iOS and Android platforms."
        },
        {
            icon: <FaCode className="w-8 h-8" />,
            title: "API Integration",
            description: "Seamless integration with RESTful APIs, third-party services, and backend systems."
        },
        {
            icon: <MdUpdate className="w-8 h-8" />,
            title: "App Maintenance",
            description: "Regular updates, bug fixes, and performance optimization to keep your app running smoothly."
        },
        {
            icon: <MdAnalytics className="w-8 h-8" />,
            title: "Analytics & Monitoring",
            description: "Implementation of analytics tools and performance monitoring solutions."
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[42px] font-bold text-[#000] mb-4">Our Mobile App Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive mobile app development services tailored to your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          
                        >
                          <FancyCard title={service.title} desc={service.description} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileOurServices; 