// GlassCard.tsx
import React from "react";

const GlassCard = () => {
  return (
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-lg p-10 w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          We'd love to hear from you. Fill out the form and our team will get back to you.
        </p>
        <form className="space-y-4">
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
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
          <textarea
            rows={3}
            placeholder="Message"
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          ></textarea>
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
