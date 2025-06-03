import React from 'react'
import { FaSearch, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa'

const SEOProcess = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl text-[#9f193f]" />,
      title: "Research & Analysis",
      description: "We conduct thorough keyword research, competitor analysis, and website audit to understand your current position and opportunities."
    },
    {
      icon: <FaCogs className="text-3xl text-[#9f193f]" />,
      title: "Strategy Development",
      description: "Based on our findings, we create a customized SEO strategy aligned with your business goals and target audience."
    },
    {
      icon: <FaRocket className="text-3xl text-[#9f193f]" />,
      title: "Implementation",
      description: "We execute the strategy through technical optimization, content creation, and link building activities."
    },
    {
      icon: <FaChartLine className="text-3xl text-[#9f193f]" />,
      title: "Monitor & Optimize",
      description: "We continuously track performance, analyze results, and make data-driven adjustments to improve rankings."
    }
  ]

  return (
    <div className="bg-[#f8f9fa] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Our SEO
            <span className="text-[#9f193f]"> Process</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Our proven SEO methodology ensures consistent results and sustainable growth for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex items-center mb-6">
                <div className="mr-4">{step.icon}</div>
                <div className="w-8 h-8 rounded-full bg-[#9f193f] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#666]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SEOProcess 