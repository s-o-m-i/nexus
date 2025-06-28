"use client"

import React, { useRef } from 'react'
import services from "../../utils/services-data.js"
import CallToAction from '@/components/home/CallToAction'
import StatsCard from './StatsCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { FiArrowRight } from "react-icons/fi"
import Link from 'next/link'
import MainServicesCard from './MainServicesCard'
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
// 3D Grid Component with Enhanced Visual Elements
const IsometricGrid = () => {
  return (
    <div className="w-full h-full relative perspective-[1000px]">
      {/* Main grid platform */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] grid grid-cols-5 grid-rows-5 rotate-x-[60deg] rotate-z-[45deg] origin-center">
        {/* Grid cells */}
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="border border-[#9F193F]/10 bg-white/80 shadow-lg"
            style={{
              transform: index % 3 === 0 ? `translateZ(${(index % 7) * 4}px)` : 'none',
              transition: 'transform 0.5s ease-out'
            }}
          />
        ))}

        {/* 3D floating elements */}
        <motion.div
          className="absolute left-[15%] top-[20%] w-16 h-16 bg-gradient-to-br from-[#9F193F] to-[#b22240] rounded-lg shadow-xl"
          animate={{
            translateZ: [0, 50, 0],
            rotateZ: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />

        <motion.div
          className="absolute right-[25%] top-[60%] w-14 h-14 bg-gradient-to-br from-[#111111] to-[#3b7898] rounded-full shadow-xl"
          animate={{
            translateZ: [20, 70, 20],
            rotateZ: [5, -5, 5]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />

        <motion.div
          className="absolute left-[60%] top-[30%] w-10 h-10 transform rotate-45 bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0] shadow-lg"
          animate={{
            translateZ: [40, 90, 40],
            rotateY: [0, 180, 0]
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5
          }}
        />

        <motion.div
          className="absolute left-[35%] top-[45%] w-20 h-20 bg-gradient-to-br from-[#9F193F] to-[#111111] rounded-lg shadow-xl"
          animate={{
            translateZ: [30, 80, 30],
            rotateZ: [0, 15, 0]
          }}
          transition={{
            duration: 9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg className="absolute top-[-10%] right-[-10%] w-[200px] h-[200px] text-[#9F193F]/10" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
        <svg className="absolute bottom-[-5%] left-[-5%] w-[150px] h-[150px] text-[#111111]/10" viewBox="0 0 150 150">
          <rect x="25" y="25" width="100" height="100" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" />
        </svg>
      </div>
    </div>
  )
}

// Interface for service object
interface ServiceProps {
  service: {
    icon: React.ReactNode;
    service: string;
    desc: string;
    startingPrice: string;
  };
  index: number;
}

interface ClientLogo {
  id: number
  name: string
}

const clientLogos: ClientLogo[] = [
  { id: 1, name: "App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "UI/UX Design" },
  { id: 4, name: "Digital Marketing" },
  { id: 5, name: "SEO Services" },
  { id: 6, name: "Content Writing" },
  { id: 7, name: "Wireframe" },
  { id: 8, name: "Prototyping" },
  { id: 9, name: "Branding" },
  { id: 10, name: "Graphic Design" },
  { id: 11, name: "Video Production" },
  { id: 12, name: "Social Media Marketing" },
  { id: 13, name: "Email Marketing" },
  { id: 14, name: "Search Engine Optimization" },
]

// Enhanced Service Bubble Component
const ServiceBubble = ({ service, index }: ServiceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        y: -5
      }}
      className="service-card w-full h-full bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden relative"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9F193F] to-[#111111]"></div>

      {/* Card pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-pattern-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#9F193F" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-pattern-${index})`} />
        </svg>
      </div>

      <div className="p-8 flex flex-col h-full relative z-10">
        <div className="flex-grow">
          <div className="flex justify-center mb-6">
            <motion.div
              className="icon-box w-20 h-20 flex items-center justify-center rounded-full shadow-lg relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #9F193F 0%, #B22240 100%)" }}
              whileHover={{ rotate: 5 }}
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 40 40">
                  <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="5" cy="5" r="1.5" fill="#fff" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
              </div>
              {service.icon}
            </motion.div>
          </div>
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-3">{service.service}</h3>
          <p className="text-base text-gray-600 text-center leading-relaxed">{service.desc}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-gray-700">
              Starts at: <span className="font-bold text-[#9F193F]">{service.startingPrice}</span>
            </h4>
            <Link
              href={`/services/${service.service.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center text-[#9F193F] font-medium group"
            >
              Explore
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="ml-2"
              >
                <FiArrowRight />
              </motion.span>
            </Link>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#9F193F] to-[#b22240] hover:from-[#8a1537] hover:to-[#9F193F] mt-6 py-3 rounded-xl text-center cursor-pointer transition-all duration-300"
          >
            <h3 className="text-white font-medium">Book a call</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const servicesRef = useRef(null)
  gsap.registerPlugin(useGSAP)

  return (
    <div>
      {/* Hero Section with 3D Elements */}
      <section className="relative overflow-hidden bg-[#ffff] ">
        <div className="container mx-auto px-4 sm:px-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-block mb-4">
                <div className="px-4  bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium">
                  Our Services
                </div>
              </div>
              <h1 className="text-[32px] sm:text-[42px]  font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive <br /><span className="bg-gradient-to-r from-[#9F193F] to-[#111111] bg-clip-text text-transparent">Digital Solutions</span>
              </h1>
              <p className="text-gray-600 text-base max-w-xl mb-8">
                At Nexus, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. Our team of skilled professionals combines cutting-edge technologies with innovative strategies.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex"
              >
                <Link
                  href="/contact"

                >
                  <PrimaryButton text='Get Started' />                </Link>
              </motion.div>
            </motion.div>

            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-xl mx-auto">
                  <IsometricGrid />
                </div>
              </div>

              {/* Floating service bubbles around the grid */}
              <motion.div
                className="absolute top-[10%] right-[5%] w-28 h-28 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 10px 25px -5px rgba(159, 25, 64, 0.2)" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#9F193F] to-[#B22240] flex items-center justify-center text-white font-medium">
                  Web<br />Design
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg z-10"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ boxShadow: "0 10px 25px -5px rgba(40, 83, 107, 0.2)" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#111111] to-[#3b7898] flex items-center justify-center text-white font-medium">
                  App<br />Dev
                </div>
              </motion.div>

              <motion.div
                className="absolute top-[40%] left-[5%] w-20 h-20 rounded-full bg-white/80 backdrop-blur-sm p-2 shadow-lg z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#e0e0e0] to-[#c8c8c8] flex items-center justify-center text-gray-700 font-medium text-sm">
                  SEO
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <svg className="absolute top-0 right-0 h-64 w-64 text-[#9F193F]/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M37.7,-49.2C46.5,-39.2,50.1,-25.5,49.8,-13.4C49.5,-1.3,45.4,9.1,40.2,19.8C35.1,30.5,29,41.6,19.5,46.6C10,51.6,-2.9,50.5,-16.5,47.2C-30.1,43.9,-44.3,38.3,-50.8,27.4C-57.3,16.5,-56.1,0.3,-50.3,-11.8C-44.6,-23.9,-34.4,-31.9,-24,-40.9C-13.7,-49.9,-3.2,-59.9,6.7,-67.6C16.6,-75.4,28.9,-59.2,37.7,-49.2Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute bottom-0 left-0 h-80 w-80 text-[#111111]/5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M38.5,-47.7C52.5,-39.6,68,-30.1,73.9,-16.3C79.8,-2.6,76,15.3,65.4,25.8C54.9,36.3,37.6,39.4,22.1,45.5C6.6,51.5,-7.1,60.5,-22.3,59.8C-37.5,59.1,-54.2,48.8,-65.5,33.3C-76.8,17.8,-82.8,-2.8,-77.2,-19C-71.6,-35.1,-54.5,-46.7,-38.2,-54.2C-21.9,-61.7,-6.5,-65,-0.6,-64.3C5.4,-63.5,24.5,-55.8,38.5,-47.7Z" transform="translate(100 100)" />
          </svg>
        </div>
      </section>



      {/* Services Section with Enhanced Visuals */}
      <div className="py-24 bg-[#fff] relative overflow-hidden" ref={servicesRef}>
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-1.5 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium">
                What We Offer
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              At Nexus, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <MainServicesCard key={index} service={service} index={index} />
            ))}
          </div>


        </div>

        {/* Enhanced background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64">
          <svg className="w-full h-full text-[#9F193F]/5" viewBox="0 0 100 100" fill="none">
            <circle cx="75" cy="25" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            <circle cx="75" cy="25" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <circle cx="75" cy="25" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96">
          <svg className="w-full h-full text-[#111111]/5" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <rect x="20" y="20" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
            <rect x="30" y="30" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>

      {/* Stats Section with Enhanced Styling */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block mb-4">
              <div className="px-4 py-1.5 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium">
                Our Impact
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6">
              Metrics That Speak
            </h2>
            <p className="text-lg text-gray-600">
              We measure our success through the achievements of our clients and the growth they experience.
            </p>
          </motion.div>

          <StatsCard />
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-[#111111]/5 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#9F193F]/5 blur-3xl"></div>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee overflow-hidden rotate-x-[100deg] skew-12 whitespace-nowrap bg-[#9f193f] mt-20 py-4">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex space-x-24 pl-24">
              {clientLogos.map((logo) => (
                <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                  <div className="text-white font-bold text-xl">{logo.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex  animate-marquee-reverse overflow-hidden whitespace-nowrap bg-[#111111] py-2">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex space-x-24 pl-24">
              {clientLogos.map((logo) => (
                <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                  <div className="text-white font-bold text-xl">{logo.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}

export default Services
