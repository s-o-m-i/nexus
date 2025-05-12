"use client";
import React, { useState } from 'react';

type TechItem = {
  label: string;
  short: string;
  description: string;
};

type TechCategory = {
  title: string;
  items: string[];
};

type GenericTechStackProps = {
  title?: string;
  subtitle?: string;
  interactiveTechs: Record<string, TechItem>;
  techCategories: TechCategory[];
};

const GenericTechStack: React.FC<GenericTechStackProps> = ({
  title = 'Superb web apps built with top-tier tools & technologies',
  subtitle = 'Our engineers leverage the latest frameworks, libraries, and cloud solutions to craft fast, scalable, and future-ready digital products.',
  interactiveTechs,
  techCategories,
}) => {
  const techNames = Object.keys(interactiveTechs) as Array<keyof typeof interactiveTechs>;
  const [selectedTech, setSelectedTech] = useState<keyof typeof interactiveTechs>(techNames[0]);

  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="flex justify-center">
        <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F] text-center sm:w-[55%]">
          {title}
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-base sm:w-[75%] mt-5 text-center text-gray-600">{subtitle}</p>
      </div>

      {/* Interactive Panel */}
      <div className="grid grid-cols-2 mt-20 gap-8">
        <div className="technologies space-y-3">
          {techNames.map((tech, index) => (
            <div
              key={tech}
              onMouseEnter={() => setSelectedTech(tech)}
              className={`transition-all duration-300 cursor-pointer rounded-xl px-5 py-4 border-2 ${selectedTech === tech
                  ? 'border-[#9F1940] bg-[#fff5f7] shadow-md'
                  : 'border-gray-200 bg-white hover:bg-gray-50 hover:shadow-sm'
                }`}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${selectedTech === tech ? 'bg-[#9F1940]' : 'bg-gray-300'
                    }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg  font-semibold text-[#04213F]">{interactiveTechs[tech].label}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="tech-details transition-all duration-300">
          <div className="w-32 h-32 bg-[#9F1940] rounded-lg flex items-center justify-center">
            <h2 className="text-white text-4xl font-semibold">{interactiveTechs[selectedTech].short}</h2>
          </div>
          <h3 className="text-lg mt-5 font-medium">{interactiveTechs[selectedTech].label}</h3>
          <p className="text-base mt-3 text-gray-600">{interactiveTechs[selectedTech].description}</p>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F] text-center mt-20">
        Tech Stack We Use
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 gap-8">
        {techCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h2 className="text-center  text-xl font-semibold text-[#04213F] mb-4 pb-2 border-b-2 border-[#9F1940]">
            {category.title.length > 19 ? category.title.slice(0, 19) + "..." : category.title}
            </h2>
            <ul className="space-y-2">
              {category.items.map((tech, i) => (
                <li key={i} className="text-gray-700 text-base group-hover:text-[#9F1940] transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericTechStack;
