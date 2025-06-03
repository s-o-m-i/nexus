import React from 'react'
import Image from 'next/image'

const SEOPortfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Growth",
      category: "Technical SEO & Content",
      metrics: [
        "200% increase in organic traffic",
        "150% increase in sales",
        "Top 3 rankings for 100+ keywords"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "SaaS Platform Success",
      category: "Full SEO Strategy",
      metrics: [
        "300% increase in signups",
        "50+ featured snippets",
        "90% increase in domain authority"
      ],
      image: "/images/portfolio/projectTwo.jpg"
    },
    {
      title: "Local Business Impact",
      category: "Local SEO",
      metrics: [
        "500% increase in local visibility",
        "200+ local citations built",
        "Top 3 in local pack"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "Healthcare Provider",
      category: "Content & Technical SEO",
      metrics: [
        "400% increase in organic leads",
        "75% reduction in bounce rate",
        "Top rankings for medical terms"
      ],
      image: "/images/portfolio/projectThree.jpg"
    },
    {
      title: "B2B Software Company",
      category: "Enterprise SEO",
      metrics: [
        "250% increase in qualified leads",
        "100+ backlinks from authority sites",
        "60% increase in conversions"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "Real Estate Agency",
      category: "Local & Content SEO",
      metrics: [
        "350% increase in property inquiries",
        "Top rankings for location terms",
        "80% increase in organic traffic"
      ],
      image: "/images/portfolio/projectTwo.jpg"
    }
  ]

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Our Success
            <span className="text-[#9f193f]"> Stories</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses achieve their SEO goals through strategic planning and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[#9f193f] text-sm font-semibold mb-2">
                {item.category}
              </div>
              <h3 className="text-[#04213F] text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.metrics.map((metric, metricIndex) => (
                  <li
                    key={metricIndex}
                    className="flex items-center text-[#666]"
                  >
                    <span className="w-2 h-2 bg-[#9f193f] rounded-full mr-2"></span>
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#9f193f] hover:bg-[#8a1636] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            View More Case Studies
          </button>
        </div>
      </div>
    </div>
  )
}

export default SEOPortfolio 