'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GlobalDigitalMarketing = () => {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".global-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#global-digital-marketing",
          start: "top 40%",
          end: "top -50%",
          scrub: 1,
        },
        stagger: 0.3,
      });

      gsap.from(".global-right", {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#global-digital-marketing",
          start: "top 0%",
          end: "top -50%",
          scrub: 1,
        },
        stagger: 0.3,
      });

      gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#global-digital-marketing",
          start: "top 60%",
          end: "top -20%",
          scrub: 1,
        },
        stagger: 0.2,
      });

      // Floating animation for decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      title: "Custom Websites",
      description: "Professional, responsive websites tailored to your brand and industry"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "SEO Strategies",
      description: "Data-driven search engine optimization to boost your online visibility"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      title: "Social Media Marketing",
      description: "Engaging social media campaigns to connect with your audience"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Paid Campaigns",
      description: "Targeted advertising campaigns for maximum ROI and conversions"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Conversion-Focused Design",
      description: "User experience design that drives conversions and engagement"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Marketing",
      description: "Strategic email campaigns to nurture leads and drive sales"
    }
  ];

  const regions = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Dubai", flag: "🇦🇪" },
    { name: "Qatar", flag: "🇶🇦" },
    { name: "Oman", flag: "🇴🇲" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Switzerland", flag: "🇨🇭" },
    { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
    { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { name: "China", flag: "🇨🇳" }
  ];

  return (
    <div ref={container}>
      <section id="global-digital-marketing" className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full blur-xl"></div>
          <div className="floating-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#9f193f]/15 to-transparent rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-[#111111]/10 to-transparent rounded-full blur-xl"></div>
          <div className="floating-element absolute bottom-40 right-1/3 w-12 h-12 bg-gradient-to-br from-[#9f193f]/20 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#9f193f] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          
       
              {/* <span>🌍</span> */}
              <span>Global Digital Marketing</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-6">
              Grow Your Business with DevMola&apos;s{' '}
              <span className="text-[#9f193f]">Global Digital Marketing</span> Expertise
            </h2>
            <p className="text-base text-[364153] max-w-4xl mx-auto leading-relaxed">
              At DevMola, we empower businesses in Islamabad, across Pakistan, and around the world with data-driven digital marketing solutions that drive results.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Content */}
            <div className="global-left space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#9f193f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4 relative z-10">
                  Trusted Digital Marketing Agency
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  As a trusted digital marketing agency, we specialise in creating custom websites, SEO strategies, social media marketing, paid campaigns, and conversion-focused designs that align with your brand and industry goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#9f193f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl font-bold text-[#111111] mb-4 relative z-10">
                  Results-Focused Approach
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  With a results-focused approach, our team doesn&apos;t just improve your digital presence — we build meaningful engagement with your target audience, fueling long-term growth and trust.
                </p>
              </div>

              {/* Global Reach */}
              <div className="bg-gradient-to-r from-[#9f193f] to-[#c42155] p-6 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                <h4 className="text-xl font-bold mb-4 relative z-10">Global Reach</h4>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {regions.map((region, index) => (
                    <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1 hover:bg-white/30 transition-colors duration-300">
                      <span>{region.flag}</span>
                      {region.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="global-right relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/20 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#9f193f] to-[#c42155] rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✨
                  </div>
                  <Image 
                    src="/images/strategy_dev.jpg" 
                    alt="Digital Marketing Strategy" 
                    width={500} 
                    height={400} 
                    className="rounded-2xl object-cover w-full h-64"
                  />
                  <div className="mt-6">
                    <h4 className="text-lg font-bold text-[#111111] mb-2">Strategic Digital Solutions</h4>
                    <p className="text-gray-600 text-sm">
                      From email marketing to search engine optimisation, DevMola is your go-to partner for smart, scalable, and international digital marketing success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          {/* <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span>🛠️</span>
                <span>Our Services</span>
              </div>
              <h3 className="text-[32px] sm:text-[42px] font-bold text-[#111111]">
                Comprehensive Digital Marketing Services
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9f193f]/20 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-[#111111] mb-2 relative z-10">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{service.description}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Industry Focus */}
          {/* <div className="bg-gradient-to-r from-[#111111] to-[#2d2d2d] p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
              Serving Diverse Industries
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                { name: "Salon", icon: "💇‍♀️" },
                { name: "Restaurant", icon: "🍽️" },
                { name: "Car Showroom", icon: "🚗" },
                { name: "Property Dealer", icon: "🏢" },
                { name: "Software House", icon: "💻" },
                { name: "E-commerce", icon: "🛒" },
                { name: "Healthcare", icon: "🏥" },
                { name: "Education", icon: "🎓" }
              ].map((industry, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <p className="font-semibold">{industry.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-300 relative z-10">
              Whether you&apos;re a salon, restaurant, car showroom, property dealer, or a software house, we help bring your business online, boost visibility, and attract the right customers.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default GlobalDigitalMarketing; 