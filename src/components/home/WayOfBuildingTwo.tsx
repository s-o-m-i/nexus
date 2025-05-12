import Image from 'next/image'
import React from 'react'

const WayOfBuildingTwo = () => {
  return (
    <div>
       <section className="py-16 md:py-24 px-6 md:px-16 bg-[#]">
          {/* Header */}
          <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">Way of building</span>
          {/* <p className="text-[#9f193f] font-medium mb-2">Way of building</p> */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-4">Great Software</h2>
        </div>
        <div className="grid grid-cols-2">
            <div className="flex gap-5">
                <h2 className='text-[32px] sm:text-[52px] '>01</h2>
                <div className="bg-[#f8f8f8] mt-8 p-4 border-l-4 border-[#9f193f]  w-[400px] h-[130px]">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Teamwork is key to identify larger problems with no individual is equipped to handle on their own.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                      src="/images/wayofprocessOne.png" 
                      alt="James Tolkien" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EJT%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">James Tolkien</p>
                </div>
              </div>
            </div>
            <div className="pt-20">
                <h2 className='text-[24px]'>Build the right team to scale</h2>
                <p className="text-gray-700 mt-5 text-lg">
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term that helps you grow.
              </p>
            </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
        
            <div className="pt-20">
                <h2 className='text-[24px]'>Build the right team to scale</h2>
                <p className="text-gray-700 mt-5 text-lg">
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term that helps you grow.
              </p>
            </div>
            <div className="flex gap-5">
                <h2 className='text-[32px] sm:text-[52px] '>02</h2>
                <div className="bg-[#f8f8f8] mt-8 p-4 border-l-4 border-[#9f193f]  w-[400px] h-[130px]">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Teamwork is key to identify larger problems with no individual is equipped to handle on their own.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                      src="/images/wayofprocessOne.png" 
                      alt="James Tolkien" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EJT%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">James Tolkien</p>
                </div>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-2 mt-20">
            <div className="flex gap-5">
                <h2 className='text-[32px] sm:text-[52px] '>03</h2>
                <div className="bg-[#f8f8f8] mt-8 p-4 border-l-4 border-[#9f193f]  w-[400px] h-[130px]">
                <p className="text-gray-700 italic text-sm">
                  &ldquo;Teamwork is key to identify larger problems with no individual is equipped to handle on their own.&rdquo;
                </p>
                
                {/* User Info */}
                <div className="flex items-center mt-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-300 mr-3">
                    <Image 
                      src="/images/wayofprocessOne.png" 
                      alt="James Tolkien" 
                      width={32} 
                      height={32} 
                      className="h-full w-full object-cover"
                    //   onError={(e) => {
                    //     const target = e.target as HTMLImageElement;
                    //     target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23cccccc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' dominant-baseline='middle' fill='%23666666'%3EJT%3C/text%3E%3C/svg%3E";
                    //   }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">James Tolkien</p>
                </div>
              </div>
            </div>
            <div className="pt-20">
                <h2 className='text-[24px]'>Build the right team to scale</h2>
                <p className="text-gray-700 mt-5 text-lg">
                Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term that helps you grow.
              </p>
            </div>
        </div>

       </section>
    </div>
  )
}

export default WayOfBuildingTwo
