import React from 'react'

const FancyCard = ({ title, desc }:{title: string; desc: string;}) => {
    return (
        <>
            <div className="card bg-gray-50 p-8  rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl shadow-sm hover:shadow-md transition-shadow border-[#9F1940] border-l-4">
                <h3 className='text-[20px]  text-[#28536B]'>{title}</h3>
                <p className='text-[14px] mt-5 text-gray-600'>{desc}</p>
            </div>
        </>
    )
}

export default FancyCard