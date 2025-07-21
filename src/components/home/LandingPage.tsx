'use client'
import Button from "@/ui/Button/Button";
import React, { useEffect, useState } from "react";
import CalendlyWidget from "../CalendlyWidget";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";

const LandingPage = () => {
  const [rootElem, setRootElem] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setRootElem(document.body);
  }, []);

  if (!rootElem) return null;

  return (
    <div className="bg-[#ffff] min-h-[calc(100vh-100px)] relative">
      {/* Elegant Right Side Design */}
      <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Left Side Content */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 order-1 sm:order-2">
        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-[42px] leading-[1.3] font-bold text-[#111111] mb-6">
          Digital Marketing Agency in Islamabad – Grow Your Business Online
          </h1>
          <p className="text-[16px] sm:w-[75%] text-gray-700 mb-10">
          DevMola delivers results-driven SEO, SEM, web, and app development services to boost your brand’s visibility, traffic, and revenue in Islamabad, Pakistan & globally.
          </p>
          <div className="flex items-center gap-5">
            <div className="" onClick={() => setIsOpen(true)}>
              <PrimaryButton text="Get Consultation" />
            </div>
            <Button />
          </div>
        </div>
      </section>

      <div className="order-2 sm:absolute top-0 right-0 bg-pattern w-full h-[500px] sm:w-[40%] sm:h-full z-10 rounded-tl-[100%] rounded-bl-[100%] flex flex-col items-center justify-center gap-6">
        {/* Service Tags with Floating Animation */}
        <div className="relative w-full h-full flex items-center justify-center">
          {[
            { label: "Web Development", top: "10%", left: "30%", delay: "0s", color: "#9f193f" },
            { label: "UI/UX Design", top: "20%", right: "10%", delay: "0.2s", color: "#9f193f" },
            { label: "SEO", top: "5%", right: "5%", delay: "0.4s", color: "#000" },
            { label: "Digital Marketing", top: "5%", left: "50%", delay: "0.6s", color: "#9f193f" },
            { label: "Mobile App Development", bottom: "10%", left: "5%", delay: "0.8s", color: "#000" },
            { label: "Cloud Computing", top: "20%", left: "10%", delay: "1s", color: "#000" },
            { label: "Cybersecurity", bottom: "25%", right: "0%", delay: "1.2s", color: "#000" },
            { label: "AI & ML", bottom: "40%", right: "10%", delay: "1.4s", color: "#9f193f" },
            { label: "Blockchain", bottom: "30%", left: "40%", delay: "1.6s", color: "#000" },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute bg-white px-5 py-2 rounded-full shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 animate-float hover:motion-preset-seesaw text-[${item.color}] ${item.color == "#9f193f" ? "hover:bg-[#111111] hover:text-white" : "hover:bg-[#9f193f] hover:text-white"}`}
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
                animationDelay: item.delay,
              }}
            >
              <h1 className="text-[14px] font-bold ">{item.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
