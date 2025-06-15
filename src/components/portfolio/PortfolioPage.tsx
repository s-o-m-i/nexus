"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import Button from '@/ui/Button/Button'
import PortfolioModal from './PortfolioModal'

// Portfolio project interface
interface Project {
  technologies: string[]
  id: number
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  challenge?: string
  solution?: string
}

// Client logo interface
interface ClientLogo {
  id: number
  name: string
}

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const filter = (category: string) => {
  let filteredProjects =  projects.filter((pro) => pro.category === category)
  }

  // Sample portfolio projects
  const projects: Project[] = [
    {
      technologies: ["UI/UX", "E-commerce", "Web Design"],
      id: 1,
      title: "Plant Shop - Plant Shop Website App Redesign",
      description: "A modern e-commerce platform for plant enthusiasts with an intuitive shopping experience.",
      category: "Web Design",
      image: "/images/portfolio/projectOne.jpg",
      tags: ["UI/UX", "E-commerce", "Web Design"],
      liveUrl: "https://plant-shop-website-app-redesign.vercel.app/",
      githubUrl: "https://github.com/your-repo/plant-shop-website-app-redesign",
      challenge: "The challenge was to redesign the Plant Shop website app to improve the user experience and increase sales.",
      solution: "The solution was to redesign the Plant Shop website app to improve the user experience and increase sales.",
    },
    {
      technologies: ["UI/UX", "E-commerce", "Web Design"],
      id: 2,
      title: "Solar - Solar & Renewable Website Solution",
      description: "Clean energy website showcasing renewable solutions with modern design.",
      category: "Web Design",
      image: "/images/portfolio/projectTwo.jpg",
      tags: ["Web Design", "Energy", "Sustainability"],
      liveUrl: "https://solar-website-solution.vercel.app/",
      githubUrl: "https://github.com/your-repo/solar-website-solution",
      challenge: "The challenge was to redesign the Solar website to improve the user experience and increase sales.",
      solution: "The solution was to redesign the Solar website to improve the user experience and increase sales.",
    },
    {
      technologies: ["UI/UX", "E-commerce", "Web Design"],
      id: 3,
      title: "Coworking Space Mobile App Solution",
      description: "Mobile application for booking and managing coworking spaces.",
      category: "App Design",
      image: "/images/portfolio/projectThree.jpg",
      tags: ["Mobile App", "Booking", "UI Design"],
      liveUrl: "https://coworking-space-mobile-app-solution.vercel.app/",
      githubUrl: "https://github.com/your-repo/coworking-space-mobile-app-solution",
      challenge: "The challenge was to redesign the Coworking Space mobile app to improve the user experience and increase sales.",
      solution: "The solution was to redesign the Coworking Space mobile app to improve the user experience and increase sales.",
    },
    {
      technologies: ["UI/UX", "E-commerce", "Web Design"],
      id: 4,
      title: "Furniture - Furniture Store E-commerce Solution",
      description: "E-commerce platform for premium furniture with 3D visualization.",
      category: "Web Design",
      image: "/images/portfolio/projectFour.png",
      tags: ["E-commerce", "3D", "Web Design"],
      liveUrl: "https://furniture-store-e-commerce-solution.vercel.app/",
      githubUrl: "https://github.com/your-repo/furniture-store-e-commerce-solution",
      challenge: "The challenge was to redesign the Furniture Store e-commerce solution to improve the user experience and increase sales.",
      solution: "The solution was to redesign the Furniture Store e-commerce solution to improve the user experience and increase sales.",
    }
  ]

  const categories = ['All', ...new Set(projects.map(project => project.category))]
  const filteredProjects = activeCategory === 'All'
  ? projects
  : projects.filter(project => project.category === activeCategory)



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


  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-hidden">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 relative">
        <div className="absolute bg-[#9f193f]/10 top-0 left-0 w-[200px] h-[200px]  rounded-full"></div>
        <div className="flex absolute top-50 left-0  rotate-2 animate-marquee overflow-hidden whitespace-nowrap bg-[#000]/10 py-2 -z-0">
            {[...Array(5)].map((_, repeat) => (
              <div key={repeat} className="flex space-x-24 pl-24">
                {clientLogos.map((logo) => (
                  <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                    <div className="text-white font-bold text-xl">{logo.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="">
            {/* <h1 className=' text-[32px] sm:text-[42px] font-bold text-[#000] mb-6'>Crafting Digital Experiences That Drive Results

            </h1> */}
            <h1 className=' text-[32px] sm:text-[90px] font-bold text-[#000] mb-6 '>PROJECTS

            </h1>
            <p className="text-[16px] sm:w-[75%] text-gray-700 mb-10">
              From scalable web platforms to sleek mobile apps, we build tailored software solutions that solve real-world problems for startups, SMEs, and enterprises worldwide.
            </p>
            <div className="flex items-center gap-5">
              <PrimaryButton text={"    Start Your Project"} />
              <Button />
              {/* <SecondaryButton/> */}
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center relative mt-20 sm:mt-0">
            {/* <h2 className='text-[#9f193f] text-[90px] font-bold absolute top-0 left-0'>PORTFOLIO</h2> */}
            <div className="relative">
              <div className="flex items-center gap-5">

                <div className="bg-[#9f193f] -mt-14 w-[200px] h-[200px]
                
                rounded-md
                
                 overflow-hidden hover:motion-preset-seesaw">
                  <img src="/images/portfolio/projectOne.jpg" alt="" className='hover:scale-[1.1] transition-all duration-300' />
                </div>
                <div className="bg-[#000] -mt-8 w-[200px] h-[200px] rounded-md  overflow-hidden hover:motion-preset-seesaw">
                  <img src="/images/portfolio/projectTwo.jpg" alt="" className='hover:scale-[1.1] transition-all duration-300' />
                </div>
              </div>
              <div className="flex items-center gap-5">

                <div className="bg-[#9f193f]   w-[200px] h-[200px] rounded-md  overflow-hidden hover:motion-preset-seesaw">
                  <img src="/images/portfolio/projectThree.jpg" alt="" className='hover:scale-[1.1] transition-all duration-300' />
                </div>
                <div className="bg-[#000] mt-8 w-[200px] h-[200px] rounded-md  overflow-hidden hover:motion-preset-seesaw">
                  <img src="/images/portfolio/projectFour.png" alt="" className='hover:scale-[1.1] transition-all duration-300 w-full h-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Animated Marquee */}
      <div className="py-16 border-y border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-600">Partnering with top companies to deliver exceptional results</p>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#f8f9ff] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#f8f9ff] to-transparent z-10"></div>

          <div className="flex animate-marquee overflow-hidden whitespace-nowrap bg-[#000] py-2">
            {[...Array(5)].map((_, repeat) => (
              <div key={repeat} className="flex space-x-24 pl-24">
                {clientLogos.map((logo) => (
                  <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                    <div className="text-white font-bold text-xl">{logo.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex  animate-marquee-reverse overflow-hidden whitespace-nowrap bg-[#9f193f] py-2">
            {[...Array(5)].map((_, repeat) => (
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
      </div>

      {/* Services Section with Hoverable Cards */}
      <div className="py-24 bg-white">
      <div className="w-full overflow-x-auto mb-12">
  <div className="flex gap-4 w-fit px-4 py-2 bg-white border border-gray-100 rounded-full shadow-md mx-auto">
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => setActiveCategory(category)}
        className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors duration-300
          ${activeCategory === category
            ? 'bg-[#9f193f] text-white shadow'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        {category}
      </button>
    ))}
  </div>
</div>

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="relative group bg-white rounded-2xl overflow-hidden border border-gray-100 p-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>

                <div className="relative z-10 p-6 md:p-8">
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F9FAFB] text-[#000] text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  <button
                    className="inline-flex items-center text-sm font-medium
                    cursor-pointer"
                    onClick={() => handleOpenModal(project)}
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>





      {/* CTA with 3D Effect */}
      <div className="py-24 bg-[#F9FAFB] flex justify-center relative overflow-hidden">

      <div className="mt-12 max-w-3xl bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
          <h3 className="text-xl font-medium text-[#04213F] mb-3">Ready to elevate your digital presence?</h3>
          <p className="text-gray-600 mb-6">
          Let&apos;s collaborate to create innovative solutions that drive growth and deliver exceptional results for your business.
          </p>
          <button className="px-8 py-3 bg-[#9f193f] text-white rounded-md font-medium hover:bg-[#9f193f]/90 transition-colors duration-300">
            Contact Us
          </button>
        </div>
        {/* More questions CTA */}
       


        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#9F1940]/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#000]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Portfolio Modal */}
      {selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  )
}

export default PortfolioPage 