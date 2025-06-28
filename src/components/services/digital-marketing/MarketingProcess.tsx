import React from 'react'
import { FaSearch, FaChartLine, FaCogs, FaRocket } from 'react-icons/fa'

const MarketingProcess = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl text-[#9f193f]" />,
      title: "Research & Analysis",
      description: "We start by analyzing your business, target audience, competitors, and current digital presence to develop effective strategies.",
      number: "01"
    },
    {
      icon: <FaCogs className="text-4xl text-[#9f193f]" />,
      title: "Strategy Development",
      description: "Based on our research, we create a customized digital marketing strategy aligned with your business goals.",
      number: "02"
    },
    {
      icon: <FaRocket className="text-4xl text-[#9f193f]" />,
      title: "Implementation",
      description: "We execute the strategy across chosen channels, implementing campaigns and optimizing for best results.",
      number: "03"
    },
    {
      icon: <FaChartLine className="text-4xl text-[#9f193f]" />,
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization of campaigns to ensure maximum ROI and achievement of goals.",
      number: "04"
    }
  ]

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Our Digital Marketing
            <span className="text-[#9f193f]"> Process</span>
          </h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            A systematic approach to achieving your digital marketing goals through proven methodologies and continuous optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border-gray-300 border rounded-lg p-6 relative hover:shadow-lg transition duration-300"
            >
              <div className="absolute top-4 right-4 text-4xl font-bold text-[#111111] opacity-50">
                {step.number}
              </div>
              <div className="flex justify-center mb-4 text-[#9f193f]">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#04213F] text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-900 text-center">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-[#111111]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketingProcess 