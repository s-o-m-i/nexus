import React from 'react';

type FAQ = {
  question: string;
  answer: string;
};

type GenericFAQProps = {
  title: string;
  subtitle: string;
  faqs: FAQ[];
};

const GenericFAQ: React.FC<GenericFAQProps> = ({ title, subtitle, faqs }) => {
  return (
    <section className="py-20 px-8 md:px-16 bg-white">
      <div className="flex justify-center">
        <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F] text-center sm:w-[55%]">
          {title}
        </h2>
      </div>
      <div className="flex justify-center">
        <p className="text-base sm:w-[75%] mt-5 text-center text-gray-600">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 border-l-2 shadow-sm hover:shadow-lg border-[#9F1940] transition-all duration-300 ease-in-out hover:h-[150px] h-[70px] overflow-hidden"
          >
            <div className="question group">
              <h4 className="text-sm font-medium text-[#9F1940]">{String(index + 1).padStart(2, '0')}.</h4>
              <h3 className='text-xl font-medium'>{faq.question}</h3>
              <div className="answer mt-2">
                <p className="text-sm text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericFAQ;
