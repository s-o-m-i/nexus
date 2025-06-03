import FancyCard from '@/ui/FancyCard'
import React from 'react'
import { FaChartLine, FaUsers, FaCogs, FaHandshake } from 'react-icons/fa'

const MarketingWhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-4xl text-[#9f193f]" />,
      title: "Data-Driven Approach",
      description: "We make decisions based on comprehensive data analysis and proven metrics to ensure optimal results for your campaigns."
    },
    {
      icon: <FaUsers className="text-4xl text-[#9f193f]" />,
      title: "Expert Team",
      description: "Our certified digital marketing specialists bring years of experience across various industries and platforms."
    },
    {
      icon: <FaCogs className="text-4xl text-[#9f193f]" />,
      title: "Custom Strategies",
      description: "We develop tailored marketing strategies that align with your business goals and target audience."
    },
    {
      icon: <FaHandshake className="text-4xl text-[#9f193f]" />,
      title: "Transparent Reporting",
      description: "Regular detailed reports and insights keep you informed about your campaign&apos;s performance and ROI."
    }
  ]

  return (
    <div className=" py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5C76] mb-4">
            Why Choose Our
            <span className="text-[#9f193f]"> Digital Marketing</span> Services?
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Partner with us for result-driven digital marketing solutions that help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {benefits.map((benefit,index) => (
            // <div
            //   key={index}
            //   className="bg-gray-50 border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            // >
            //   <div className="flex justify-center mb-4 text-[#04213F]">
            //     {benefit.icon}
            //   </div>
            //   <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">
            //     {benefit.title}
            //   </h3>
            //   <p className="text-[#4D4D4D]">
            //     {benefit.description}
            //   </p>
            // </div>
             <FancyCard key={index} title={benefit.title} desc={benefit.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketingWhyChooseUs 