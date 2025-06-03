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

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <AboutCompany/>
      <HomeServices/>
      <WhyUs />
      <SuccessStories/>
      {/* <WayOfBuildingTwo/> */}
      {/* <WayOfBuilding/> */}
      {/* <OurTeam/> */}
      
      <Portfolio />
      <Testimonials />
      <CallToAction/>
      <CTA />
    </div>
  );
};

export default HomePage; 