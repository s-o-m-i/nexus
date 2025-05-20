import React from 'react'
import { graphicDesignWhyChooseUsData } from "../../../utils/graphic-design-whychooseus"

const GraphicDesignWhyChooseUs = () => {
    return (
        <div className="relative">
            {/* Background decorative elements with minimalistic approach */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#f9fafc] rounded-bl-[100px] opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#f9fafc] rounded-tr-[70px] opacity-70"></div>
            </div>
            
            <section className="relative py-24 px-8 md:px-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Section header with minimal design elements */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-block">
                            <div className="flex items-center justify-center mb-3">
                                <div className="h-1 w-10 bg-[#9f193f] rounded-full mr-2"></div>
                                <span className="text-[#9f193f] font-medium uppercase text-sm tracking-wider">Our Advantage</span>
                                <div className="h-1 w-10 bg-[#9f193f] rounded-full ml-2"></div>
                            </div>
                        </div>
                        <h2 className='text-[38px] sm:text-[48px] font-bold text-[#04213F] mb-6'>Why Choose Us for <span className="text-[#9f193f]">Design Services</span>?</h2>
                        <p className="text-[#666] text-lg max-w-2xl mx-auto">Our design team combines creativity with strategic thinking to deliver visual solutions that not only look stunning but also achieve your business objectives.</p>
                    </div>
                    
                    {/* Cards with minimal hover effects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {graphicDesignWhyChooseUsData.length > 0 && graphicDesignWhyChooseUsData.map((card, index) => (
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
                    
                    {/* Stats section with minimalistic design */}
                    <div className="mt-20 bg-[#04213F] rounded-2xl p-10 text-white shadow-xl">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold mb-2">Our Design Excellence by the Numbers</h3>
                            <p className="text-white/80">Results that demonstrate our commitment to quality</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-white">750+</div>
                                <div className="text-white/80 text-sm">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-white">98%</div>
                                <div className="text-white/80 text-sm">Client Satisfaction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-white">15+</div>
                                <div className="text-white/80 text-sm">Design Awards</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2 text-white">12+</div>
                                <div className="text-white/80 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GraphicDesignWhyChooseUs 