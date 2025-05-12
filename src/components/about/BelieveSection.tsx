"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const values = [
  {
    title: "People",
    description:
      "They’re the greatest asset that The Software House is built on. We work with them and for them, making sure they feel fulfilled, appreciated, and satisfied.",
  },
  {
    title: "Growth",
    description:
      "We value continuous development, learning, and pushing boundaries to stay ahead in the tech world.",
  },
  {
    title: "Responsibility",
    description:
      "We own our tasks and outcomes. Responsibility drives our commitment to quality and trust.",
  },
  {
    title: "Fulfilment",
    description:
      "Work should bring joy and meaning. We strive to create fulfilling experiences for everyone involved.",
  },
  {
    title: "Fair play",
    description:
      "Honesty, respect, and equity are the foundation of how we work and treat others.",
  },
  {
    title: "Openness",
    description:
      "Transparent communication and feedback are key to growth and innovation.",
  },
];

const BelieveSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // Move slider to active index when it changes
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
      setActiveIndex(next); // Also update activeIndex when user swipes
    },
  };

  return (
    <section className="bg-[#fff] py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-[#9F193F] font-semibold tracking-wide mb-1 text-base">
          The values we share
        </p>
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-10">
          What we believe in
        </h2>

        {/* Title Selector */}
        <div className="grid grid-cols-6 gap-6 md:gap-12 mb-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <span
                className={`text-sm md:text-base font-semibold ${
                  activeIndex === index ? "text-[#9F193F]" : "text-[#04213F]"
                }`}
              >
                {`0${index + 1}`}{" "}
                <span className={`${activeIndex === index ? "text-[#9F193F]" : ""}`}>
                  {value.title}
                </span>
              </span>

              <div
                className={`w-6 h-6 border-2 rounded-full mt-2 transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#9F193F] bg-[#04213F]"
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
              <div className="step-content relative h-[500px] px-4">
                <div className="bg-[#F3F7FB] absolute right-0 p-8 w-[60%] h-full rounded-[30px] flex items-center"></div>

                <div className="grid grid-cols-12 h-full items-center gap-8">
                  <div className="col-span-7 z-50 relative bg-about-pattern border-1 border-[#9F193F]/[0.5] h-[400px] w-full rounded-[30px]">
                    <h2 className="text-[#EBF2FA] whitespace-nowrap text-[100px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold">
                      {value.title}
                    </h2>
                  </div>
                  <div className="col-span-5 z-50 relative">
                    <h2 className="text-[#04213F] text-[32px] font-bold">
                      {value.title}
                    </h2>
                    <p className="text-base text-gray-700 mt-5">{value.description}</p>
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
