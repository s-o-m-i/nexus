import React from 'react';

const companies = [
  { name: 'Google', logo: '/images/companyone.png' },
  { name: 'Microsoft', logo: '/images/companyKudu.svg' },
  { name: 'Amazon', logo: '/images/companyKinx.png' },
  { name: 'Netflix', logo: '/images/companyKallidus.svg' },
  { name: 'Tesla', logo: '/images/companyone.png' },
  { name: 'Meta', logo: '/images/companyone.png' },
];

const InfiniteScrollCompanies = () => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      <div className="flex items-center gap-10 animate-marquee px-4">
        {companies.concat(companies).map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-24 rounded-xl bg-white border border-gray-200 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <div className="w-full h-full flex items-center justify-center p-3 bg-gradient-to-tr from-white via-white to-gray-50 group-hover:from-[#04213F] group-hover:to-[#9f193f] transition-all duration-300 rounded-xl">
              <img
                src={company.logo}
                alt={company.name}
                className="w-20 h-auto object-contain group-hover:grayscale group-hover:brightness-200 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfiniteScrollCompanies;
