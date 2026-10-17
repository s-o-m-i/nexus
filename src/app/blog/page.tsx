import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategories, getPosts } from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/blog-utils";
import SearchBar from "@/components/blog/SearchBar";
import Pagination from "@/components/blog/Pagination";
import Schema from "@/components/blog/Schema";
import BlogIndexHero from "@/components/blog/BlogIndexHero";
import BlogPostGridCard from "@/components/blog/BlogPostGridCard";
import BlogCategoryPills from "@/components/blog/BlogCategoryPills";
import HomeContact from "@/components/home/premium/HomeContact";
import type { Metadata } from "next";
// 
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
  const query = resolvedSearchParams?.search?.trim() ?? "";
  const showFeatured = page === 1 && !query;

  const [postsResponse, categories] = await Promise.all([
    getPosts({ page, perPage: showFeatured ? 8 : 9, search: query || undefined }),
    getCategories(),
  ]);

  if (page > postsResponse.totalPages && postsResponse.totalPages > 0) {
    notFound();
  }

  const featuredPosts = showFeatured ? postsResponse.posts.slice(0, 2) : [];
  const gridPosts = showFeatured ? postsResponse.posts.slice(2) : postsResponse.posts;

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
    <div className="min-h-screen bg-[var(--bg)]">
      <Schema data={blogSchema} />

      <BlogIndexHero featuredPosts={featuredPosts} compact={!showFeatured} />

      <section className="px-5 py-14 sm:px-8 lg:px-12 lg:py-16" id="search-results">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-center font-display text-[clamp(1.75rem,4vw,2.75rem)] italic leading-snug tracking-[-0.03em] text-[var(--ink)]">
            Stay ahead of the curve.
          </p>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-[var(--text-muted)]">
            {query
              ? `Showing results for “${decodeHtmlEntities(query)}”.`
              : "Browse practical articles on building, marketing, and scaling digital products."}
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <BlogCategoryPills categories={categories} />
            <Suspense fallback={null}>
              <SearchBar initialQuery={query} />
            </Suspense>
          </div>

          {gridPosts.length === 0 ? (
            <p className="mt-14 text-center text-[var(--text-muted)]">No articles found. Try another search or category.</p>
          ) : (
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <BlogPostGridCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {postsResponse.totalPages > 1 ? (
            <div className="mt-14">
              <Pagination currentPage={page} totalPages={postsResponse.totalPages} basePath="/blog" />
            </div>
          ) : null}
        </div>
      </section>

      <HomeContact />
    </div>
  );
}
