import React, { useState } from 'react'
import { seoServicesData } from "../../../utils/seo-services"
import Image from 'next/image'
import { motion } from 'framer-motion'

const SeoOurServices = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-[#04213F] z-0">
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full magicpattern"></div>
                </div>
            </div>
            
            <div className="relative z-10 px-8 md:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="flex flex-col items-center justify-center mb-16 text-center">
                        <div className="inline-block mb-3">
                            <span className="text-[#f8d57e] font-medium uppercase tracking-wider text-sm px-4 py-1.5 border border-[#f8d57e]/30 rounded-full">Comprehensive Solutions</span>
                        </div>
                        <h2 className='text-[38px] sm:text-[48px] font-bold text-white mb-6'>Our <span className="text-[#f8d57e]">SEO Services</span></h2>
                        <p className='text-[18px] text-white/80 text-center max-w-[700px] leading-relaxed'>
                            We offer a full spectrum of search engine optimization services to improve your online presence and drive targeted traffic to your website.
                        </p>
                    </div>
                    
                    {/* Tab navigation */}
                    <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                        <div className="flex space-x-2 p-1 bg-white/10 backdrop-blur-sm rounded-full">
                            {seoServicesData.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                                        activeTab === index
                                            ? 'bg-[#9f193f] text-white shadow-lg'
                                            : 'text-white/80 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left column: Image and title */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="relative">
                                <div className="w-full h-80 relative rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[#9f193f]/20 to-[#04213F] p-8 flex items-center justify-center">
                                    <div className="relative w-48 h-48">
                                        <Image 
                                            src={seoServicesData[activeTab].img} 
                                            alt={seoServicesData[activeTab].title}
                                            layout="fill"
                                            objectFit="contain"
                                            className="drop-shadow-lg" 
                                        />
                                    </div>
                                    
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 -m-6 w-24 h-24 bg-[#f8d57e]/10 rounded-full blur-xl"></div>
                                    <div className="absolute bottom-0 left-0 -m-6 w-32 h-32 bg-[#9f193f]/20 rounded-full blur-xl"></div>
                                </div>
                                
                                <h3 className='text-[#f8d57e] text-[32px] font-bold text-center'>
                                    {seoServicesData[activeTab].title}
                                </h3>
                            </div>
                        </div>
                        
                        {/* Right column: Description and points */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                                <p className='text-white/90 text-lg mb-8 leading-relaxed'>
                                    {seoServicesData[activeTab].desc}
                                </p>
                                
                                <h4 className="text-white font-semibold mb-4 text-xl">Key Benefits:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {seoServicesData[activeTab].points.map((point, i) => (
                                        <motion.div 
                                            key={i} 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                            className='flex items-start gap-3 group'
                                        >
                                            <div className="min-w-[24px] h-6 flex items-center justify-center mt-0.5">
                                                <div className="w-5 h-5 rounded-full bg-[#9f193f] flex items-center justify-center text-white text-xs">
                                                    {i + 1}
                                                </div>
                                            </div>
                                            <p className='text-white/80 group-hover:text-white transition-colors'>
                                                {point}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-20 text-center">
                        <p className="text-white/80 mb-6 text-lg">
                            Ready to elevate your online presence with our SEO expertise?
                        </p>
                        <button className="inline-block px-8 py-4 bg-[#9f193f] hover:bg-[#b82a4e] text-white font-bold rounded-full transition-colors duration-200 shadow-lg">
                            Get Free Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeoOurServices 