"use client";
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion'
import Link from 'next/link';

const AboutHero = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-desc", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 50,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
   <>
     <div className="relative sm:py-20  overflow-hidden bg-[#fff] ">
        <div className="container mx-auto px-18">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="inline-block mb-4">
                <div className="px-4 py-1 bg-[#9F1940]/10 text-[#9F1940] rounded-full text-sm font-medium relative overflow-hidden">
                  <span className="relative z-10">About Us</span>
                  <motion.div 
                    className="absolute inset-0 bg-[#9F1940]/20" 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
              
              <h1 className="text-5xl text-[32px] sm:text-[42px] font-bold text-gray-900 leading-tight mb-6">
              Transforming Visions into Digital Excellence
                <span className="block">Delivered</span>
              </h1>
              
              <p className="text-base  text-gray-600 mb-8 max-w-lg">
                We transform ideas into exceptional digital solutions, crafting experiences that push boundaries and drive measurable results.
              </p>
              
              <div className="hero-buttons flex items-center gap-5">
                <PrimaryButton text="Get Consultation" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services" className="px-8 py-4 border border-gray-300 text-gray-800 font-medium rounded-lg bg-gray-50 transition-colors duration-300">
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* 3D Isometric grid */}
              <div className="relative h-[400px] md:h-[450px] w-full mx-auto">
                {/* Main platform */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-2xl rotate-12">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-gray-100"></div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Elements */}
                <motion.div 
                  className="absolute left-[30%] top-[30%] w-12 h-12 bg-[#9F1940] rounded-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute right-[35%] top-[55%] w-12 h-12 bg-[#28536B] rounded-full"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
                />
                
                <motion.div 
                  className="absolute left-[55%] top-[25%] w-8 h-8 bg-black transform rotate-45"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
                />
                
                <motion.div 
                  className="absolute left-[45%] top-[60%] w-16 h-16 bg-gradient-to-br from-[#9F1940] to-[#28536B] rounded-lg transform rotate-12"
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 }}
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute top-[10%] right-[15%] w-10 h-10 bg-[#9F1940]/20 rounded-full"
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute bottom-[15%] left-[20%] w-8 h-8 bg-[#28536B]/20 rounded-full"
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#9F1940]/5 to-transparent -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-[#28536B]/5 to-transparent -z-10"></div>
      </div>
   </>
  );
};

export default AboutHero;
