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
    <>
      <div className='h-[300px] w-full border border-gray-200 bg-[#F9FAFB] group/card overflow-hidden relative rounded-lg p-4'>
        <div className="absolute -bottom-[80%] w-[50%] h-full bg-[#2D5C77] group-hover/card:bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
 group-hover/card:-bottom-[70%] transition-all duration-300
"></div>
        <h3 className='text-[42px] '>{service.title}</h3>
        <p className='text-gray-500 mt-5 sm:w-[75%] text-base'>{service.description}</p>

        <button className="px-8 py-3 mt-8 border cursor-pointer hover:scale-105  border-gray-300 text-gray-800 font-medium rounded-lg bg-gray-50 transition-all group overflow-hidden duration-300 text-sm relative">
          <div className="absolute -bottom-[80%] w-[50px] h-full bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
group-hover:w-full group-hover:bottom-0 transition-all duration-300
"></div>
          <Link href={`/services/${service.slug}`} className='relative z-10 group-hover:text-white'>
            Learn More
          </Link>
        </button>

      </div>
    </>
  );
};

export default MainServicesCard;
