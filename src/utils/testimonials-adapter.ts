import { seoTestimonials } from './seo-testimonials';

export const convertSeoTestimonials = () => {
  return seoTestimonials.map((testimonial, index) => {
    // Extract company name from position string (e.g., "Marketing Director, E-commerce Retailer")
    const positionParts = testimonial.position.split(',');
    const role = positionParts[0].trim();
    const company = positionParts.length > 1 ? positionParts[1].trim() : 'Company';
    
    return {
      id: index + 1,
      project: testimonial.name,
      role: role,
      company: company,
      feedback: testimonial.quote,
      logo: testimonial.img
    };
  });
}; 