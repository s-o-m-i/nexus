import React from 'react'
import { FaSearch, FaCode, FaLink, FaStore, FaMapMarkerAlt, FaPencilAlt } from 'react-icons/fa'

const SEOOurServices = () => {
  const services = [
    {
      icon: <FaSearch className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "Keyword Research & Strategy",
      description: "Identify high-value keywords and develop targeted strategies to improve your search rankings."
    },
    {
      icon: <FaCode className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "Technical SEO",
      description: "Optimize your website's technical elements to improve crawlability and indexing."
    },
    {
      icon: <FaLink className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "Link Building",
      description: "Build high-quality backlinks to increase your website's authority and rankings."
    },
    {
      icon: <FaStore className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "E-commerce SEO",
      description: "Optimize your online store for better visibility and increased sales."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "Local SEO",
      description: "Improve your local search presence and attract more customers in your area."
    },
    {
      icon: <FaPencilAlt className="text-3xl text-[#9f193f] group-hover:text-white transition-colors duration-300" />,
      title: "Content Optimization",
      description: "Create and optimize content that ranks well and engages your target audience."
    }
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Our SEO
            <span className="text-[#9f193f]"> Services</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Comprehensive SEO solutions tailored to help your business achieve better search visibility and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden hover:bg-[#9f193f] cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#666] group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SEOOurServices 