import Image from 'next/image'
import React from 'react'
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa'

const OurTeam = () => {
    const teamMembers = [
        {
            name: "James Wilson",
            role: "Lead Developer",
            image: "/images/somi.png",
            bio: "Specialized in full-stack development with over 8 years of experience in building scalable web applications.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "David Chen",
            role: "CEO & Founder",
            image: "/images/dawood.png",
            bio: "Tech visionary with extensive experience in leading innovative IT solutions and strategic growth.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Sarah Johnson",
            role: "UI/UX Designer",
            image: "/images/dawood.png",
            bio: "Creative designer passionate about crafting intuitive user experiences and beautiful interfaces.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        },
        {
            name: "Michael Thompson",
            role: "Backend Developer",
            image: "/images/somi.png",
            bio: "Expert in cloud infrastructure and API development with a focus on security and performance.",
            socials: {
                linkedin: "#",
                twitter: "#",
                github: "#"
            }
        }
    ]

    return (
        <section className="py-20 md:py-28 min-h-screen px-6 md:px-16 bg-[#9f193f] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#FFF8EF] opacity-5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#04213F] opacity-5 rounded-full blur-[80px]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F3A462] opacity-5 rounded-full blur-[100px]"></div>
            
            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <span className="inline-block px-4 py-2 bg-[#FFF8EF] text-[#9f193f] rounded-full text-sm font-semibold mb-4 shadow-sm">Meet Our Experts</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#FFF8EF] mb-6">The Talent Behind <span className="text-[#F3A462]">Our Success</span></h2>
                <p className="text-[#FFF8EF]/80 md:text-lg max-w-3xl mx-auto">
                    Our diverse team of experts combines creativity, technical expertise, and industry knowledge to deliver exceptional results for our clients.
                </p>
                <div className="w-24 h-1 bg-[#F3A462] mx-auto mt-8 rounded-full"></div>
            </div>

            {/* Team Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div 
                        key={index} 
                        className="bg-[#FFF8EF] rounded-4xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="relative h-[300px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#04213F]/80 to-transparent z-10"></div>
                            <Image 
                                src={member.image} 
                                alt={member.name}
                                width={300}
                                height={400}
                                className="object-cover object-top w-full h-full"
                            />
                            
                            {/* Social Links - Visible on Hover */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20 transition-all duration-300 opacity-0 hover:opacity-100">
                                <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f193f] hover:bg-[#9f193f] hover:text-white transition-all duration-300">
                                    <FaLinkedinIn size={18} />
                                </a>
                                <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f193f] hover:bg-[#9f193f] hover:text-white transition-all duration-300">
                                    <FaTwitter size={18} />
                                </a>
                                <a href={member.socials.github} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9f193f] hover:bg-[#9f193f] hover:text-white transition-all duration-300">
                                    <FaGithub size={18} />
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="w-12 h-1 bg-[#F3A462] mb-4 rounded-full"></div>
                            <h3 className="text-xl font-bold text-[#04213F] mb-2">{member.name}</h3>
                            <p className="text-[#9f193f] font-medium mb-3">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
                <div className="bg-[#FFF8EF] max-w-4xl mx-auto rounded-4xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#04213F] mb-4">Interested in joining our team?</h3>
                    <p className="text-gray-600 mb-6">We&apos;re always looking for talented individuals to help us create innovative solutions.</p>
                    <a 
                        href="/careers" 
                        className="inline-block bg-[#9f193f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7E1C32] transition-colors duration-300"
                    >
                        View Open Positions
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
