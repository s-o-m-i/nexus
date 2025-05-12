"use client";
import React, { useRef } from 'react';
import { AboutCompanyData } from "../../utils/about-company";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutCompany = () => {
    const container = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
          gsap.from(".card-left", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#about-company",
              start: "top 0%",
              end: "top -50%",
              scrub: 1,
              markers: true,
            },
            stagger: 0.3,
          });
      
          gsap.from(".card-right", {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "#about-company",
              start: "top 0%",
              end: "top -50%",
              scrub: 1,
              markers: true,
            },
            stagger: 0.3,
          });
        }, container);
      
        return () => ctx.revert();
      }, []);
      

    return (
        <div ref={container}>
            <section id="about-company" className="py-20 px-8 md:px-16 bg-white overflow-hidden">
                <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">About Company</h2>
                <p className="text-base text-gray-600 mt-5 text-center">
                    At LLC, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation...
                </p>
                <div className="list pt-[80px]">
                    <div className="grid grid-cols-2 gap-5 overflow-hidden">
                        {AboutCompanyData.map((data, index) => (
                            <div
                                key={index}
                                className={`card ${index % 2 === 0 ? "card-left" : "card-right"
                                    } bg-gray-50 p-8 rounded-tl-4xl rounded-tr-md rounded-bl-md rounded-br-4xl shadow-sm hover:shadow-md transition-shadow border-[#9F1940] border-l-4`}
                            >
                                <h3 className="text-[20px] text-[#28536B]">{data.title}</h3>
                                <p className="text-[14px] mt-5 text-gray-600">{data.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutCompany;
