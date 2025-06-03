"use client"
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PortfolioModal from '@/components/portfolio/PortfolioModal';

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

const WDPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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

  

// Sample client logos

const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }
  return (
    <div>
      <section className="py-20 px-8 md:px-16">
        <div className="flex justify-center">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">
            Web Development Portfolio
          </h2>
        </div>
        <div className="flex justify-center">
          <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">
            Check out some of our most recent Web Development projects below.
          </p>
        </div>

          {/* Services Section with Hoverable Cards */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project) => (
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
                        className="px-3 py-1 bg-[#F9FAFB] text-[#2D5C76] text-sm rounded-full"
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
        <div className="flex justify-center mt-12">
    
        <PrimaryButton text='View All Projects →'/>
      </div>
      </section>
         {/* Portfolio Modal */}
         {selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </div>
  );
};

export default WDPortfolio;
