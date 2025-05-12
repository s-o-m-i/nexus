import React from 'react'

const ServicesForm = () => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-8 relative max-w-xl mx-auto ">
                <div className="absolute -top-4 -right-4 bg-[#28536B] text-white px-6 py-2 rounded-full font-bold shadow-md">
                    Contact Us
                </div>
                <h3 className="text-2xl font-bold text-[#28536B] mb-6">Book a Free Consultation</h3>
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                placeholder="JYour Name"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                                placeholder="Email Address"
                            />
                        </div>
                    </div>

                

                    <div className="mb-4">
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
                        <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
                            placeholder="Your Message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#28536B] text-[#fff] py-3 rounded-lg font-medium hover:bg-[#9f193f] transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        Submit Request
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </>
  )
}

export default ServicesForm