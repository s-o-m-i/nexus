"use client"
import React from 'react'
import GraphicDesignServices from '@/components/services/graphic-design/GraphicDesignServices'
import GraphicDesignWhyChooseUs from '@/components/services/graphic-design/GraphicDesignWhyChooseUs'
import GraphicDesignOurServices from '@/components/services/graphic-design/GraphicDesignOurServices'
import GraphicDesignProcess from '@/components/services/graphic-design/GraphicDesignProcess'
import GraphicDesignPortfolio from '@/components/services/graphic-design/GraphicDesignPortfolio'
import GraphicDesignFAQS from '@/components/services/graphic-design/GraphicDesignFAQS'
import { graphicDesignSuccessStoriesData } from '@/utils/graphic-design-success-stories'
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
import { convertInteractiveTechs, convertTechCategories } from '@/utils/graphic-design-tech-adapter'
import { convertGraphicDesignTestimonials } from '@/utils/graphic-design-testimonials-adapter'

const Page = () => {
  // Convert the data formats to match the component requirements
  const adaptedInteractiveTechs = convertInteractiveTechs();
  const adaptedTechCategories = convertTechCategories();
  const adaptedTestimonials = convertGraphicDesignTestimonials();

  return (
    <div>
      <GraphicDesignServices />
      <GraphicDesignWhyChooseUs />
      <GraphicDesignOurServices />
      <SuccessStory data={graphicDesignSuccessStoriesData} />
      <GraphicDesignProcess />
      <GenericTechStack
        interactiveTechs={adaptedInteractiveTechs}
        techCategories={adaptedTechCategories}
        title="Our Design Tools & Software"
        subtitle="We leverage industry-leading design applications to create stunning visuals that elevate your brand."
      />
      <GraphicDesignPortfolio />
      <GenericTestimonialsSlider
        title="What Our Design Clients Say"
        testimonials={adaptedTestimonials}
      />
      <GraphicDesignFAQS />
      {/* <CallToAction desc='Ready to transform your visual identity? Partner with us for expert graphic design services!' /> */}
    </div>
  )
}

export default Page 