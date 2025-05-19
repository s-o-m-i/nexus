"use client"
import React from 'react'
import CallToAction from '@/components/home/CallToAction'
import SeoServices from '@/components/services/seo-services/SeoServices'
import SeoWhyChooseUs from '@/components/services/seo-services/SeoWhyChooseUs'
import SeoOurServices from '@/components/services/seo-services/SeoOurServices'
import SeoProcess from '@/components/services/seo-services/SeoProcess'
import SeoPortfolio from '@/components/services/seo-services/SeoPortfolio'
import SeoFAQS from '@/components/services/seo-services/SeoFAQS'
import { seoSuccessStoriesData } from '@/utils/seo-success-stories'
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import { convertInteractiveTechs, convertTechCategories } from '@/utils/tech-data-adapter'
import { convertSeoTestimonials } from '@/utils/testimonials-adapter'

const Page = () => {
  // Convert the data formats to match the component requirements
  const adaptedInteractiveTechs = convertInteractiveTechs();
  const adaptedTechCategories = convertTechCategories();
  const adaptedTestimonials = convertSeoTestimonials();

  return (
    <div>
      <SeoServices />
      <SeoWhyChooseUs />
      <SeoOurServices />
      <SuccessStory data={seoSuccessStoriesData} />
      <SeoProcess />
      <GenericTechStack
        interactiveTechs={adaptedInteractiveTechs}
        techCategories={adaptedTechCategories}
        title="Our SEO Tools & Technologies"
        subtitle="We leverage cutting-edge technologies to deliver exceptional SEO results for your business."
      />
      <SeoPortfolio />
      <GenericTestimonialsSlider
        title="What Our SEO Clients Say"
        testimonials={adaptedTestimonials}
      />
      <SeoFAQS />
      <CallToAction desc='Ready to boost your online visibility? Partner with us for expert SEO services!' />
    </div>
  )
}

export default Page 