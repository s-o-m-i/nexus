"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-12 !h-12 bg-[#1a1a1a] !shadow-lg hover:!shadow-xl !rounded-full !border !border-gray-700 text-white transition-all duration-300 hover:!bg-[#9F193F] hover:!text-white`}
      style={{  right: "0", top: "-70px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow({ className, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-12 !h-12 !bg-[#1a1a1a] !shadow-lg hover:!shadow-xl !rounded-full !border !border-gray-700 text-white transition-all duration-300 hover:!bg-[#9F193F] hover:!text-white`}
      style={{ left: "auto", right: "70px", top: "-70px", zIndex: 10 }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

interface Testimonial {
  id: number;
  project: string;
  role: string;
  company: string;
  feedback: string;
  logo: string;
  author?: string;
}

function TestimonialsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      project: "Football Training Platform",
      role: "Co-Founder",
      company: "Better Footballer",
      author: "James Wilson",
      feedback:
        "The most impressive aspects of their work were the level of technical expertise and ability to understand the project from a business perspective.",
      logo: "/images/womenThree.jpg",
    },
    {
      id: 2,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      author: "Sarah Johnson",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/womenTwo.jpg",
    },
    {
      id: 3,
      project: "Healthcare Platform",
      role: "CTO",
      company: "MediTech",
      author: "David Chen",
      feedback:
        "The team delivered a robust solution that exceeded our expectations. Their technical knowledge and commitment to quality were exceptional.",
      logo: "/images/womenOne.jpg",
    },
    {
      id: 4,
      project: "Financial Services App",
      role: "CEO",
      company: "FinEdge",
      author: "Michael Thompson",
      feedback:
        "We've worked with many developers, but none have matched the combination of technical skill and business acumen that this team brings.",
      logo: "/images/menOne.jpg",
    },
    {
      id: 5,
      project: "Educational Platform",
      role: "Director",
      company: "LearnWave",
      author: "Emily Rodriguez",
      feedback:
        "Their ability to translate our vision into a functional, beautiful platform was remarkable. The final product has received overwhelmingly positive feedback.",
      logo: "/images/menTwo.jpg",
    },
    {
      id: 6,
      project: "Real Estate Marketplace",
      role: "Head of Product",
      company: "HomeFind",
      author: "Robert Taylor",
      feedback:
        "The development team's attention to detail and proactive problem-solving saved us time and resources. They were truly partners in our success.",
      logo: "/images/menThree.jpg",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] py-24 overflow-hidden relative">
      {/* Background decorative elements for dark theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#9f193f]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-18 relative z-10">
        <div className="mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f]/20 to-[#c42155]/20 px-6 py-2 rounded-full mb-6 border border-[#9f193f]/30">
              <div className="w-2 h-2 bg-[#9f193f] rounded-full"></div>
              <span className="text-[#9f193f] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <div className="w-2 h-2 bg-[#9f193f] rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f193f] to-[#c42155]">
                Clients Say
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9f193f] to-[#c42155] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-0 sm:px-4 py-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: testimonial.id * 0.1 % 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#1a1a1a]/80 backdrop-blur-sm border border-l-4 py-4 border-l-[#9F193F] border-gray-700 rounded-xl shadow-2xl hover:shadow-3xl transition-all rounded-tl-[50px] rounded-br-[50px] duration-300 overflow-hidden h-full group hover:bg-[#1a1a1a]"
                >
                  <div className="p-6">
                    <div className="flex space-x-1 text-amber-400 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="flex items-start mb-6">
                      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">&quot;{testimonial.feedback}&quot;</p>
                    </div>

                    <div className="flex gap-5 items-center">
                      <div className="bg-[#9F193F] rounded-full flex items-center justify-center overflow-hidden w-12 h-12 shadow-lg">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-700 pt-4 flex-1">
                        <div>
                          <p className="font-semibold text-white">{testimonial.author}</p>
                          <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
          
          {/* <div className="flex justify-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/services" className="px-8 py-4 border border-[#9f193f]/30 text-white font-medium rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm hover:bg-[#9f193f] hover:border-[#9f193f] transition-all duration-300 shadow-lg hover:shadow-xl">
                Read More Success Stories
              </Link>
            </motion.div>
          </div> */}
        </div>
      </div>

      <style jsx global>{`
        .testimonials-slider .slick-track {
          display: flex !important;
        }
        .testimonials-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        .testimonials-slider .slick-slide > div {
          display: flex;
          height: 100%;
          width: 100%;
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSlider;
