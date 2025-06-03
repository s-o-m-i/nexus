import { FaChartBar, FaMobileAlt } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

export const webDevSuccessStoriesData = [
  {
    id: 1,
    image: '/images/portfolio/someOne.jpg',
    description: 'XYZ Mobile Innovations is a mobile app development company that specializes in creating innovative and user-friendly mobile applications.',
    metrics: [
        { label: 'Downloads', value: '100,000+' },
        { label: 'Active Users', value: '50,000+' },
        { label: 'Rating', value: '4.8/5' },
    ],
    title: 'ABC Tech Solutions',
    tags: ['E-commerce', 'Web Design & Development'],
    icon: <FaChartBar className="text-white text-xl" />,
    challenge:
      'ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.',
    solution:
      'Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/abc-tech',
  },
    {
    id: 2,
    image: '/images/portfolio/someOne.jpg',
    description: 'FinServe Inc. is a financial services company that specializes in providing innovative and user-friendly mobile banking applications.',
    metrics: [
        { label: 'Downloads', value: '100,000+' },
        { label: 'Active Users', value: '50,000+' },
        { label: 'Rating', value: '4.8/5' },
    ],
    title: 'FinServe Inc.',
    tags: ['Finance', 'iOS App Development'],
    icon: <MdPhoneIphone className="text-white text-xl" />,
    challenge:
      'FinServe required a secure and high-performance mobile banking app for iOS with advanced encryption and real-time analytics.',
    solution:
      'We developed a fully native iOS application using Swift, incorporating biometric authentication, real-time transaction updates, and industry-standard encryption protocols to ensure top-level security and performance.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/finserve',
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
    title: 'XYZ Mobile Innovations',
    tags: ['Mobile App', 'Cross-Platform Development'],
    icon: <FaMobileAlt className="text-white text-xl" />,
    challenge:
      'XYZ needed a cost-effective way to launch their app on both iOS and Android without maintaining two separate codebases.',
    solution:
      'We built a cross-platform mobile application using React Native, delivering native-like performance and a unified user experience. This allowed them to go to market faster and reduced long-term development costs.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/xyz-mobile',
  },
  {
    id: 4,
    image: '/images/portfolio/someOne.jpg',
    description: 'XYZ Mobile Innovations is a mobile app development company that specializes in creating innovative and user-friendly mobile applications.',
    metrics: [
        { label: 'Downloads', value: '100,000+' },
        { label: 'Active Users', value: '50,000+' },
        { label: 'Rating', value: '4.8/5' },
    ],
    title: 'XYZ Mobile Innovations',
    tags: ['Mobile App', 'Cross-Platform Development'],
    icon: <FaMobileAlt className="text-white text-xl" />,
    challenge:
      'XYZ needed a cost-effective way to launch their app on both iOS and Android without maintaining two separate codebases.',
    solution:
      'We built a cross-platform mobile application using React Native, delivering native-like performance and a unified user experience. This allowed them to go to market faster and reduced long-term development costs.',
    ctaText: 'Read Full Story',
    ctaLink: '/success-stories/xyz-mobile',
  } 
];
