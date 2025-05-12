import FancyCard from '@/ui/FancyCard';
import React from 'react'

const WPProcess = () => {

  const processSteps = [
    {
      title: "1. Discovery & Requirements Gathering",
      description:
        "Our process begins with an in-depth exploration of your business, objectives, and target audience. Through collaborative workshops and discussions, we ensure that all project requirements are meticulously defined, establishing a solid foundation for successful project execution."
    },
    {
      title: "2. Strategic Planning & Roadmap Creation",
      description:
        "We develop a comprehensive strategic plan that outlines key milestones, deliverables, and timelines. By carefully selecting the most suitable technology stack, we align each technical decision with your long-term business goals to foster sustainable growth and operational efficiency."
    },
    {
      title: "3. UI/UX Design & Interactive Prototyping",
      description:
        "Our design experts focus on creating intuitive and visually engaging user experiences that resonate with your audience. We translate insights into high-fidelity wireframes and interactive prototypes, ensuring seamless usability and compelling visual design."
    },
    {
      title: "4. Frontend & Backend Development",
      description:
        "Our developers build robust and scalable solutions using the latest frontend technologies, ensuring responsive, user-friendly interfaces. On the backend, we implement secure, high-performance systems tailored to meet the specific demands of your business."
    },
    {
      title: "5. Quality Assurance & Rigorous Testing",
      description:
        "We employ a comprehensive quality assurance strategy, utilizing both manual and automated testing methodologies. This ensures that your product is thoroughly vetted for security, functionality, and cross-platform compatibility, providing a flawless user experience."
    },
    {
      title: "6. Deployment & Seamless Launch",
      description:
        "We facilitate a seamless deployment process using continuous integration and delivery (CI/CD) pipelines. With meticulous server configurations and monitoring tools in place, we ensure a smooth and efficient launch, ensuring your application is production-ready."
    },
    // {
    //   title: "7. Post-Launch Support & Continuous Maintenance",
    //   description:
    //     "After the successful launch, we offer ongoing support and maintenance services, ensuring that your application evolves with market trends and technological advancements. Our team is dedicated to optimizing your product’s performance, ensuring scalability, and maintaining a competitive edge."
    // }
  ];


  return (
    <>
      <section className="py-20 px-8 md:px-16 bg-white">
        <h2 className="text-[32px] sm:text-[42px] font-bold text-[#04213F] text-center">
          Our Development Process
        </h2>
        <div className="flex justify-center">
          <p className="text-base text-gray-600 sm:w-[65%] mt-5 text-center">
            From concept to launch, our development process is designed to turn your ideas into impactful digital solutions. We follow a structured yet flexible approach that ensures every product we build is user-centric, scalable, and aligned with your business goals.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-12">
          {processSteps.map((step, index) => (
            <div className={`${index + 1 === processSteps.length ? "col-span-6" : "col-span-6"}`}>

              <FancyCard key={index} title={step.title} desc={step.description} />
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default WPProcess