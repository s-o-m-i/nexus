"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import PrimaryButton from "@/ui/PrimaryButton/PrimaryButton";
import Slider from "react-slick";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sliderPosition, setSliderPosition] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
    { id: "other", name: "Other Services" },
  ];

  const setButtonRef = (el: HTMLButtonElement | null, index: number) => {
    buttonRefs.current[index] = el;
  };

  useEffect(() => {
    const activeIndex = categories.findIndex((cat) => cat.id === activeCategory);
    if (activeIndex !== -1 && buttonRefs.current[activeIndex]) {
      updateSliderPosition(activeIndex);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A modern e-commerce platform with advanced product filtering and secure payment processing.',
      features: [
        'Responsive design for all devices',
        'Advanced search and filtering capabilities',
        'Secure payment processing integration',
        'Customer account management'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Management App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A mobile application that helps healthcare providers manage patient records and appointments.',
      features: [
        'HIPAA-compliant data security',
        'Appointment scheduling system',
        'Patient record management',
        'Integrated billing solutions'
      ]
    },
    {
      id: 3,
      title: 'Finance Dashboard Redesign',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A complete UI/UX redesign of a financial dashboard for improved user experience and data visualization.',
      features: [
        'Interactive data visualization',
        'Customizable dashboard widgets',
        'Real-time financial data integration',
        'Intuitive user interface'
      ]
    },
    {
      id: 4,
      title: 'Inventory Management System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A comprehensive inventory management system with real-time tracking and reporting.',
      features: [
        'Barcode scanning integration',
        'Automated low-stock alerts',
        'Advanced reporting tools',
        'Supplier management portal'
      ]
    },
    {
      id: 5,
      title: 'Food Delivery Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'A feature-rich food delivery application with real-time order tracking and payment processing.',
      features: [
        'GPS-based restaurant discovery',
        'Real-time order tracking',
        'Multiple payment options',
        'Loyalty rewards program'
      ]
    },
    {
      id: 6,
      title: 'AI-Powered Data Analytics',
      category: 'other',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'An advanced data analytics platform leveraging AI for business intelligence and predictive analytics.',
      features: [
        'Machine learning algorithms',
        'Predictive business forecasting',
        'Natural language processing',
        'Custom analytics dashboards'
      ]
    }
  ];

  const updateSliderPosition = (index: number) => {
    const currentButton = buttonRefs.current[index];
    if (currentButton) {
      setSliderPosition({
        left: currentButton.offsetLeft,
        width: currentButton.offsetWidth,
      });
    }
  };

  useEffect(() => {
    const activeIndex = categories.findIndex((cat) => cat.id === activeCategory);
    if (activeIndex !== -1) {
      updateSliderPosition(activeIndex);
    }
  }, [activeCategory]);

  useEffect(() => {
    const handleResize = () => {
      const activeIndex = categories.findIndex((cat) => cat.id === activeCategory);
      if (activeIndex !== -1) {
        updateSliderPosition(activeIndex);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeCategory, categories]);

  const handleCategoryChange = (categoryId: string, index: number) => {
    setActiveCategory(categoryId);
    updateSliderPosition(index);
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="py-20 md:py-28 min-h-screen px-6 md:px-16 relative overflow-hidden">
      <div className="text-center mb-20">
        <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">Our Portfolio</span>
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] mb-6">Featured Projects</h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          Take a look at our recent work. We pride ourselves on delivering high-quality solutions 
          that exceed our clients&apos; expectations.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-16">
        <div className="relative bg-gray-50 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 max-w-3xl mx-auto">
          <div
            className="absolute bg-[#9f193f] h-[85%] rounded-full transition-all duration-300 ease-in-out shadow-md z-10"
            style={{
              left: `${sliderPosition.left}px`,
              width: `${sliderPosition.width}px`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <div className="flex flex-wrap justify-center relative z-20">
            {categories.map((category, index) => (
              <button
                key={category.id}
                ref={(el) => setButtonRef(el, index)}
                onClick={() => handleCategoryChange(category.id, index)}
                className={`px-6 py-1 rounded-full relative z-20 transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-[#fff] font-medium scale-105"
                    : "text-[#000] hover:text-[#9f193f]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Projects */}
      <div className="max-w-5xl mx-auto">
        <Slider {...sliderSettings}>
          {filteredProjects.map((project, index) => (
            <div key={project.id}>
              <div className="bg-gray-50 rounded-4xl overflow-hidden shadow-lg p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className={`relative rounded-2xl ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#04213F]/20 to-[#04213F]/20 rounded-2xl rotate-3 scale-[0.97] opacity-70"></div>
                    <div className="relative border-4 border-white rounded-2xl overflow-hidden h-[300px] shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="absolute w-[30px] h-[30px] rounded-full top-5 -left-4 bg-[#04213F]" />
                  </div>

                  <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#04213F] mb-3">{project.title}</h3>
                    <span className="text-sm font-medium text-[#9f193f] px-3 py-1 bg-[#9f193f]/10 rounded-full inline-block mb-4">
                      {categories.find((cat) => cat.id === project.category)?.name}
                    </span>
                    <p className="text-gray-700 mb-6">{project.description}</p>
                    <div className="mb-6">
                      <h4 className="text-[#04213F] font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={`/project/${project.id}`}
                      className="flex items-center gap-2 text-[#9f193f] font-medium hover:text-[#7E1C32] transition-colors"
                    >
                      <span>View Project Details</span>
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* View More */}
      <div className="text-center mt-20">
        <div className="flex items-center justify-center">
          <PrimaryButton text="View All Projects" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
