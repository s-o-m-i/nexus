"use client"
import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';

interface ArrowProps {
    onClick?: () => void;
    className?: string;
}

// Enhanced custom arrow components for dark theme
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-[#1a1a1a] hover:shadow-2xl transition-all duration-300 group border border-gray-700"
            aria-label="Previous"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 group-hover:text-[#9f193f] transition-colors duration-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                />
            </svg>
        </button>
    );
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-[#1a1a1a]/90 backdrop-blur-sm p-4 rounded-full shadow-xl hover:bg-[#1a1a1a] hover:shadow-2xl transition-all duration-300 group border border-gray-700"
            aria-label="Next"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 group-hover:text-[#9f193f] transition-colors duration-300"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
            </svg>
        </button>
    );
};

const Recognized = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ position: 'relative', bottom: '-40px' }}>
                <ul className="flex justify-center items-center gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: () => (
            <button className="w-3 h-3 rounded-full bg-gray-600 hover:bg-[#9f193f] transition-all duration-300 focus:outline-none slick-custom-dot"></button>
        ),
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }
        ]
    };

    const partnerLogos = [
        '/images/RecoganizedBy/baseval.webp',
        '/images/RecoganizedBy/bontac_logo.jpeg',
        '/images/RecoganizedBy/boyiprinting.png',
        '/images/RecoganizedBy/changency.jpeg',
        '/images/RecoganizedBy/Eidcarosse.webp',
        '/images/RecoganizedBy/senotay.webp',
        '/images/RecoganizedBy/jiancloud.png',
        '/images/RecoganizedBy/nicecloud.png',
        '/images/RecoganizedBy/pb-patch.webp',
        '/images/RecoganizedBy/qitcoin.png',
        '/images/RecoganizedBy/saasbyt.png',
        '/images/RecoganizedBy/sapphirering.png',
        '/images/RecoganizedBy/siholamoon.webp',
        '/images/RecoganizedBy/startem.io.jpg',
        '/images/RecoganizedBy/startupbyt.svg',
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] relative overflow-hidden">
            {/* Background decorative elements for dark theme */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#9f193f]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#9f193f]/5 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Enhanced Header Section - Dark Theme */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f]/20 to-[#c42155]/20 px-6 py-2 rounded-full mb-6 border border-[#9f193f]/30">
                        <div className="w-2 h-2 bg-[#9f193f] rounded-full"></div>
                        <span className="text-[#9f193f] font-semibold text-sm uppercase tracking-wider">Trusted Partners</span>
                        <div className="w-2 h-2 bg-[#9f193f] rounded-full"></div>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Recognized by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f193f] to-[#c42155]">
                            Industry Leaders
                        </span>
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-[#9f193f] to-[#c42155] mx-auto mb-8 rounded-full"></div>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Trusted by innovative companies worldwide to deliver exceptional digital solutions 
                        that drive growth and transformation
                    </p>
                </motion.div>

                {/* Enhanced Logo Slider - Dark Theme */}
                <motion.div 
                    className="mb-20 relative px-12 custom-slider"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <style jsx>{`
                        .custom-slider :global(.slick-dots) {
                            bottom: -50px;
                        }
                        .custom-slider :global(.slick-dots li) {
                            margin: 0 6px;
                        }
                        .custom-slider :global(.slick-dots li.slick-active button) {
                            background: linear-gradient(135deg, #9f193f, #c42155);
                            width: 12px;
                            height: 12px;
                            transform: scale(1.2);
                        }
                        .custom-slider :global(.slick-dots li button:before) {
                            display: none;
                        }
                        .custom-slider :global(.slick-track) {
                            display: flex;
                            align-items: center;
                        }
                        .custom-slider :global(.slick-slide) {
                            height: auto;
                        }
                    `}</style>
                    
                    <Slider {...settings}>
                        {partnerLogos.map((src, index) => (
                            <div key={index} className="px-3">
                                <motion.div 
                                    className="bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-6 h-28 flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-[#1a1a1a] hover:shadow-2xl border border-gray-700/50 hover:border-[#9f193f]/30 group"
                                    whileHover={{ 
                                        y: -5,
                                        boxShadow: "0 25px 50px -12px rgba(159, 25, 63, 0.25)"
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={src}
                                            alt={`Partner company ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                            className="opacity-80 group-hover:opacity-100 transition-all duration-300 filter group-hover:brightness-125"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>

                {/* Enhanced Stats Section - Dark Theme */}
                {/* <motion.div 
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-800/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f]/20 to-[#c42155]/20 px-4 py-2 rounded-full mb-4 border border-[#9f193f]/30">
                            <span className="text-[#9f193f] font-semibold text-sm">Our Impact</span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Delivering Results That Matter
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#9f193f] to-[#c42155] mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "120+", label: "Projects Delivered", icon: "🚀" },
                            { number: "98%", label: "Client Satisfaction", icon: "⭐" },
                            { number: "50+", label: "Tech Experts", icon: "👨‍💻" },
                            { number: "200%", label: "Avg. Client ROI", icon: "📈" }
                        ].map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-[#9f193f] to-[#c42155] bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 font-medium text-sm sm:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default Recognized;
