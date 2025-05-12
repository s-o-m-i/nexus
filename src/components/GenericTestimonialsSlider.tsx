'use client';
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Testimonial = {
  id: number;
  project: string;
  role: string;
  company: string;
  feedback: string;
  logo: string;
};

type GenericTestimonialsSliderProps = {
  title: string;
  testimonials: Testimonial[];
};

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

const GenericTestimonialsSlider: React.FC<GenericTestimonialsSliderProps> = ({
  title,
  testimonials,
}) => {
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

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#04213F] mb-10">
          {title}
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
};

export default GenericTestimonialsSlider;
