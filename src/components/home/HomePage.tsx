"use client"
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "devmola",
  alternateName: "devmola",
  url: "https://devmola.com",
    logo: "https://devmola.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-312-3456789",
      contactType: "Customer Support",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"]
    }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://devmola.com",
  "name": "DevMola"
}

const HomePage = () => {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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
    </>
  );
};

export default HomePage; 