import React from 'react';
import { graphicDesignServicesData } from '@/utils/graphic-design-services';
import GenericDevelopmentProcess from '@/components/GenericDevelopmentProcess';
const GraphicDesignOurServices = () => {
  return (
    <GenericDevelopmentProcess processSteps={graphicDesignServicesData} title='Graphic Design Services' subtitle='Our graphic design services are designed to help you create a visual identity that stands out and resonates with your audience. We offer a range of services to suit your needs, from logo design to full-scale branding campaigns.' />
  );
};

export default GraphicDesignOurServices; 