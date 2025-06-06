import React from 'react'
import { seoWhyChooseUsData } from "../../../utils/seo-whychooseus"
import FancyCard from '@/ui/FancyCard'

const SeoWhyChooseUs = () => {
    return (
        <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f5f8ff] rounded-bl-[100px] opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f8f4ff] rounded-tr-[70px] opacity-70"></div>
            </div>
            
            <section className="relative py-24 px-8 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section header with accent */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block">
                            <div className="flex items-center justify-center mb-3">
                                <div className="h-1 w-10 bg-[#9f193f] rounded-full mr-2"></div>
                                <span className="text-[#9f193f] font-medium uppercase text-sm tracking-wider">Our difference</span>
                                <div className="h-1 w-10 bg-[#9f193f] rounded-full ml-2"></div>
                            </div>
                        </div>
                        <h2 className='text-[38px] sm:text-[48px] font-bold text-[#04213F] mb-6'>Why Choose Us for <span className="text-[#9f193f]">SEO Services</span>?</h2>
                        <p className="text-[#666] text-lg max-w-2xl mx-auto">Our data-driven approach and proven methodologies have helped hundreds of businesses achieve remarkable results in organic search.</p>
                    </div>
                    
                    {/* Cards with hover effects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {seoWhyChooseUsData.length > 0 && seoWhyChooseUsData.map((card, index) => (
                           <FancyCard key={index} title={card.title} desc={card.description} />
                        ))}
                    </div>
                    
                    {/* Stats section */}
                    <div className="mt-20 bg-[#2D5C76] rounded-2xl p-10 text-white shadow-xl">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold mb-2">Our SEO Success by the Numbers</h3>
                            <p className="text-white/80">Proven results that speak for themselves</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-[#f8d57e]">500+</div>
                                <div className="text-white/80 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-[#f8d57e]">95%</div>
                                <div className="text-white/80 text-sm">Client Retention</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-[#f8d57e]">10K+</div>
                                <div className="text-white/80 text-sm">Keywords Ranked</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-[#f8d57e]">175%</div>
                                <div className="text-white/80 text-sm">Avg. Traffic Increase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SeoWhyChooseUs 