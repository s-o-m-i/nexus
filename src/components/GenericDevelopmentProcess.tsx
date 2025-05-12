import React from 'react';
import FancyCard from '@/ui/FancyCard';

type ProcessStep = {
  title: string;
  description: string;
};

type GenericDevelopmentProcessProps = {
  title?: string;
  subtitle?: string;
  processSteps: ProcessStep[];
};

const GenericDevelopmentProcess: React.FC<GenericDevelopmentProcessProps> = ({
  title = 'Our Development Process',
  subtitle = 'From concept to launch, our development process is designed to turn your ideas into impactful digital solutions. We follow a structured yet flexible approach that ensures every product we build is user-centric, scalable, and aligned with your business goals.',
  processSteps,
}) => {
  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">{title}</h2>
      <div className="flex justify-center">
        <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">{subtitle}</p>
      </div>

      <div className="mt-16 grid gap-10 sm:grid-cols-12">
        {processSteps.map((step, index) => (
          <div key={index} className="col-span-6">
            <FancyCard title={step.title} desc={step.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericDevelopmentProcess;
