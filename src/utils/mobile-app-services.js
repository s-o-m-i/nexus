import { FaAndroid, FaPencilRuler, FaTabletAlt } from "react-icons/fa";
import { MdBugReport, MdCloudUpload, MdPhoneIphone, MdSupportAgent } from "react-icons/md";

export const mobileAppServices = [
    {
      title: 'iOS App Development',
      description:
        'We design and develop robust, scalable, and user-friendly applications for iPhones and iPads using Swift, Objective-C, and Apple’s latest frameworks.',
      icon: <MdPhoneIphone size={24} />,
    },
    {
      title: 'Android App Development',
      description:
        'Our team builds high-performance Android apps using Java and Kotlin, tailored to run seamlessly across a wide range of Android devices.',
      icon: <FaAndroid size={24} />,
    },
    {
      title: 'Cross-Platform App Development',
      description:
        'Using frameworks like React Native and Flutter, we create apps that deliver native performance and experience across both iOS and Android platforms.',
      icon: <FaTabletAlt size={24} />,
    },
    {
      title: 'Hybrid App Development',
      description:'We build cost-effective hybrid apps using web and native technologies, ensuring consistent performance and user experience across multiple platforms.',
      icon: <FaPencilRuler size={24} />,
    },
    {
        title: 'Native App Development',
        description:
          'We develop high-performance native apps for iOS and Android, leveraging platform-specific features to deliver seamless user experiences and optimal performance.',
        icon: <MdCloudUpload size={24} />,
      },
    {
      title: 'App Testing & QA',
      description:
        'Comprehensive quality assurance and testing services to identify bugs, ensure smooth performance, and guarantee a flawless user experience.',
      icon: <MdBugReport size={24} />,
    },
    {
      title: 'App Maintenance & Support',
      description:
        'We offer ongoing maintenance and support to keep your app updated, secure, and compatible with the latest OS versions and devices.',
      icon: <MdSupportAgent size={24} />,
    },
    {
      title: 'App Store Deployment',
      description:
        'From preparing app store assets to managing submission and compliance, we handle the entire deployment process for both the App Store and Google Play.',
      icon: <MdCloudUpload size={24} />,
    },
   
  ];
  