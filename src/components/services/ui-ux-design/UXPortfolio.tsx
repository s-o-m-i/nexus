"use client";

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

const UXPortfolio = () => {

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

    const projects = [
        {
            id: 1,
            title: "E-commerce App Redesign",
            description: "Complete UX overhaul resulting in 40% increase in conversion rate",
            image: "/images/portfolio/projectOne.jpg",
            tags: ["UI Design", "UX Research", "Mobile App"]
        },
        {
            id: 2,
            title: "Healthcare Dashboard",
            description: "Intuitive interface design for medical professionals",
            image: "/images/portfolio/projectTwo.jpg",
            tags: ["Dashboard Design", "Data Visualization", "Healthcare"]
        },
        {
            id: 3,
            title: "Travel Booking Platform",
            description: "User-centered booking experience with 60% faster completion time",
            image: "/images/portfolio/projectThree.jpg",
            tags: ["Web Design", "UX Design", "Travel"]
        },
        {
            id: 4,
            title: "Fintech Mobile App",
            description: "Modern banking experience with focus on accessibility",
            image: "/images/portfolio/projectTwo.jpg",
            tags: ["Mobile Design", "Fintech", "Accessibility"]
        }
    ];

    return (
        <section className="py-20 px-8 md:px-16 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#2D5C76] mb-4">Featured UI/UX Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our portfolio of successful UI/UX design projects that have transformed user experiences and driven business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
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

export default UXPortfolio; 