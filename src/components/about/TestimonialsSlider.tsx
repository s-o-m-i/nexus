"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",alignItems:"center",justifyContent:"center", right: "20px",top:"-30px", zIndex: 1,color:"#9F193F",background:"#9F193F",padding:"18px",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",alignItems:"center",justifyContent:"center", left: "20px",top:"-30px", zIndex: 1,color:"#9F193F",background:"#9F193F",padding:"18px",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      project: "Football Training Platform",
      role: "Co-Founder",
      company: "Better Footballer",
      feedback:
        "The most impressive aspects of their work were the level of technical expertise and ability to understand the project from a business perspective.",
      logo: "/images/somi.png", // Replace with actual logo path
    },
    {
      id: 2,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    {
      id: 3,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    {
      id: 4,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    {
      id: 5,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    {
      id: 6,
      project: "E-commerce App",
      role: "Product Owner",
      company: "Shopsy",
      feedback:
        "Their responsiveness and attention to our needs made the development process seamless and efficient.",
      logo: "/images/somi.png",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="w-full bg-[#fff] py-16 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#04213F] mb-10">
          Clients’ Feedback
        </h2>
        <Slider {...settings}>
          {testimonials.map(({ id, project, role, company, feedback, logo }) => (
            <div key={id} className="px-3">
              <div className="bg-white min-h-[300px] rounded-lg shadow-lg p-6 border border-[#9F193F] flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[#04213F] font-semibold">{project}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="text-[#04213F] text-base mb-6">“{feedback}”</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1 text-[#9F193F]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="text-[#9F193F] font-semibold text-sm text-right">
                    {company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
