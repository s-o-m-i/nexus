import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton'
import Image from 'next/image'
import React from 'react'

const CallToAction = ({ desc = "Ready to take your business to the next level with our expert services?" }) => {
  return (
    <div>
      <section className="py-20  bg-white">
        <div className='container mx-auto px-4'>
          <div className="p-[90px] w-full   rounded-2xl   bg-[#F9FAFB] border border-gray-200 shadow transition-shadow hover:shadow-lg relative overflow-hidden">
                 {/* <div className="absolute -bottom-[80%] w-[50px] h-full bg-[#9F1940] rounded-full left-[50%] translate-x-[-50%]
group-hover:w-full group-hover:bottom-0 transition-all duration-300
"></div> */}
            <div className="grid grid-cols-12">
              <div className="col-span-8">

                <h3 className='text-[42px] sm:w-[85%] text-[#04213F] leading-[1.2] group-hover:text-white relative z-10'>{desc}
                </h3>
              </div>
              <div className="col-span-4 flex items-center gap-5 justify-center">
                {/* <button className='flex gap-5 items-center btn-glass-morph btn-shimmer p-4 rounded-xl text-white'>
                        <span>03305870851</span> 
                        <Image src="/icons/callIcon.png" width={20} height={20} alt='' className="relative z-2"/>
                    </button>
                    <button className='flex gap-5 items-center btn-glass-morph p-4 rounded-xl text-white btn-shimmer'>Contact Us</button> */}
                <div className="flex gap-4">
                  <div>
                    <PrimaryButton text='03305870851' />

                  </div>
                  <button className="px-8 py-3  border cursor-pointer hover:scale-105  border-gray-300 text-gray-800 font-medium rounded-lg bg-gray-50 transition-all group overflow-hidden duration-300 text-sm relative">
                    Contact Us
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallToAction
