// GlassCard.tsx
import React from "react";

const GlassCard = () => {
  return (
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-lg p-4 sm:p-10 w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          We'd love to hear from you. Fill out the form and our team will get back to you.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Website URL"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
                        <select
                            id="service"
                          className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
                        >
                            <option value="" className="text-black">Select a service</option>
                            <option value="web" className="text-black">Web Development</option>
                            <option value="mobile" className="text-black">Mobile App Development</option>
                            <option value="ui" className="text-black">UI/UX Design</option>
                            <option value="digital" className="text-black">Digital Marketing</option>
                            <option value="cloud" className="text-black">Cloud Solutions</option>
                            <option value="other" className="text-black">Other Services</option>
                        </select>
          </div>
          
          <textarea
            rows={3}
            placeholder="Please provide a description of your need or project"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          ></textarea>

<input
            type="text"
            placeholder="How did you hear about us?"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default GlassCard;
