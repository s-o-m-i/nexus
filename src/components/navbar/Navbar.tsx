"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);

    // Services list for dropdown
    const services = [
        { name: "Web Development", description: "Custom, responsive websites and applications" ,path:"/services/web-development"},
        { name: "Mobile App Development", description: "iOS and Android applications" ,path:"/services/mobile-app-development"},
        { name: "UI/UX Design", description: "Intuitive, user-centered interfaces" ,path:"/services"},
        { name: "Cloud Computing", description: "Scalable infrastructure solutions" ,path:"/services"},
        { name: "Cybersecurity", description: "Protection against digital threats" ,path:"/services"},
        { name: "Digital Marketing", description: "Strategic online marketing campaigns" ,path:"/services"},
        { name: "SEO", description: "Search engine visibility enhancement" ,path:"/services"},
        { name: "AI & Machine Learning", description: "Intelligent automation solutions" ,path:"/services"},
        { name: "Blockchain", description: "Secure distributed ledger technology",path:"/services" }
    ];

    return (
        <div className='p-4 relative bg-[#f2f2f2] h-[100px]'>
            <nav className="flex items-center rounded-full justify-between p-4 px-[60px] bg-[#9F1940]  text-[#235789] shadow-md">
                <div className="text-[24px] font-bold text-[#fff]">
                   <Link href={"/"}> TechNexus</Link></div>
                <ul className="hidden md:flex space-x-6 text-[14px] font-medium">
                <Link href={"/"}> 
                    <li className="cursor-pointer transition navbar-items"><span>H</span><span>o</span><span>m</span><span>e</span></li>
                    </Link>
                <Link href={"/about"}> 
                    <li className="cursor-pointer transition navbar-items"><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span></li>
                    </Link>
                <Link href={"/services"}> 
                    <li 
                        className="cursor-pointer transition navbar-items relative"
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                    >
                        <span>S</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
                    </li>
                    </Link>
                    <li className="cursor-pointer transition navbar-items"><span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span></li>
                    <li className="cursor-pointer transition navbar-items"><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></li>
                </ul>
                <div className="md:hidden">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Full-width Services Dropdown */}
            <div 
                className={`absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${isServicesHovered ? 'opacity-100 max-h-[350px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
                style={{ top: '88px', zIndex: 50 }}
            >
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {/* <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#28536B]">Our Services</h3>
                        <div className="w-16 h-1 bg-[#9f193f] mx-auto mt-2"></div>
                    </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Link
                                key={index} 
                                href={service.path} 
                                className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                                <div className="ml-4">
                                    <p className="text-base font-medium text-[#9f193f] group-hover:text-[#28536B] transition-colors">
                                        {service.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <a href="#" className="inline-flex items-center text-[#9f193f] hover:text-[#28536B] transition-colors">
                            <span className="font-medium">View all services</span>
                            <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
