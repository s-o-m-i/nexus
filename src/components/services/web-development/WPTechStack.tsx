"use client"
import React, { useState } from 'react';

const techData = {
    JAVASCRIPT: {
        label: 'Javascript',
        short: 'JS',
        description:
            'The backbone of modern web development, JavaScript enables us to build interactive, real-time web apps with dynamic content, smooth animations, and seamless user experiences. Its speed, flexibility, and broad compatibility make it a go-to for high-performance platforms.',
    },
    TYPESCRIPT: {
        label: 'Typescript',
        short: 'TS',
        description:
            'TypeScript brings static typing to JavaScript, enabling developers to catch errors early and build more robust, scalable web applications. It’s ideal for large codebases and collaborative development.',
    },
    REACT: {
        label: 'React',
        short: '⚛',
        description:
            'React is a powerful JavaScript library for building user interfaces. Its component-based architecture and virtual DOM enable developers to create highly responsive and reusable UI components.',
    },
    'NEXT.JS': {
        label: 'Next.js',
        short: 'NX',
        description:
            'Next.js is a full-stack React framework that offers server-side rendering, static site generation, and excellent developer experience. It’s the go-to choice for performance-optimized React apps.',
    },
};

const WPTechStack = () => {
    const [selectedTech, setSelectedTech] = useState<'JAVASCRIPT' | 'TYPESCRIPT' | 'REACT' | 'NEXT.JS'>('JAVASCRIPT');

    const techNames = Object.keys(techData) as Array<keyof typeof techData>;

    return (
        <div>
            <section className="py-20 px-8 md:px-16 bg-white">
                <div className="flex justify-center">
                    <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F] text-center sm:w-[55%]">
                        Superb web apps built with top-tier tools & technologies
                    </h2>
                </div>
                <div className="flex justify-center">
                    <p className="text-base sm:w-[75%] mt-5 text-center text-gray-600">
                        Our webmasters leverage the latest frameworks, libraries, and cloud solutions to craft fast, scalable, and future-ready web solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 mt-20 gap-8">
                    {/* Left Column */}
                    <div className="technologies space-y-3">
                        {techNames.map((tech, index) => (
                            <div
                                key={tech}
                                onMouseEnter={() => setSelectedTech(tech)}
                                className={`transition-all duration-300 cursor-pointer rounded-xl px-5 py-4 border-2 ${selectedTech === tech
                                        ? 'border-[#9F1940] bg-[#fff5f7] shadow-md'
                                        : 'border-gray-200 bg-white hover:bg-gray-50 hover:shadow-sm'
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div
                                        className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-white ${selectedTech === tech ? 'bg-[#9F1940]' : 'bg-gray-300'
                                            }`}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#04213F]">{techData[tech].label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Right Column - Details */}
                    <div className="tech-details transition-all duration-300">
                        <div className="w-32 h-32 bg-[#9F1940] rounded-lg flex items-center justify-center">
                            <h2 className="text-white text-4xl font-semibold">{techData[selectedTech].short}</h2>
                        </div>
                        <h3 className="text-lg mt-5 font-medium">{techData[selectedTech].label}</h3>
                        <p className="text-base mt-3 text-gray-600">{techData[selectedTech].description}</p>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <h2 className="text-[32px] leading-[1.2] sm:text-[42px] font-bold text-[#04213F] text-center mt-20">
                    Tech Stack We Use
                </h2>
                <div className="grid grid-cols-4 mt-20 gap-8">
                    {/* Frontend */}
                    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-center text-xl font-semibold text-[#04213F] mb-4 pb-2 border-b-2 border-[#9F1940]">
                            Frontend
                        </h2>
                        <ul className="space-y-2">
                            <li className="text-gray-700 text-base group-hover:text-[#9F1940] transition-colors">HTML</li>
                            <li className="text-gray-700 text-base group-hover:text-[#9F1940] transition-colors">CSS</li>
                            <li className="text-gray-700 text-base group-hover:text-[#9F1940] transition-colors">JavaScript</li>
                            <li className="text-gray-700 text-base group-hover:text-[#9F1940] transition-colors">React</li>
                        </ul>
                    </div>


                    {/* Backend */}
                    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                         <h2 className="text-center text-xl font-semibold text-[#04213F] mb-4 pb-2 border-b-2 border-[#9F1940]">Backend</h2>
                        <h5 className="mb-2 text-lg text-gray-600">Node.js</h5>
                        <h5 className="mb-2 text-lg text-gray-600">Laravel</h5>
                        <h5 className="mb-2 text-lg text-gray-600">MySQL</h5>
                    </div>

                    {/* Databases */}
                    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                         <h2 className="text-center text-xl font-semibold text-[#04213F] mb-4 pb-2 border-b-2 border-[#9F1940]">Databases</h2>
                        <h5 className="mb-2 text-lg text-gray-600">MYSQL</h5>
                        <h5 className="mb-2 text-lg text-gray-600">MongoDB</h5>
                        <h5 className="mb-2 text-lg text-gray-600">PostgreSQL</h5>
                    </div>

                    {/* Tools */}
                    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                         <h2 className="text-center text-xl font-semibold text-[#04213F] mb-4 pb-2 border-b-2 border-[#9F1940]">Tools</h2>
                        <h5 className="mb-2 text-lg text-gray-600">Git</h5>
                        <h5 className="mb-2 text-lg text-gray-600">Docker</h5>
                        <h5 className="mb-2 text-lg text-gray-600">AWS</h5>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WPTechStack;
