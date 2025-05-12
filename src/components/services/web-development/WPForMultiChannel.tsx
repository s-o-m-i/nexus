import Image from 'next/image'
import React from 'react'

const WPForMultiChannel = () => {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-md">
          <Image
            alt="web-development"
            src="/images/web-development-first.webp"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#04213F] leading-tight">
            Web Development for <span className="text-[#9F1940]">Multi-Channel</span> Visibility
          </h3>

          <p className="text-gray-700 text-base mt-6 leading-relaxed">
            A website or web app is built to facilitate user engagement. Our web development services help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. 
          </p>

          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            For further efficiency, we leverage threat resistance, tested architectures, continuous maintenance, and custom CMS solutions tailored to your business goals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WPForMultiChannel
