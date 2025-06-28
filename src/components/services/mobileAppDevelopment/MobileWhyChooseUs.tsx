"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaCode, FaRocket, FaUserFriends } from 'react-icons/fa';
import { MdSecurity, MdSupport } from 'react-icons/md';

const MobileWhyChooseUs = () => {
    const features = [
        {
            icon: <FaMobileAlt className="w-6 h-6 text-[#9f193f]" />,
            title: "Cross-Platform Expertise",
            description: "We develop apps for both iOS and Android platforms, ensuring maximum market reach."
        },
        {
            icon: <FaCode className="w-6 h-6 text-[#9f193f]" />,
            title: "Clean & Efficient Code",
            description: "Our developers write maintainable, scalable code following best practices."
        },
        {
            icon: <MdSecurity className="w-6 h-6 text-[#9f193f]" />,
            title: "Robust Security",
            description: "We implement advanced security measures to protect user data and privacy."
        },
        {
            icon: <FaRocket className="w-6 h-6 text-[#9f193f]" />,
            title: "Performance Optimized",
            description: "Apps are optimized for speed, battery life, and smooth user experience."
        },
        {
            icon: <FaUserFriends className="w-6 h-6 text-[#9f193f]" />,
            title: "User-Centric Approach",
            description: "We focus on creating intuitive, engaging user experiences that drive adoption."
        },
        {
            icon: <MdSupport className="w-6 h-6 text-[#9f193f]" />,
            title: "Ongoing Support",
            description: "Comprehensive post-launch support and maintenance services."
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-8 md:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-4">Why Choose Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Partner with us for innovative mobile solutions that drive business growth and user engagement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                           <div 
                                key={index} 
                                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden h-[300px]"
                            >
                                {/* Simple accent line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                
                                <div className="relative">
                                    {/* Clean icon with subtle background */}
                                    <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                                        <div className="text-[#9f193f]">{feature.icon}</div>
                                    </div>
                                    
                                    <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-[#666] leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileWhyChooseUs; 