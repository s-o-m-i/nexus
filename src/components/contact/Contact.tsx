"use client"
// ContactPage.tsx
import React from "react";
import GlassCard from "./GlassCard";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  MdWorkOutline,
  MdHandshake,
  MdSupportAgent,
  MdFeedback,
  MdGroups,
  MdEmojiPeople,
  MdHelpOutline,
  MdRocketLaunch,
  MdAttachMoney
} from "react-icons/md";
import Image from "next/image";
import Map from "../map/Map";

const tags = [
  { title: "#Project Inquiry", icon: <MdWorkOutline size={20} color="#fff" />, top: "10%", left: "20%", color: "#fff" },
  { title: "#Collaboration", icon: <MdHandshake size={20} color="#fff" />, top: "25%", left: "60%", color: "#fff" },
  { title: "#Support", icon: <MdSupportAgent size={20} color="#fff" />, top: "40%", left: "15%", color: "#fff" },
  { title: "#Feedback", icon: <MdFeedback size={20} color="#fff" />, top: "55%", left: "50%", color: "#fff" },
  { title: "#Partnership", icon: <MdGroups size={20} color="#fff" />, top: "70%", left: "25%", color: "#fff" },
  { title: "#Just Saying Hi", icon: <MdEmojiPeople size={20} color="#fff" />, top: "20%", left: "75%", color: "#fff" },
  { title: "#Got a Question", icon: <MdHelpOutline size={20} color="#fff" />, top: "35%", left: "35%", color: "#fff" },
  { title: "#Ready to Start", icon: <MdRocketLaunch size={20} color="#fff" />, top: "60%", left: "70%", color: "#fff" },
  { title: "#Looking for a Quote", icon: <MdAttachMoney size={20} color="#fff" />, top: "80%", left: "45%", color: "#fff" },
];

const Contact = () => {
  const leftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-[#8B003D]/5 min-h-screen px-4 mb-5">

      <div className="bg-[#9F1940] rounded-4xl min-h-[calc(100vh-100px)] px-4 sm:px-12 pt-8 sm:pt-4 pb-20">
        <div className="relative h-[300px] hidden sm:block">
          <h2 className="text-[32px] sm:text-[152px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-[#ddd]/50 whitespace-nowrap">Contact Us</h2>

          {tags.map((tag, index) => (

            <div
              key={index}
              className={`absolute backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[${tag.color}] ${tag.color == "#9f193f" ? "hover:bg-[#28536B] hover:text-white" : "hover:bg-[#9f193f] hover:text-white"}`}
              style={{
                top: tag.top,
                left: tag.left,

              }}
            >
              <h1 className="text-[14px] font-bold ">{tag.title}</h1>
              {tag.icon}
            </div>

          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 relative gap-8">
          {/* Left Side */}
          <div className="  text-white relative" id="contact-left" ref={leftRef}>
            <h2 className="text-[32px] sm:text-[62px] font-bold">Let&apos;s Get in Touch</h2>
            <p className="sm:text-sm sm:text-lg mt-5 sm:mt-0">
              We&apos;re here to help—whether you&apos;ve got questions, ideas, or just want to say hello.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-4">
              <div
                className={`w-full  backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
              >
                <h1 className="text-[14px] font-bold ">Linkedin</h1>
                {/* <MdWorkOutline size={20} /> */}
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                  <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" />
                  <path fill="#FFF" d="M12 19H17V36H12zM14.5 17c-1.5 0-2.5-1.1-2.5-2.5s1-2.5 2.5-2.5 2.5 1.1 2.5 2.5S16 17 14.5 17zM36 36h-5v-9.1c0-2.2-1.2-3.7-3.2-3.7s-2.3 1-2.7 2c0 0.5 0 1.5 0 1.5V36h-5V19h5v2.6C25.7 20.5 26.9 19 29.7 19c3.6 0 6.3 2.3 6.3 7.3V36z" />
                </svg>
              </div>
             
              <div
                className={`w-full sm:w-fit backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
              >
                <h1 className="text-[14px] font-bold">Instagram</h1>
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                        <defs>
                          <radialGradient id="ig" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#fd5" />
                            <stop offset=".328" stopColor="#ff543f" />
                            <stop offset=".504" stopColor="#e64771" />
                            <stop offset=".761" stopColor="#cc39a4" />
                            <stop offset=".841" stopColor="#c837ab" />
                          </radialGradient>
                        </defs>
                        <path fill="url(#ig)" d="M34,42H14c-4.4,0-8-3.6-8-8V14c0-4.4,3.6-8,8-8h20c4.4,0,8,3.6,8,8v20C42,38.4,38.4,42,34,42z" />
                        <path fill="#fff" d="M24,31c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S27.9,31,24,31z M31.5,16.5c0.8,0,1.5-0.7,1.5-1.5S32.3,13.5,31.5,13.5S30,14.2,30,15S30.7,16.5,31.5,16.5z" />
                      </svg>
              </div>
              <div
                className={`w-full sm:w-fit backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
              >
                <h1 className="text-[14px] font-bold">Facebook</h1>
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                        <linearGradient id="fb" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#2aa4f4" />
                          <stop offset="1" stopColor="#007ad9" />
                        </linearGradient>
                        <path fill="url(#fb)" d="M24,4C12.95,4,4,12.95,4,24s8.95,20,20,20s20-8.95,20-20S35.05,4,24,4z" />
                        <path fill="#fff" d="M26.7,29.3h5.2l0.8-5.3h-6V21c0-2.2,0.7-4.1,2.8-4.1h3.3v-4.6c-0.6-0.1-1.8-0.2-4.1-0.2c-4.8,0-7.6,2.5-7.6,8.3v3.5h-5v5.3h5V44c1,0,2-0.1,2.7-0.2V29.3z" />
                      </svg>
              </div>
              <div
                className={`w-full sm:w-fit backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
              >
                <h1 className="text-[14px] font-bold ">WhatsApp</h1>
                <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
                  <path fill="#25D366" d="M4,24C4,13.5,13.5,4,24,4s20,9.5,20,20c0,10.5-9.5,20-20,20c-3.2,0-6.3-0.8-9.1-2.3L4,44l2.7-9.8C5.9,30.6,4,27.3,4,24z" />
                  <path fill="#fff" d="M19.3,16c-.4-.8-.7-.8-1.1-.8s-.6,0-.9,0s-.8,.1-1.3,.6c-.4,.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c.9-.1,2.8-1.1,3.2-2.3c.4-1.1,.4-2.1,.3-2.3c-.1-.2-.4-.3-.9-.6s-2.8-1.4-3.2-1.5c-.4-.2-.8-.2-1.1,.2c-.3,.5-1.2,1.5-1.5,1.9c-.3,.3-.6,.4-1,.1c-.5-.2-2-.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-.3-.5,0-.7,.2-1c.2-.2,.5-.6,.7-.8c.2-.3,.3-.5,.5-.8c.2-.3,.1-.6,0-.8C20.6,19.3,19.7,17,19.3,16z" />
                </svg>
              </div>
            
            </div>

<div className="mt-2 grid grid-cols-2">
  <div className="">

  <h3 className="text-sm ">WeChat</h3>
            <Image src={'/images/wechat_qr_code.jpg'} alt="/WeChat" width={200} height={200} className="rounded-md mt-2"/>
  </div>
</div>
          


          </div>
          <GlassCard />
        </div>
      </div>


      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <Map height="400px" />
      </div>
    </div>
  );
};

export default Contact;
