import React from 'react'
import Image from 'next/image'

const SEOServices = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] leading-tight mb-6">
              Drive Organic Growth with Our
              <span className="text-[#9f193f]"> SEO Services</span>
            </h1>
            <p className="text-[#666] text-lg mb-8">
              Transform your online visibility with our data-driven SEO strategies. We help businesses rank higher, attract qualified traffic, and achieve sustainable growth through search engine optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#9f193f] hover:bg-[#8a1636] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="border-2 border-[#9f193f] text-[#9f193f] hover:bg-[#9f193f] hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-[#04213F] text-2xl font-bold mb-2">500+</h3>
                <p className="text-[#666]">Keywords Ranked</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#04213F] text-2xl font-bold mb-2">200%</h3>
                <p className="text-[#666]">Traffic Growth</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#04213F] text-2xl font-bold mb-2">50+</h3>
                <p className="text-[#666]">SEO Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-[#04213F] text-2xl font-bold mb-2">95%</h3>
                <p className="text-[#666]">Client Retention</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/images/services/seo-hero.jpg"
              alt="SEO Services"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEOServices 