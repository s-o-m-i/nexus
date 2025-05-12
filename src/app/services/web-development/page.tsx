import React from 'react'
import CallToAction from '@/components/home/CallToAction'
import WDPortfolio from '@/components/services/web-development/WDPortfolio'
import WebDevelopment from '@/components/services/web-development/WebDevelopment'
import WPFAQS from '@/components/services/web-development/WPFAQS'
import WPForMultiChannel from '@/components/services/web-development/WPForMultiChannel'
import WPOurServices from '@/components/services/web-development/WPOurServices'
import WPProcess from '@/components/services/web-development/WPProcess'
import WPWhyChooseUs from '@/components/services/web-development/WPWhyChooseUs'
import { webDevSuccessStoriesData } from '../../../utils/wd-success-stories'
import { webDevTestimonials } from '../../../utils/web-dev-testimonials'
import { interactiveTechs, techCategories } from "../../../utils/web-development-generic-tech-data"
import SuccessStory from '@/components/SuccessStory'
import GenericTechStack from '@/components/GenericTechStack'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'
const page = () => {
  return (
    <div>
      <WebDevelopment />
      <WPWhyChooseUs />
      {/* <WPIdeal/> */}
      <WPOurServices />
      <SuccessStory data={webDevSuccessStoriesData} />
      <WPForMultiChannel />
      <WPProcess />
      <GenericTechStack
        interactiveTechs={interactiveTechs}
        techCategories={techCategories}
        title="Crafted with the Best Tech"
        subtitle="Here’s the technology stack we use to build powerful digital experiences."
      />
      <WDPortfolio />
      <GenericTestimonialsSlider
        title="What Our Mobile App Clients Say"
        testimonials={webDevTestimonials}
      />
      <WPFAQS />
      <CallToAction desc='Join us in your digital journey and be the next success story!' />
    </div>
  )
}

export default page
