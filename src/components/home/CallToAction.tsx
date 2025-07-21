"use client"
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const CallToAction = ({ desc = "Ready to take your business to the next level with our expert services?" }) => {
  return (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] relative overflow-hidden">
      {/* Background decorative elements for dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#9f193f]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="p-4 sm:p-[90px] w-full rounded-3xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#111111]/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Decorative border gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#9f193f]/20 via-transparent to-[#c42155]/20 opacity-50"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 sm:gap-y-0 items-center relative z-10">
            {/* Left Text */}
            <div className="sm:col-span-8">
              <h3 className="text-[26px] sm:text-[42px] text-white leading-[1.2] sm:w-[85%] font-bold">
                {desc}
              </h3>
            </div>

            {/* Right Buttons */}
            <div className="sm:col-span-4 flex items-center justify-start sm:justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="https://wa.me/923705614842">
                <PrimaryButton text="923705614842" />
                </a>
              </motion.div>
              <a href="https://wa.me/923705614842">
              <motion.button 
                className="px-8 py-3 border border-[#9f193f]/30 text-white font-medium rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm transition-all hover:scale-105 text-sm hover:bg-[#9f193f] hover:border-[#9f193f] shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
