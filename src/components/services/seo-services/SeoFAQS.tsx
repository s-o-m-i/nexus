"use client"
import React, { useState } from 'react'
import { seoFaqsData } from '@/utils/seo-faqs'
import { IoIosArrowDown } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'

// Define interface for FAQ data
interface FAQ {
    question: string;
    answer: string;
}

const SeoFAQS = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4 sm:px-8 md:px-16 relative overflow-hidden bg-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-60 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#f8f9fb] rounded-bl-[200px]"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#f8f9fb] rounded-tr-[200px]"></div>
            </div>
            
            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1.5 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">
                        Got Questions?
                    </div>
                    <h2 className='text-[38px] sm:text-[48px] font-bold text-[#04213F] mb-6'>
                        Frequently Asked <span className="text-[#9f193f]">Questions</span>
                    </h2>
                    <p className='text-[18px] text-[#666] text-center leading-relaxed'>
                        Get answers to common questions about our SEO services and how they can benefit your business.
                    </p>
                </div>
                
                {/* Two-column layout for FAQs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    <div className="space-y-5">
                        {seoFaqsData.slice(0, Math.ceil(seoFaqsData.length / 2)).map((faq: FAQ, index: number) => (
                            <FAQItem 
                                key={index} 
                                faq={faq} 
                                isActive={activeIndex === index} 
                                index={index}
                                toggleFaq={toggleFaq}
                            />
                        ))}
                    </div>
                    <div className="space-y-5">
                        {seoFaqsData.slice(Math.ceil(seoFaqsData.length / 2)).map((faq: FAQ, index: number) => (
                            <FAQItem 
                                key={index + Math.ceil(seoFaqsData.length / 2)} 
                                faq={faq} 
                                isActive={activeIndex === index + Math.ceil(seoFaqsData.length / 2)} 
                                index={index + Math.ceil(seoFaqsData.length / 2)}
                                toggleFaq={toggleFaq}
                            />
                        ))}
                    </div>
                </div>
                
                {/* More questions CTA */}
                <div className="mt-16 text-center">
                    <p className="text-[#666] mb-6">Still have questions? We&apos;re here to help.</p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-[#9f193f] hover:bg-[#b82150] text-white font-semibold rounded-full transition-colors duration-300 shadow-md hover:shadow-xl">
                        Contact Our SEO Experts
                    </a>
                </div>
            </div>
        </section>
    )
}

// FAQ Item Component for better organization
interface FAQItemProps {
    faq: FAQ;
    isActive: boolean;
    index: number;
    toggleFaq: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isActive, index, toggleFaq }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border ${isActive ? 'border-[#9f193f]' : 'border-gray-100'}`}
        >
            <div 
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFaq(index)}
            >
                <h3 className={`text-[18px] font-semibold ${isActive ? 'text-[#9f193f]' : 'text-[#04213F]'} transition-colors duration-300`}>
                    {faq.question}
                </h3>
                <div className={`text-xl min-w-[24px] flex items-center justify-center transition-colors duration-300 ${isActive ? 'text-[#9f193f]' : 'text-[#666]'}`}>
                    <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoIosArrowDown />
                    </motion.div>
                </div>
            </div>
            
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                            <p className="text-[#666] leading-relaxed">{faq.answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SeoFAQS 