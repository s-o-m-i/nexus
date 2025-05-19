import React from 'react'
interface CardGradOneProps {
    image: string;
    name: string;
    qoute: string;
    position: string;
}
const CardGradOne:React.FC<CardGradOneProps> = ({}) => {
    return (
        <>

            <div className="bg-gradient-to-br from-[#9f193f] to-red-500 p-4 rounded-2xl text-white text-center">
                <p className="text-2xl font-semibold">Comprehensive Consultation</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-2xl col-span-2 text-left">
                <p className="text-sm uppercase text-[#9f193f]">Driving Innovation </p>
                <h3 className="text-xl font-bold text-[#9f193f]">Our Platform's Features Lead the Way</h3>
            </div>
        </>
    )
}

export default CardGradOne