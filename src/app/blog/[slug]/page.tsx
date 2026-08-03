import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, getCategories, getAdjacentPosts } from "@/lib/wordpress";
import { calculateReadingTime, formatDate, generateExcerpt, getAuthor, getCategoriesFromPost, getImage, getTagsFromPost, decodeHtmlEntities } from "@/lib/blog-utils";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import SocialShare from "@/components/blog/SocialShare";
import AuthorCard from "@/components/blog/AuthorCard";
import RelatedPosts from "@/components/blog/RelatedPosts";
import RelatedArticles from "@/components/blog/RelatedArticles";
import Schema from "@/components/blog/Schema";
import WordPressContent from "@/components/blog/WordPressContent";
import { createSeoTitle } from "@/lib/blog-utils";
import { uniqueSlug } from "@/lib/slug";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | DevMola",
      description: "The requested blog post could not be found.",
    };
  }

  const title = createSeoTitle(post.title.rendered);
  const description = generateExcerpt(post.excerpt.rendered, 160);
  const image = getImage(post) ?? undefined;

  return {
    title,
    description,
    keywords: ["DevMola", "blog", post.title.rendered],
    alternates: {
      canonical: `https://devmola.com/blog/${post.slug}/`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://devmola.com/blog/${post.slug}/`,
      images: image ? [{ url: image, width: 1200, height: 630, alt: post.title.rendered }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const [relatedPosts, categories, adjacent] = await Promise.all([getRelatedPosts(post), getCategories(), getAdjacentPosts(post)]);
  const author = getAuthor(post);
  const categoriesForPost = getCategoriesFromPost(post);
  const tagsForPost = getTagsFromPost(post);
  const readingTime = calculateReadingTime(post.content.rendered);
  const image = getImage(post);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.rendered,
    description: generateExcerpt(post.excerpt.rendered, 220),
    image: image ? [image] : undefined,
    author: {
      "@type": "Person",
      name: author?.name ?? "DevMola",
    },
    publisher: {
      "@type": "Organization",
      name: "DevMola",
      url: "https://devmola.com",
    },
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devmola.com/blog/${post.slug}/`,
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Schema data={articleSchema} />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            ...(categoriesForPost.length > 0
              ? [{ label: decodeHtmlEntities(categoriesForPost[0].name), href: `/blog/category/${categoriesForPost[0].slug}` }]
              : []),
            { label: decodeHtmlEntities(post.title.rendered) },
          ]}
        />

        <article className="mt-8 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_80px_-24px_rgba(15,23,42,0.25)]">
              {image ? (
                <div className="relative aspect-[16/9] w-full">
                  <Image src={image} alt={post.title.rendered} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover" priority />
                </div>
              ) : null}

              <div className="p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap gap-2">
                  {categoriesForPost.slice(0, 3).map((category) => (
                    <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-full bg-[#9f193f]/10 px-3 py-1 text-sm font-semibold text-[#9f193f]">
                      {decodeHtmlEntities(category.name)}
                    </Link>
                  ))}
                </div>
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 lg:text-5xl">
                  {decodeHtmlEntities(post.title.rendered)}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">{generateExcerpt(post.excerpt.rendered, 220)}</p>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-8 text-sm text-slate-500">
                  <span>By {author?.name ?? "DevMola"}</span>
                  <span>•</span>
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <SocialShare title={decodeHtmlEntities(post.title.rendered)} url={`https://devmola.com/blog/${post.slug}/`} />
                </div>

                <div className="article-shell mt-10">
                  <WordPressContent content={post.content.rendered} />
                </div>

                <div className="mt-10 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
                  {tagsForPost.map((tag) => (
                    <Link key={tag.slug} href={`/blog/tag/${tag.slug}`} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition hover:border-[#9f193f] hover:text-[#9f193f]">
                      #{decodeHtmlEntities(tag.name)}
                    </Link>
                  ))}
                </div>
                
                {/* Article footer: share, categories, tags, last updated */}
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <SocialShare title={post.title.rendered} url={`https://devmola.com/blog/${post.slug}/`} />
                    <div className="text-sm text-slate-500">Last updated: {formatDate(post.modified)}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {categoriesForPost.map((category) => (
                      <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-full bg-[#9f193f]/10 px-3 py-1 text-sm font-semibold text-[#9f193f]">
                        {decodeHtmlEntities(category.name)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <AuthorCard author={author} />
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Related topics</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.slice(0, 8).map((category) => (
                    <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#9f193f] hover:text-white">
                      {decodeHtmlEntities(category.name)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {adjacent.previous ? (
                <Link href={`/blog/${adjacent.previous.slug}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg">
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">← Previous article</p>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{decodeHtmlEntities(adjacent.previous.title.rendered)}</h4>
                    <p className="mt-2 text-sm text-slate-500">{getCategoriesFromPost(adjacent.previous).slice(0,1).map(c=>decodeHtmlEntities(c.name)).join(", ")}</p>
                  </div>
                  {getImage(adjacent.previous) ? (
                    <div className="hidden w-32 shrink-0 overflow-hidden rounded-lg md:block">
                      <Image src={getImage(adjacent.previous)!} alt={adjacent.previous.title.rendered} width={160} height={90} className="object-cover" />
                    </div>
                  ) : null}
                </Link>
              ) : <div />}

              {adjacent.next ? (
                <Link href={`/blog/${adjacent.next.slug}`} className="group ml-auto flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg">
                  <div className="flex-1 text-right">
                    <p className="text-sm text-slate-400">Next article →</p>
                    <h4 className="mt-2 text-lg font-semibold text-slate-900">{decodeHtmlEntities(adjacent.next.title.rendered)}</h4>
                    <p className="mt-2 text-sm text-slate-500">{getCategoriesFromPost(adjacent.next).slice(0,1).map(c=>decodeHtmlEntities(c.name)).join(", ")}</p>
                  </div>
                  {getImage(adjacent.next) ? (
                    <div className="hidden w-32 shrink-0 overflow-hidden rounded-lg md:block">
                      <Image src={getImage(adjacent.next)!} alt={adjacent.next.title.rendered} width={160} height={90} className="object-cover" />
                    </div>
                  ) : null}
                </Link>
              ) : <div />}
            </div>

            {/* Related articles grid */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900">Related Articles</h3>
              <div className="mt-6">
                <RelatedArticles posts={relatedPosts} />
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Topics</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.slice(0, 8).map((category) => (
                  <Link key={category.slug} href={`/blog/category/${category.slug}`} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#9f193f] hover:text-white">
                    {decodeHtmlEntities(category.name)}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </article>
      </div>

      <NewsletterCTA />
    </div>
  );
}
