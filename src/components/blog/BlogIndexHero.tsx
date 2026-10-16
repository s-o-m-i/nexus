import BlogFeaturedCard from "./BlogFeaturedCard";
import type { WPPost } from "@/lib/wordpress";

export default function BlogIndexHero({
  featuredPosts,
  compact = false,
}: {
  featuredPosts: WPPost[];
  compact?: boolean;
}) {
  return (
    <section className="bg-[var(--ink)] pt-24 text-white sm:pt-28 lg:pt-32">
      <div className="mx-auto max-w-[1280px] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">DevMola blog</p>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.98] tracking-[-0.04em]">
            Insights & trends
          </h1>
          {!compact && (
            <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
              Practical notes on development, design, SEO, and growth — from the team shipping client work every week.
            </p>
          )}
        </div>

        {!compact && featuredPosts.length > 0 && (
          <div className="mt-10 grid auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-6">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <BlogFeaturedCard key={post.slug} post={post} reverse={index === 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
