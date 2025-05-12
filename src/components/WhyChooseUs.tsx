import RegularCard from '@/ui/RegularCard'
import React from 'react'

const WhyChooseUs = ({data,service}:{service: string; data: any}) => {

    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold  text-[#04213F] mb-6 text-center'>Why Choose Us for {service}?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {data.length > 0 && data.map((card: any, index: any) => {
                        return (
                            <RegularCard key={index} title={card.title} desc={card.description} icon={card.icon}/>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs

