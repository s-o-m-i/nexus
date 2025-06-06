import RegularCard from '@/ui/RegularCard'
import React from 'react'
import { WPWhyChooseUsData } from "../../../utils/wp-whychooseus"

const WPWhyChooseUs = () => {

    return (
        <div>
            <section className="py-20 px-4 sm:px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold  text-[#04213F] mb-6 text-center'>Why Choose Us for Web Development?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {WPWhyChooseUsData.length > 0 && WPWhyChooseUsData.map((card, index) => {
                        return (
                            <RegularCard key={index} title={card.title} desc={card.description} icon={card.icon}/>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WPWhyChooseUs

