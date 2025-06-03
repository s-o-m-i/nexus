import React from 'react';
import { FaChartLine, FaSearchDollar, FaBullhorn } from 'react-icons/fa';
import { SiGoogleads } from 'react-icons/si';

interface SuccessStory {
  id: number;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  title: string;
  tags: string[];
  icon: React.ReactNode;
  challenge: string;
  solution: string;
  ctaText: string;
  ctaLink: string;
}

export const marketingSuccessStoriesData: SuccessStory[] = [
  {
    id: 1,
    title: 'E-commerce Growth Success',
    description: 'Transforming an e-commerce platform through strategic digital marketing initiatives.',
    image: '/images/portfolio/someOne.jpg',
    metrics: [
      { label: 'Traffic Increase', value: '150%' },
      { label: 'Ad ROI', value: '200%' },
      { label: 'Conversion Rate', value: '4.5%' }
    ],
    tags: ['SEO', 'PPC Advertising'],
    icon: <FaChartLine className="text-white text-xl" />,
    challenge:
      'An e-commerce client struggled with low online visibility and poor conversion rates, seeking to improve their digital presence and sales performance.',
    solution:
      'We implemented a comprehensive digital strategy combining SEO optimization and targeted PPC campaigns, resulting in a 150% increase in organic traffic and 200% ROI on ad spend.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/ecommerce-growth'
  },
  {
    id: 2,
    title: 'B2B Lead Generation',
    description: 'Revolutionizing B2B lead generation through content and email marketing.',
    image: '/images/portfolio/someOne.jpg',
    metrics: [
      { label: 'Lead Increase', value: '300%' },
      { label: 'Email Open Rate', value: '45%' },
      { label: 'Conversion Rate', value: '12%' }
    ],
    tags: ['Content Marketing', 'Email Marketing'],
    icon: <FaSearchDollar className="text-white text-xl" />,
    challenge:
      'A B2B company needed to improve their lead generation process and nurture potential clients more effectively.',
    solution:
      'Our team developed a content marketing strategy with automated email nurture campaigns, leading to a 300% increase in qualified leads and 45% email open rate.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/b2b-leads'
  },
  {
    id: 3,
    title: 'Brand Awareness Campaign',
    description: 'Building a strong social media presence and brand awareness in a competitive market.',
    image: '/images/portfolio/someOne.jpg',
    metrics: [
      { label: 'Social Followers', value: '100K+' },
      { label: 'Engagement', value: '500%' },
      { label: 'Brand Mentions', value: '300%' }
    ],
    tags: ['Social Media', 'PPC'],
    icon: <SiGoogleads className="text-white text-xl" />,
    challenge:
      'A startup wanted to increase their brand visibility and establish a strong social media presence in a competitive market.',
    solution:
      'We created a multi-channel social media strategy combined with targeted advertising, resulting in 100K+ followers and 500% increase in engagement.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/brand-awareness'
  },
  {
    id: 4,
    title: 'Local Business Marketing',
    description: 'Helping a local business dominate their market through targeted digital marketing.',
    image: '/images/portfolio/someOne.jpg',
    metrics: [
      { label: 'Local Rankings', value: 'Top 3' },
      { label: 'Store Visits', value: '+85%' },
      { label: 'Reviews', value: '4.8/5' }
    ],
    tags: ['Local SEO', 'Google Ads'],
    icon: <FaBullhorn className="text-white text-xl" />,
    challenge:
      'A local business was struggling to compete with larger chains and needed to improve their local visibility.',
    solution:
      'We implemented a local SEO strategy and targeted Google Ads campaign, resulting in top 3 rankings for key local searches and 85% increase in store visits.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/local-business'
  }
]; 