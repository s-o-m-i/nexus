import React from 'react'

const InfiniteSliders = () => {

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
  return (
    <div>
         <div className="overflow-hidden">
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
      
    </div>
  )
}

export default InfiniteSliders
