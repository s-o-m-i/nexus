import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/wordpress'
import { decodeHtmlEntities, generateExcerpt, getCategoriesFromPost, getImage, formatDate } from '@/lib/blog-utils'

const HomeBlogs = async () => {
  const postsResponse = await getPosts({ page: 1, perPage: 3 })
  const posts = postsResponse.posts

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-br from-[#f8fafc] via-white to-[#f8fafc]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-[#9f193f]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#9f193f]">
            Professional insights
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Beautiful blog stories that reflect our homepage style
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore our expert-led articles crafted with the same polished design language and modern UX you already love on the homepage.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post) => {
            const image = getImage(post) ?? '/images/strategy_dev.jpg'
            const category = decodeHtmlEntities(getCategoriesFromPost(post)[0]?.name ?? 'Insights')
            const excerpt = generateExcerpt(post.excerpt.rendered, 120)

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <Image
                    src={image}
                    alt={post.title.rendered}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <span className="inline-flex rounded-full bg-[#9f193f]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#9f193f]">
                    {category}
                  </span>
                  <h3 className="text-xl font-semibold text-[#111111] transition group-hover:text-[#9f193f]">
                    {decodeHtmlEntities(post.title.rendered)}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">{excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{formatDate(post.date)}</span>
                    <span className="text-[#9f193f] font-semibold">Read more →</span>
                  </div>
                </div>
              </Link>
            )
          })}
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
