"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UXFAQS = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the difference between UI and UX design?",
            answer: "UI (User Interface) design focuses on the visual elements and aesthetics of a digital product, while UX (User Experience) design encompasses the entire user journey, including research, wireframing, and usability testing. Both work together to create effective digital solutions."
        },
        {
            question: "How long does a typical UI/UX design project take?",
            answer: "Project timelines vary depending on scope and complexity. A typical project can take 4-12 weeks, including research, design, and testing phases. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
        },
        {
            question: "Do you provide ongoing UI/UX support after project completion?",
            answer: "Yes, we offer ongoing support and maintenance services. This includes user feedback analysis, performance monitoring, and iterative improvements to ensure your digital product continues to meet user needs and business goals."
        },
        {
            question: "How do you ensure the designs are accessible to all users?",
            answer: "We follow WCAG guidelines and accessibility best practices throughout our design process. This includes considerations for color contrast, text sizing, keyboard navigation, screen reader compatibility, and other accessibility features."
        },
        {
            question: "What deliverables can I expect from a UI/UX design project?",
            answer: "Deliverables typically include user research findings, wireframes, user flows, interactive prototypes, visual design assets, and detailed documentation. We also provide design systems and guidelines for consistent implementation."
        }
    ];

    return (
        <section className="py-20 px-8 md:px-16 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#000] mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">
                        Get answers to common questions about our UI/UX design services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between"
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <span className="font-semibold text-[#000]">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 bg-gray-50">
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UXFAQS; 