import { FaChartBar, FaMobileAlt } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

export const webDevSuccessStoriesData = [
  {
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
];
