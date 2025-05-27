"use client"
import React from 'react'
import ServicesPage from "../../components/services"
import MainServicesCard from '@/components/services/MainServicesCard'

const services = [
  {
    id: '1',
    number: '01',
    title: 'Branding Design',
    description: 'Establish a powerful brand identity that resonates with your target audience and leaves a lasting impression.',
    slug: 'branding-design'
  },
  {
    id: '2',
    number: '02',
    title: 'UI/UX Design',
    description: 'Create intuitive, engaging user experiences that delight your customers and drive conversion rates.',
    slug: 'ui-ux-design'
  },
  {
    id: '3',
    number: '03',
    title: 'Web Design',
    description: 'Build stunning, responsive websites that showcase your brand and provide seamless user experiences.',
    slug: 'web-design'
  },
  {
    id: '4',
    number: '04',
    title: 'App Design',
    description: 'Develop beautiful, functional mobile applications that engage users and deliver exceptional value.',
    slug: 'app-design'
  }
];

const Services = () => {
  return (
    <div>
   
      
      <ServicesPage/>
    </div>
  )
}

export default Services
