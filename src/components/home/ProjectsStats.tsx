"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  BarChart3,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  ExternalLink,
  Eye,
  ArrowRight
} from 'lucide-react';
import Modal from '@/components/ui/Modal';
import Link from 'next/link';

// Project interface
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  duration: string;
  status: string;
}

const ProjectsStats = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high ratings from our clients",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      number: "15+",
      label: "Years Experience",
      description: "Deep expertise in digital solutions",
      icon: Trophy,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance",
      icon: Clock,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const projectCategories = [
    {
      id: 1,
      category: "Web Development",
      count: 250,
      icon: Code,
      description: "Modern, responsive websites and web applications",
      color: "from-[#9F193F] to-[#c42155]"
    },
    {
      id: 2,
      category: "Mobile Apps",
      count: 180,
      icon: Smartphone,
      description: "Native and cross-platform mobile applications",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      category: "UI/UX Design",
      count: 120,
      icon: Palette,
      description: "User-centered design solutions",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 4,
      category: "Digital Marketing",
      count: 95,
      icon: BarChart3,
      description: "Data-driven marketing strategies",
      color: "from-green-600 to-teal-600"
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing'];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/images/portfolio/projectOne.jpg",
      description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "TechCorp Industries",
      duration: "3 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      image: "/images/portfolio/projectTwo.jpg",
      description: "Cross-platform mobile application for fitness tracking with AI-powered workout recommendations and social features.",
      technologies: ["React Native", "Firebase", "TensorFlow", "AWS"],
      client: "FitLife Solutions",
      duration: "4 months",
      status: "Completed"
    },
    {
      id: 3,
      title: "Banking Dashboard",
      category: "UI/UX Design",
      image: "/images/portfolio/projectThree.jpg",
      description: "Comprehensive banking dashboard with intuitive user interface and advanced data visualization capabilities.",
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      client: "Global Bank",
      duration: "2 months",
      status: "Completed"
    },
    {
      id: 4,
      title: "Marketing Campaign",
      category: "Digital Marketing",
      image: "/images/portfolio/projectFour.png",
      description: "Multi-channel digital marketing campaign that increased client's online presence by 300% and generated 500+ leads.",
      technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
      client: "StartupXYZ",
      duration: "6 months",
      status: "Ongoing"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Web Development",
      image: "/images/portfolio/projectOne.jpg",
      description: "Comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "Cloudinary"],
      client: "RealEstate Pro",
      duration: "5 months",
      status: "Completed"
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile Apps",
      image: "/images/portfolio/projectTwo.jpg",
      description: "Food delivery application with real-time tracking, multiple payment options, and restaurant management system.",
      technologies: ["Flutter", "Node.js", "Redis", "Google Maps"],
      client: "FoodExpress",
      duration: "4 months",
      status: "Completed"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#9F193F]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#9F193F]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium mb-6">
            Our Achievements
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects by the Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the impact we&apos;ve made through our successful project deliveries and client partnerships
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#9F193F] transition-colors duration-300">
                      {stat.number}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Categories Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Categories
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our expertise spans across multiple domains, delivering excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-4`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-[#9F193F] transition-colors duration-300">
                      {category.count}+
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {category.category}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-[#9F193F]/20 to-[#c42155]/20 backdrop-blur-sm border border-[#9F193F]/30 rounded-3xl p-8 md:p-12 mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Success Metrics That Matter
            </h3>
            <p className="text-gray-300">
              Our commitment to excellence is reflected in these key performance indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#9F193F] mb-2">99.8%</div>
              <div className="text-white font-semibold mb-2">Project Success Rate</div>
              <div className="text-gray-400 text-sm">Consistently delivering on time and within budget</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#9F193F] mb-2">4.9/5</div>
              <div className="text-white font-semibold mb-2">Average Client Rating</div>
              <div className="text-gray-400 text-sm">Exceptional feedback from satisfied clients</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#9F193F] mb-2">85%</div>
              <div className="text-white font-semibold mb-2">Repeat Client Rate</div>
              <div className="text-gray-400 text-sm">Clients choose us for their ongoing projects</div>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium mb-6">
              Featured Projects
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Latest Work
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across different industries and technologies
            </p>
          </div>

          {/* Category Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#9F193F] to-[#c42155] text-white shadow-lg shadow-[#9F193F]/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleOpenModal(project)}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 relative">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#9F193F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(project);
                        }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </motion.button>
                      {/* <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // You can add external link functionality here
                          console.log('External link clicked for:', project.title);
                        }}
                        className="p-3 bg-[#9F193F] rounded-full hover:bg-[#c42155] transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.button> */}
                    </div>
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 z-30">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-[#9F193F] font-medium">{project.category}</span>
                      <span className="text-sm text-gray-400">{project.duration}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#9F193F] transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded-md border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded-md border border-white/10">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Client and CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Client: {project.client}</span>
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenModal(project);
                        }}
                        className="flex items-center gap-2 text-[#9F193F] hover:text-[#c42155] transition-colors duration-300 text-sm font-medium"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Projects CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#9F193F] to-[#c42155] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#9F193F]/25 transition-all duration-300"
              >

              View All Projects
              <ArrowRight className="w-5 h-5" />
            </motion.button>
              </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedProject.title}>
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Description */}
            <div>
              <h3 className="text-lg font-semibold text-[#fff] mb-2">Project Overview</h3>
              <p className="text-white">{selectedProject.description}</p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#fff] mb-2">Project Details</h3>
                <div className="space-y-2 text-white">
                  <p><span className="font-medium">Client:</span> {selectedProject.client}</p>
                  <p><span className="font-medium">Duration:</span> {selectedProject.duration}</p>
                  <p><span className="font-medium">Status:</span> 
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {selectedProject.status}
                    </span>
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold text-[#fff] mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#9F1940] text-[#fff] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="text-lg font-semibold text-[#fff] mb-2">Category</h3>
              <span className="px-3 py-1 bg-[#9F1940]/20 text-[#9F1940] rounded-full text-sm font-medium border border-[#9F1940]/30">
                {selectedProject.category}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ProjectsStats; 