"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import StatsCard from '../services/StatsCard'

// Portfolio project interface
interface Project {
  id: number
  title: string
  description: string
  category: string
  icon: string
  color: string
}

// Client logo interface
interface ClientLogo {
  id: number
  name: string
}

const PortfolioPage = () => {
  // Sample services data
  const services: Project[] = [
    {
      id: 1,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and drive organic traffic with data-driven SEO strategies.",
      category: "SEO Services",
      icon: "🔍",
      color: "#9F1940"
    },
    {
      id: 2,
      title: "Pay-Per-Click Advertising",
      description: "Maximize ROI with targeted PPC campaigns that deliver immediate results and conversions.",
      category: "Digital Marketing",
      icon: "💰",
      color: "#28536B"
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand loyalty through strategic social media campaigns.",
      category: "Digital Marketing",
      icon: "📱",
      color: "#9F1940"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Create stunning, responsive websites that deliver exceptional user experience and drive results.",
      category: "Web Development",
      icon: "💻",
      color: "#28536B"
    }
  ]

  // Sample client logos
  const clientLogos: ClientLogo[] = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "Airbnb" },
    { id: 3, name: "Hubspot" },
    { id: 4, name: "Nation" },
    { id: 5, name: "Netflix" },
    { id: 6, name: "Zoom" }
  ]

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "200% increase in organic traffic with our SEO strategy",
      description: "For a major e-commerce client, we implemented a comprehensive SEO strategy that doubled their organic traffic in just 6 months."
    },
    {
      id: 2,
      title: "45% higher conversion rate through CRO implementation",
      description: "Our conversion rate optimization techniques helped a SaaS company increase their sign-up conversion rate by 45%."
    },
    {
      id: 3,
      title: "320% social media engagement growth",
      description: "A strategic social media campaign helped our retail client triple their engagement and increase sales by 27%."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f8f9ff] overflow-hidden">
      {/* Hero Section with 3D Elements and Animations */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="inline-block mb-4">
                <div className="px-4 py-1 bg-[#9F1940]/10 text-[#9F1940] rounded-full text-sm font-medium relative overflow-hidden">
                  <span className="relative z-10">Our Portfolio</span>
                  <motion.div 
                    className="absolute inset-0 bg-[#9F1940]/20" 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                <span className="block">Digital</span>
                <span className="relative">
                  <span className="block relative z-10">Excellence</span>
                  <span className="absolute bottom-0 left-0 h-3 bg-[#9F1940]/20 w-full rounded-full -z-0" />
                </span>
                <span className="block">Delivered</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                We transform ideas into exceptional digital solutions, crafting experiences that push boundaries and drive measurable results.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact" className="relative group px-8 py-4 bg-[#9F1940] text-white font-medium rounded-lg overflow-hidden">
                    <span className="relative z-10">Start a Project</span>
                    <motion.div 
                      className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#9F1940] to-[#b82d54] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="px-8 py-4 border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* 3D Isometric grid */}
              <div className="relative h-[400px] md:h-[450px] w-full mx-auto">
                {/* Main platform */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-2xl rotate-12">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-gray-100"></div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Elements */}
                <motion.div 
                  className="absolute left-[30%] top-[30%] w-12 h-12 bg-[#9F1940] rounded-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute right-[35%] top-[55%] w-12 h-12 bg-[#28536B] rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
                />
                
                <motion.div 
                  className="absolute left-[55%] top-[25%] w-8 h-8 bg-black transform rotate-45"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
                />
                
                <motion.div 
                  className="absolute left-[45%] top-[60%] w-16 h-16 bg-gradient-to-br from-[#9F1940] to-[#28536B] rounded-lg transform rotate-12"
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 }}
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-[10%] right-[15%] w-10 h-10 bg-[#9F1940]/20 rounded-full"
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute bottom-[15%] left-[20%] w-8 h-8 bg-[#28536B]/20 rounded-full"
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#9F1940]/5 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-[#28536B]/5 to-transparent -z-10"></div>
      </div>
      
      {/* Client Logos - Animated Marquee */}
      <div className="py-16 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-600">Partnering with top companies to deliver exceptional results</p>
        </div>
        
        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#f8f9ff] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#f8f9ff] to-transparent z-10"></div>
          
          <div className="flex animate-marquee overflow-hidden whitespace-nowrap">
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="flex space-x-24 pl-24">
                {clientLogos.map((logo) => (
                  <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                    <div className="text-gray-500 font-bold text-xl">{logo.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services Section with Hoverable Cards */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 bg-[#9F1940]/10 text-[#9F1940] rounded-md text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expertise that Drives Results</h2>
            <p className="text-lg text-gray-600">Comprehensive digital solutions tailored to elevate your brand and achieve measurable success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="relative group bg-white rounded-2xl overflow-hidden border border-gray-100 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
                
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-start">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mr-6"
                      style={{ backgroundColor: `${service.color}20`, color: service.color }}
                    >
                      {service.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <Link 
                        href={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="inline-flex items-center text-sm font-medium"
                        style={{ color: service.color }}
                      >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Background decoration */}
                  <div 
                    className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-5 transform translate-x-1/4 translate-y-1/4"
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Interactive Stats Section */}
      <div className="py-24 bg-gradient-to-br from-[#fafbff] to-[#f0f2f8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Impact by Numbers</h2>
            <p className="text-lg text-gray-600">Measurable results that speak to our expertise and dedication</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg">
                <motion.div 
                  initial={{ backgroundPosition: '0% 0%' }}
                  whileHover={{ backgroundPosition: '100% 100%' }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold text-black  bg-clip-text bg-[length:300%_300%] mb-2"
                >
                  
                  120+
                </motion.div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg">
                <motion.div 
                  initial={{ backgroundPosition: '0% 0%' }}
                  whileHover={{ backgroundPosition: '100% 100%' }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold text-black bg-clip-text bg-[length:300%_300%] mb-2"
                >
                  95%
                </motion.div>
                <p className="text-black">Client Satisfaction</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg">
                <motion.div 
                  initial={{ backgroundPosition: '0% 0%' }}
                  whileHover={{ backgroundPosition: '100% 100%' }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold text-black bg-clip-text  bg-[length:300%_300%] mb-2"
                >
                  12+
                </motion.div>
                <p className="text-black">Years Experience</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg">
                <motion.div 
                  initial={{ backgroundPosition: '0% 0%' }}
                  whileHover={{ backgroundPosition: '100% 100%' }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold text-black bg-clip-text  bg-[length:300%_300%] mb-2"
                >
                  24
                </motion.div>
                <p className="text-black">Team Members</p>
              </div>
            </motion.div>
          </div>
        
        </div>
      </div>
      
      {/* Case Studies with Modern Styling */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 bg-[#9F1940]/10 text-[#9F1940] rounded-md text-sm font-medium">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-lg text-gray-600">Real results that demonstrate our expertise and commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden">
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-md text-sm">Case Study #{study.id}</div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-7/12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{study.title}</h3>
                        <p className="text-gray-300 mb-6">{study.description}</p>
                        
                        <Link 
                          href={`/case-studies/${study.id}`} 
                          className="inline-flex items-center text-[#9F1940] hover:text-[#b82d54] transition-colors duration-300"
                        >
                          View case study
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                      
                      <div className="md:w-5/12 flex flex-col space-y-4">
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="text-sm text-gray-400 mb-1">Challenge</div>
                          <div className="text-white">Low online visibility and traffic</div>
                        </div>
                        
                        <div className="bg-white/5 p-4 rounded-xl">
                          <div className="text-sm text-gray-400 mb-1">Solution</div>
                          <div className="text-white">Comprehensive SEO strategy implementation</div>
                        </div>
                        
                        <div className="bg-[#9F1940]/20 p-4 rounded-xl">
                          <div className="text-sm text-[#9F1940] mb-1">Result</div>
                          <div className="text-white font-medium">200% increase in organic traffic</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#9F1940]/20 to-transparent rounded-full blur-3xl -mr-32 -mt-32 opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#28536B]/20 to-transparent rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA with 3D Effect */}
      <div className="py-24 bg-gradient-to-r from-[#fafbff] to-[#f0f2f8] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9F1940]/5 via-white to-[#28536B]/5 z-0"></div>
              
              <div className="relative z-10 p-10 md:p-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="md:w-3/5">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to elevate your digital presence?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Let&apos;s collaborate to create innovative solutions that drive growth and deliver exceptional results for your business.
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#9F1940] text-white font-medium rounded-lg overflow-hidden group">
                        <span className="mr-2">Get Started</span>
                        <span className="relative">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <div className="md:w-2/5 relative">
                    <div className="w-full h-64 relative">
                      {/* Play button circle */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0], 
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#9F1940] to-[#28536B] rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute inset-4 bg-white rounded-full shadow-lg"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9F1940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 8L16 12L10 16V8Z" fill="#9F1940" stroke="#9F1940" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#9F1940]/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#28536B]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage 