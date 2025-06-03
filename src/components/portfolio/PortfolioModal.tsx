"use client"
import React from 'react'
import Image from 'next/image'
import Modal from '@/components/ui/Modal'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface PortfolioItem {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  challenge?: string
  solution?: string
}

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  project: PortfolioItem
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ isOpen, onClose, project }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title}>
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Project Description */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-2">Project Overview</h3>
              <p className="text-white">{project.description}</p>
        </div>

        {/* Technologies Used */}
        <div>
          <h3 className="text-lg font-semibold text-[#fff] mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#9F1940] cursor-pointer text-[#fff] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenge & Solution */}
        {(project.challenge || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.challenge && (
              <div>
                <h3 className="text-lg font-semibold text-[#fff] mb-2">The Challenge</h3>
                <p className="text-white">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div>
                <h3 className="text-lg font-semibold text-[#fff] mb-2">Our Solution</h3>
                  <p className="text-white">{project.solution}</p>
              </div>
            )}
          </div>
        )}

        {/* Project Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2   text-white rounded-md bg-[#234B61] transition-colors duration-200"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#fff] text-[#fff] rounded-lg   transition-colors duration-200"
              >
                <FaGithub className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </Modal>
  )
}

export default PortfolioModal 