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
    <section className="bg-[var(--bg-section)] px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--eyebrow-muted)]">
            Insights
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
            Notes from the work.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--text-muted)]">
            Practical writing on design, development, and growth — from the same team that ships the work.
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
                href={`/blog/${post.slug}/`}
                className="premium-card group block overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden bg-[var(--bg-alt)]">
                  <Image
                    src={image}
                    alt={decodeHtmlEntities(post.title.rendered)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-subtle)]">
                    {category}
                  </span>
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-[var(--ink)]">
                    {decodeHtmlEntities(post.title.rendered)}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--text-muted)]">{excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-[var(--text-muted)]">
                    <span>{formatDate(post.date)}</span>
                    <span className="font-semibold text-[var(--ink)] transition group-hover:text-[var(--brand)]">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/blog/"
            className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--ink)]/25"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeBlogs
