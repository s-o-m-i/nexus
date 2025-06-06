import React from 'react'
import Image from 'next/image'
import { seoProcessSteps } from '../../../utils/seo-process'

// Define the type for a process step
interface ProcessStep {
    title: string;
    description: string;
    image: string;
}

const SeoProcess = () => {
    return (
        <section className="py-24 px-8 md:px-16 bg-gradient-to-b from-white to-[#f5f8ff] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#9f193f]/5"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#04213F]/5"></div>
                <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#f8d57e]/10"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-block">
                        <div className="py-1 px-3 bg-[#9f193f]/10 rounded-full text-[#9f193f] text-sm font-medium uppercase tracking-wider mb-3">
                            Our Methodology
                        </div>
                    </div>
                    <h2 className='text-[38px] sm:text-[48px] font-bold text-[#04213F] mb-6'>
                        Our Proven <span className="text-[#9f193f]">SEO Process</span>
                    </h2>
                    <p className='text-[18px] text-[#666] text-center leading-relaxed'>
                        We follow a systematic approach to deliver consistent, measurable results for your business.
                    </p>
                </div>
                
                {/* Process timeline */}
                <div className="relative">
                    {/* Center line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-8 bottom-0 w-1 bg-gradient-to-b from-[#9f193f] to-[#04213F] rounded-full transform -translate-x-1/2"></div>
                    
                    <div className="space-y-20 md:space-y-0">
                        {seoProcessSteps.map((step: ProcessStep, index: number) => (
                            <div 
                                key={index} 
                                className={`relative md:flex items-center md:h-64 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                            >
                                {/* Line connector for mobile */}
                                <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-[#9f193f] to-[#04213F]/70 rounded-full"></div>
                                
                                {/* Step number indicator */}
                                <div className="absolute md:left-1/2 left-8 top-0 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#9f193f] to-[#b9214a] text-white text-2xl font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>
                                
                                {/* Content side */}
                                <div className={`md:w-1/2 pl-20 md:pl-0 ${
                                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'
                                }`}>
                                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-2xl font-bold text-[#04213F] mb-3">{step.title}</h3>
                                        <p className="text-[#666] leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                                
                                {/* Image side */}
                                <div className={`md:w-1/2 mt-8 md:mt-0 pl-20 md:pl-0 ${
                                    index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'
                                }`}>
                                    <div className="bg-gradient-to-br from-[#f8f9fb] to-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group w-full"> 
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="flex justify-center items-center h-48 relative w-full">
                                            <Image 
                                                src={step.image} 
                                                alt={step.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className=" drop-shadow transform transition-transform group-hover:scale-105 duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <a href="#" className="inline-flex items-center text-[#9f193f] font-medium hover:text-[#b9214a] transition-colors">
                        <span>Learn more about our SEO process</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SeoProcess 