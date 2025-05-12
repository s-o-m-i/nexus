"use client"
import Button from '@/ui/Button/Button'
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import SecondaryButtonTwo from '@/ui/SecondaryButtonTwo/SecondaryButtonTwo'
import React from 'react'
import services from "../../utils/services-data.js"

const HomeServices = () => {
  return (
    <div>
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="text-center mb-20">
        <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">OUR EXPERTISE</span>
        <h2 className="text-[32px] sm:text-[42px] font-bold  text-[#04213F] mb-6">Services We Deliver</h2>
        {/* <div className="w-24 h-1 bg-[#9f193f] mx-auto mb-6"></div> */}
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          We provide comprehensive technology solutions tailored to accelerate your business growth
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">Web Development</h3>
          <p className="text-gray-600">
            Custom, responsive websites and web applications built using the latest technologies.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">Mobile App Development</h3>
          <p className="text-gray-600">
            Cross-platform mobile applications for iOS and Android to reach your customers wherever they are.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">Custom Software Development</h3>
          <p className="text-gray-600">
            Tailored software solutions designed to address your specific business challenges.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">UI/UX Design</h3>
          <p className="text-gray-600">
            Beautiful, intuitive interfaces that enhance user experience and drive engagement.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">Cloud Solutions</h3>
          <p className="text-gray-600">
            Scalable cloud infrastructure and migration services for optimal performance and reliability.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 bg-[#9f193f] rounded-full flex items-center justify-center mb-6 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl  text-[#28536B] mb-2">Digital Marketing</h3>
          <p className="text-gray-600">
            Strategic digital marketing campaigns to boost your online presence and drive conversions.
          </p>
        </div>
      </div>
      <div className="text-center mt-16">
        {/* <button className="px-8 py-3 bg-[#9f193f] text-white font-medium rounded-lg hover:bg-[#8a1535] transition-colors shadow-md hover:shadow-lg">
          View All Services
        </button> */}
          {/* <a className="inline-flex justify-center gap-5 whitespace-nowrap  text-sm font-medium text-slate-200 dark:text-slate-800 bg-[#9f193f] dark:hover:bg-slate-100  focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] px-8 py-3 rounded-lg btn-glass-morph shadow-[0_3px_10px_rgb(0,0,0,0.2)]" href="#0">View All Services</a> */}
          <div className="flex items-center justify-center ">
          <PrimaryButton text={"View All Services"}/>
      </div>
      </div>
    </section>
  </div>

  )
}

export default HomeServices







