import Image from "next/image";
import Link from "next/link";
import {
  calculateReadingTime,
  decodeHtmlEntities,
  generateExcerpt,
  getCategoriesFromPost,
  getImage,
} from "@/lib/blog-utils";
import type { WPPost } from "@/lib/wordpress";
import { ArrowIcon } from "@/components/home/premium/PremiumUI";

export default function BlogFeaturedCard({
  post,
  reverse = false,
}: {
  post: WPPost;
  reverse?: boolean;
}) {
  const image = getImage(post);
  const category = decodeHtmlEntities(getCategoriesFromPost(post)[0]?.name ?? "Insights");
  const title = decodeHtmlEntities(post.title.rendered);
  const excerpt = generateExcerpt(post.excerpt.rendered, 96);
  const readMinutes = calculateReadingTime(post.content.rendered);

  return (
    <article className="h-full overflow-hidden rounded-[20px] border border-white/10 bg-[var(--surface-dark-elevated)]">
      <Link
        href={`/blog/${post.slug}/`}
        className={`grid h-full min-h-[320px] md:min-h-[280px] md:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)] ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative min-h-[200px] bg-[var(--ink)] md:min-h-0 md:h-full">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover grayscale-[0.15] contrast-[1.05]"
              priority
            />
          ) : (
            <div className="flex h-full min-h-[200px] items-center justify-center bg-[var(--surface-dark-field)] text-sm text-white/40">
              No image
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col justify-between gap-4 p-5 sm:p-6 lg:p-7">
          <div className="min-w-0 space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-soft)]">
              {category}
            </p>
            <h3 className="line-clamp-3 font-display text-[1.05rem] font-semibold leading-[1.35] tracking-[-0.02em] text-white sm:text-lg lg:text-[1.2rem] lg:leading-[1.4]">
              {title}
            </h3>
            <p className="line-clamp-2 text-[13px] leading-[1.55] text-white/55">{excerpt}</p>
          </div>

          <div className="flex min-w-0 items-center justify-between gap-3 border-t border-white/10 pt-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
              {readMinutes} min read
            </span>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-white">
              Read article
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
