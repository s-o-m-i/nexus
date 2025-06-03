"use client";

import React from 'react';
import { FaBullseye, FaChartBar, FaHandshake, FaSyncAlt } from "react-icons/fa";

const UXWhyChooseUs = () => {
    const reasons = [
        {
          title: "User-Centered Design",
          description: "We put users at the heart of every design decision, ensuring intuitive and engaging experiences.",
          icon: <FaBullseye size={22}/>
        },
        {
          title: "Research-Driven Approach",
          description: "Our designs are backed by thorough user research, testing, and industry best practices.",
          icon: <FaChartBar size={22}/>
        },
        {
          title: "Collaborative Process",
          description: "We work closely with stakeholders to ensure designs align with business goals and user needs.",
          icon: <FaHandshake size={22}/>
        },
        {
          title: "Iterative Refinement",
          description: "Continuous testing and refinement ensure optimal user experience and performance.",
          icon: <FaSyncAlt size={22}/>
        },
        {
          title: "Collaborative Process",
          description: "We work closely with stakeholders to ensure designs align with business goals and user needs.",
          icon: <FaHandshake size={22}/>
        },
        {
          title: "Iterative Refinement",
          description: "Continuous testing and refinement ensure optimal user experience and performance.",
          icon: <FaSyncAlt size={22}/>
        }
      ];

    return (
        <section className="py-20 px-8 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#2D5C76] mb-4">Why Choose Our UI/UX Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We combine creativity with strategic thinking to deliver exceptional user experiences that drive engagement and business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {reasons.length > 0 && reasons.map((card, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
                            >
                                {/* Simple accent line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                
                                <div className="relative">
                                    {/* Clean icon with subtle background */}
                                    <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                                        <div className="text-[#9f193f]">{card.icon}</div>
                                    </div>
                                    
                                    <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">{card.title}</h3>
                                    <p className="text-[#666] leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
};

export default UXWhyChooseUs;