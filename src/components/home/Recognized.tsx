"use client"
import Image from 'next/image'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ClientLogo {
    id: number
    name: string
    score: string
  }
  
  const clientLogos: ClientLogo[] = [
    { id: 1, name: "Boosting Revenue", score: "4X to 8X" },
    { id: 2, name: "Improved Leads", score: "4X to 8X" },
    { id: 3, name: "Boosting Sales", score: "4X to 8X" },
    { id: 4, name: "Boosting Customer Retention", score: "4X to 8X" },
    { id: 5, name: "Brand Exposure", score: "4X to 8X" },
    { id: 6, name: "Customer Loyalty", score: "4X to 8X" },
    { id: 7, name: "Customer Satisfaction", score: "4X to 8X" },
    { id: 8, name: "Customer Retention", score: "4X to 8X" },
    { id: 9, name: "Customer Acquisition", score: "4X to 8X" },
    { id: 10, name: "Brand Awareness", score: "4X to 8X" },
    { id: 11, name: "Customer Engagement", score: "4X to 8X" },
    { id: 12, name: "Social Media Marketing", score: "4X to 8X" },
    { id: 13, name: "Email Marketing", score: "4X to 8X" },
    { id: 14, name: "Search Engine Optimization", score: "4X to 8X" },
  ]

const Recognized = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1280, // for screens smaller than 1280px
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1024, // for screens smaller than 1024px
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 640, // for screens smaller than 640px
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      
  return (
    <>
    <div className='p-4 sm:px-16 py-20'>
      <h2 className='text-[32px] sm:text-[42px] font-bold text-[#2D5C76]'>Recognized by</h2>
      {/* <div className='w-16 h-1 bg-[#9f193f] mx-auto mt-2'></div> */}


      <div className='mt-8'>

      <Slider {...settings}>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/LexisNexis-4.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg p-2'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/inspired-entertainment-inc-logo-vector-1.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg p-2'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/TradeStars-logo-black.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg p-2'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/LexisNexis-4.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg p-2'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/inspired-entertainment-inc-logo-vector-1.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div className='p-4 mx-2'>
          <div className='sm:h-[80px] h-[50px] flex items-center justify-center rounded-md border border-gray-300 bg-white shadow-lg p-2'>
            <div className='relative w-full sm:h-[50px] h-[30px]'>
              <Image src={'/images/recognized/LexisNexis-4.svg'} alt='recognized' fill style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </Slider>
      </div>




    </div>
<div className="overflow-hidden">
      <div className="flex animate-marquee overflow-hidden rotate-x-[100deg] skew-12 whitespace-nowrap  mt-5 py-4">
          {[...Array(1)].map((_, repeat) => (
            <div key={repeat} className="flex space-x-24 pl-24">
              {clientLogos.map((logo) => (
                <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center bg-[#2D5C76]  border border-gray-300 rounded-md rounded-tl-[50px] rounded-br-[50px] py-2 px-4 relative group
                w-[180px] sm:w-[280px] text-center
                ">
                  <div className="text-[#fff] font-bold text-sm sm:text-lg ">{logo.name}

                    <h2 className="text-[#fff] font-bold text-base sm:text-lg text-center">{logo.score}</h2>
                  </div>
                  
                  <div className="absolute -left-14 top-3 h-5 w-5 bg-[#9f193f] rounded-full group-hover:left-0 group-hover:w-full group-hover:h-full -z-1  transition-all duration-300 ease-in-out"> 
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
    </>
  )
}

export default Recognized
