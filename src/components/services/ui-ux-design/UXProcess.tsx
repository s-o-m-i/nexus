"use client";

import React from 'react';
import { motion } from 'framer-motion';

const UXProcess = () => {
    const processes = [
        {
            step: "01",
            title: "Discovery & Research",
            description: "We start by understanding your business goals, target audience, and conducting thorough user research.",
            color: "bg-[#2D5C76]"
        },
        {
            step: "02",
            title: "Strategy & Planning",
            description: "Develop user personas, journey maps, and create a comprehensive design strategy.",
            color: "bg-[#9f193f]"
        },
        {
            step: "03",
            title: "Design & Prototyping",
            description: "Create wireframes, visual designs, and interactive prototypes for testing and validation.",
            color: "bg-[#2D5C76]"
        },
        {
            step: "04",
            title: "Testing & Iteration",
            description: "Conduct usability testing, gather feedback, and refine designs for optimal user experience.",
            color: "bg-[#9f193f]"
        },
        {
            step: "05",
            title: "Implementation",
            description: "Work closely with development teams to ensure pixel-perfect implementation of designs.",
            color: "bg-[#2D5C76]"
        }
    ];

    return (
        <section className="py-20 px-8 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#2D5C76] mb-4">Our Design Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A systematic approach to creating user-centered designs that deliver measurable results.
                    </p>
                </div>

                <div className="space-y-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}
                        >
                            <div className='h-[300px] w-full border border-gray-200 bg-[#F9FAFB] group/card overflow-hidden relative rounded-lg p-4'>
                                <div className="absolute -bottom-[80%] w-[50%] h-full bg-[#2D5C77] group-hover/card:bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
 group-hover/card:-bottom-[70%] transition-all duration-300
"></div>
                                <h3 className='text-[42px] '>{process.title}</h3>
                                <p className='text-gray-500 mt-5 sm:w-[75%] text-base'>{process.description}</p>

                                <button className="px-8 py-3 mt-8 border cursor-pointer hover:scale-105  border-gray-300 text-gray-800 font-medium rounded-lg bg-gray-50 transition-all group overflow-hidden duration-300 text-sm relative">
                                    <div className="absolute -bottom-[80%] w-[50px] h-full bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
group-hover:w-full group-hover:bottom-0 transition-all duration-300
"></div>

                                </button>

                            </div>
                            <div className="w-full flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={
                                            index === 0 ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" :
                                                index === 1 ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" :
                                                    index === 2 ? "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" :
                                                        index === 3 ? "M15 12a3 3 0 11-6 0 3 3 0 016 0z" :
                                                            "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                        }></path>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UXProcess; 