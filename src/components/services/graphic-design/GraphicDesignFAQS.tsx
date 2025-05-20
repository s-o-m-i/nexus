import React, { useState } from 'react';
import { graphicDesignFAQs } from '@/utils/graphic-design-faqs';
import { IoIosArrowDown } from 'react-icons/io';

// Create a simpler FAQ component without headlessUI dependency
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full px-6 py-5 text-left text-[#04213F] focus:outline-none"
      >
        <span className="font-medium">{question}</span>
        <IoIosArrowDown 
          className={`text-[#9f193f] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-0 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const GraphicDesignFAQS = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50 relative overflow-hidden">
      {/* Minimal decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 left-10 w-32 h-32 rotate-45 border border-[#9f193f]/30"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border border-[#04213F]/30"></div>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header with minimal design */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
              <span className="mx-3 text-[#9f193f] font-medium uppercase text-sm tracking-wider">Questions & Answers</span>
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#04213F] mb-6">
            Frequently Asked <span className="text-[#9f193f]">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our graphic design services and process.
          </p>
        </div>
        
        {/* FAQ accordion with clean design */}
        <div className="space-y-4">
          {graphicDesignFAQs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        {/* Additional help callout */}
        <div className="mt-12 bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
          <h3 className="text-xl font-medium text-[#04213F] mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We&apos;re here to help with any questions you may have about our design services.
          </p>
          <button className="px-8 py-3 bg-[#9f193f] text-white rounded-md font-medium hover:bg-[#9f193f]/90 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignFAQS; 