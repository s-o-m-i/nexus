import SuccessStoryCard from './SuccessStoryCard';
import React from 'react'
import { FaChartBar, FaLaptopCode } from 'react-icons/fa'; // Replace with your icons


const SuccessStory = ({ data }: any) => {
    return (
        <>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">
                    Success Stories        </h2>
                <div className="flex justify-center">
                    <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">
                        At Nexus, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts.                    </p>
                </div>
                <div className="grid grid-cols-2 mt-20 gap-8">

                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((story, index) => (
                            <SuccessStoryCard key={index} {...story} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-2">No success stories available.</p>
                    )}

                </div>
            </section>
        </>
    )
}

export default SuccessStory