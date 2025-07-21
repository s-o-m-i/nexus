'use client'
import React from 'react';
import Image from 'next/image';

const WhatDrivesUs = () => {
  const services = [
    {
      icon: "🔍",
      title: "Search Engine Optimization (SEO)",
      description: "Data-driven SEO strategies to boost your online visibility"
    },
    {
      icon: "💰",
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted PPC campaigns for maximum ROI and conversions"
    },
    {
      icon: "📱",
      title: "Social Media Marketing",
      description: "Engaging social media campaigns to connect with your audience"
    },
    {
      icon: "💻",
      title: "Custom Web Development",
      description: "Professional, responsive websites tailored to your brand"
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Creative visual solutions that enhance your brand identity"
    },
    {
      icon: "✍️",
      title: "Content Writing",
      description: "Compelling content that engages and converts your audience"
    }
  ];

  const industries = [
    { name: "Retail", icon: "🛍️" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Hospitality", icon: "🏨" },
    { name: "Automotive", icon: "🚗" },
    { name: "Technology", icon: "💻" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Education", icon: "🎓" },
    { name: "Finance", icon: "💰" }
  ];

  const globalMarkets = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Dubai", flag: "🇦🇪" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "UK", flag: "🇬🇧" },
    { name: "China", flag: "🇨🇳" }
  ];

  return (
    <section id="what-drives-us" className="py-20 px-8 md:px-16 bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            {/* <span>🚀</span> */}
            <span>What Drives Us?</span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-6">
            Our Journey to Digital Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded in 2019, DevMola has quickly grown into one of the leading digital marketing and web development agencies in Islamabad, Pakistan, with a strong presence in global markets.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#9f193f]/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-3xl font-bold text-black mb-2">6+</div>
            <div className="flex justify-center">

            <p className="text-white  bg-[#9f193f] px-3 py-1 rounded-full text-sm flex items-center justify-center w-fit gap-1 hover:bg-white/30 transition-colors duration-300">Years of Excellence</p>
            </div>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#9f193f]/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="flex justify-center">

            <p className="text-white  bg-[#9f193f] px-3 py-1 rounded-full text-sm flex items-center justify-center w-fit gap-1 hover:bg-white/30 transition-colors duration-300">Projects Completed</p>
            </div>
          </div>

          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#9f193f]/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <div className="flex justify-center">

              <p className="text-white  bg-[#9f193f] px-3 py-1 rounded-full text-sm flex items-center justify-center w-fit gap-1 hover:bg-white/30 transition-colors duration-300">Countries Served</p>
            </div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#9f193f]/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="text-3xl font-bold text-black mb-2">98%</div>
            <div className="flex justify-center">

            <p className="text-white  bg-[#9f193f] px-3 py-1 rounded-full text-sm flex items-center justify-center w-fit gap-1 hover:bg-white/30 transition-colors duration-300">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#9f193f] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                International Standards Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At DevMola, we take pride in delivering high-quality digital marketing services that meet international standards, ensuring we not only meet but exceed client expectations. Whether you&apos;re in retail, real estate, hospitality, automotive, technology, or any other industry, we provide customised solutions to make your business stand out in a crowded digital world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#9f193f] relative overflow-hidden">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Data-Driven Multi-Channel Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From search engine optimisation (SEO) and pay-per-click (PPC) advertising to social media marketing, custom web development, graphic design, and content writing, our team brings a data-driven, multi-channel approach to everything we do. We understand that each business is unique, which is why we create personalised strategies that help you engage with your audience, increase brand awareness, and generate qualified leads.
              </p>
            </div>
          </div>

          {/* Right Side - Image and Global Markets */}
          <div className="space-y-8">
            <div className="relative">
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <Image 
                  src="/images/dawoodCEO.jpg" 
                  alt="DevMola CEO" 
                  width={500} 
                  height={400} 
                  className="rounded-2xl object-cover w-full h-64"
                />
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-[#111111] mb-2">Client-Centric Approach</h4>
                  <p className="text-gray-600 text-sm">
                    Our client-first approach ensures that every project we take on is built to generate measurable results and deliver maximum ROI.
                  </p>
                </div>
              </div>
            </div>

            {/* Global Markets */}
            <div className="bg-gradient-to-r from-[#9f193f] to-[#c42155] p-6 rounded-2xl text-white relative overflow-hidden">
              <h4 className="text-xl font-bold mb-4">Global Market Presence</h4>
              <div className="flex flex-wrap gap-2">
                {globalMarkets.map((market, index) => (
                  <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 transition-colors duration-300">
                    <span>{market.flag}</span>
                    {market.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

                {/* Final CTA Section */}
                <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] p-8 rounded-3xl text-white text-center relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Grow with Us?
          </h3>
          <p className="text-lg mb-6">
            Let&apos;s take your business to the next level with DevMola&apos;s expertise and commitment to digital marketing success.
          </p>
          <a href="https://wa.me/923705614842">
          <button className="bg-white text-[#9f193f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Start Your Journey
          </button>
          </a>
        </div>

        {/* Services Section */}
        {/* <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#111111]">
              Data-Driven Digital Solutions
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9f193f]/20"
              >
                <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">{service.icon}</div>
                <h4 className="text-lg font-bold text-[#111111] mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Industry Focus */}
        {/* <div className="bg-gradient-to-r from-[#111111] to-[#2d2d2d] p-8 rounded-3xl text-white relative overflow-hidden mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Serving Diverse Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div> */}


      </div>
    </section>
  );
};

export default WhatDrivesUs;