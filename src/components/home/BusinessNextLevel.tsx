"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import RedesignedFAQ from './RedesignedFAQ';

const BusinessNextLevel = () => {
  const benefits = [
    {
      icon: Target,
      title: "Custom Strategy",
      description: "Tailored digital marketing plans that align with your specific business goals"
    },
    {
      icon: TrendingUp,
      title: "Real Results",
      description: "Data-driven approaches that deliver measurable growth and ROI"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "923705614842",
      action: "Call Now",
      href: "tel:923705614842"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@devmola.com",
      action: "Send Email",
      href: "mailto:info@devmola.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "923705614842",
      action: "Chat Now",
      href: "https://wa.me/923705614842"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#9F193F]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#9F193F]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#9F193F]/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium mb-6">
            Let&apos;s Grow Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Take Your Business to the{' '}
            <span className="text-[#9F193F]">Next Level?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Looking for a reliable digital marketing partner that delivers real results? 
            Devmola is here to help you grow faster, rank higher, and connect better with your target audience.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a startup, small business, or established brand, our expert team is ready to 
            craft a custom strategy that meets your goals and drives success across every digital channel.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#9F193F] to-[#c42155] w-fit mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#9F193F]/20 to-[#c42155]/20 backdrop-blur-sm border border-[#9F193F]/30 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let&apos;s Turn Your Vision Into Action
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Reach out today and take the first step toward building a powerful online presence with Devmola by your side.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://wa.me/923705614842">
            <PrimaryButton text="Get Started Today" />
            </a>
            <a href="https://wa.me/923705614842">
            <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 flex items-center gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </button>
            </a>
          </div>
        </motion.div>

        <div className="my-16">
        <RedesignedFAQ/>
        </div>

        {/* Contact Methods */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Connect With Us
            </h3>
            <p className="text-gray-300">
              Choose your preferred way to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <a 
                  href={method.href}
                  className="block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[#9F193F] to-[#c42155]">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#9F193F] transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                  <p className="text-[#9F193F] font-medium mb-3">{method.value}</p>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                    {method.action}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#9F193F]" />
              <span className="text-sm">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#9F193F]" />
              <span className="text-sm">98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#9F193F]" />
              <span className="text-sm">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#9F193F]" />
              <span className="text-sm">24/7 Support Available</span>
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
  );
};

export default BusinessNextLevel; 