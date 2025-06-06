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

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <Recognized/>
      <AboutCompany/>
      <HomeServices/>
      {/* <WhyUs /> */}
      <SuccessStories/>
      <HomePortfolio/>
      {/* <WayOfBuildingTwo/> */}
      {/* <WayOfBuilding/> */}
      {/* <OurTeam/> */}
      
      <Portfolio />
      {/* <Testimonials /> */}
      <TestimonialsSlider/>
      <CallToAction/>
      <CTA />
    </div>
  );
};

export default HomePage; 