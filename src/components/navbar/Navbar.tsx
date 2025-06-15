"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import CalendlyWidget from '../CalendlyWidget';

const Navbar = () => {
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    // Services list for dropdown
    const services = [
        { name: "Web Development", description: "Custom, responsive websites and applications", path: "/services/web-development" },
        { name: "Mobile App Development", description: "iOS and Android applications", path: "/services/mobile-app-development" },
        { name: "UI/UX Design", description: "Intuitive, user-centered interfaces", path: "/services/ui-ux" },
        { name: "Graphic Designing", description: "Intuitive, user-centered interfaces", path: "/services/graphic-design" },
        { name: "Digital Marketing", description: "Strategic online marketing campaigns", path: "/services/digital-marketing" },
        { name: "SEO", description: "Search engine visibility enhancement", path: "/services/seo-services" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileServicesOpen) setIsMobileServicesOpen(false);
    };

    return (
        <>
            <div className="hidden sm:flex bg-[#000] p-1 sm:p-2 justify-center items-center">
                <div className="">
                    <a href="tel:+8618618618618" className='w-[200px]  text-[12px] sm:text-sm text-[#f8d57e] font-bold px-3 border-r-2 border-white'> China <span className='text-[#fff] ml-2'>+86 186 1861 8618</span></a>
                    <a href="tel:+8618618618618" className='w-[200px]  text-[12px] sm:text-sm text-[#f8d57e] font-bold px-3 border-r-2 border-white'> Pakistan <span className='text-[#fff] ml-2'>+92 345 1234567</span></a>
                    <a href="mailto:info@technexus.com" className='w-[200px]  text-[12px] sm:text-sm text-[#f8d57e] font-bold px-3 border-r-2 border-white'> Email <span className='text-[#fff] ml-2'>info@technexus.com</span></a>
                    <a href="tel:+03348656129" className='w-[200px]  text-[12px] sm:text-sm text-[#f8d57e] font-bold px-3'> Whatsapp <span className='text-[#fff] ml-2'>+0334 8656129</span></a>
                </div>
            </div>

            <div className='container mx-auto p-4  relative bg-[#f8f9ff] h-[100px]  '>
                <nav className="flex items-center rounded-full justify-between py-4 px-4 sm:px-[30px] 2xl:px-[50px] bg-[#9F1940]  text-[#235789] shadow-md">
                    <div className="text-[24px] font-bold text-[#fff]">
                        <Link href={"/"}> DevMola</Link></div>
                    <ul className="hidden md:flex space-x-6 text-[16px] font-medium">
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
                        <Link href={"/portfolio"}>
                            <li className="cursor-pointer transition navbar-items"><span>P</span><span>o</span><span>r</span><span>t</span><span>f</span><span>o</span><span>l</span><span>i</span><span>o</span></li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className="cursor-pointer transition navbar-items"><span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></li>
                        </Link>
                    </ul>

                    <div className="cta hidden sm:block">
                        <h3 onClick={() => setIsOpen(true)} className='text-sm relative group cursor-pointer font-medium text-[#9f193f] bg-white px-4 py-2 rounded-full flex items-center gap-2 overflow-hidden z-10 hover:text-[#fff] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>Book a Call
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <div className="absolute -left-10 top-0 h-10 w-10 bg-[#000] rounded-full group-hover:left-0 group-hover:w-full group-hover:h-full -z-1  transition-all duration-300 ease-in-out">
                            </div>

                        </h3>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMobileMenu} className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Slider */}
                <div className={`fixed top-0 right-0 h-full w-[80%] bg-white transform transition-transform duration-300 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6">
                        <div className="flex justify-end">
                            <button onClick={toggleMobileMenu} className="text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        <div className="mt-8">
                            <Link href="/" onClick={toggleMobileMenu}>
                                <div className="text-[#9F1940] font-medium py-3 border-b border-gray-200">Home</div>
                            </Link>
                            <Link href="/about" onClick={toggleMobileMenu}>
                                <div className="text-[#9F1940] font-medium py-3 border-b border-gray-200">About</div>
                            </Link>
                            <div 
                                className="text-[#9F1940] font-medium py-3 border-b border-gray-200 cursor-pointer"
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                            >
                                <div className="flex justify-between items-center">
                                    <span>Services</span>
                                    <svg 
                                        className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className={`mt-2 space-y-2 ${isMobileServicesOpen ? 'block' : 'hidden'}`}>
                                    {services.map((service, index) => (
                                        <Link 
                                            key={index} 
                                            href={service.path}
                                            onClick={toggleMobileMenu}
                                        >
                                            <div className="pl-4 py-2 text-sm text-gray-600 hover:text-[#9F1940]">
                                                {service.name}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <Link href="/portfolio" onClick={toggleMobileMenu}>
                                <div className="text-[#9F1940] font-medium py-3 border-b border-gray-200">Portfolio</div>
                            </Link>
                            <Link href="/contact" onClick={toggleMobileMenu}>
                                <div className="text-[#9F1940] font-medium py-3 border-b border-gray-200">Contact</div>
                            </Link>
                        </div>

                        <div className="mt-8">
                            <button className="w-full bg-[#9F1940] text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#000] transition-colors">
                                Book a Call
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Overlay when mobile menu is open */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleMobileMenu}
                    ></div>
                )}

                {/* Full-width Services Dropdown */}
                <div
                    className={`absolute left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out transform origin-top ${isServicesHovered ? 'opacity-100 max-h-[350px]' : 'opacity-0 max-h-0 overflow-hidden'}`}
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                    style={{ top: '88px', zIndex: 50 }}
                >
                    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        {/* <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-[#000]">Our Services</h3>
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
                                        <p className="text-base font-medium text-[#9f193f] group-hover:text-[#000] transition-colors">
                                            {service.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* <div className="text-center mt-6">
                            <a href="#" className="inline-flex items-center text-[#9f193f] hover:text-[#000] transition-colors">
                                <span className="font-medium">View all services</span>
                                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div> */}
                    </div>
                </div>

                <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </>
    )
}

export default Navbar
