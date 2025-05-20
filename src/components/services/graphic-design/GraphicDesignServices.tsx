import React from 'react';
import ServicesForm from '@/components/ServicesForm';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import { FaPalette, FaLaptop, FaAward } from 'react-icons/fa';

const GraphicDesignServices = () => {
    return (
        <section className='relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#9f193f]'>
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-20 blur-3xl animate-float"></div>
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-[#04213F] opacity-20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* Abstract design elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -right-10 bottom-32 w-80 h-80 bg-[#04213F]/30 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 top-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                
                {/* Minimalistic shapes */}
                <div className="absolute right-[15%] top-[25%] w-16 h-16 border-4 border-white/20 rounded-full"></div>
                <div className="absolute left-[10%] bottom-[20%] w-24 h-24 border-4 border-white/20 rotate-45"></div>
                <div className="absolute right-[10%] bottom-[35%] w-32 h-2 bg-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 py-16">
                <div className="flex items-center">
                    <div className="max-w-xl">
                        {/* Visual accent */}
                        <div className="flex items-center mb-4 space-x-2">
                            <div className="h-1 w-12 bg-white rounded-full"></div>
                            <span className="text-white font-medium uppercase tracking-wider text-sm">Creative Design Services</span>
                        </div>
                        
                        <h1 className="text-[42px] md:text-[52px] leading-[1.1] font-bold text-white mb-6">
                            <span className="block">Stunning Visual</span>
                            <span className="block text-white">Design Solutions</span>
                        </h1>
                        
                        <p className="text-[18px] text-white/90 mb-10 leading-relaxed">
                            Elevate your brand with eye-catching visuals that communicate your message effectively. Our expert graphic design services help businesses create memorable visual identities that stand out in today's competitive landscape.
                        </p>
                        
                        {/* Key benefits with icons */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                            <div className="flex items-center gap-2 text-white">
                                <FaPalette className="text-white text-xl" />
                                <span className="text-sm">Creative Design</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <FaLaptop className="text-white text-xl" />
                                <span className="text-sm">Digital & Print</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                                <FaAward className="text-white text-xl" />
                                <span className="text-sm">Award-Winning Team</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-5">
                            <PrimaryButton text={"Get a Free Quote"} />
                            <Button />
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center items-center">
                    <div className="glass-morph rounded-lg p-6 w-full max-w-md relative">
                        <div className="absolute -top-14 -right-20 w-20 h-20 rounded-full flex items-center justify-center glass-morph opacity-90 shadow-lg">
                            <span className="text-white font-bold p-4 text-sm text-center">Start Today</span>
                        </div>
                        <ServicesForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraphicDesignServices; 