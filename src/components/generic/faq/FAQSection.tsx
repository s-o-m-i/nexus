"use client"

import React from 'react';
import FAQItem from './FAQItem';

export interface FAQData {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  headingHighlight?: string;
  faqs: FAQData[];
  showContact?: boolean;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = 'Questions & Answers',
  subtitle = 'Frequently Asked',
  headingHighlight = 'Questions',
  faqs,
  showContact = true
}) => {
  return (
    <section className="py-24 px-4 md:px-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 left-10 w-32 h-32 rotate-45 border border-[#9f193f]/30"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border border-[#04213F]/30"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="flex items-center justify-center">
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
              <span className="mx-3 text-[#9f193f] font-medium uppercase text-sm tracking-wider">{title}</span>
              <div className="h-[2px] w-8 bg-[#9f193f]"></div>
            </div>
          </div>
          <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-6">
            {subtitle} {headingHighlight}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Optional Contact Prompt */}
        {showContact && (
          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-100 shadow-sm text-center">
            <h3 className="text-xl font-medium text-[#04213F] mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help with any questions you may have about our services.
            </p>
            <button className="px-8 py-3 bg-[#9f193f] text-white rounded-md font-medium hover:bg-[#9f193f]/90 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
