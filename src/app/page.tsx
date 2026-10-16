import HomePage from '@/components/home/HomePage'
import HomeBlogs from '@/components/home/HomeBlogs'
import React from 'react'

export const metadata = {
  title: "Top Digital Marketing Agency in Islamabad, Pakistan | DevMola",
  description: "DevMola is a leading digital marketing agency in Islamabad, offering SEO, SEM, web & app development to grow your brand visibility, traffic, and online success.",
    alternates: {
    canonical: "https://devmola.com/",
  },
};

const Page = () => {
  return (
    <HomePage>
      <HomeBlogs />
    </HomePage>
  )
}

export default Page
