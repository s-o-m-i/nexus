import React from 'react'
import CallToAction from '@/components/home/CallToAction'
import WDPortfolio from '@/components/services/web-development/WDPortfolio'
import WebDevelopment from '@/components/services/web-development/WebDevelopment'
import WPOurServices from '@/components/services/web-development/WPOurServices'
import WPProcess from '@/components/services/web-development/WPProcess'
import WPWhyChooseUs from '@/components/services/web-development/WPWhyChooseUs'
import { webDevSuccessStoriesData } from '../../../utils/wd-success-stories'
import { webDevTestimonials } from '../../../utils/web-dev-testimonials'
import { interactiveTechs, techCategories } from "../../../utils/web-development-generic-tech-data"
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import FAQSection from '@/components/generic/faq/FAQSection'

const faqs = [
  {
      question: "What types of web development services do you offer?",
      answer: "We offer comprehensive web development services including custom website development, e-commerce solutions, web applications, progressive web apps (PWAs), content management systems (CMS), and API integrations. We work with both frontend and backend technologies to deliver complete solutions."
  },
  {
      question: "How long does it take to develop a website?",
      answer: "The development timeline varies based on the project complexity and requirements. A basic website might take 4-6 weeks, while complex web applications could take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific needs."
  },
  {
      question: "Do you provide website maintenance and support after launch?",
      answer: "Yes, we offer comprehensive post-launch support including regular maintenance, security updates, performance optimization, content updates, and technical support. We also monitor website performance and make necessary improvements."
  },
  {
      question: "What technologies do you use for web development?",
      answer: "We use modern web technologies including React, Next.js, Node.js, and other cutting-edge frameworks. Our tech stack is chosen based on project requirements to ensure optimal performance, scalability, and maintainability."
  },
  {
      question: "How do you ensure website security and performance?",
      answer: "We implement robust security measures including SSL certificates, secure authentication, regular security audits, and data encryption. For performance, we optimize code, images, and database queries, implement caching strategies, and ensure fast loading times across all devices."
  }
];

const page = () => {
  return (
    <div>
      <WebDevelopment />
      <WPWhyChooseUs />
      {/* <WPIdeal/> */}
      <WPOurServices />
      <WPProcess />
      <SuccessStory data={webDevSuccessStoriesData} />
      {/* <Name /> */}
      <GenericTechStack
        interactiveTechs={interactiveTechs}
        techCategories={techCategories}
        title="Built with Industry-Leading Technologies"
        subtitle="Here's the technology stack we use to build powerful web applications."
      />
      <WDPortfolio />
      <GenericTestimonialsSlider
        title="What Our Web Development Clients Say"
        testimonials={webDevTestimonials}
      />
      <FAQSection
        title="Questions & Answers"
        subtitle="Frequently Asked"
        headingHighlight="Questions"
        faqs={faqs}
        showContact={true}
      />
      <CallToAction desc='Join us in your digital journey and be the next success story!' />
    </div>
  )
}

export default page
