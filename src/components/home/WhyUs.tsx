import Image from 'next/image';
import React from 'react';

interface ClientLogo {
  id: number
  name: string
}

const clientLogos: ClientLogo[] = [
  { id: 1, name: "App Development" },
  { id: 2, name: "Web Development" },
  { id: 3, name: "UI/UX Design" },
  { id: 4, name: "Digital Marketing" },
  { id: 5, name: "SEO Services" },
  { id: 6, name: "Content Writing" },
  { id: 7, name: "Wireframe" },
  { id: 8, name: "Prototyping" },
  { id: 9, name: "Branding" },
  { id: 10, name: "Graphic Design" },
  { id: 11, name: "Video Production" },
  { id: 12, name: "Social Media Marketing" },
  { id: 13, name: "Email Marketing" },
  { id: 14, name: "Search Engine Optimization" },
]

const WhyUs = () => {
  const reasons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#9f193f] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Excellence in Delivery",
      description: "Our proven track record of delivering high-quality solutions on time and within budget sets us apart from the competition.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#9f193f] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Our talented developers, designers, and strategists bring years of industry experience to every project we undertake.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#9f193f] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to build scalable, future-proof solutions for our clients.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#9f193f] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "We understand the importance of time-to-market, ensuring your projects are completed on schedule without compromising quality.",
    },
  ];

  return (
    <>
    <section className="py-16 md:py-24 px-6 md:px-20  rounded-[50px]">
      <div className="grid md:grid-cols-2 gap-10  ">
        {/* Left Side */}
        <div className="">
          <div className='bg-[#9f193f] flex justify-center  rounded-4xl h-full'>
            <Image src="/images/whychooseus2.png" width={400} height={400} alt="Why Choose Us" className="object-contain " />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-3xl sm:text-4xl  text-[#111111] font-bold mb-4">Why Choose Us</h2>
          <p className=" mb-10">
            Take your businesses and organizations to another level by taking our development and design services by adding automatic and easy user experiences to your existing structures and new start-ups.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-5  relative transition-colors duration-300 shadow-sm overflow-hidden"
              >
                <div className="absolute group-hover:w-[100%] transition-all duration-300 ease-in-out group-hover:rounded-[0px] group-hover:h-full w-[50px] rounded-[50%] z-[1px] top-0 right-0 h-[50px] bg-[#9f193f]"></div>
                <div className="mb-4 relative">{reason.icon}</div>
                <h4 className="font-semibold text-[#111111]  relative text-lg mb-2 group-hover:text-white">{reason.title}</h4>
                <p className="text-sm relative group-hover:text-white">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      <div className="relative overflow-hidden ">
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#f8f9ff] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#f8f9ff] to-transparent z-10"></div>
        <div className="flex animate-marquee overflow-hidden rotate-x-[100deg] skew-12 whitespace-nowrap bg-[#9f193f] mt-20 py-4">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex space-x-24 pl-24">
              {clientLogos.map((logo) => (
                <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                  <div className="text-white font-bold text-xl">{logo.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex  animate-marquee-reverse overflow-hidden whitespace-nowrap bg-[#111111] py-2">
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="flex space-x-24 pl-24">
                {clientLogos.map((logo) => (
                  <div key={`${repeat}-${logo.id}`} className="flex items-center justify-center">
                    <div className="text-white font-bold text-xl">{logo.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
      </div>
      </>
  );
};

export default WhyUs;
