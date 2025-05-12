import React from 'react'

interface RegularCardProps {
    title: string;
    desc: string;
    icon?: any;
}

const RegularCard: React.FC<RegularCardProps> = ({ title, desc,icon }) => {
    return (
        <div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow min-h-[300px]">
                <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
                    {icon}
                </div>
                <h3 className="text-xl  text-[#28536B] ">{title}</h3>
                <p className="text-gray-600 text-sm mt-5">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default RegularCard
