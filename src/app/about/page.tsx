import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import WayAreWeUnique from '@/components/about/WayAreWeUnique';
import OurStory from '@/components/about/OurStory';
// import TestimonialsSlider from '../../components/about/TestimonialsSlider';
// import BelieveSection from '@/components/about/BelieveSection';
import CallToAction from '@/components/home/CallToAction';
import Hello from '@/components/about/Hello';

export const metadata = {
  title: 'About Us | TechNexus',
  description: 'Learn about TechNexus - our story, mission, values and the team behind our innovative IT solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory/>
      <Hello/>
  
      
      <WayAreWeUnique />
      <CallToAction/>
      {/* <OurJourney /> */}
      {/* <OurTeam /> */}
    </div>
  );
} 