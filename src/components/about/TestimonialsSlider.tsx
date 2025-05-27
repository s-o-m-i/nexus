"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-12 !h-12 !bg-white !shadow-lg hover:!shadow-xl !rounded-full !border !border-gray-100 !text-[#9F193F] transition-all duration-300 hover:!bg-[#9F193F]/5`}
      style={{ ...style, right: "0", top: "-70px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} !flex !items-center !justify-center !w-12 !h-12 !bg-white !shadow-lg hover:!shadow-xl !rounded-full !border !border-gray-100 !text-[#9F193F] transition-all duration-300 hover:!bg-[#9F193F]/5`}
      style={{ ...style, left: "auto", right: "70px", top: "-70px", zIndex: 10 }}
      onClick={onClick}
    />
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
    slidesToShow: 3,
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
      logo: "/images/somi.png",
    },
    {
      id: 2,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      author: "Sarah Johnson",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    {
      id: 3,
      project: "Healthcare Platform",
      role: "CTO",
      company: "MediTech",
      author: "David Chen",
      feedback:
        "The team delivered a robust solution that exceeded our expectations. Their technical knowledge and commitment to quality were exceptional.",
      logo: "/images/somi.png",
    },
    {
      id: 4,
      project: "Financial Services App",
      role: "CEO",
      company: "FinEdge",
      author: "Michael Thompson",
      feedback:
        "We've worked with many developers, but none have matched the combination of technical skill and business acumen that this team brings.",
      logo: "/images/somi.png",
    },
    {
      id: 5,
      project: "Educational Platform",
      role: "Director",
      company: "LearnWave",
      author: "Emily Rodriguez",
      feedback:
        "Their ability to translate our vision into a functional, beautiful platform was remarkable. The final product has received overwhelmingly positive feedback.",
      logo: "/images/somi.png",
    },
    {
      id: 6,
      project: "Real Estate Marketplace",
      role: "Head of Product",
      company: "HomeFind",
      author: "Robert Taylor",
      feedback:
        "The development team's attention to detail and proactive problem-solving saved us time and resources. They were truly partners in our success.",
      logo: "/images/somi.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9f9ff] py-24 overflow-hidden">
      <div className="container mx-auto px-18">
        <div className="mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium px-4 py-1.5 bg-[#9F193F]/10 text-[#9F193F] rounded-full mb-4">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
            </p>
          </motion.div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#9F193F]/5 rounded-full -z-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#28536B]/5 rounded-full -z-10 blur-3xl"></div>
        </div>
        
        <div className="relative">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 py-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: testimonial.id * 0.1 % 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="text-[#9F193F] text-2xl mr-4">
                        <FaQuoteLeft />
                      </div>
                      <p className="text-gray-700 leading-relaxed">&quot;{testimonial.feedback}&quot;</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                      
                      <div className="flex space-x-1 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#9F193F]">{testimonial.project}</span>
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#9F193F] text-white font-medium rounded-lg hover:bg-[#8a1537] transition-colors"
          >
            Read More Success Stories
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
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
