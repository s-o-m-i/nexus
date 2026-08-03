'use client'
import Link from 'next/link'
import Image from 'next/image'

const featuredBlogs = [
  {
    title: 'How Much Does a Business Website Cost in Pakistan? (2026 Complete Pricing Guide)',
    category: 'Business Growth',
    description: 'A clear pricing framework for website projects, packages, and ROI-driven choices for Pakistani businesses.',
    date: 'Aug 3, 2026',
    image: '/images/strategy_dev.jpg',
    href: '/blog',
  },
  {
    title: 'SEO Content Strategy That Converts Customers in 2026',
    category: 'SEO & Content',
    description: 'Build content that ranks, attracts qualified traffic, and turns readers into customers with a modern SEO playbook.',
    date: 'Jul 28, 2026',
    image: '/images/tech_seo.jpg',
    href: '/blog',
  },
  {
    title: 'Design Systems for High-Performing Product Experiences',
    category: 'UI/UX Design',
    description: 'Create scalable design systems that deliver faster launches, consistent interfaces, and stronger brand trust.',
    date: 'Jul 14, 2026',
    image: '/images/web-development-first.webp',
    href: '/blog',
  },
]

const HomeBlogs = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#f8fafc] via-white to-[#f8fafc]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-[#9f193f]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#9f193f]">
            Blog insights
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Beautiful blog stories that reflect our homepage style
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore our expert-led articles crafted with the same polished design language and modern UX you already love on the homepage.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredBlogs.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <span className="inline-flex rounded-full bg-[#9f193f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9f193f]">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-[#111111] transition group-hover:text-[#9f193f]">
                  {post.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{post.date}</span>
                  <span className="text-[#9f193f] font-semibold">Read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-[#9f193f] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#9f193f]/20 transition hover:bg-[#7d1530]"
          >
            View all blog articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBlogs
