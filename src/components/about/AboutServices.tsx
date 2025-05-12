import React from 'react'
import { AboutWhyUsFeatures } from "../../utils/about-whyus"
import StandardCard from '@/ui/StandardCard'
import ModernCard from '@/ui/ModernCard'
import RegularCard from '@/ui/RegularCard'
const AboutServices = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-[#f8f8f8]">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>Why Choose Us?

                </h2>
                <div className="flex justify-center">
                    <p className='text-base text-gray-600 sm:w-[65%]  mt-5 text-center'>Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-3 gap-8">
                    {AboutWhyUsFeatures.map((card, index) => (
                       <RegularCard title={card.title} desc={card.description} icon={card.icon}/>
                    ))}


                </div>
            </section>
        </div>
    )
}

export default AboutServices
