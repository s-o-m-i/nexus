
import ServicesForm from '@/components/ServicesForm';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';

const DigitalMarketingLanding = () => {
    return (
        <section className="bg-[#fff] min-h-[calc(100vh-100px)] py-10 sm:py-14">
            <div className="container mx-auto px-4 sm:px-6 lg:px-[50px] xl:px-[50px] 2xl:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex items-center">
                <div className="">
                    <h1 className="text-[32px] sm:text-[42px] leading-[1.3] font-bold text-[#111111] mb-6">
                        Digital Marketing Services For
                        Exceptional User Experience
                    </h1>
                    <p className="text-[16px] w-full sm:w-[75%] text-gray-700 mb-10">
                        We offer a comprehensive range of digital marketing services to help you grow your business online. From SEO and PPC to social media and email marketing, we have you covered.
                    </p>
                    <div className="flex items-center gap-5">
                        <PrimaryButton text={"Get Consultation"} />
                        <Button />
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center mt-10 sm:mt-0">
                <div className="sm:glass-morph rounded-lg p-0 sm:p-4 w-full max-w-md relative">
                    <ServicesForm />
                </div>
            </div>
            </div>
        </section>
    );
};

export default DigitalMarketingLanding;
