"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const PrevArrow = ({ onClick }: any) => (
  <button
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100"
    onClick={onClick}
  >
    ←
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 p-2 rounded-full shadow hover:bg-gray-100"
    onClick={onClick}
  >
    →
  </button>
);

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Working with this team has been transformative...",
      rating: 5,
      company: "TechInnovate",
      logo: "/images/company-logo1.png",
    },
    {
      id: 2,
      name: "David Chen",
      position: "Marketing Director, GlobalRetail",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The e-commerce platform they developed for us...",
      rating: 5,
      company: "GlobalRetail",
      logo: "/images/company-logo2.png",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Their expertise in healthcare technology...",
      rating: 5,
      company: "HealthTech",
      logo: "/images/company-logo3.png",
    },
    {
      id: 4,
      name: "Michael Thompson",
      position: "Founder, FinanceHub",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "The custom financial dashboard they created...",
      rating: 5,
      company: "FinanceHub",
      logo: "/images/company-logo4.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#f8f8f8] py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#28536B] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our clients say.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((t) => (
              <div key={t.id}>
                <div className="bg-white rounded-xl p-8 shadow-xl max-w-5xl mx-auto text-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
                  <h3 className="text-lg font-semibold text-[#9f193f]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.position}</p>
                  {t.logo && (
                    <img
                      src={t.logo}
                      alt={`${t.company} logo`}
                      className="mx-auto mt-4 h-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              onClick={() => sliderRef.current?.slickGoTo(index)}
              className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
                activeSlide === index ? "border-[#9f193f]" : "border-transparent"
              } transition-all duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <img
                src={t.image}
                alt={t.name}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
