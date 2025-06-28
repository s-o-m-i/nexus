import React from 'react';
import LandingPage from './LandingPage';
import WhyUs from './WhyUs';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import CTA from './CTA';
import AboutCompany from './AboutCompany';
import CallToAction from './CallToAction';

import HomeServices from './HomeServices';
import SuccessStories from './SuccessStories';  
import Recognized from './Recognized';
import TestimonialsSlider from '../about/TestimonialsSlider';
import HomePortfolio from './HomePortfolio';
import FAQSection from '../generic/faq/FAQSection';
import { HomeFaqs } from '@/utils/home-page-faqs';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <Recognized/>
      <AboutCompany/>
      <HomeServices/>
      {/* <WhyUs /> */}
      <HomePortfolio/>
      <SuccessStories/>
      {/* <WayOfBuildingTwo/> */}
      {/* <WayOfBuilding/> */}
      {/* <OurTeam/> */}
      
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <TestimonialsSlider/>
      <FAQSection
        title="Questions & Answers"
        subtitle="Frequently Asked"
        headingHighlight="Questions"
        faqs={HomeFaqs}
        showContact={true}
      />
      <CallToAction/>
      <CTA />
    </div>
  );
};

export default HomePage; 