'use client'
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import CalendlyWidget from '../CalendlyWidget';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const WhyChooseDevMola = () => {
  const container = useRef(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);  
 

  const features = [
    {
      id: 1,
      icon: "📈",
      title: "Result-Oriented Strategies",
      description: "Every campaign we run is designed to deliver measurable results — whether it's traffic, leads, or sales.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: "👥",
      title: "Dedicated Experts",
      description: "Work directly with specialists who understand your business and craft tailored strategies that meet your goals.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: "🔄",
      title: "End-to-End Solutions",
      description: "From SEO, SMM, and PPC to web development, branding, and content creation — everything under one roof.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: "💬",
      title: "Transparent Communication",
      description: "Stay informed with clear reporting, regular updates, and proactive support at every stage.",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: "💰",
      title: "Cost-Effective Services",
      description: "Premium digital marketing solutions that deliver value without breaking the bank.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const handleFeatureHover = (featureId: number) => {
    setHoveredFeature(featureId);
  };

  const handleFeatureLeave = () => {
    setHoveredFeature(null);
  };

  return (
    <div ref={container}>
      <section id="why-choose-devmola" className="py-20 px-8 md:px-16 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-why absolute top-20 left-10 w-28 h-28 bg-gradient-to-br from-[#9f193f]/8 to-transparent rounded-full blur-xl"></div>
          <div className="floating-why absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-[#9f193f]/12 to-transparent rounded-full blur-xl"></div>
          <div className="floating-why absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-br from-[#111111]/8 to-transparent rounded-full blur-xl"></div>
          <div className="floating-why absolute bottom-40 right-1/3 w-16 h-16 bg-gradient-to-br from-[#9f193f]/15 to-transparent rounded-full blur-xl"></div>
          <div className="floating-why absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-16 why-hero">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <span>🏆</span>
              <span>Why Choose DevMola?</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-6">
              Your Growth, Our{' '}
              <span className="gradient-text-why bg-gradient-to-r from-[#9f193f] via-[#c42155] to-[#9f193f] bg-[length:200%_auto] bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Devmola, we&apos;re not just service providers — we&apos;re your digital success partners. Trusted by businesses across industries, we deliver customized digital marketing solutions that are built to perform, scale, and adapt.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="mission-section">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl font-bold text-[#111111] mb-6">
                  Backed by Expert Team
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Backed by a team of highly skilled marketers, developers, designers, and strategists, we combine innovation with performance to help your brand stand out, connect, and grow in the ever-changing digital world.
                </p>
                <div className="bg-gradient-to-r from-[#9f193f]/10 to-[#c42155]/10 p-4 rounded-2xl border border-[#9f193f]/20">
                  <p className="text-[#111111] font-semibold text-sm">
                    We stay ahead of the curve by constantly adapting to Google&apos;s latest algorithm updates, evolving tech trends, and platform-specific strategies, so your business always stays visible and competitive.
                  </p>
                </div>
              </div>
            </div>

            <div className="mission-section">
              <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] p-8 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">
                  What Sets DevMola Apart?
                </h3>
                <div className="space-y-4 relative z-10">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex sm:flex-row flex-col items-start gap-3">
                      <div className="checkmark flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#9f193f]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-white/80 text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#111111] mb-4">
                Our Core Strengths
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose DevMola — where expertise meets creativity, and your business goals become reality.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="feature-item group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#9f193f]/30 relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => handleFeatureHover(feature.id)}
                  onMouseLeave={handleFeatureLeave}
                >
                  {/* Micro-effects background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="font-bold text-[#111111] mb-3 group-hover:text-[#9f193f] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover micro-effect */}
                  {hoveredFeature === feature.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                         style={{
                           animation: 'shimmer 1.5s ease-in-out'
                         }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#111111] to-[#2d2d2d] p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Partner with DevMola?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s transform your digital presence and achieve your business goals together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <a href="https://wa.me/923705614842">
                <button className="bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Start Your Journey
                </button>
                </a>
                <button className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20" 
                onClick={() => setIsOpen(true)}
                >
                  Schedule a Call
                </button>
                <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default WhyChooseDevMola; 