"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
    {
        id: 1,
        title: "200% increase in organic traffic with our SEO strategy",
        description: "For a major e-commerce client, we implemented a comprehensive SEO strategy that doubled their organic traffic in just 6 months."
    },
    {
        id: 2,
        title: "45% higher conversion rate through CRO implementation",
        description: "Our conversion rate optimization techniques helped a SaaS company increase their sign-up conversion rate by 45%."
    },
    {
        id: 3,
        title: "320% social media engagement growth",
        description: "A strategic social media campaign helped our retail client triple their engagement and increase sales by 27%."
    }
]
const SuccessStories = () => {
    return (
        <div>
            <section id="success-stories" className="py-20 px-4 md:px-16 bg-white overflow-hidden">
            {/* Case Studies with Modern Styling */}
           
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-1 bg-[#9F1940]/10 text-[#9F1940] rounded-md text-sm font-medium">Case Studies</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
                        <p className="text-lg text-gray-600">Real results that demonstrate our expertise and commitment to excellence</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-[#2D5C76] rounded-2xl overflow-hidden">
                                    <div className="p-8 md:p-10">
                                        <div className="mb-6">
                                            <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-md text-sm">Case Study #{study.id}</div>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="md:w-7/12">
                                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{study.title}</h3>
                                                <p className="text-gray-300 mb-6">{study.description}</p>

                                                <Link
                                                    href={`/case-studies/${study.id}`}
                                                    className="inline-flex items-center text-[#fff] hover:text-[#b82d54] transition-colors duration-300"
                                                >
                                                    View case study
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </Link>
                                            </div>

                                            <div className="md:w-5/12 flex flex-col space-y-4">
                                                <div className="bg-white/5 p-4 rounded-xl">
                                                    <div className="text-sm text-gray-400 mb-1">Challenge</div>
                                                    <div className="text-white">Low online visibility and traffic</div>
                                                </div>

                                                <div className="bg-white/5 p-4 rounded-xl">
                                                    <div className="text-sm text-gray-400 mb-1">Solution</div>
                                                    <div className="text-white">Comprehensive SEO strategy implementation</div>
                                                </div>

                                                <div className="bg-white p-4 rounded-xl">
                                                    <div className="text-sm text-[#000] mb-1">Result</div>
                                                    <div className="text-black font-medium">200% increase in organic traffic</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#9F1940]/20 to-transparent rounded-full blur-3xl -mr-32 -mt-32 opacity-30"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#28536B]/20 to-transparent rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
         
        </section>
        </div>
    )
}

export default SuccessStories
