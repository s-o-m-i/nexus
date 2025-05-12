import {
    FaMobileAlt,
    FaCogs,
    FaRocket,
    FaSyncAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaCalendarAlt,
    FaCommentDots,
  } from 'react-icons/fa';
  import {
    MdPhoneIphone,
    MdDesignServices,
    MdIntegrationInstructions,
    MdUpdate,
    MdOutlineSecurity,
    MdOutlineAnalytics,
    MdQuestionAnswer,
    MdOutlineSupportAgent,
    MdFlashOn,
  } from 'react-icons/md';
  import { BsPersonCheck } from 'react-icons/bs';
  import { HiOutlineLightBulb } from 'react-icons/hi';
  import { TbDeviceMobileCode } from 'react-icons/tb';
  import { RiTestTubeLine } from 'react-icons/ri';
  
  export const mobileAppWhyChooseUs = [
    {
      title: 'Seamless User Experience',
      description:
        'We prioritize user-centric design and development, ensuring that your mobile app delivers an intuitive and delightful experience for your users.',
      icon: <FaMobileAlt size={24} />,
    },
    {
      title: 'Platform Expertise',
      description:
        'Our team specializes in developing mobile apps for iOS and Android platforms, utilizing the latest technologies and best practices to create high-performance, native or cross-platform solutions.',
      icon: <MdPhoneIphone size={24} />,
    },
    {
      title: 'Customized Solutions',
      description:
        'We understand that your app needs to align with your unique business goals and requirements. Our development process is tailored to deliver a fully customized mobile app that caters specifically to your needs.',
      icon: <FaCogs size={24} />,
    },
    {
      title: 'Scalability and Future-Proofing',
      description:
        'Our mobile apps are built with scalability in mind, allowing your app to grow alongside your business and adapt to future technology advancements.',
      icon: <MdOutlineAnalytics size={24} />,
    },
    {
      title: 'Ongoing Support and Maintenance',
      description:
        'We provide reliable support and maintenance services, ensuring that your mobile app remains up-to-date, secure, and optimized for superior performance.',
      icon: <MdUpdate size={24} />,
    },
    {
        title: 'Rapid Development and Deployment',
        description:
          'Through agile methodologies and efficient workflows, we ensure quick turnaround times from concept to launch—without compromising on quality or performance.',
        icon: <MdFlashOn size={24} />,
      },
  ];
  
  export const mobileAppDevelopmentProcess = [
    {
      title: 'Mobile App Strategy and Consulting',
      description:
        'We begin by understanding your vision and business goals, creating a strategic roadmap to deliver your app idea successfully.',
      icon: <HiOutlineLightBulb size={24} />,
    },
    {
      title: 'UI/UX Design',
      description:
        'Our designers craft engaging and user-friendly interfaces that align with user behavior and expectations across all platforms.',
      icon: <MdDesignServices size={24} />,
    },
    {
      title: 'Native or Cross-Platform Development',
      description:
        'We build robust, scalable apps using technologies best suited for your needs — whether native (iOS/Android) or cross-platform.',
      icon: <TbDeviceMobileCode size={24} />,
    },
    {
      title: 'Backend Development and API Integration',
      description:
        'We develop powerful backend systems and seamlessly integrate third-party APIs to support your mobile app functionality.',
      icon: <MdIntegrationInstructions size={24} />,
    },
    {
      title: 'Testing and Quality Assurance',
      description:
        'Our QA team rigorously tests the app for performance, security, and usability to ensure a bug-free launch.',
      icon: <RiTestTubeLine size={24} />,
    },
  ];
  