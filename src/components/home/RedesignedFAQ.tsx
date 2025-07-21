"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const RedesignedFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What services does Devmola offer?",
      answer: "Devmola provides a complete suite of digital solutions including SEO, social media marketing, Google & Facebook ads, website development (custom, WordPress, Shopify), mobile app development, UI/UX design, content creation, branding, and video editing."
    },
    {
      id: 2,
      question: "Do you offer custom digital marketing packages?",
      answer: "Yes! Every business has unique needs, so we offer both fixed packages and fully customized marketing plans tailored to your goals, industry, and budget."
    },
    {
      id: 3,
      question: "How long does it take to see results from SEO or digital marketing?",
      answer: "SEO typically starts showing noticeable results in 3 to 6 months, depending on competition and your current online presence. Paid advertising and social media campaigns can deliver quicker outcomes, often within days or weeks."
    },
    {
      id: 4,
      question: "Can you redesign or optimize my existing website?",
      answer: "Absolutely! We offer both full website redesigns and optimization services for existing websites to improve performance, speed, SEO, and user experience."
    },
    {
      id: 5,
      question: "Do you work with businesses outside of Pakistan?",
      answer: "Yes, Devmola serves clients globally. Whether you're in the UAE, UK, USA, Canada, or anywhere else, we're fully equipped to manage your digital marketing remotely and efficiently."
    },
    {
      id: 6,
      question: "How do I get started with Devmola?",
      answer: "It's easy! Just contact us through our website or book a free consultation. We'll discuss your goals, assess your needs, and suggest a strategy tailored specifically to your business."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "03305870851",
      action: "Call Now",
      href: "tel:03305870851"
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
      value: "03305870851",
      action: "Chat Now",
      href: "https://wa.me/03305870851"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section >
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
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-8 h-8 text-[#9F193F] mr-3" />
            <span className="inline-block px-4 py-2 bg-[#9F193F]/10 text-[#9F193F] rounded-full text-sm font-medium">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="text-[#9F193F]">Questions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services and how we can help grow your business
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#9F193F] transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-[#9F193F] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#9F193F]/20 to-[#c42155]/20 backdrop-blur-sm border border-[#9F193F]/30 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We&apos;re here to help with any questions you may have about our services. 
              Get in touch with our expert team today.
            </p>
          </div>

       

          {/* CTA Button */}
          {/* <div className="text-center">
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-[#9F193F] to-[#c42155] text-white font-semibold rounded-lg hover:from-[#c42155] hover:to-[#9F193F] transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto">
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default RedesignedFAQ; 