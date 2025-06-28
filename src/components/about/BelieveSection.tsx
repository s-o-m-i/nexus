"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const values = [
  {
    title: "People",
    description:
      "They’re the greatest asset that The Software House is built on. We work with them and for them, making sure they feel fulfilled, appreciated, and satisfied.",
      image: "/images/about-page/believe-section/People.jpg"
  },
  {
    title: "Growth",
    description:
      "We value continuous development, learning, and pushing boundaries to stay ahead in the tech world.",
      image: "/images/about-page/believe-section/Growth.jpg"
  },
  {
    title: "Responsibility",
    description:
      "We own our tasks and outcomes. Responsibility drives our commitment to quality and trust.",
      image: "/images/about-page/believe-section/Responsibility.jpg"
  },
  {
    title: "Fulfilment",
    description:
      "Work should bring joy and meaning. We strive to create fulfilling experiences for everyone involved.",
      image: "/images/about-page/believe-section/fulfilment.jpg"
  },
  {
    title: "Fair play",
    description:
      "Honesty, respect, and equity are the foundation of how we work and treat others.",
      image: "/images/about-page/believe-section/fair-play.jpg"
  },
  {
    title: "Openness",
    description:
      "Transparent communication and feedback are key to growth and innovation.",
      image: "/images/about-page/believe-section/openess.jpg"
  },
];

const BelieveSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(activeIndex);
    }
  }, [activeIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => {
      setActiveIndex(next);
    },
  };

  return (
    <section className="bg-[#fff] py-20 px-4 sm:px-8 lg:px-18 container mx-auto relative">
      <div>
        <p className="uppercase text-[#9F193F] font-semibold tracking-wide mb-1 text-sm sm:text-base">
          The values we share
        </p>
        <h2 className="text-[28px] sm:text-[32px] lg:text-[42px] font-bold text-[#111111] mb-10">
          What we believe in
        </h2>

        {/* Title Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-12 mb-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`text-xs sm:text-sm md:text-base font-semibold ${
                  activeIndex === index ? "text-[#9F193F]" : "text-[#04213F]"
                }`}
              >
                {`0${index + 1}`}{" "}
                <span className={activeIndex === index ? "text-[#9F193F]" : ""}>
                  {value.title}
                </span>
              </span>

              <div
                className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded-full mt-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#9F193F] bg-[#111111]"
                    : "border-gray-200"
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <Slider {...settings} ref={sliderRef}>
          {values.map((value, index) => (
            <div key={index}>
              <div className="step-content relative h-auto lg:h-[500px] px-2 sm:px-4">
                <div className="bg-[#111111] absolute right-0 hidden lg:block p-8 w-[60%] h-full rounded-[30px]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center h-full">
                  <div className="lg:col-span-7 relative z-50 bg-about-pattern border-4 border-[#9F193F] h-[200px] sm:h-[300px] lg:h-[400px] w-full rounded-[20px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
                    {/* <h2 className="text-[#EBF2FA] text-[60px] sm:text-[80px] lg:text-[100px] font-bold text-center">
                      {value.title}
                    </h2> */}
                    <Image src={value.image} alt={"believe"} fill/>
                  </div>
                  <div className="lg:col-span-5 z-50 relative px-1 sm:px-2">
                    <h2 className="text-[#fff] text-[24px] sm:text-[28px] lg:text-[32px] font-bold">
                      {value.title}
                    </h2>
                    <p className="text-sm sm:text-base text-white mt-3 sm:mt-5">
                      {value.description}
                    </p>
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

export default BelieveSection;
