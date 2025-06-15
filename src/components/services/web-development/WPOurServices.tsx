"use client"
import React from 'react'
import { WPOurServicesData } from '../../../utils/wp-services'
import FancyCard from '@/ui/FancyCard'
import { motion } from 'framer-motion';

const WPOurServices = () => {
    return (
        <div>
            <section className="py-20 px-4 sm:px-8 md:px-16 bg-[#fff] relative">

                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#000]  text-center'>Our Web Development Services
                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 w-full sm:w-[65%]  mt-5 text-center'>From the first spark of an idea to a fully scaled product, we offer everything you need to build exceptional digital experiences.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
                    {WPOurServicesData.length > 0 && WPOurServicesData.map((card, index) => {
                        return (
                            <>
                                <FancyCard key={card.step} title={card.title} desc={card.desc} />


                            </>
                        )
                    })}

                    {/* <div className="space-y-8 overflow-hidden ">
                        {WPOurServicesData.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}
                            >
                                <div className='h-[200px] sm:h-[300px] w-full border border-gray-200 bg-[#F9FAFB] group/card overflow-hidden relative rounded-lg p-4'>
                                    <div className={`absolute -bottom-[80%] w-[50%] h-full ${index % 2 !== 0 ? 'bg-[#000]' : 'bg-[#9f193f]'} group-hover/card:bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%] group-hover/card:-bottom-[70%] transition-all duration-300`}></div>
                                    <h3 className='text-[32px] sm:text-[42px] text-[#04213F]'>{process.title}</h3>
                                    <p className='text-gray-500 mt-5 sm:w-[75%] text-base'>{process.description}</p>
                                </div>
                                <div className="w-full flex justify-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                                        <span className="text-2xl font-bold text-[#000]">{process.step}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div> */}

                </div>
            </section>
        </div>
    )
}

export default WPOurServices
