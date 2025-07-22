'use client'
import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const OurServices = () => {
  const container = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

 

  const services = [
    {
      id: 1,
      icon: "🎯",
      title: "SEO",
      subtitle: "SEO Services That Drive Real Results",
      description: "At Devmola, we go beyond basic rankings — we deliver strategic SEO solutions tailored to your business goals. Our process begins with deep competitor analysis, keyword research, and market trend insights to build a strong foundation.",
      details: "Using advanced SEO tools and data-driven strategies, we optimize your website to rank higher, attract qualified traffic, and reach your ideal audience organically. From on-page and technical SEO to high-quality content and link building, every step is focused on long-term visibility and growth.",
      cta: "Get found by the right people — at the right time — with Devmola's expert SEO services.",
      features: ["Competitor Analysis", "Keyword Research", "On-Page SEO", "Technical SEO", "Content Optimization", "Link Building"]
    },
    {
      id: 2,
      icon: "💻",
      title: "Website Development",
      subtitle: "Custom Website Development Tailored for Growth",
      description: "At Devmola, we build high-performance, scalable websites using the latest technologies. From custom MERN stack development (React.js, Next.js, Node.js, Express.js, MongoDB) to modern UI libraries like Tailwind CSS, Chakra UI, Material UI, and Bootstrap — we craft fast, secure, and user-friendly digital experiences.",
      details: "Whether you need a sleek WordPress site, a conversion-driven Shopify store, or a full B2B/B2C platform, our team delivers tailored solutions that match your business needs.",
      cta: "Build smarter, scale faster — with Devmola's expert web development services.",
      features: ["MERN Stack", "WordPress", "Shopify", "React.js", "Next.js", "Custom Solutions"]
    },
    {
      id: 3,
      icon: "📱",
      title: "Mobile App Development",
      subtitle: "Mobile App Development for iOS & Android",
      description: "Take your business mobile with Devmola's custom app development services. We design and build high-performance Android and iOS applications that are fast, intuitive, and tailored to your brand.",
      details: "Whether you need a sleek consumer app, a powerful business tool, or a cross-platform solution, our expert developers use the latest frameworks to deliver apps that perform flawlessly across devices.",
      cta: "Turn your app idea into reality with Devmola's mobile development expertise.",
      features: ["iOS Development", "Android Development", "Cross-Platform", "UI/UX Design", "Testing", "Deployment"]
    },
    {
      id: 4,
      icon: "🎨",
      title: "UI/UX Design",
      subtitle: "Creative UI/UX Design That Delivers Impact",
      description: "At Devmola, we blend creativity with usability to craft user-centric UI/UX designs that captivate and convert. Whether it's a website, mobile app, or custom software, our design team focuses on intuitive interfaces, smooth user flows, and stunning visuals.",
      details: "We follow modern design principles using tools like Figma, Adobe XD, and Sketch to ensure pixel-perfect layouts, responsive designs, and seamless user experiences.",
      cta: "Enhance user satisfaction and engagement with Devmola's expert UI/UX design solutions.",
      features: ["Wireframing", "Prototyping", "User Research", "Figma", "Adobe XD", "Responsive Design"]
    },
    {
      id: 5,
      icon: "🖌️",
      title: "Graphic Design & Branding",
      subtitle: "Graphic Design & Branding That Makes You Stand Out",
      description: "At Devmola, we bring your brand to life through creative graphic design that communicates, connects, and converts. From professional logo design to complete brand identity kits, we craft visuals that leave a lasting impression.",
      details: "Our services include business card design, brochures, social media graphics, banners, and more — all tailored to your brand's voice and audience.",
      cta: "Build a strong visual identity with Devmola's expert branding and graphic design services.",
      features: ["Logo Design", "Brand Identity", "Business Cards", "Social Media Graphics", "Brochures", "Banners"]
    },
    {
      id: 6,
      icon: "📱",
      title: "Social Media Marketing",
      subtitle: "Social Media Marketing That Builds Real Connections",
      description: "At Devmola, we turn your social media channels into powerful growth engines. Our data-driven social media marketing strategies help businesses build brand awareness, engage with the right audience, and drive conversions across platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
      details: "From content creation and creative visuals to campaign management, hashtag strategies, and paid ads, we handle every aspect with precision.",
      cta: "Grow faster, engage smarter — with Devmola's social media marketing expertise.",
      features: ["Content Creation", "Campaign Management", "Hashtag Strategy", "Paid Ads", "Community Management", "Analytics"]
    },
    {
      id: 7,
      icon: "💰",
      title: "Advertising",
      subtitle: "High-Converting Ads on Google, Facebook, Instagram & More",
      description: "At Devmola, we specialise in performance-driven advertising across major platforms — including Google Ads, Facebook & Instagram Ads, TikTok, and YouTube.",
      details: "Our experts create laser-targeted ad campaigns designed to maximise ROI, boost visibility, and drive real conversions. From search and display ads to video ads, retargeting, and sales funnel optimisation, we manage it all.",
      cta: "Reach the right people at the right time — with Devmola's expert ad campaign management.",
      features: ["Google Ads", "Facebook Ads", "Instagram Ads", "TikTok Ads", "YouTube Ads", "Retargeting"]
    },
    {
      id: 8,
      icon: "✍️",
      title: "Content Creation",
      subtitle: "Content Creation That Captures Attention & Converts",
      description: "At Devmola, we create impactful, purpose-driven content that tells your brand story and drives engagement. From SEO-optimized blog posts, website content, and product descriptions to captivating social media captions, scripts, and ad copy — we deliver content that works.",
      details: "Our content strategies are built to boost visibility, connect emotionally with your audience, and support your business goals across all platforms.",
      cta: "Engage, rank, and convert — with Devmola's expert content creation services.",
      features: ["Blog Posts", "Website Content", "Product Descriptions", "Social Media Captions", "Ad Copy", "Scripts"]
    },
    {
      id: 9,
      icon: "📧",
      title: "Email Marketing",
      subtitle: "Email Marketing That Nurtures, Converts, and Retains",
      description: "At Devmola, we help you turn emails into a powerful revenue channel. Our strategic email marketing campaigns are designed to build relationships, boost conversions, and increase customer retention.",
      details: "From welcome series and product launches to newsletter campaigns, abandoned cart recovery, and automated drip sequences, we craft personalized emails that drive action.",
      cta: "Stay top-of-mind and grow your business with Devmola's results-driven email marketing solutions.",
      features: ["Welcome Series", "Product Launches", "Newsletter Campaigns", "Abandoned Cart Recovery", "Drip Sequences", "A/B Testing"]
    },
    {
      id: 10,
      icon: "🎬",
      title: "Video Editing",
      subtitle: "Professional Video Editing That Tells Your Story",
      description: "At Devmola, we transform raw footage into powerful, engaging videos that captivate your audience and amplify your brand. Whether it's for social media, YouTube, ads, corporate promos, or product showcases, our video editing services bring your vision to life.",
      details: "We handle everything from cutting, transitions, color correction, motion graphics, and subtitling to sound design and visual effects, ensuring a polished, professional final product.",
      cta: "Make your content stand out with Devmola's expert video editing services.",
      features: ["Video Cutting", "Transitions", "Color Correction", "Motion Graphics", "Sound Design", "Visual Effects"]
    }
  ];

  const handleCardHover = (cardId: number) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div ref={container}>
      <section id="our-services" className="py-20 px-8 md:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-service absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full blur-xl"></div>
          <div className="floating-service absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#9f193f]/15 to-transparent rounded-full blur-xl"></div>
          <div className="floating-service absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-[#111111]/10 to-transparent rounded-full blur-xl"></div>
          <div className="floating-service absolute bottom-40 right-1/3 w-20 h-20 bg-gradient-to-br from-[#9f193f]/20 to-transparent rounded-full blur-xl"></div>
          <div className="floating-service absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-[#9f193f]/5 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20 services-hero">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <span>⚡</span>
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] font-bold text-[#111111] mb-6">
              Your Strategic Partner in{' '}
              <span className="gradient-text bg-gradient-to-r from-[#9f193f] via-[#c42155] to-[#9f193f] bg-[length:200%_auto] bg-clip-text text-transparent">
                Digital Success
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              At Devmola, we&apos;re not just a digital marketing agency — we&apos;re your strategic partner in success. Driven by innovation and powered by data, we help businesses like yours enhance online visibility, connect with the right audience, and achieve measurable growth across all digital platforms.
            </p>
            <div className="bg-gradient-to-r from-[#9f193f]/10 to-[#c42155]/10 p-6 rounded-2xl border border-[#9f193f]/20">
              <p className="text-[#111111] font-semibold">
                Every strategy we create is personalised, performance-focused, and designed to drive real results, not just traffic.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 mb-20">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#9f193f]/30 overflow-hidden cursor-pointer"
                onMouseEnter={() => handleCardHover(service.id)}
                onMouseLeave={handleCardLeave}
                style={{
                  transform: hoveredCard === service.id ? 
                    `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg) scale(1.05)` : 
                    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {/* Lightning Effect */}
                {hoveredCard === service.id && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      left: `${mousePosition.x}px`,
                      top: `${mousePosition.y}px`,
                      transform: 'translate(-50%, -50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      filter: 'blur(20px)',
                      animation: 'lightning 0.5s ease-out'
                    }}
                  />
                )}

                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9f193f]/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="bg-gradient-to-br from-[#9f193f] to-[#c42155] w-14 h-14 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#9f193f] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-[#9f193f] rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-xs text-[#9f193f] font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover overlay with full content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/95 to-[#c42155]/95 text-white p-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold mb-2">{service.subtitle}</h4>
                      <p className="text-sm leading-relaxed mb-3">{service.details}</p>
                      <p className="text-xs font-semibold italic">{service.cta}</p>
                    </div>
                    <div className="text-xs text-white/80">
                      Click to learn more →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-[#111111] to-[#2d2d2d] p-12 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9f193f]/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-4">
                Partner with Devmola
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Unlock the full potential of your digital presence with proven marketing solutions that fuel growth, visibility, and long-term success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://wa.me/923705614842">
                <button className="bg-gradient-to-r from-[#9f193f] to-[#c42155] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Get Started Today
                </button></a>
                <Link href="/portfolio">
                <button className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                  View Our Portfolio
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes lightning {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0); }
            50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
          }
        `}</style>
      </section>
    </div>
  );
};

export default OurServices; 