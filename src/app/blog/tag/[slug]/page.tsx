import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTagPosts } from "@/lib/wordpress";
import { formatDate, generateExcerpt, getImage } from "@/lib/blog-utils";
import Pagination from "@/components/blog/Pagination";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import NewsletterCTA from "@/components/blog/NewsletterCTA";
import Schema from "@/components/blog/Schema";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getTagPosts(slug, 1);

  if (!result.tag) {
    return {
      title: "Tag Not Found | DevMola",
      description: "The requested tag could not be found.",
    };
  }

  return {
    title: `#${result.tag.name} | DevMola Blog`,
    description: `Explore posts tagged with ${result.tag.name}.`,
    alternates: {
      canonical: `https://devmola.com/blog/tag/${result.tag.slug}/`,
    },
  };
}

export default async function TagPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams?: Promise<{ page?: string }> }) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page ?? 1);
  const result = await getTagPosts(slug, page);

  if (!result.tag) {
    notFound();
  }

  const tagSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `#${result.tag.name}`,
    description: `Posts related to ${result.tag.name}`,
    url: `https://devmola.com/blog/tag/${result.tag.slug}/`,
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <Schema data={tagSchema} />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: `#${result.tag.name}` }]} />
        <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <h1 className="text-4xl font-semibold text-slate-900">#{result.tag.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Related posts and insights about this topic.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {result.posts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  {getImage(post) ? <Image src={getImage(post) as string} alt={post.title.rendered} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /> : <div className="flex h-full items-center justify-center bg-slate-100 text-slate-500">No image available</div>}
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/blog/${post.slug}`}><h2 className="text-xl font-semibold text-slate-900">{post.title.rendered}</h2></Link>
                <p className="mt-3 text-sm leading-7 text-slate-600">{generateExcerpt(post.excerpt.rendered, 120)}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{post._embedded?.author?.[0]?.name ?? "DevMola"}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {result.totalPages > 1 ? (
          <div className="mt-12">
            <Pagination currentPage={page} totalPages={result.totalPages} basePath={`/blog/tag/${slug}`} />
          </div>
        ) : null}
      </div>
      <NewsletterCTA />
    </div>
  );
}
