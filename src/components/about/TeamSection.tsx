"use client"

import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { motion } from 'framer-motion'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  linkedin?: string
  twitter?: string
  description?: string
}



const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "M.Suleman",
      position: "Full Stack Developer",
      image: "/images/somi.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 2,
      name: "M.Dawood",
      position: "CEO",
      image: "/images/dawood.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 3,
      name: "M.Sulmean",
      position: "CTO",
      image: "/images/somi.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 4,
      name: "M.Suleman",
      position: "COO",
      image: "/images/somi.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    },
    {
      id: 5,
      name: "Oliver Green",
      position: "Senior Designer",
      image: "/images/somi.png",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
    }
  ]

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          right: '20px',
          top: '-30px',
          zIndex: 1,
          background: '#9F193F',
          padding: '18px',
          borderRadius: '50%',
          color: '#fff',
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          left: '20px',
          top: '-30px',
          zIndex: 1,
          background: '#9F193F',
          padding: '18px',
          borderRadius: '50%',
          color: '#fff',
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  }

  return (
    <section className="py-20 bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-[#9F1940]/10 text-[#9F1940] rounded-full text-sm font-medium mb-4"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#2D5C76] mb-6"
          >
            Meet our team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            These people work to bring you the best product every time
          </motion.p>
        </div>

        <div className="relative px-4 md:px-12">
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="px-4 mb-8"
              >
                <div
                //  className=" rounded-xl overflow-hidden group  border border-gray-300"
                >
                  <div className="relative h-[450px] group overflow-hidden bg-white border border-gray-300 rounded-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-0 right-0  space-x-3">
                        {/* {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#9F1940] transition-colors duration-300"
                          >
                            <FaLinkedinIn size={20} />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#9F1940] transition-colors duration-300"
                          >
                            <FaTwitter size={20} />
                          </a>
                        )} */}
                        <div className="p-2">
                          <h3 className="text-xl font-semibold text-[#fff] mb-1">
                            {member.name}
                          </h3>
                          <p className="text-[#fff]">{member.position}</p>
                          <p className='text-[#fff] text-sm mt-1'>{member.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default TeamSection 