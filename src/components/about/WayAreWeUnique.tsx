import React from 'react'
import StandardCard from '@/ui/StandardCard';
import { Uniqueness } from "../../utils/why-are-unique"

const WayAreWeUnique = () => {
  return (
    <section className="py-20 px-8 md:px-16 bg-[#9F193F]">
      <h2 className='text-[32px] sm:text-[42px] font-bold text-[#fff]  text-center'>Way Are We Unique?</h2>
      {/* <div className="w-24 h-1 mt-6 bg-[#9f193f] mx-auto mb-6"></div> */}
      <div className="flex justify-center">

        <p className='text-base text-[#fff]  sm:w-[75%] mt-5 text-center flex '>We have a unique vision and values guiding us in a specific direction. Our experience and commitment to operational excellence guarantee successful deliveries. But we go beyond creating exceptional solutions –
          we aim to be your trusted business partner in iGaming software development.</p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-16">

        {Uniqueness.map((data: any,index) => {
          return(

            <StandardCard count={index+1} title={data.title} desc={data.description} />
          )

        })}
      </div>


    </section>
  )
}

export default WayAreWeUnique