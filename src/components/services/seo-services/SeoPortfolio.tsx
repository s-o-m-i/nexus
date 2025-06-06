"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { seoPortfolioProjects } from '../../../utils/seo-portfolio-projects'
import { motion } from 'framer-motion'

// Define types for the portfolio project
interface ProjectResults {
    trafficGrowth: string;
    keywordRankings: string;
    conversionImprovement: string;
}

interface PortfolioProject {
    title: string;
    shortDescription: string;
    image: string;
    tags: string[];
    results: ProjectResults;
}

const SeoPortfolio = () => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    
    // Get unique categories from project tags
    const allCategories = ['all'];
    seoPortfolioProjects.forEach(project => {
        project.tags.forEach(tag => {
            if (!allCategories.includes(tag)) {
                allCategories.push(tag);
            }
        });
    });
    
    // Filter projects based on active category
    const filteredProjects = activeCategory === 'all' 
        ? seoPortfolioProjects 
        : seoPortfolioProjects.filter(project => project.tags.includes(activeCategory));

    return (
        <div className="bg-white py-20 px-4 sm:px-8 md:px-16">
  
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-4">
            Our Success
            <span className="text-[#9f193f]"> Stories</span>
          </h2>
          <p className="text-[#666] max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses achieve their digital marketing goals through strategic planning and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoPortfolioProjects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#9f193f]/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#9f193f]/0 via-[#9f193f] to-[#9f193f]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="relative h-[200px] sm:h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[#9f193f] text-sm font-semibold mb-2">
                {item.tags}
              </div>
              <h3 className="text-[#04213F] text-[20px] sm:text-xl font-bold mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.tags.map((tag, tagIndex) => (
                  <li
                    key={tagIndex}
                    className="flex items-center text-[#666]"
                  >
                    <span className="w-2 h-2 bg-[#9f193f] rounded-full mr-2"></span>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#9f193f] hover:bg-[#8a1636] text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            View More Case Studies
          </button>
        </div>
      </div>
    )
}

export default SeoPortfolio 