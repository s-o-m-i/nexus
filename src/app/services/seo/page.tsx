import React from 'react'
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import FAQSection from '@/components/generic/faq/FAQSection'
import SEOServices from '@/components/services/seo/SEOServices'

import { seoSuccessStoriesData } from '@/utils/seo-success-stories'
import SeoWhyChooseUs from '@/components/services/seo-services/SeoWhyChooseUs'
import SeoOurServices from '@/components/services/seo-services/SeoOurServices'
import SeoProcess from '@/components/services/seo-services/SeoProcess'
import SeoPortfolio from '@/components/services/seo-services/SeoPortfolio'


const seoTools = {
  interactiveTechs: {
    ahrefs: { 
      name: "Ahrefs",
      icon: "/icons/ahrefs.svg",
      label: "Ahrefs",
      short: "AH",
      description: "Comprehensive SEO toolset"
    },
    semrush: { 
      name: "SEMrush",
      icon: "/icons/semrush.svg",
      label: "SEMrush",
      short: "SR",
      description: "SEO and marketing analytics"
    },
    moz: { 
      name: "Moz Pro",
      icon: "/icons/moz.svg",
      label: "Moz Pro",
      short: "MZ",
      description: "SEO software and tools"
    },
    screaming: { 
      name: "Screaming Frog",
      icon: "/icons/screaming-frog.svg",
      label: "Screaming Frog",
      short: "SF",
      description: "SEO spider tool"
    },
    google: { 
      name: "Google Search Console",
      icon: "/icons/google-search-console.svg",
      label: "Search Console",
      short: "GSC",
      description: "Website performance in search"
    },
    analytics: { 
      name: "Google Analytics",
      icon: "/icons/google-analytics.svg",
      label: "Analytics",
      short: "GA",
      description: "Web analytics service"
    },
    majestic: { 
      name: "Majestic SEO",
      icon: "/icons/majestic.svg",
      label: "Majestic",
      short: "MJ",
      description: "Backlink analysis tool"
    },
    yoast: { 
      name: "Yoast SEO",
      icon: "/icons/yoast.svg",
      label: "Yoast",
      short: "YO",
      description: "WordPress SEO plugin"
    }
  },
  techCategories: [
    {
      title: "Research Tools",
      description: "Tools for keyword and competitor research",
      items: ["ahrefs", "semrush"]
    },
    {
      title: "Technical SEO",
      description: "Tools for technical analysis and optimization",
      items: ["screaming", "moz"]
    },
    {
      title: "Analytics & Tracking",
      description: "Tools for monitoring performance",
      items: ["google", "analytics"]
    },
    {
      title: "Link Building",
      description: "Tools for backlink analysis and outreach",
      items: ["majestic", "ahrefs"]
    },
    {
      title: "Content Optimization",
      description: "Tools for content analysis and improvement",
      items: ["yoast", "semrush"]
    }
  ]
};

const seoTestimonials = [
  {
    id: 1,
    name: "David Thompson",
    position: "E-commerce Director",
    company: "Global Shop",
    project: "E-commerce SEO",
    role: "Client",
    feedback: "The SEO strategies implemented by the team resulted in a 200% increase in organic traffic and a significant boost in online sales revenue.",
    image: "/testimonials/david.jpg",
    logo: "/companies/globalshop.svg"
  },
  {
    id: 2,
    name: "Lisa Chen",
    position: "Marketing Manager",
    company: "Tech Solutions Inc",
    project: "Technical SEO",
    role: "Client",
    feedback: "Their technical SEO expertise helped us resolve complex issues and improve our search visibility. Our organic rankings improved dramatically.",
    image: "/testimonials/lisa.jpg",
    logo: "/companies/techsolutions.svg"
  },
  {
    id: 3,
    name: "James Wilson",
    position: "CEO",
    company: "Local Business Hub",
    project: "Local SEO",
    role: "Client",
    feedback: "The team's local SEO strategies helped us dominate local search results. We've seen a 150% increase in local customer inquiries.",
    image: "/testimonials/james.jpg",
    logo: "/companies/localbusiness.svg"
  }
];

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in organic search results. It's important because it helps drive targeted traffic to your website, increases brand awareness, and can provide long-term sustainable results."
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy, typically taking 4-6 months to see significant results. However, this can vary depending on factors like competition, current website status, and target keywords. We provide regular progress reports to track improvements."
  },
  {
    question: "What SEO services do you offer?",
    answer: "We offer comprehensive SEO services including technical SEO, on-page optimization, content strategy, link building, local SEO, and e-commerce SEO. Our approach is customized to meet your specific business goals and target audience."
  },
  {
    question: "How do you measure SEO success?",
    answer: "We track multiple metrics including organic traffic growth, keyword rankings, conversion rates, backlink quality, and ROI. We provide detailed monthly reports with actionable insights and recommendations."
  },
  {
    question: "Do you follow Google's guidelines?",
    answer: "Yes, we strictly adhere to Google's webmaster guidelines and best practices. Our SEO strategies are focused on sustainable, white-hat techniques that provide long-term results without risking penalties."
  }
];

const page = () => {
  return (
    <div>
      <SEOServices />
      <SeoWhyChooseUs />
      <SeoOurServices />
      <SuccessStory data={seoSuccessStoriesData} />
      <SeoProcess />
      <GenericTechStack
        interactiveTechs={seoTools.interactiveTechs}
        techCategories={seoTools.techCategories}
        title="Powered by Industry-Leading SEO Tools"
        subtitle="We leverage the best SEO tools and technologies to improve your search visibility."
      />
      <SeoPortfolio />
      <GenericTestimonialsSlider
        title="What Our SEO Clients Say"
        testimonials={seoTestimonials}
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

export default page 