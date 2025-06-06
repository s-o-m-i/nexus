import ServicesForm from '@/components/ServicesForm';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';
import { FaSearch, FaChartLine, FaAward } from 'react-icons/fa';

const SeoServices = () => {
    return (
        <section className='relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#9f193f]'>
           
            {/* Background with gradient overlay */}
            {/* <div className="absolute inset-0 bg-[#9f193f] opacity-90 z-0"></div> */}
            
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl animate-float"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-[#04213F] opacity-20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 py-16">
                <div className="flex items-center">
                    <div className="max-w-xl">
                        {/* Visual accent */}
                        <div className="flex items-center mb-4 space-x-2">
                            <div className="h-1 w-12 bg-white rounded-full"></div>
                            <span className="text-white font-medium uppercase tracking-wider text-sm">Search Engine Optimization</span>
                        </div>
                        
                        <h1 className="text-[32px] sm:text-[42px]  leading-[1.1] font-bold text-white mb-6">
                            <span className="block">Dominate Search Results</span>
                            <span className="block text-[#f8d57e]">Drive Business Growth</span>
                        </h1>
                        
                        <p className="text-base text-white/90 mb-10 leading-relaxed">
                            Boost your online visibility, drive targeted traffic, and increase conversions with our data-driven SEO strategies. Our comprehensive search engine optimization services help businesses achieve sustainable growth through organic search.
                        </p>
                        
                        {/* Key benefits with icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                            <div className="flex items-center gap-2 text-white">
                                <FaSearch className="text-[#f8d57e] text-xl" />
                                <span className="text-sm">Improved Rankings</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <FaChartLine className="text-[#f8d57e] text-xl" />
                                <span className="text-sm">More Traffic</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <FaAward className="text-[#f8d57e] text-xl" />
                                <span className="text-sm">Higher Conversions</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-5">
                            <PrimaryButton text={"Free SEO Audit"} />
                            <Button />
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center">
                    <div className="glass-morph rounded-lg p-0 sm:p-6 w-full max-w-md relative">
                        <div className="absolute -top-14 -right-20 w-20 h-20 bg-[#f8d57e] rounded-full sm:flex items-center justify-center glass-morph opacity-90 shadow-lg hidden ">
                            <span className=" text-white font-bold p-4 text-sm text-center">Start Today</span>
                        </div>
                        <ServicesForm />
                    </div>
                </div>
            </div>
          
        </section>
    );
};

export default SeoServices; 