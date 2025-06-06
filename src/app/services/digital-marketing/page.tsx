import React from 'react'
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import FAQSection from '@/components/generic/faq/FAQSection'

import MarketingWhyChooseUs from '@/components/services/digital-marketing/MarketingWhyChooseUs'
import MarketingOurServices from '@/components/services/digital-marketing/MarketingOurServices'
import MarketingPortfolio from '@/components/services/digital-marketing/MarketingPortfolio'
import { marketingSuccessStoriesData } from '@/utils/marketing-success-stories'
import DigitalMarketingServices from '@/components/services/digital-marketing/DigitalMarketingServices'
import DMProcess from '@/components/services/digital-marketing/DMProcess'
import DigitalMarketingLanding from '@/components/services/digital-marketing/DigitalMarketingLanding'

const marketingTools = {
  interactiveTechs: {
    analytics: { 
      name: "Google Analytics",
      icon: "/icons/google-analytics.svg",
      label: "Google Analytics",
      short: "GA",
      description: "Web analytics service"
    },
    semrush: { 
      name: "SEMrush",
      icon: "/icons/semrush.svg",
      label: "SEMrush",
      short: "SR",
      description: "SEO and marketing analytics"
    },
    ahrefs: { 
      name: "Ahrefs",
      icon: "/icons/ahrefs.svg",
      label: "Ahrefs",
      short: "AH",
      description: "SEO tools and backlink checker"
    },
    hubspot: { 
      name: "HubSpot",
      icon: "/icons/hubspot.svg",
      label: "HubSpot",
      short: "HS",
      description: "Marketing automation platform"
    },
    mailchimp: { 
      name: "Mailchimp",
      icon: "/icons/mailchimp.svg",
      label: "Mailchimp",
      short: "MC",
      description: "Email marketing platform"
    },
    metaAds: { 
      name: "Meta Ads",
      icon: "/icons/meta-ads.svg",
      label: "Meta Ads",
      short: "MA",
      description: "Social media advertising"
    },
    googleAds: { 
      name: "Google Ads",
      icon: "/icons/google-ads.svg",
      label: "Google Ads",
      short: "GA",
      description: "PPC advertising platform"
    },
    hootsuite: { 
      name: "Hootsuite",
      icon: "/icons/hootsuite.svg",
      label: "Hootsuite",
      short: "HS",
      description: "Social media management"
    }
  },
  techCategories: [
    {
      title: "Analytics Tools",
      description: "Tools for tracking and analyzing marketing performance",
      items: ["analytics", "semrush"]
    },
    {
      title: "SEO Tools",
      description: "Tools for improving search engine visibility",
      items: ["ahrefs", "semrush"]
    },
    {
      title: "Social Media Management",
      description: "Tools for managing social media presence",
      items: ["hootsuite", "metaAds"]
    },
    {
      title: "Email Marketing",
      description: "Tools for email campaign management",
      items: ["mailchimp", "hubspot"]
    },
    {
      title: "Advertising Platforms",
      description: "Platforms for paid advertising campaigns",
      items: ["googleAds", "metaAds"]
    }
  ]
};

const marketingTestimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechGrowth Solutions",
    project: "Digital Marketing Campaign",
    role: "Client",
    feedback: "The digital marketing strategies implemented by the team resulted in a 150% increase in our organic traffic and a significant boost in lead generation.",
    image: "/testimonials/sarah.jpg",
    logo: "/companies/techgrowth.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "E-commerce Manager",
    company: "Global Retail Co",
    project: "E-commerce Marketing",
    role: "Client",
    feedback: "Their data-driven approach to digital marketing helped us optimize our campaigns and achieve a 200% ROI on our advertising spend.",
    image: "/testimonials/michael.jpg",
    logo: "/companies/globalretail.svg"
  },
  {
    id: 3,
    name: "Emma Williams",
    position: "CEO",
    company: "StartUp Innovate",
    project: "Brand Growth",
    role: "Client",
    feedback: "The team's expertise in social media marketing and content strategy has been instrumental in building our brand presence and engaging our target audience.",
    image: "/testimonials/emma.jpg",
    logo: "/companies/startup.svg"
  }
];

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer a comprehensive suite of digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, and analytics. Our strategies are tailored to meet your specific business goals and target audience."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We use various metrics and KPIs including website traffic, conversion rates, ROI, engagement rates, and lead generation. We provide detailed monthly reports with actionable insights and recommendations for continuous improvement."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "Results vary depending on the strategies implemented and your industry. While some tactics like PPC can show immediate results, others like SEO typically take 3-6 months to show significant improvements. We set realistic expectations and provide regular progress updates."
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer: "Yes, we create fully customized marketing strategies based on your business goals, target audience, industry, and budget. Our approach is data-driven and adaptable to ensure optimal results for your specific needs."
  },
  {
    question: "How do you stay updated with digital marketing trends?",
    answer: "Our team continuously undergoes training and certification programs, attends industry conferences, and stays current with the latest digital marketing trends and algorithm updates to ensure we deliver cutting-edge solutions."
  }
];

const page = () => {
  return (
    <div>
      <DigitalMarketingLanding />
      <MarketingWhyChooseUs />
      <DigitalMarketingServices />
      <MarketingOurServices />
      <SuccessStory data={marketingSuccessStoriesData} />
      <DMProcess />
     
      <GenericTechStack
        interactiveTechs={marketingTools.interactiveTechs}
        techCategories={marketingTools.techCategories}
        title="Powered by Industry-Leading Marketing Tools"
        subtitle="We leverage the best digital marketing tools to drive results for your business."
      />
      <MarketingPortfolio />
      <GenericTestimonialsSlider
        title="What Our Digital Marketing Clients Say"
        testimonials={marketingTestimonials}
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
