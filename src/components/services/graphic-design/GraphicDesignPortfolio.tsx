import React from 'react';
import { graphicDesignPortfolioProjects } from '@/utils/graphic-design-portfolio-projects';

const GraphicDesignPortfolio = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-white relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesignPortfolioProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              {/* Project image with overlay on hover */}
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#04213F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-full w-full relative">
                  {/* Replace with actual image. Using a colored div as placeholder */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
                    style={{background: `url(${project.image}) center/cover no-repeat` || ''}}
                  ></div>
                </div>
                
                {/* Project details that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-3 py-1 bg-[#9f193f] text-white text-xs rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-white/20 text-white px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project title visible without hover */}
              <div className="p-4 bg-white">
                <h3 className="font-medium text-[#04213F] group-hover:text-[#9f193f] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more projects button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-[#9f193f] text-[#9f193f] rounded-md font-medium hover:bg-[#9f193f] hover:text-white transition-all duration-300">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPortfolio; 