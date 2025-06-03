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

            <div className="bg-[#9F1940] rounded-4xl min-h-[calc(100vh-100px)] px-12 pt-4 pb-20">
                <div className="relative h-[300px]">
                    <h2 className="text-[152px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-medium text-[#ddd]/50 whitespace-nowrap">Contact Us</h2>

                    {tags.map((tag, index) => (

                        <div
                            key={index}
                            className={`absolute backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[${tag.color}] ${tag.color == "#9f193f" ? "hover:bg-[#28536B] hover:text-white" : "hover:bg-[#9f193f] hover:text-white"}`}
                            style={{
                                top: tag.top,
                                // bottom: tag.bottom,
                                left: tag.left,
                                // right: tag.right,
                                // animationDelay: tag.delay,
                                // color: item.color,
                            }}
                        >
                            <h1 className="text-[14px] font-bold ">{tag.title}</h1>
                            {tag.icon}
                        </div>

                    ))}
                </div>

                <div className="grid grid-cols-2 relative gap-8">
                    {/* Left Side */}
                    <div className="  text-white relative" id="contact-left" ref={leftRef}>
                        <h2 className="text-[62px] font-bold">Let&apos;s Get in Touch</h2>
                        <p className="text-lg">
                            We&apos;re here to help—whether you&apos;ve got questions, ideas, or just want to say hello.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div
                                className={` backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
                            >
                                <h1 className="text-[14px] font-bold ">Linkedin</h1>
                                <MdWorkOutline size={20} />
                            </div>
                            <div
                                className={` backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
                            >
                                <h1 className="text-[14px] font-bold">WeChat</h1>
                                <MdWorkOutline size={20} />
                            </div>
                            <div
                                className={` backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
                            >
                                <h1 className="text-[14px] font-bold ">WhatsApp</h1>
                                <MdWorkOutline size={20} />
                            </div>
                            {/* <div
                                    className={` backdrop-blur-xl bg-white/10 border border-white/30 px-5 py-2  gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer transition-all  duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[#fff] hover:bg-[#28536B] hover:text-white`}
                                >
                                    <h1 className="text-[14px] font-bold ">Instagram</h1>
                                    <MdWorkOutline size={20} />
                                </div> */}
                        </div>
                        <div className="flex items-center ">

                            <Image
                                alt="contact-us"
                                src="/images/2dcharcterwithlegsextension.png"
                                width={400}
                                height={400}
                            />
                        </div>

                    </div>
                    <GlassCard />
                </div>
            </div>
            <div className="my-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl">
                        <h2 className="text-xl font-bold text-center text-[#9f193f] mb-4">WeChat</h2>
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                            <Image
                                src="/images/wechat_qr_code.jpg"
                                alt="WeChat QR Code"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl">
                        <h2 className="text-xl font-bold text-center text-[#2D5C76] mb-4">LinkedIn</h2>
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl">
                        <h2 className="text-xl font-bold text-center text-[#9f193f] mb-4">Instagram</h2>
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48">
                                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl">
                        <h2 className="text-xl font-bold text-center text-[#2D5C76] mb-4">Facebook</h2>
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg flex justify-center items-center">
                            {/* <FaFacebook className="text-[#2D5C76] text-[180px]"/> */}
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 48 48">
                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg border border-gray-100 p-6 rounded-xl">
                        <h2 className="text-xl font-bold text-center text-[#2D5C76] mb-4">Facebook</h2>
                        <div className="relative aspect-square w-full overflow-hidden rounded-lg flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24	c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3	l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8l6-1.6l0.6,0.3	c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4	s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6	s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4	c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8	C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
