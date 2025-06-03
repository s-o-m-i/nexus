import React from 'react'
import { mobileAppDevSuccessStoriesData } from '@/utils/md-success-stories'
import { mobileTestimonials } from '@/utils/mobile-testimonials'
import { interactiveTechs, techCategories } from "@/utils/mobile-app-generic-tech-data"
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'


import FAQSection from '@/components/generic/faq/FAQSection'
import MobilePortfolio from '@/components/services/mobileAppDevelopment/MobilePortfolio'
import MobileAppDevelopment from '@/components/services/mobileAppDevelopment/MobileAppDevelopment'
import MobileWhyChooseUs from '@/components/services/mobileAppDevelopment/MobileWhyChooseUs'
import MobileOurServices from '@/components/services/mobileAppDevelopment/MobileOurServices'
import MobileProcess from '@/components/services/mobileAppDevelopment/MobileProcess'

const faqs = [
  {
      question: "What platforms do you develop mobile apps for?",
      answer: "We develop apps for both iOS and Android platforms using native development as well as cross-platform solutions like React Native and Flutter. The choice of platform depends on your specific requirements and target audience."
  },
  {
      question: "How long does it take to develop a mobile app?",
      answer: "The development timeline varies based on the complexity and features of your app. A basic app might take 2-3 months, while a complex application could take 4-6 months or more. We'll provide a detailed timeline during our initial consultation."
  },
  {
      question: "Do you provide ongoing support after app launch?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. We also help with app store optimization and regular maintenance."
  },
  {
      question: "How do you ensure app security?",
      answer: "We implement industry-standard security measures including data encryption, secure authentication, regular security audits, and compliance with platform-specific security guidelines. We also follow best practices for protecting user data."
  },
  {
      question: "Can you help with app store submission?",
      answer: "Yes, we handle the entire app store submission process for both Apple App Store and Google Play Store. This includes preparing necessary documentation, optimizing store listings, and ensuring compliance with store guidelines."
  }
];

const Page = () => {
  return (
    <div>
      <MobileAppDevelopment />
      <MobileWhyChooseUs />
      <MobileOurServices />
      <MobileProcess />
      <SuccessStory data={mobileAppDevSuccessStoriesData} />
      <GenericTechStack
        interactiveTechs={interactiveTechs}
        techCategories={techCategories}
        title="Built with Industry-Leading Technologies"
        subtitle="Here's the technology stack we use to build powerful mobile applications."
      />
      <MobilePortfolio />
      <GenericTestimonialsSlider
        title="What Our Mobile App Clients Say"
        testimonials={mobileTestimonials}
      />
      <FAQSection
        title="Questions & Answers"
        subtitle="Frequently Asked"
        headingHighlight="Questions"
        faqs={faqs}
        showContact={true}
      />
    </div>
  )
}

export default Page