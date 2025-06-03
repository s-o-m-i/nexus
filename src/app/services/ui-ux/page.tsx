import React from 'react'
import UiUxServices from '@/components/services/ui-ux-design/UiUxServices'
import { uiUxSuccessStoriesData } from '@/utils/ui-ux-success-stories'
import { uiUxTestimonials } from '@/utils/ui-ux-testimonials'
import { interactiveTechs, techCategories } from "@/utils/ui-ux-generic-tech-data"
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import UXWhyChooseUs from '@/components/services/ui-ux-design/UXWhyChooseUs'
import UXOurServices from '@/components/services/ui-ux-design/UXOurServices'
import UXProcess from '@/components/services/ui-ux-design/UXProcess'
import UXPortfolio from '@/components/services/ui-ux-design/UXPortfolio'
import FAQSection from '@/components/generic/faq/FAQSection'

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

const page = () => {
  return (
    <div>
      <UiUxServices />
      <UXWhyChooseUs />
      <UXOurServices />
      <SuccessStory data={uiUxSuccessStoriesData} />
      <UXProcess />
      <GenericTechStack
        interactiveTechs={interactiveTechs}
        techCategories={techCategories}
        title="Designed with Industry-Leading Tools"
        subtitle="Here's the design toolkit we use to create exceptional user experiences."
      />
      <UXPortfolio />
      <GenericTestimonialsSlider
        title="What Our UI/UX Design Clients Say"
        testimonials={uiUxTestimonials}
      />
      <FAQSection
    title="Questions & Answers"
    subtitle="Frequently Asked"
    headingHighlight="Questions"
    faqs={faqs}
    showContact={true}
  />
      {/* <CallToAction desc='Transform your digital presence with our expert UI/UX design services!' /> */}
    </div>
  )
}

export default page
