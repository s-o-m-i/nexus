"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiJenkins } from 'react-icons/si';

interface Technology {
  id: number
  name: string
  icon: React.ReactNode
  category: string
  description: string
}

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const technologies: Technology[] = [
    // Frontend
    {
      id: 1,
      name: "React",
      icon: <FaReact color='white'/>,
      category: "Frontend",
      description: "Building interactive user interfaces"
    },
    {
      id: 2,
      name: "Next.js",
      icon: <SiNextdotjs color='white'/>,
      category: "Frontend",
      description: "Server-side rendering and static generation"
    },
    {
      id: 3,
      name: "TypeScript",
      icon: <SiTypescript color='white'/>,
      category: "Frontend",
      description: "Type-safe JavaScript development"
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: <SiTailwindcss color='white'/>,
      category: "Frontend",
      description: "Utility-first CSS framework"
    },
    // Backend
    {
      id: 5,
      name: "Node.js",
      icon: <FaNodeJs color='white'/>,
      category: "Backend",
      description: "Server-side JavaScript runtime"
    },
    {
      id: 6,
      name: "Express",
      icon: <SiExpress color='white'/>,
      category: "Backend",
      description: "Web application framework"
    },
    {
      id: 7,
      name: "MongoDB",
      icon: <SiMongodb color='white'/>,
      category: "Backend",
      description: "NoSQL database solution"
    },
    {
      id: 8,
      name: "PostgreSQL",
      icon: <SiPostgresql color='white'/>,
      category: "Backend",
      description: "Relational database system"
    },
    // DevOps
    {
      id: 9,
      name: "Docker",
      icon: <FaDocker color='white'/>,
      category: "DevOps",
      description: "Containerization platform"
    },
    {
      id: 10,
      name: "AWS",
      icon: <FaAws color='white'/>,
      category: "DevOps",
      description: "Cloud computing services"
    },
    {
      id: 11,
      name: "GitHub",
      icon: <FaGithub color='white'/>,
      category: "DevOps",
      description: "Version control and collaboration"
    },
    {
      id: 12,
      name: "Jenkins",
      icon: <SiJenkins color='white'    />,
      category: "DevOps",
      description: "Continuous integration/deployment"
    }
  ];
  

  const categories = ['All', 'Frontend', 'Backend', 'DevOps']

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#9F1940]/10 text-[#9F1940] rounded-full text-sm font-medium mb-4"
          >
            Our Tech Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#111111] mb-6"
          >
            Technologies We Master
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We leverage cutting-edge technologies to build scalable, efficient, and modern solutions for our clients
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border border-gray-300 shadow-lg group overflow-hidden transition-all duration-300 relative ${
                activeCategory === category
                  ? 'bg-[#9F1940] text-white shadow-lg'
                  : 'bg-white text-[#111111] hover:bg-[#111111] hover:text-white'
              }`}
            >
              <h3 className='relative z-50'>{category}</h3>
              <div className="absolute -bottom-5 left-[50%] translate-x-[-50%] w-[30px] h-[30px] bg-[#9F1940] rounded-full group-hover:w-[100%] group-hover:h-[100%] transition-all duration-300 group-hover:bottom-0 "></div>
            </motion.button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#9F193F] flex items-center justify-center">
                    {tech.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#111111] mb-1">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 ">
                <span className="inline-block px-3 py-1 bg-[#F9FAFB] border border-gray-300 text-[#111111] text-sm rounded-full">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9F1940]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#111111]/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}

export default TechStack 