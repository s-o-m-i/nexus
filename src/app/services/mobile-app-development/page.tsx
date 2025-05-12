import MobileAppDevelopment from '@/components/services/mobileAppDevelopment/MobileAppDevelopment'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
import { mobileAppWhyChooseUs } from '../../../utils/madchooseusdata'
import { mobileAppServices } from '../../../utils/mobile-app-services.js'
import TechServices from '@/components/TechServices'
import { mobileAppDevSuccessStoriesData } from '../../../utils/md-success-stories'
import SuccessStory from '@/components/SuccessStory'
import GenericDevelopmentProcess from '@/components/GenericDevelopmentProcess'
import { mobileAppProcessSteps } from "../../../utils/mobile-app-process-steps"
import { interactiveTechs, techCategories } from "../../../utils/mobile-app-generic-tech-data"
import { mobileProjects } from "../../../utils/mobile-generic-portfolio-projects"
import { mobileTestimonials } from "../../../utils/mobile-testimonials"
import { mobileFAQs } from "../../../utils/mobile-faqs"
import GenericTechStack from '@/components/GenericTechStack'
import GenericPortfolio from '@/components/GenericPortfolio'
import GenericFAQ from '@/components/GenericFAQ'
import CallToAction from '@/components/home/CallToAction'
import GenericTestimonialsSlider from '@/components/GenericTestimonialsSlider'


const page = () => {
    return (
        <>
            <MobileAppDevelopment />
            <WhyChooseUs data={mobileAppWhyChooseUs} service='Mobile App Development' />
            <TechServices data={mobileAppServices} service="Mobile App Development" />
            <SuccessStory data={mobileAppDevSuccessStoriesData} />
            <GenericDevelopmentProcess
                title="Mobile App Development Process"
                subtitle="Our agile approach ensures efficient delivery of user-focused mobile applications."
                processSteps={mobileAppProcessSteps}
            />
            <GenericTechStack
                interactiveTechs={interactiveTechs}
                techCategories={techCategories}
                title="Crafted with the Best Tech"
                subtitle="Here’s the technology stack we use to build powerful digital experiences."
            />
              <GenericPortfolio
      heading="Mobile App Development Portfolio"
      subheading="Check out some of our most recent Web Development projects below."
      items={mobileProjects}
    />

<GenericTestimonialsSlider
      title="What Our Mobile App Clients Say"
      testimonials={mobileTestimonials}
    />

<GenericFAQ
      title="Frequently Asked Questions"
      subtitle="Got questions about our mobile app development services? Explore common queries below."
      faqs={mobileFAQs}
    />
      <CallToAction desc='Join us in your digital journey and be the next success story!' />

    
        </>
    )
}

export default page