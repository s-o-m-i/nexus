"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import BookLottie from "../../utils/book-lottie.json"

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-[500px] h-[500px] bg-gray-100 rounded-lg animate-pulse" />
});

const OurStory = () => {
    return (
        <>
            <section className="py-20 px-8 md:px-16 bg-white">
                <h2 className='text-[32px] sm:text-[42px] font-bold text-[#04213F]  text-center'>Our Story</h2>
                {/* <div className="w-24 h-1 mt-3    bg-[#9f193f] mx-auto mb-6"></div> */}
                {/* <div className="flex justify-center">
                    <p className='text-base text-gray-600  mt-5 text-center sm:w-[75%]'>At LLC, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                </div> */}
                <div className="grid grid-cols-2 mt-20 gap-8">
                    <div className="bg-pattern bg-[#7E1C32] rounded-lg flex items-center justify-center">
                        <div className="w-[500px]">
                            <Lottie 
                                animationData={BookLottie} 
                                loop={true} 
                            />
                        </div>
                    </div>
                    <div className="">
                        <h2 className='text-[32px] font-bold text-[#04213F]'>Every line of code started with a dream.</h2>
                        <p className='text-gray-700 mt-5'>Founded in 2021, our software house began in a small apartment with a whiteboard full of ideas and a team of three friends who believed that technology should do more than work — it should inspire. With nothing but laptops, long nights, and an unshakable drive, we built our first custom app for a local business, and from that moment on, there was no looking back.</p>
                        <p className='text-gray-700 mt-5'>Over the next few years, we evolved from a passion project into a full-fledged digital partner, delivering solutions across e-commerce, SaaS, and enterprise tools. With each project, we refined our craft, expanded our team, and earned trust through transparency, reliability, and results.</p>
                        <p className='text-gray-700 mt-5'>Now, we&apos;re on a mission to help startups and businesses unlock their full potential through intuitive, scalable, and beautifully engineered software. And while the tools and technologies may change, our purpose remains the same: to create with care, code with purpose, and build with heart.</p>
                        <p className='text-[#7E1C32] text-sm font-bold mt-5 italic'>&ldquo;We didn&apos;t wait for the future to arrive — we built it, one pixel at a time.&rdquo;</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStory