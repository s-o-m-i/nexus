import React from 'react'
import Image from 'next/image'

const MarketingPortfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Growth",
      category: "SEO & PPC",
      metrics: [
        "150% increase in organic traffic",
        "200% ROI on ad spend",
        "45% increase in online sales"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "B2B Lead Generation",
      category: "Content & Email Marketing",
      metrics: [
        "300% increase in qualified leads",
        "45% email open rate",
        "25% conversion rate"
      ],
      image: "/images/portfolio/projectTwo.jpg"
    },
    {
      title: "Brand Awareness",
      category: "Social Media Marketing",
      metrics: [
        "100K+ social media followers",
        "500% increase in engagement",
        "50% increase in brand mentions"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "Local Business Growth",
      category: "Local SEO & Google Ads",
      metrics: [
        "400% increase in local searches",
        "85% increase in store visits",
        "3x ROI on local campaigns"
      ],
      image: "/images/portfolio/projectThree.jpg"
    },
    {
      title: "SaaS Marketing Success",
      category: "Full-Funnel Marketing",
      metrics: [
        "200% increase in trial signups",
        "45% reduction in CAC",
        "75% improvement in MQL to SQL"
      ],
      image: "/images/portfolio/projectOne.jpg"
    },
    {
      title: "Healthcare Marketing",
      category: "Content & Social Media",
      metrics: [
        "250% increase in patient inquiries",
        "90% positive social sentiment",
        "40% growth in patient base"
      ],
      image: "/images/portfolio/projectTwo.jpg"
    }
  ]

  return (
    <div className="bg-white py-20 px-4 sm:px-8 md:px-16">
  
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Our Success
            <span className="text-[#9f193f]"> Stories</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses achieve their digital marketing goals through strategic planning and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative h-[200px] sm:h-48 mb-6 rounded-lg overflow-hidden">
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
              <h3 className="text-[#04213F] text-[20px] sm:text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
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
  
  )
}

export default MarketingPortfolio 