"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Send, Loader2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsNewsletterSubmitting(true);
    setNewsletterStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_NEWSLETTER_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
          subject: 'Newsletter Subscription',
          message: 'New newsletter subscription request'
        }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 5000);
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('error');
    } finally {
      setIsNewsletterSubmitting(false);
    }
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
    if (contactErrors[name]) {
      setContactErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateContactForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!contactForm.name.trim()) newErrors.name = 'Name is required';
    if (!contactForm.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!contactForm.subject.trim()) newErrors.subject = 'Subject is required';
    if (!contactForm.message.trim()) newErrors.message = 'Message is required';

    setContactErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateContactForm()) return;

    setIsContactSubmitting(true);
    setContactStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_CONTACT_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
        }),
      });

      if (response.ok) {
        setContactStatus('success');
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setContactStatus('idle'), 5000);
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    } finally {
      setIsContactSubmitting(false);
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9f193f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9f193f]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-8 md:px-16 pt-16 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Footer Logo and Slogan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
              DevMola
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#9f193f] to-[#c42155]"></span>
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mt-6 text-lg">
              Innovative IT solutions crafted to transform your business and drive success in the digital world.
            </p>
            
            <div className="flex justify-center space-x-6 mt-8">
              <motion.a 
                href="#" 
                className="group h-12 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155] hover:from-white hover:to-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-white group-hover:text-[#9f193f] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="group h-12 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155] hover:from-white hover:to-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-white group-hover:text-[#9f193f] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="group h-12 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155] hover:from-white hover:to-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-white group-hover:text-[#9f193f] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772a4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="group h-12 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155] hover:from-white hover:to-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-white group-hover:text-[#9f193f] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Enhanced Newsletter Subscription */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl mb-16 shadow-2xl border border-white/20"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 lg:mr-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
                <p className="text-gray-300 text-lg">Subscribe to our newsletter for the latest news, updates and special offers.</p>
              </div>
              
              {/* Newsletter Status Messages */}
              {newsletterStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Successfully subscribed!</span>
                </motion.div>
              )}
              
              {newsletterStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address" 
                  className="px-4 py-3 w-full lg:w-64 bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#9f193f] focus:border-[#9f193f] transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  disabled={isNewsletterSubmitting}
                  className="bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-3 rounded-r-lg hover:from-[#8a1636] hover:to-[#b31e4a] transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isNewsletterSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-8 md:px-16 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155]"></span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We provide cutting-edge technology solutions to help businesses thrive in the digital landscape.
              With expertise spanning web development, mobile apps, and cloud computing, our team delivers
              tailored solutions that meet your unique needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#9f193f]" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#9f193f]" />
                <span className="text-gray-300">info@devmola.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#9f193f] mt-1" />
                <span className="text-gray-300">
                  123 Innovation Drive<br />
                  Tech District, TX 75001
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Contact Us" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-white hover:underline transition-colors duration-300 flex items-center group">
                    <span className="text-[#9f193f] mr-2 group-hover:translate-x-1 transition-transform duration-300">›</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155]"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/mobile-app-development", label: "Mobile App Development" },
                { href: "/services/ui-ux", label: "UI/UX Design" },
                { href: "/services/digital-marketing", label: "Digital Marketing" },
                { href: "/services/seo", label: "SEO Services" }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={service.href} className="text-gray-300 hover:text-white hover:underline transition-colors duration-300 flex items-center group">
                    <span className="text-[#9f193f] mr-2 group-hover:translate-x-1 transition-transform duration-300">›</span>
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#9f193f] to-[#c42155]"></span>
            </h3>
            
            {/* Contact Status Messages */}
            {contactStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm">Message sent successfully!</span>
              </motion.div>
            )}
            
            {contactStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactInputChange}
                  placeholder="Your Name *" 
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f193f] focus:border-[#9f193f] text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                {contactErrors.name && <p className="text-red-400 text-xs mt-1">{contactErrors.name}</p>}
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactInputChange}
                  placeholder="Your Email *" 
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f193f] focus:border-[#9f193f] text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                {contactErrors.email && <p className="text-red-400 text-xs mt-1">{contactErrors.email}</p>}
              </div>
              
              <div>
                <input 
                  type="text" 
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactInputChange}
                  placeholder="Subject *" 
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f193f] focus:border-[#9f193f] text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
                {contactErrors.subject && <p className="text-red-400 text-xs mt-1">{contactErrors.subject}</p>}
              </div>
              
              <div>
                <textarea 
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactInputChange}
                  placeholder="Your Message *" 
                  rows={3}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9f193f] focus:border-[#9f193f] text-white placeholder-gray-400 resize-none transition-all duration-300"
                  required
                ></textarea>
                {contactErrors.message && <p className="text-red-400 text-xs mt-1">{contactErrors.message}</p>}
              </div>
              
              <button 
                type="submit" 
                disabled={isContactSubmitting}
                className="w-full bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white py-2 rounded-lg font-medium hover:from-[#8a1636] hover:to-[#b31e4a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isContactSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Section */}
      <div className="bg-gradient-to-r from-[#9f193f]/20 to-[#c42155]/20 py-6 border-t border-white/10">
        <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-sm mb-4 md:mb-0">
            © {currentYear} <span className="text-white font-medium">DevMola</span>. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-300 hover:text-white text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
