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
        <section className="py-24 px-8 md:px-16 bg-[#f9fafc] relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                        <circle id="pattern-circle" cx="25" cy="25" r="1" fill="#9f193f" fillOpacity="0.1"></circle>
                    </pattern>
                    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto relative">
                {/* Section header */}
                <div className="flex flex-col items-center justify-center mb-16 text-center relative z-10">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 bg-[#04213F]/5 text-[#04213F] rounded-full text-sm font-medium">Case Studies</span>
                    </div>
                    <h2 className='text-[38px] sm:text-[48px] font-bold text-[#04213F] mb-6'>Our SEO <span className="text-[#9f193f]">Success Stories</span></h2>
                    <p className='text-[18px] text-[#666] text-center max-w-[700px] leading-relaxed'>
                        View our portfolio of successful SEO campaigns that delivered measurable results for our clients across various industries.
                    </p>
                </div>
                
                {/* Filter tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {allCategories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeCategory === category
                                    ? 'bg-[#9f193f] text-white shadow-md'
                                    : 'bg-white text-[#666] border border-gray-200 hover:border-[#9f193f]/30'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
                
                {/* Portfolio grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project: PortfolioProject, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image container with gradient overlay on hover */}
                            <div className="relative h-[250px] overflow-hidden">
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#04213F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                    <p className="text-white/90 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.shortDescription}</p>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-[#04213F] text-xl font-bold mb-3 group-hover:text-[#9f193f] transition-colors duration-300">{project.title}</h3>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag: string, i: number) => (
                                        <span key={i} className="bg-[#f5f7fa] text-[#666] text-xs px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                
                                {/* Results in a colorful background card */}
                                <div className="bg-gradient-to-r from-[#04213F] to-[#9f193f] rounded-lg p-4 text-white">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider mb-3 text-white/80">Results Achieved</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/90 text-sm">Organic Traffic Growth</span>
                                            <span className="text-[#f8d57e] font-bold text-lg">{project.results.trafficGrowth}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/90 text-sm">Keyword Rankings</span>
                                            <span className="text-[#f8d57e] font-bold text-lg">{project.results.keywordRankings}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/90 text-sm">Conversion Improvement</span>
                                            <span className="text-[#f8d57e] font-bold text-lg">{project.results.conversionImprovement}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* View case study button */}
                                <button className="w-full mt-5 py-3 text-center border border-[#9f193f] text-[#9f193f] rounded-lg font-medium hover:bg-[#9f193f] hover:text-white transition-colors duration-300">
                                    View Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* View all projects button */}
                {activeCategory !== 'all' && (
                    <div className="mt-12 text-center">
                        <button 
                            onClick={() => setActiveCategory('all')}
                            className="inline-flex items-center text-[#9f193f] font-medium hover:text-[#04213F] transition-colors"
                        >
                            <span>View All Projects</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default SeoPortfolio 