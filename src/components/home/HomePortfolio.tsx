"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
    { id: "other", name: "Other Services" },
  ];

const HomePortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sliderRef = useRef<Slider>(null);

  // Filter projects based on selected category
  const filteredProjects = projects.filter(project => 
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (  
    <section className="bg-[#111111] py-20   px-4 sm:px-18 relative">
      <div className="container mx-auto">
      <div className="text-center mb-20">
        <span className="inline-block px-3 py-1 bg-[#9f193f]/10 text-[#9f193f] rounded-full text-sm font-medium mb-4">Our Portfolio</span>
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#fff] mb-6">Featured Projects</h2>
        <p className="text-[16px] text-gray-600 max-w-2xl mx-auto">
          Take a look at our recent work. We pride ourselves on delivering high-quality solutions 
          that exceed our clients&apos; expectations.
        </p>
      </div>

        {/* Category Selector */}
        
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-6  my-10">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => {
                setSelectedCategory(category.id);
                if (sliderRef.current) {
                  sliderRef.current.slickGoTo(0);
                }
              }}
            >
              <span
                className={`text-sm md:text-base font-semibold ${
                  selectedCategory === category.id ? "text-[#9F193F]" : "text-[#fff]"
                }`}
              >
                {`0${index + 1}`}{" "}
                <span className={`${selectedCategory === category.id ? "text-[#9F193F]" : ""}`}>
                  {category.name}
                </span>
              </span>

              <div
                className={`w-6 h-6 border-2 rounded-full mt-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "border-[#9F193F] bg-[#111111]"
                    : "border-gray-200"
                }`}
              ></div>
            </div>
          ))}
      
        </div>
        {/* Carousel */}
        {filteredProjects.length > 0 ? (
          <Slider {...settings} ref={sliderRef}>
            {filteredProjects.map((project) => (
            <div key={project.id} className="w-full">
            <div className="step-content relative px-4 py-6 sm:py-8">
              {/* Background box */}
              <div className="hidden md:block glass-effect absolute right-0 p-8 w-[60%] h-[80%] rounded-[30px] rounded-b-full"></div>
          
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8 relative z-10">
                {/* Image Section */}
                <div className="md:col-span-7 mt-0 sm:mt-10 h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-[30px] overflow-hidden border border-[#9F193F]/50  p-4 sm:p-6 glass-effect">
                  <div className="relative w-full h-full rounded-[30px] overflow-hidden ">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-[30px]"
                    />
                  </div>
                </div>
          
                {/* Text Section */}
                <div className="md:col-span-5">
                  <h2 className="text-[#fff] text-2xl sm:text-3xl font-bold">{project.title}</h2>
                  <p className="text-sm sm:text-base text-white mt-4">{project.description}</p>
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, i) => (
                        <li className="text-[#fff]" key={i}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            ))}
          </Slider>
        ) : (
          <div className="text-center py-10">
            <p className="text-[#04213F] text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePortfolio;
