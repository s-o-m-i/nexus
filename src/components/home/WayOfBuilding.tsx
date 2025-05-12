// "use client"
import React from 'react';
import Image from 'next/image';
import { TiUser } from "react-icons/ti";

const WayOfBuilding = () => {
  return (
    <section className="py-20 md:py-28 min-h-screen px-6 md:px-16 bg-[#9f193f] relative overflow-hidden">
    <div className="card-one bg-[#FFF8EF] rounded-4xl relative p-8">
        <div className="absolute w-[30px] h-[30px] rounded-full top-5 -left-9 bg-[#F3A462]"></div>
        <div className="grid grid-cols-2 gap-8">
            <div className="">
        <h2 className='text-[#04213F]   font-bold text-[52px] leading-[1]'>Build the right team to scale</h2>
        <p className='mt-8 '>   Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term that helps you grow.</p>
        <p className='mt-8 font-bold  text-[#7E1C32]'>Our delivery model helps you cut costs and deliver within budget</p>
        <div className="flex items-center gap-3 mt-4">
            <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-white">
            <TiUser size={"40px"}/>
            </div>
        <h4 className='text-[#04213F]'>James Tolkien</h4>
        </div>
        
            </div>
            <div className="flex flex-col items-center">
                <Image src={"/images/imageOne.png"} alt='' width={300} height={200}/>
            <p className='mt-5 italic font-bold text-[#04213F]'>&quot;Teamwork is key to identify larger problems no individual is&quot; equipped to handle on their own</p>
            </div>
        </div>
    </div>

    <div className="card-two bg-[#FFF8EF] rounded-4xl relative mt-20 p-8">
    <div className="absolute w-[30px] h-[30px] rounded-full top-5 -left-9 bg-[#04213F]"></div>
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center">
                <Image src={"/images/imageTwo.png"} alt='' width={300} height={200}/>
            <p className='mt-5 italic font-bold text-[#04213F] mt-18'>&quot;Software is a great combination of artistry and engineering.Without these systems modern society cannot run.&quot;</p>
            </div>
            <div className="">
        <h2 className='text-[#04213F]   font-bold text-[52px] leading-[1]'>Process-Driven Delivery for Predictable Results</h2>
        <p className='mt-8 '> Success isn&apos;t just about code.It&apos;s about process.Our Agile driven workflows and iterative feedback cycles keep your project on track, on timal and on budget.</p>
        <p className='mt-8 font-bold  text-[#7E1C32]'>We prioritize transparency collaboration and proactive communication.So you always know where your project stands</p>
        <div className="flex items-center gap-3 mt-4">
            <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-white">
            <TiUser size={"40px"}/>
            </div>
        <h4 className='text-[#04213F]'>Jessica Harkins</h4>
        </div>
        
            </div>
        </div>
    </div>

    <div className="card-three bg-[#FFF8EF] rounded-4xl relative mt-20 p-8">
        <div className="absolute w-[30px] h-[30px] rounded-full top-5 -left-9 bg-[#F3A462]"></div>
        <div className="grid grid-cols-2 gap-8">
            <div className="">
        <h2 className='text-[#04213F]   font-bold text-[52px] leading-[1]'>Technology-Driven Innovation</h2>
        <p className='mt-8 '>   We stay at the forefront of technology trends to deliver innovative solutions.Our technical excelllence ensures your software remains scalable,secure,and future-proof.</p>
        <p className='mt-8 font-bold  text-[#7E1C32]'>Our expertise spans modern frameworks, cloud architecture, and emerging technologies that give your business a competitive edge.</p>
        <div className="flex items-center gap-3 mt-4">
            <div className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-white">
            <TiUser size={"40px"}/>
            </div>
        <h4 className='text-[#04213F]'>Marcus Thompson</h4>
        </div>
        
            </div>
            <div className="flex flex-col items-center">
                <Image src={"/images/imageOne.png"} alt='' width={300} height={200}/>
            <p className='mt-5 italic font-bold text-[#04213F]'>&quot;Great teams don&apos;t hold back with one another. They are unafraid to air their dirty laundry, admit their mistakes and weaknesses.&quot;</p>
            </div>
        </div>
    </div>


    </section>
  );
};

export default WayOfBuilding;
