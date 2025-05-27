"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

interface MainServicesCardProps {
  service: {
    id: string;
    number: string; // "01", "02", etc.
    title: string;
    description: string;
    slug: string;
  };
  index: number;
}

const MainServicesCard: React.FC<MainServicesCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="w-full"
    >
      <Link href={`/services/${service.slug}`}>
        <motion.div
          whileHover={{ 
            scale: 1.02,
            backgroundColor: 'rgba(159, 25, 63, 0.85)' 
          }}
          className="group flex items-center justify-between rounded-xl px-6 py-5 bg-[#04213F]/90 backdrop-blur-sm border border-[#9F193F]/20 shadow-lg hover:shadow-[#9F193F]/20 transition-all duration-300 cursor-pointer overflow-hidden relative"
        >
          {/* Glowing background effect */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#9F193F]/40 blur-2xl rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

          {/* Left side with number */}
          <div className="flex items-center space-x-5 z-10">
            <div className="text-[28px] font-bold text-[#9F193F] font-mono w-12">
              {service.number}
            </div>
            
            <div className="h-[36px] w-[1px] bg-[#9F193F]/30"></div>
            
            <h3 className="text-white text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
              {service.title}
            </h3>
          </div>
          
          {/* Right side with description and arrow */}
          <div className="flex items-center space-x-8 z-10">
            <p className="text-gray-200/80 text-sm max-w-md hidden md:block">
              {service.description}
            </p>
            
            <motion.div
              whileHover={{ x: 4 }}
              className="text-white p-2 rounded-full border border-[#9F193F]/30 group-hover:bg-[#9F193F]/30 transition-all duration-300"
            >
              <FiArrowRight className="text-lg" />
            </motion.div>
          </div>
          
          {/* Glow hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#28536B]/0 via-[#28536B]/0 to-[#28536B]/0 group-hover:from-[#28536B]/0 group-hover:via-[#28536B]/10 group-hover:to-[#9F193F]/20 transition-all duration-500"></div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MainServicesCard;
