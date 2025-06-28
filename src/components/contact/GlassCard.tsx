import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';

const GlassCard = () => {
  const [state, handleSubmit] = useForm("xblypodo");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    message: "",
    source: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        service: "",
        message: "",
        source: "",
      });
    }
  }, [state.succeeded]);

  const closePopup = () => {
    setShowPopup(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const customSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.website || !formData.service || !formData.message || !formData.source) {
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

    } catch (error: any) {
      setLoading(false);
      console.log("Error in submitting form", error);
    }
  };

  return (
    <>
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-lg p-4 sm:p-10 w-full text-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">We&apos;d love to hear from you. Fill out the form and our team will get back to you.</p>

        <form className="space-y-4" onSubmit={customSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input id="name" name="name" type="text" value={formData.name} onChange={onChange} placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input required id="email" name="email" type="email" value={formData.email} onChange={onChange} placeholder="Email" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={onChange} placeholder="Phone Number" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} />

            <input id="company" name="company" type="text" value={formData.company} onChange={onChange} placeholder="Company" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <ValidationError prefix="Company" field="company" errors={state.errors} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input id="website" name="website" type="text" value={formData.website} onChange={onChange} placeholder="Website URL" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
            <ValidationError prefix="Website" field="website" errors={state.errors} />

            <select required name="service" id="service" value={formData.service} onChange={onChange} className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40">
              <option disabled className=" text-white p-2 rounded-full bg-[#fff] border-none " value="">Select a service</option>
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="web">Web Development</option>
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="mobile">Mobile App Development</option> 
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="ui">UI/UX Design</option>
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="digital">Digital Marketing</option> 
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="cloud">Cloud Solutions</option>
              <option className=" text-black p-2 rounded-full bg-[#fff] border-none " value="other">Other Services</option>
            </select>
            <ValidationError prefix="Service" field="service" errors={state.errors} />
          </div>

          <textarea required id="message" name="message" rows={3} value={formData.message} onChange={onChange} placeholder="Please provide a description of your need or project" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <input required id="source" name="source" type="text" value={formData.source} onChange={onChange} placeholder="How did you hear about us?" className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40" />
          <ValidationError prefix="Source" field="source" errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
       {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* 🎉 Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#111111]/70 z-50 transition">
          <div className="bg-white text-black p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">🎉 Message Sent!</h2>
            <p className="mb-6">Thanks for contacting us. We’ll get back to you soon.</p>
            <button onClick={closePopup} className="bg-[#111111] text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GlassCard;
