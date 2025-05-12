"use client";
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const AboutHero = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-desc", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-buttons", {
        y: 50,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={container}
      className="bg-pattern grid grid-cols-1 md:grid-cols-2 py-20 px-8 md:px-16 h-auto relative rounded-t-md"
    >
      <div className="flex flex-col justify-center">
        <h1 className="hero-title text-[42px] leading-[1.3] font-bold text-white mb-6">
          Transforming Visions into Digital Excellence
        </h1>
        <p className="hero-desc text-[16px] text-white mb-10 max-w-[75%]">
          We are a software house dedicated to delivering innovative and reliable
          technology solutions. Our expert team is driven by a passion for solving
          complex challenges, leveraging the latest advancements to help businesses
          succeed.
        </p>
        <div className="hero-buttons flex items-center gap-5">
          <PrimaryButton text="Get Consultation" />
          <Button />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 md:mt-0">
        <Image
          width={400}
          height={400}
          src="/images/developer.png"
          className="hero-image"
          alt="about us"
        />
      </div>
    </section>
  );
};

export default AboutHero;
