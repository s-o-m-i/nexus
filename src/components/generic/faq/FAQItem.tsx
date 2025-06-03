"use client"
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full px-6 py-5 text-left text-[#04213F] focus:outline-none"
      >
        <span className="font-medium cursor-pointer">{question}</span>
        <IoIosArrowDown
          className={`text-[#9f193f] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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

export default FAQItem;
