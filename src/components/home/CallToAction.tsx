import Image from 'next/image'
import React from 'react'

const CallToAction = ({desc = "Ready to take your business to the next level with our expert services?"}) => {
  return (
    <div>
      <section className="py-20 px-8 md:px-16 bg-white">
        <div className="p-[90px] rounded-[16px] bg-[#9f193f]">
          <div className="grid grid-cols-12">
            <div className="col-span-8">

              <h3 className='text-[42px] text-white leading-[63px]'>{desc}
              </h3>
            </div>
            <div className="col-span-4 flex items-center gap-5">
              {/* <button className='flex gap-5 items-center btn-glass-morph btn-shimmer p-4 rounded-xl text-white'>
                        <span>03305870851</span> 
                        <Image src="/icons/callIcon.png" width={20} height={20} alt='' className="relative z-2"/>
                    </button>
                    <button className='flex gap-5 items-center btn-glass-morph p-4 rounded-xl text-white btn-shimmer'>Contact Us</button> */}
              <div className="flex gap-4">
                <div>
                  <a className="inline-flex justify-center gap-5 whitespace-nowrap px-3.5 text-sm font-medium text-slate-200 dark:text-slate-800 bg-[#9f193f] dark:hover:bg-slate-100  focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] p-4 py-4 rounded-xl btn-glass-morph transition-all ease-in-out hover:scale-[1.1] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" href="#0">
                    <span>03305870851</span>
                    <Image src="/icons/callIcon.png" width={15} height={15} alt='' className="relative z-2" />
                  </a>

                </div>
                <div className="dark">
                  <a className="inline-flex justify-center gap-5 whitespace-nowrap px-3.5 text-sm font-medium text-slate-200 dark:text-white bg-[#9f193f] dark:hover:bg-slate-100  focus:outline-none focus:ring focus:ring-slate-500/50 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-500/50 relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.5)_50%,transparent_75%,transparent_100%)] dark:before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms] p-4 py-4 rounded-xl btn-glass-morph transition-all ease-in-out hover:scale-[1.1] shadow-[0_3px_10px_rgb(0,0,0,0.2)]" href="#0">
                    Contact Us
                  </a>
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
