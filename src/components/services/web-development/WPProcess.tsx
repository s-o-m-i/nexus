"use client";
import FancyCard from '@/ui/FancyCard';
import React from 'react'
import { motion } from 'framer-motion';

const WPProcess = () => {

  const processes = 
  [
      {
          step: "01",
          title: "Discovery & Planning",
          description: "We start by understanding your goals, target audience, and technical requirements to craft a detailed project roadmap.",
          color: "bg-[#000]"
      },
      {
          step: "02",
          title: "Wireframing & UI/UX Design",
          description: "Designing wireframes and high-fidelity prototypes to ensure a user-centric and visually appealing interface.",
          color: "bg-[#9f193f]"
      },
      {
          step: "03",
          title: "Frontend & Backend Development",
          description: "Transforming designs into responsive interfaces and building powerful backend systems using modern frameworks.",
          color: "bg-[#000]"
      },
      {
          step: "04",
          title: "Testing & Optimization",
          description: "Comprehensive testing for functionality, compatibility, performance, and SEO to ensure the best user experience.",
          color: "bg-[#9f193f]"
      },
      {
          step: "05",
          title: "Deployment & Maintenance",
          description: "Launching the website to your preferred hosting platform and providing ongoing support and updates.",
          color: "bg-[#000]"
      }
  ];
  


  return (
    <>
      <section className="py-20 px-4 sm:px-16 bg-white">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">
          Our Development Process
        </h2>
        <div className="flex justify-center">
          <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">
            From concept to launch, our development process is designed to turn your ideas into impactful digital solutions. We follow a structured yet flexible approach that ensures every product we build is user-centric, scalable, and aligned with your business goals.
          </p>
        </div>

        <div className="space-y-8 overflow-hidden mt-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={process.step}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} gap-8`}
                        >
                            <div className='h-[200px] sm:h-[300px] w-full border border-gray-200 bg-[#F9FAFB] group/card overflow-hidden relative rounded-lg p-4'>
                                <div className={`absolute -bottom-[80%] w-[50%] h-full ${index % 2 !== 0 ? 'bg-[#000]' : 'bg-[#9f193f]'} group-hover/card:bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%] group-hover/card:-bottom-[70%] transition-all duration-300`}></div>
                                <h3 className='text-[32px] sm:text-[42px] text-[#04213F]'>{process.title}</h3>
                                <p className='text-gray-500 mt-5 sm:w-[75%] text-base'>{process.description}</p>
                            </div>
                            <div className="w-full flex justify-center">
                                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#000]">{process.step}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
      </section>

    </>
  )
}

export default WPProcess