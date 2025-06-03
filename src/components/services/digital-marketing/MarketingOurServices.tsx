import React from 'react'
import { FaSearchDollar, FaChartLine, FaHashtag } from 'react-icons/fa'
import { MdEmail, MdAnalytics } from 'react-icons/md'
import { SiGoogleads } from 'react-icons/si'

const MarketingOurServices = () => {
  const services = [
    {
      icon: <FaSearchDollar className="text-4xl text-[#9f193f] mb-4" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your online visibility and drive organic traffic",
      features: [
        "Keyword Research & Strategy",
        "On-Page & Technical SEO",
        "Content Optimization",
        "Link Building"
      ]
    },
    {
      icon: <SiGoogleads className="text-4xl text-[#9f193f] mb-4" />,
      title: "PPC Advertising",
      description: "Drive targeted traffic and generate quick results",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Display Advertising",
        "Remarketing Campaigns"
      ]
    },
    {
      icon: <FaHashtag className="text-4xl text-[#9f193f] mb-4" />,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness",
      features: [
        "Content Strategy & Creation",
        "Community Management",
        "Social Media Advertising",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#9f193f] mb-4" />,
      title: "Content Marketing",
      description: "Create valuable content that converts",
      features: [
        "Content Strategy",
        "Blog Writing",
        "Copywriting",
        "Content Distribution"
      ]
    },
    {
      icon: <MdEmail className="text-4xl text-[#9f193f] mb-4" />,
      title: "Email Marketing",
      description: "Nurture leads and drive conversions",
      features: [
        "Email Campaign Strategy",
        "Newsletter Management",
        "Automation Workflows",
        "Performance Tracking"
      ]
    },
    {
      icon: <MdAnalytics className="text-4xl text-[#9f193f] mb-4" />,
      title: "Analytics & Reporting",
      description: "Track and optimize your marketing performance",
      features: [
        "Custom Dashboard Setup",
        "KPI Tracking",
        "Monthly Reports",
        "Performance Analysis"
      ]
    }
  ]

  return (
    <div className="bg-[#2D5C76] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Digital Marketing
            <span className="text-[#9f193f]"> Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border-gray-300 border rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#04213F] text-center mb-3">
                {service.title}
              </h3>
              <p className="text-gray-900 text-center mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-900"
                  >
                    <span className="w-2 h-2 bg-[#9f193f] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketingOurServices 