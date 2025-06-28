"use client"
import React, { useState } from 'react';
import { graphicDesignPortfolioProjects } from '@/utils/graphic-design-portfolio-projects';
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


const GraphicDesignPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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
    <section className="py-24 px-4 sm:px-8 md:px-16 bg-white relative overflow-hidden">
      {/* Minimal decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 right-40 w-72 h-72 rounded-full border border-[#9f193f]/30"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full border border-[#04213F]/30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with minimal design */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
              <span className="mx-3 text-[#9f193f] font-medium uppercase text-sm tracking-wider">Our Work</span>
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#04213F] mb-6">
            Design <span className="text-[#9f193f]">Portfolio</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our recent design projects showcasing our creative expertise across various industries and design disciplines.
          </p>
        </div>
        
        {/* Portfolio grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {graphicDesignPortfolioProjects.map((project, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="relative group bg-white rounded-2xl overflow-hidden border border-gray-100 p-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 z-0"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>

            <div className="relative z-10  p-4 sm:p-6 md:p-8">
              <div className="relative h-[200px] sm:h-[300px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 mt-5 sm:mt-0">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F9FAFB] text-[#111111] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-[20px] sm:text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>

              <button
                className="inline-flex items-center text-sm font-medium
                cursor-pointer"
                onClick={() => handleOpenModal(project as Project)}
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
        
        {/* View more projects button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-[#9f193f] text-[#9f193f] rounded-md font-medium hover:bg-[#9f193f] hover:text-white transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>

      {selectedProject && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default GraphicDesignPortfolio; 