import { FaChartBar, FaMobileAlt } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

export const mobileAppDevSuccessStoriesData = [
    {
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
