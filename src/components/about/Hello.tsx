"use client"
import dynamic from 'next/dynamic';
import React from 'react'
import AboutServices from './AboutServices';
import CoreValues from './CoreValues';
const TestimonialsSlider = dynamic(() => import('./TestimonialsSlider'), {
  ssr: false,
});
const BelieveSection = dynamic(() => import('./BelieveSection'), {
  ssr: false,
});
const Hello = () => {
  return (
    <>
      <BelieveSection />
      <AboutServices />
      <CoreValues />
      <TestimonialsSlider /></>
  )
}

export default Hello