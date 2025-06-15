'use client';
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion} from "framer-motion";
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
        <h2 className="text-[32px] sm:text-[42px] font-bold text-center text-[#04213F] mb-10">
          {title}
        </h2>
        <Slider {...settings}>
          {testimonials.map(({ id, project, role, company, feedback, logo }) => (
        < div key={id} className="p-0 sm:px-4 py-2">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: id * 0.1 % 0.5 }}
           whileHover={{ y: -5 }}
           className="bg-gray-50 border border-l-4 py-4 border-l-[#9F193F] border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all rounded-tl-[50px] rounded-br-[50px] duration-300 overflow-hidden h-[300px]"
         >

           <div className="p-4">
             <div className="flex space-x-1 text-amber-400 mb-5">
               {[...Array(5)].map((_, i) => (
                 <FaStar key={i} />
               ))}
             </div>
             <div className="flex items-start mb-6">
               {/* <div className="text-[#9F193F] text-2xl mr-4">
                 <FaQuoteLeft />
               </div> */}
               <p className="text-gray-700 leading-relaxed">&quot;{feedback}&quot;</p>
             </div>

             <div className="flex gap-5 items-center ">
               <div className="bg-[#9F193F] rounded-full flex items-center justify-center overflow-hidden w-10 h-10">

                 <img
                   src={logo}
                   alt={`${company} logo`}
                   className="w-full h-ful object-contain"
                 />
               </div>

               <div className="flex items-center justify-between  border-t border-gray-100">
                 <div>
                   <p className="font-semibold text-gray-900">{project}</p>
                   <p className="text-sm text-gray-500">{role}, {company}</p>
                 </div>
               </div>
             </div>

           </div>


         </motion.div>
       </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default GenericTestimonialsSlider;
