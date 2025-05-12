import React from 'react';

const cardContent = [
    {
        title: 'Full-Stack Development',
        description:
            'We handle every layer of your product, from frontend development and backend development to DevOps, delivering production-ready platforms.',
    },
    {
        title: 'Custom Solutions',
        description:
            'For those requiring a fully custom web development approach, we can design tailored web applications fitting unique business logic and goals.',
    },
    {
        title: 'Domain Expertise That Delivers',
        description:
            'We specialize in complex, regulated industries like iGaming and FinTech, bringing technical precision and business insight to every project.',
    },
    {
        title: 'Short Time to Market',
        description:
            'With agile workflows and reusable architecture, we ship MVPs and features fast so you can grow ahead of your competition.',
    },
    {
        title: 'Full IP Ownership',
        description:
            'You own 100% of the code we deliver. No license traps, no vendor lock-in — just total control of your product.',
        centerText: true,
        borderBottom: true,
    },
];

const WPIdeal = () => {
    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-pattern">
                <div className="flex justify-center">
                    <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#fff] text-center sm:w-[55%]">
                        What Makes Us an Ideal Web Development Services Provider?
                    </h2>
                </div>
                <div className="flex justify-center">
                    <p className="text-base sm:w-[75%] mt-5 text-center text-[#fff]">
                        Gaining a competitive edge means launching a web product that’s tailored to your business, built on solid architecture, and delivered fast. At CrustLab, we combine deep technical expertise with full-stack capabilities to create custom solutions you fully own.
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-12 gap-8">
                    {cardContent.map((card, index) => (


                        <div key={index} className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg w-full border-t-4 border-t-[#fff]/50 ${index+1 === cardContent.length? "col-span-12":"col-span-6"}`}>
                            <h3 className={`text-xl font-semibold text-white mb-2 ${index+1 === cardContent.length? "text-center":""}`}> {card.title}</h3>
                            <p className={`text-[#F9FAFB] text-sm ${index+1 === cardContent.length? "text-center":""}`}>
                                {card.description}
                            </p>
                            <div className="mt-4 border-t border-[#9F1940]/50 pt-2 text-sm text-[#F9FAFB]/80">
                                Powered by Nexus
                            </div>
                        </div>
                        // <div
                        //   key={index}
                        //   className={`bg-[#F9FAFB] ${
                        //     card.borderBottom ? 'border-b-4' : 'border-l-4'
                        //   } border-[#9F1940] p-4 rounded-md shadow-md transition hover:shadow-lg ${
                        //     card.centerText ? 'col-span-2 text-center' : ''
                        //   }`}
                        // >
                        //   <h3 className={`text-lg font-semibold text-[#04213F] ${card.centerText ? 'text-center' : ''}`}>
                        //     {card.title}
                        //   </h3>
                        //   <p className={`text-base text-[#04213F] mt-2 ${card.centerText ? 'text-center' : ''}`}>
                        //     {card.description}
                        //   </p>
                        // </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default WPIdeal;
