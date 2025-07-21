"use client";
import React, { useState, useEffect } from 'react';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import Button from '@/ui/Button/Button';
import { motion } from 'framer-motion';
import { AlertCircle, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import CalendlyWidget from '../CalendlyWidget';

const CTA = () => {
  const [state, handleSubmit] = useForm("xblypodo");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const customSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (!formData.name || !formData.email || !formData.company || !formData.service || !formData.message) {
        alert("Please fill out all fields");
        return;
      }
      
      e.preventDefault();
      setLoading(true);
      const formEl = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formEl.append(key, value);
      });
      await handleSubmit(formEl);
      setLoading(false);

    } catch (error: unknown) {
      setLoading(false);
      console.log("Error in submitting form", error);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] py-20 px-8 md:px-16 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#9f193f] opacity-10 animate-pulse"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#9f193f] opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 rounded-full bg-[#9f193f] opacity-10 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9f193f] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f193f] to-[#c42155]">
                Cutting-Edge Technology?
              </span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Let&apos;s discuss how our tailored IT solutions can help your business grow, 
              increase efficiency, and stay ahead of the competition in today&apos;s digital world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Free Consultation", icon: "🔍", desc: "No-cost initial assessment" },
                { label: "Tailored Solutions", icon: "🔧", desc: "Custom-built for your needs" },
                { label: "Competitive Pricing", icon: "💰", desc: "Transparent cost structure" },
                { label: "Ongoing Support", icon: "🛡️", desc: "24/7 technical assistance" }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-2xl mr-3 mt-1">{item.icon}</span>
                  <div>
                    <span className="text-white font-semibold block">{item.label}</span>
                    <span className="text-gray-400 text-sm">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="flex flex-wrap gap-5"
            >
              <div className="" onClick={() => setIsOpen(true)}>

              <PrimaryButton text='Get Consultation'/>
              </div>
              <Button />
            </div>
          </motion.div>
          
          {/* Enhanced Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 relative overflow-hidden">
              {/* Form Header Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-2 rounded-full font-bold shadow-lg">
                Contact Us
              </div>
              
              {/* Success/Error Messages */}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-medium">Please check the form for errors.</span>
                </motion.div>
              )}

              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              
              <form onSubmit={customSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                                              className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-[#9f193f] focus:ring-[#9f193f]/50 text-white placeholder-gray-400`}
                      placeholder="John Doe"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address *</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                                              className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-[#9f193f] focus:ring-[#9f193f]/50 text-white placeholder-gray-400`}
                      placeholder="john@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">Company Name *</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-[#9f193f] focus:ring-[#9f193f]/50 text-white placeholder-gray-400`}
                    placeholder="Your Company"
                  />
                  <ValidationError 
                    prefix="Company" 
                    field="company"
                    errors={state.errors}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">Service You&apos;re Interested In *</label>
                  <select 
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-[#9f193f] focus:ring-[#9f193f]/50 text-white`}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app-development">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="seo-services">SEO Services</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="other">Other Services</option>
                  </select>
                  <ValidationError 
                    prefix="Service" 
                    field="service"
                    errors={state.errors}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Your Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 border-white/20 focus:border-[#9f193f] focus:ring-[#9f193f]/50 text-white placeholder-gray-400 resize-none`}
                    placeholder="Tell us about your project, requirements, and goals..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white py-4 rounded-lg font-semibold hover:from-[#8a1636] hover:to-[#b31e4a] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#111111]/70 z-50 transition">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">🎉 Message Sent!</h2>
            <p className="mb-6">Thanks for contacting us. We&apos;ll get back to you soon.</p>
            <button onClick={closePopup} className="bg-[#111111] text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CTA; 