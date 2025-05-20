import React from 'react';
import { graphicDesignServicesData } from '@/utils/graphic-design-services';

const GraphicDesignOurServices = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-white relative overflow-hidden">
      {/* Minimalist decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#9f193f]/10 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#04213F]/10 rounded-tr-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with minimal design */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-10 bg-[#9f193f]"></div>
              <span className="mx-3 text-[#9f193f] font-medium uppercase text-sm tracking-wider">Our Expertise</span>
              <div className="h-[2px] w-10 bg-[#9f193f]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#04213F] mb-6">
            Our Graphic Design <span className="text-[#9f193f]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer comprehensive design solutions that help your brand make a lasting impression, from logo design to marketing materials.
          </p>
        </div>
        
        {/* Service cards with minimalist design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {graphicDesignServicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Clean icon presentation */}
              <div className="mb-6 text-4xl">{service.icon}</div>
              
              <h3 className="text-xl font-bold text-[#04213F] mb-4 group-hover:text-[#9f193f] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              {/* Feature list with minimal styling */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <div className="text-[#9f193f] mr-2 mt-0.5">•</div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to action banner with clean design */}
        <div className="mt-20 bg-gradient-to-r from-[#04213F] to-[#9f193f] rounded-lg shadow-lg p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Design Solution?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We offer tailored design services to meet your specific business needs. Let's discuss your project requirements.
          </p>
          <button className="bg-white text-[#9f193f] px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignOurServices; 