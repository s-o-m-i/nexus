import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getCategories, getPosts } from "@/lib/wordpress";
import { calculateReadingTime, formatDate, generateExcerpt, getAuthor, getCategoriesFromPost, getImage, decodeHtmlEntities } from "@/lib/blog-utils";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import SearchBar from "@/components/blog/SearchBar";
import Pagination from "@/components/blog/Pagination";
import Hero from "@/components/blog/Hero";
import SectionHeading from "@/components/blog/SectionHeading";
import Schema from "@/components/blog/Schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | DevMola",
  description: "Insights, strategies, and stories for modern software development, SEO, and digital growth.",
  alternates: {
    canonical: "https://devmola.com/blog/",
  },
};

export const revalidate = 60;

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; search?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page ?? 1);
  const query = resolvedSearchParams?.search ?? "";

  const [postsResponse, categories] = await Promise.all([
    getPosts({ page, perPage: 8, search: query || undefined }),
    getCategories(),
  ]);

  if (page > postsResponse.totalPages && postsResponse.totalPages > 0) {
    notFound();
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DevMola Blog",
    description: "Insights and stories for modern software development, SEO, and digital growth.",
    url: "https://devmola.com/blog/",
    publisher: {
      "@type": "Organization",
      name: "DevMola",
      url: "https://devmola.com",
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Schema data={blogSchema} />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="All posts"
            title="Explore the latest insights"
            description="A curated stream of practical ideas, tutorials, and strategy notes."
          />
          <SearchBar initialQuery={query} />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {postsResponse.posts.map((post) => (
                <article key={post.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 w-full overflow-hidden">
                      {getImage(post) ? (
                        <Image
                          src={getImage(post) as string}
                          alt={post.title.rendered}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-slate-100 text-slate-500">
                          No image available
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {getCategoriesFromPost(post).slice(0, 2).map((category) => (
                        <span key={category.slug} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                          {category.name}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold text-slate-900 transition hover:text-[#9f193f]">
                        {post.title.rendered}
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {generateExcerpt(post.excerpt.rendered, 120)}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{calculateReadingTime(post.content.rendered)} min read</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Popular categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.slice(0, 10).map((category) => (
                  <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-full bg-[#111111] px-3 py-2 text-sm font-medium text-white transition hover:bg-[#9f193f]">
                    {decodeHtmlEntities(category.name)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Latest articles</h3>
              <div className="mt-4 space-y-4">
                {postsResponse.posts.slice(0, 5).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-2xl border border-slate-100 p-4 transition hover:border-[#9f193f] hover:bg-[#fff8fa]">
                    <h4 className="font-semibold text-slate-900">{post.title.rendered}</h4>
                    <p className="mt-2 text-sm text-slate-500">{formatDate(post.date)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {postsResponse.totalPages > 1 ? (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="mt-12">
            <Pagination currentPage={page} totalPages={postsResponse.totalPages} basePath="/blog" />
          </div>
        </section>
      ) : null}

      <NewsletterCTA />
    </div>
  );
}
