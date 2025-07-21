'use client'
import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import StandardCard from '@/ui/StandardCard';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HowWePlan = () => {
  const container = useRef(null);
  const [activeStep, setActiveStep] = useState(1);



  const processSteps = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Concept Development",
      description: "We begin by diving into your business — learning your challenges, industry landscape, and audience behavior. Based on this foundation, we craft a strategic concept that guides your entire digital journey. Our creative and technical teams collaborate to ensure every campaign element aligns with your unique objectives.",
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      number: "02",
      title: "Innovative Branding & Positioning",
      description: "We help you build a brand identity that stands out in the crowded digital space. With a mix of creativity and strategy, we develop branding frameworks that not only make you memorable but also build trust and loyalty among your customers.",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      number: "03",
      title: "Strategic Execution with Data-Driven Focus",
      description: "Every decision we make is backed by data. From SEO and paid ads to social media and content strategies, we continuously optimise your campaigns for better reach, higher engagement, and stronger conversions — turning browsers into buyers and customers into loyal advocates.",
      icon: "📊",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <div ref={container}>
      <section id="how-we-plan" className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-plan absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#9f193f]/8 to-transparent rounded-full blur-xl"></div>
          <div className="floating-plan absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#9f193f]/12 to-transparent rounded-full blur-xl"></div>
          <div className="floating-plan absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-[#111111]/8 to-transparent rounded-full blur-xl"></div>
          <div className="floating-plan absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-[#9f193f]/15 to-transparent rounded-full blur-xl"></div>
          <div className="floating-plan absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20 plan-hero">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <span>📋</span>
              <span>How We Plan the Concept for Success</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-6">
              Success Starts with a{' '}
              <span className="gradient-text-plan bg-gradient-to-r from-[#9f193f] via-[#c42155] to-[#9f193f] bg-[length:200%_auto] bg-clip-text text-transparent">
                Well-Defined Plan
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              At Devmola, we believe that lasting success starts with a well-defined plan. From your first consultation to final execution, we keep you engaged and informed every step of the way. Our approach is rooted in a deep understanding of your brand, goals, market, and audience.
            </p>
            <div className="bg-gradient-to-r from-[#9f193f]/10 to-[#c42155]/10 p-6 rounded-2xl border border-[#9f193f]/20">
              <p className="text-[#111111] font-semibold">
                With Devmola, success isn&apos;t just a goal — it&apos;s a carefully crafted outcome.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-20">
            <div className="grid grid-cols-1 gap-8">
              {processSteps.map((step, index) => (

<>
<StandardCard count={index+1} title={step.title} desc={step.description} />
               
</>

              ))}
            </div>
          </div>

          {/* Detailed Content Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="content-card">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <h3 className="text-2xl font-bold text-[#111111] mb-6">
                    Our Strategic Approach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#9f193f] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">
                        We begin by diving into your business — learning your challenges, industry landscape, and audience behavior.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#9f193f] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">
                        Based on this foundation, we craft a strategic concept that guides your entire digital journey.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#9f193f] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 leading-relaxed">
                        Our creative and technical teams collaborate to ensure every campaign element aligns with your unique objectives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-card">
                <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] p-8 rounded-3xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10">
                    Data-Driven Excellence
                  </h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 leading-relaxed text-sm">
                        Every decision we make is backed by data. From SEO and paid ads to social media and content strategies.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 leading-relaxed text-sm">
                        We continuously optimise your campaigns for better reach, higher engagement, and stronger conversions.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/90 leading-relaxed text-sm">
                        Turning browsers into buyers and customers into loyal advocates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#111111] to-[#2d2d2d] p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Craft Your Success Story?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s start with a well-defined plan and turn your goals into carefully crafted outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/923705614842">
                <button className="bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Start Planning Today
                </button>
                </a>
                <a href="https://wa.me/923705614842">
                <button className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  Learn More
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWePlan; 