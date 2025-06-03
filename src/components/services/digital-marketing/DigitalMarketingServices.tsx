import React from 'react'
import { FaChartLine, FaSearchDollar, FaHashtag } from 'react-icons/fa'
import { MdEmail, MdAnalytics } from 'react-icons/md'
import { SiGoogleads } from 'react-icons/si'

const DigitalMarketingServices = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-[32px] sm:text-[42px] font-bold mb-6 text-[#04213F]">
            Digital Marketing
            <span className="text-[#9f193f]"> Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#666] max-w-3xl mx-auto">
            Drive growth and maximize ROI with our data-driven digital marketing strategies. We help businesses reach their target audience and achieve measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* SEO */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <FaSearchDollar className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">Search Engine Optimization</h3>
              <p className="text-[#666] leading-relaxed">Improve your website&apos;s visibility and drive organic traffic with our comprehensive SEO strategies.</p>
            </div>
          </div>

          {/* PPC */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <SiGoogleads className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">PPC Advertising</h3>
              <p className="text-[#666] leading-relaxed">Maximize your advertising ROI with targeted pay-per-click campaigns across multiple platforms.</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <FaHashtag className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">Social Media Marketing</h3>
              <p className="text-[#666] leading-relaxed">Build brand awareness and engage with your audience through strategic social media management.</p>
            </div>
          </div>

          {/* Content Marketing */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <FaChartLine className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">Content Marketing</h3>
              <p className="text-[#666] leading-relaxed">Create valuable content that resonates with your audience and drives conversions.</p>
            </div>
          </div>

          {/* Email Marketing */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <MdEmail className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">Email Marketing</h3>
              <p className="text-[#666] leading-relaxed">Nurture leads and drive sales with personalized email marketing campaigns.</p>
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden">
            {/* Simple accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            
            <div className="relative">
              {/* Clean icon with subtle background */}
              <div className="mb-6 bg-[#f8f9fb] w-16 h-16 rounded-lg flex items-center justify-center group-hover:bg-[#9f193f]/10 transition-colors duration-300">
                <div className="text-[#9f193f]">
                  <MdAnalytics className="text-[#9f193f] text-3xl" />
                </div>
              </div>
              
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">Analytics & Reporting</h3>
              <p className="text-[#666] leading-relaxed">Track performance and optimize campaigns with detailed analytics and insights.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketingServices 