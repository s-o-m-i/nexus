import Button from "@/ui/Button/Button";

import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen relative">
      <div className="absolute top-0 right-0 w-full h-full bg-pattern bg-[#9F1940] z-1 "></div>
      <section className="flex   flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <div className="max-w-xl mb-10 md:mb-0 z-50 ">
          <h1 className="text-[54px]   md:text-5xl leading-[1.2] font-extrabold text-[#fff] mb-6">
            Building Bold Software Solutions
          </h1>
          <p className="text-lg text-[#fff] mb-6">
            We craft fast, modern, and scalable software tailored for your business needs.
          </p>
          <div className="flex items-center gap-5">
          {/* <PrimaryButton /> */}
          <Button />
          {/* <SecondaryButton/> */}
          </div>
          
        </div>

        <img
          src="/illustration.svg"
          alt="Tech Illustration"
          className="w-full max-w-md"
        />
      </section>
    </div>
  );
};

export default LandingPage;