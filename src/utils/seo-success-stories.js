import { FaChartLine, FaStore, FaBuilding } from 'react-icons/fa';

export const seoSuccessStoriesData = [
    {
        title: 'E-commerce Success Story',
        id: 1,
        image: '/images/portfolio/someOne.jpg',
        description: 'XYZ Mobile Innovations is a mobile app development company that specializes in creating innovative and user-friendly mobile applications.',
        metrics: [
            { label: 'Downloads', value: '100,000+' },
            { label: 'Active Users', value: '50,000+' },
            { label: 'Rating', value: '4.8/5' },
        ],
        tags: ['Technical SEO', 'Content Strategy'],
        icon: <FaStore className="text-white text-xl" />,
        challenge:
            'A leading e-commerce platform was struggling with poor organic visibility and declining sales. They needed a comprehensive SEO strategy to improve their search rankings and drive more qualified traffic.',
        solution:
            'We implemented a holistic SEO approach, including technical optimization, content enhancement, and internal linking structure improvements. Our strategy focused on optimizing product pages and category structures while building quality backlinks.',
        ctaText: 'Read Full Story',
        ctaLink: '/success-stories/ecommerce-seo',
    },
    {
        id: 2,
        image: '/images/portfolio/someOne.jpg',
        description: 'XYZ Mobile Innovations is a mobile app development company that specializes in creating innovative and user-friendly mobile applications.',
        metrics: [
            { label: 'Downloads', value: '100,000+' },
            { label: 'Active Users', value: '50,000+' },
            { label: 'Rating', value: '4.8/5' },
        ],
        title: 'SaaS Growth Story',
        tags: ['Enterprise SEO', 'Content Marketing'],
        icon: <FaChartLine className="text-white text-xl" />,
        challenge:
            'A B2B SaaS company was struggling to generate qualified leads through organic search and had limited visibility in their target market.',
        solution:
            'We developed a comprehensive SEO strategy focusing on high-intent keywords, technical optimization, and thought leadership content. This resulted in improved rankings for key terms and a significant increase in qualified leads.',
        ctaText: 'Read Full Story',
        ctaLink: '/success-stories/saas-seo',
    },
    {
        id: 3,
        image: '/images/portfolio/someOne.jpg',
        description: 'XYZ Mobile Innovations is a mobile app development company that specializes in creating innovative and user-friendly mobile applications.',
        metrics: [
            { label: 'Downloads', value: '100,000+' },
            { label: 'Active Users', value: '50,000+' },
            { label: 'Rating', value: '4.8/5' },
        ],
        title: 'Real Estate Agency Growth',
        tags: ['Local SEO', 'Content Strategy'],
        icon: <FaBuilding className="text-white text-xl" />,
        challenge:
            'A real estate agency needed to improve their local search visibility and generate more property inquiries in a highly competitive market.',
        solution:
            'We implemented a local SEO strategy focusing on location-specific keywords, Google Business Profile optimization, and local content creation. This led to improved local rankings and increased property inquiries.',
        ctaText: 'Read Full Story',
        ctaLink: '/success-stories/realestate-seo',
    }
]; 