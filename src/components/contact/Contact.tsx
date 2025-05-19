"use client"
// ContactPage.tsx
import React, { useState } from "react";
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
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    });
    const leftRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.fromTo(
            leftRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" }
        );
    }, []);

    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        // Simulate API call
        setTimeout(() => {
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", company: "", service: "", message: "" });
        }, 1000);
    };


    return (
        <div className="bg-[#8B003D]/5 min-h-screen  px-4  mb-5">

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
                        <h2 className="text-[62px] font-bold">Let’s Get in Touch</h2>
                        <p className="text-lg">
                            We’re here to help—whether you’ve got questions, ideas, or just want to say hello.
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
        </div>
    );
};

export default Contact;
