import React from 'react';
import { graphicDesignProcessData } from '@/utils/graphic-design-process';

const GraphicDesignProcess = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50 relative overflow-hidden">
      {/* Minimal decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#9f193f]/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-[#04213F]/30 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with minimal design */}
        <div className="text-center mb-20">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
              <span className="mx-3 text-[#9f193f] font-medium uppercase text-sm tracking-wider">Our Approach</span>
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#04213F] mb-6">
            Our Design <span className="text-[#9f193f]">Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We follow a structured, collaborative approach to ensure every design project meets your objectives and exceeds expectations.
          </p>
        </div>
        
        {/* Timeline with minimal styling */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-0 relative">
            {graphicDesignProcessData.map((step, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative mb-12`}>
                {/* Timeline dot with icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-y-0 z-10 hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#9f193f] flex items-center justify-center text-lg">
                    {step.icon}
                  </div>
                </div>
                
                {/* Timeline step content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                  <div className="md:hidden flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#9f193f] flex items-center justify-center text-lg">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#04213F]">{step.title}</h3>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#04213F] mb-3 hidden md:block">
                    <span className="text-[#9f193f]">0{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {/* Empty div for spacing on alternate sides */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Simple note box */}
        <div className="mt-16 p-6 bg-white border border-gray-100 rounded-lg shadow-sm text-center">
          <p className="text-gray-700">
            <span className="font-medium">Our process is flexible</span> and can be adapted to your specific needs and timeline requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignProcess; 