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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
    <Slider {...sliderSettings}>
      {filteredProjects.map((project) => (
        <div key={project.id}>
          <div className="bg-gray-50 rounded-4xl overflow-hidden relative p-4 md:p-10">
            <div className="absolute bg-[#2D5C76]/50 animate-bounce rounded-full w-16 h-16 bottom-4 right-4" />
  
            <div className="bg-[#9f193f] rounded-3xl p-6 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="relative w-full flex justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#04213F]/20 to-[#04213F]/20 rounded-2xl rotate-3 scale-[0.97] opacity-70" />
                  <div className="relative border-4 border-white rounded-2xl overflow-hidden w-full max-w-sm aspect-[4/3] shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
  
                {/* Text Section */}
                <div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium text-white bg-[#2D5C76] px-3 py-1 rounded-full inline-block mb-4">
                    {categories.find((cat) => cat.id === project.category)?.name}
                  </span>
                  <p className="text-white mb-4 text-sm">{project.description}</p>
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-white text-sm list-disc list-inside space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  
  );
};

export default Portfolio;
