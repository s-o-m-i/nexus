import React from 'react';
import LandingPage from './LandingPage';
import CTA from './CTA';
import CallToAction from './CallToAction';
import Recognized from './Recognized';
import TestimonialsSlider from '../about/TestimonialsSlider';
import InfiniteSliders from './InfiniteSliders';
import GlobalDigitalMarketing from './GlobalDigitalMarketing';
import WhatDrivesUs from './WhatDrivesUs';
import OurServices from './OurServices';
import WhyChooseDevMola from './WhyChooseDevMola';
import HowWePlan from './HowWePlan';
import ProjectsStats from './ProjectsStats';
import BusinessNextLevel from './BusinessNextLevel';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
    
      <InfiniteSliders/>
      <GlobalDigitalMarketing/>
      <WhatDrivesUs/>
      <OurServices/>
      <WhyChooseDevMola/>
      <HowWePlan/>
      <ProjectsStats/>
      <BusinessNextLevel/>
      {/* <AboutCompany/> */}
      {/* <HomeServices/> */}
      {/* <SuccessStories/> */}
      <TestimonialsSlider/>
      <Recognized/>
        <CallToAction/>
      <CTA />
    </div>
  );
};

export default HomePage; 