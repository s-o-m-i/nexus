import React from 'react';
import PrimaryButton from '@/ui/PrimaryButton/PrimaryButton';
import Button from '@/ui/Button/Button';

const CTA = () => {
  return (
    <div className="relative bg-[#9f193f] py-20 px-8 md:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#9f193f] opacity-10"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#9f193f] opacity-10"></div>
        <div className="absolute right-1/4 bottom-1/4 w-40 h-40 rounded-full bg-[#9f193f] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business with Cutting-Edge Technology?
            </h2>
            <p className="text-gray-200 mb-8">
              Let&apos;s discuss how our tailored IT solutions can help your business grow, 
              increase efficiency, and stay ahead of the competition in today&apos;s digital world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { label: "Free Consultation", icon: "🔍" },
                { label: "Tailored Solutions", icon: "🔧" },
                { label: "Competitive Pricing", icon: "💰" },
                { label: "Ongoing Support", icon: "🛡️" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-5">
              <PrimaryButton text='Get Consultation'/>
              <Button />
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="absolute -top-4 -right-4 bg-[#28536B] text-white px-6 py-2 rounded-full font-bold shadow-md">
              Contact Us
            </div>
            <h3 className="text-2xl font-bold text-[#28536B] mb-6">Get Started Today</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]" 
                  placeholder="Your Company"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-gray-700 mb-2">Service You&apos;re Interested In</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="ui">UI/UX Design</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#28536B] text-white py-3 rounded-lg font-medium hover:bg-[#9f193f] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Submit Request
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA; 