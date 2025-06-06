import React from 'react'
import { WPOurServicesData } from '../../../utils/wp-services'

const WPOurServices = () => {
    return (
        <div>
            <section className="py-20 px-4 sm:px-8 md:px-16 bg-[#2D5C76] relative">
                
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#fff]  text-center'>Our Web Development Services
                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-[#fff] w-full sm:w-[65%]  mt-5 text-center'>From the first spark of an idea to a fully scaled product, we offer everything you need to build exceptional digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
                    {WPOurServicesData.length > 0 && WPOurServicesData.map((card, index) => {
                        return (
                            <>
                                {/* <ModernCard  key={index} step={card.step} title={card.title} desc={card.desc} /> */}
                                
                                <div key={index} className="relative bg-gray-50  backdrop-blur-md border border-gray-200  rounded-2xl p-6  w-full border-t-4 border-t-[#9F1940]/60 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group overflow-hidden hover:bg-white">
                                    {/* Gradient glow ring */}
                                    <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none group-hover:animate-pulse-glow" />

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-semibold text-[#04213F] mb-3 tracking-wide  transition-colors duration-300 ">
                                            {card.title}
                                        </h3>

                                        <p className="text-sm  opacity-80 leading-relaxed text-[#04213F]">
                                            {card.desc}
                                        </p>

                                        <div className="mt-5 pt-3 border-t border-[#9F1940]/40 text-lg font-medium text-[#9f193f]">
                                            {card.step}
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WPOurServices
