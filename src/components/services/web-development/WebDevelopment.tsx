import InfiniteScrollCompanies from '@/components/InfiniteScrollCompanies/InfiniteScrollCompanies';
import ServicesForm from '@/components/ServicesForm';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';

const WebDevelopment = () => {
    return (
        <section className='bg-[#9f193f] h-[calc(100vh-100px)]  relative rounded-md grid grid-cols-1 md:grid-cols-2 px-8 md:px-16'>
            <div className="flex items-center">
                <div className="">
                    <h1 className="text-[42px] leading-[1.3] font-bold text-[#fff]  mb-6">
                        Web Development Services For
                        
                        <span className=" text-[#f8d57e]"> Online Success</span>
                    </h1>
                    <p className="text-[16px] sm:w-[75%] text-white mb-10">
                        Design and scale custom, high-performing web solutions that engage users and deliver seamless experience at every touchpoint. At TekRevol, our web development services help businesses amplify their online presence with modern, user-first innovation.
                    </p>
                    <div className="flex items-center gap-5">
                        <PrimaryButton text={"Get Consultation"} />
                        <Button />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="glass-morph rounded-lg p-4 w-full max-w-md relative">

                    <ServicesForm />
                </div>
            </div>
        </section>
    );
};

export default WebDevelopment; 