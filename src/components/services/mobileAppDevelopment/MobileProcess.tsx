"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MobileProcess = () => {
    const processes = 
    [
        {
            step: "01",
            title: "Planning & Strategy",
            description: "We analyze requirements, define features, and create a comprehensive development roadmap.",
            color: "bg-[#111111]"
        },
        {
            step: "02",
            title: "UI/UX Design",
            description: "Creating intuitive interfaces and engaging user experiences for your mobile app.",
            color: "bg-[#9f193f]"
        },
        {
            step: "03",
            title: "Development",
            description: "Writing clean, efficient code and implementing all planned features and functionalities.",
            color: "bg-[#111111]"
        },
        {
            step: "04",
            title: "Testing & QA",
            description: "Rigorous testing across devices and platforms to ensure a bug-free experience.",
            color: "bg-[#9f193f]"
        },
        {
            step: "05",
            title: "Deployment & Launch",
            description: "App store submission, launch preparation, and initial performance monitoring.",
            color: "bg-[#111111]"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-4">Our Development Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to creating powerful mobile applications that deliver measurable results.
                    </p>
                </div>

                <div className="space-y-8 overflow-hidden ">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}
                        >
                            <div className='h-[200px] sm:h-[300px] w-full border border-gray-200 bg-[#F9FAFB] group/card overflow-hidden relative rounded-lg p-4'>
                                <div className={`absolute -bottom-[80%] w-[50%] h-full ${index % 2 !== 0 ? 'bg-[#111111]' : 'bg-[#9f193f]'} group-hover/card:bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%] group-hover/card:-bottom-[70%] transition-all duration-300`}></div>
                                <h3 className='text-[32px] sm:text-[42px] text-[#04213F]'>{process.title}</h3>
                                <p className='text-gray-500 mt-5 sm:w-[75%] text-base'>{process.description}</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#111111]">{process.step}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MobileProcess; 