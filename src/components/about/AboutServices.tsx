import React from 'react'
import { AboutWhyUsFeatures } from "../../utils/about-whyus"
import StandardCard from '@/ui/StandardCard'
import ModernCard from '@/ui/ModernCard'
import RegularCard from '@/ui/RegularCard'
const AboutServices = () => {
    return (
        <div>
            <section className="py-20  bg-[#f8f8f8]">
                <div className='container mx-auto px-4 sm:px-18'>
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#2D5C76]  text-center'>Why Choose Us?

                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 sm:w-[65%]  mt-5 text-center'>Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.
                    </p>
                </div>
                <div className="mt-20 grid sm:grid-cols-3 grid-cols-1 gap-8">
                    {AboutWhyUsFeatures.map((card, index) => (
                       <RegularCard key={index} title={card.title} desc={card.description} icon={card.icon}/>
                    ))}


                </div>
                </div>
            </section>
        </div>
    )
}

export default AboutServices
