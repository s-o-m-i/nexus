import React from 'react'
import { FaChartLine, FaUserFriends, FaCogs, FaSearchDollar } from 'react-icons/fa'

const SEOWhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-3xl text-[#9f193f]" />,
      title: "Data-Driven Approach",
      description: "We base our SEO strategies on comprehensive data analysis and industry insights to deliver measurable results."
    },
    {
      icon: <FaUserFriends className="text-3xl text-[#9f193f]" />,
      title: "Dedicated SEO Team",
      description: "Work with experienced SEO specialists who understand your business goals and target audience."
    },
    {
      icon: <FaCogs className="text-3xl text-[#9f193f]" />,
      title: "Custom Strategy",
      description: "Get a tailored SEO plan that aligns with your business objectives and industry requirements."
    },
    {
      icon: <FaSearchDollar className="text-3xl text-[#9f193f]" />,
      title: "ROI Focused",
      description: "Our strategies focus on driving qualified traffic that converts into leads and customers."
    }
  ]

  return (
    <div className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Why Choose
            <span className="text-[#9f193f]"> Our SEO Services</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Partner with us for comprehensive SEO solutions that drive sustainable growth and deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[#666]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SEOWhyChooseUs 