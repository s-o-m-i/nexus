import React from 'react'

const TechServices = ({data, service}:{data:any; service: string}) => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>Our {service} Services
                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 sm:w-[65%]  mt-5 text-center'>From the first spark of an idea to a fully scaled product, we offer everything you need to build exceptional digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
                    {data.length > 0 && data.map((card:any, index:any) => {
                        return (
                            <>
                                {/* <ModernCard  key={index} step={card.step} title={card.title} desc={card.desc} /> */}
                                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg w-full border-t-4 border-t-[#9F1940]/60 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group overflow-hidden">
                                    {/* Gradient glow ring */}
                                    <div className="absolute inset-0 z-0 rounded-2xl pointer-events-none group-hover:animate-pulse-glow" />

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-semibold text-[#04213F] mb-3 tracking-wide group-hover:text-[#9F1940] transition-colors duration-300">
                                            {card.title}
                                        </h3>

                                        <p className="text-sm text-[#04213F] opacity-80 leading-relaxed">
                                            {card.description}
                                        </p>

                                        <div className="mt-5 pt-3 border-t border-[#9F1940]/40 text-lg font-medium text-[#04213F]/90">
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

export default TechServices
