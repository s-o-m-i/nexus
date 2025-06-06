import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const CallToAction = ({ desc = "Ready to take your business to the next level with our expert services?" }) => {
  return (
    <section className="py-10 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="p-4 sm:p-[90px] w-full rounded-2xl bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-8 sm:gap-y-0 items-center">
            {/* Left Text */}
            <div className="sm:col-span-8">
              <h3 className="text-[26px] sm:text-[42px] text-[#04213F] leading-[1.2] sm:w-[85%]">
                {desc}
              </h3>
            </div>

            {/* Right Buttons */}
            <div className="sm:col-span-4 flex  items-center justify-start sm:justify-center gap-4">
              <PrimaryButton text="03305870851" />
              <button className="px-8 py-3 border border-gray-300 text-gray-800 font-medium rounded-lg bg-gray-50 transition-all hover:scale-105 text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
