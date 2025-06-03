
import ServicesForm from '@/components/ServicesForm';
import Button from '@/ui/Button/Button';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';

const DigitalMarketingLanding = () => {
    return (
        <section className='bg-[#9f193f] min-h-[calc(100vh-100px)] relative rounded-md grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 py-4 sm:py-0'>
            <div className="flex items-center">
                <div className="">
                    <h1 className="text-[32px] sm:text-[42px] leading-[1.3] font-bold text-[#fff] mb-6">
                        Digital Marketing Services For
                        Exceptional User Experience
                    </h1>
                    <p className="text-[16px] w-full sm:w-[75%] text-white mb-10">
                        We offer a comprehensive range of digital marketing services to help you grow your business online. From SEO and PPC to social media and email marketing, we have you covered.
                    </p>
                    <div className="flex items-center gap-5">
                        <PrimaryButton text={"Get Consultation"} />
                        <Button />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5 sm:mt-0">
                <div className="sm:glass-morph rounded-lg p-0 sm:p-4 w-full max-w-md relative">
                    <ServicesForm />
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingLanding;
