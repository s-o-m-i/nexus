import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import React from 'react';

type PortfolioItem = {
  image: string;
  title: string;
  description: string;
};

type GenericPortfolioProps = {
  heading: string;
  subheading: string;
  items: PortfolioItem[];
  ctaText?: string;
};

const GenericPortfolio: React.FC<GenericPortfolioProps> = ({
  heading,
  subheading,
  items,
  ctaText = 'View All Projects →',
}) => {
  return (
    <section className="py-20 px-8 md:px-16">
      <div className="flex justify-center">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">{heading}</h2>
      </div>
      <div className="flex justify-center">
        <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">{subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative border-b-[10px] border-[#9F1940] group h-[300px] overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-5 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <PrimaryButton text={ctaText} />
      </div>
    </section>
  );
};

export default GenericPortfolio;
