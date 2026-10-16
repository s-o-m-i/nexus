import Image from "next/image";
import Link from "next/link";
import {
  calculateReadingTime,
  decodeHtmlEntities,
  formatDate,
  generateExcerpt,
  getCategoriesFromPost,
  getImage,
} from "@/lib/blog-utils";
import type { WPPost } from "@/lib/wordpress";

export default function BlogPostGridCard({ post }: { post: WPPost }) {
  const image = getImage(post);
  const category = decodeHtmlEntities(getCategoriesFromPost(post)[0]?.name ?? "Insights");
  const title = decodeHtmlEntities(post.title.rendered);
  const excerpt = generateExcerpt(post.excerpt.rendered, 110);

  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}/`} className="block overflow-hidden rounded-[18px] bg-[var(--bg-alt)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-[var(--text-muted)]">No image</div>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--eyebrow-muted)]">{category}</p>
        <Link href={`/blog/${post.slug}/`}>
          <h3 className="mt-2 font-display text-xl leading-snug tracking-[-0.03em] text-[var(--ink)] transition group-hover:text-[var(--brand-deep)]">
            {title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-[var(--text-subtle)]">
          <span>{formatDate(post.date)}</span>
          <span>{calculateReadingTime(post.content.rendered)} min read</span>
        </div>
        <Link
          href={`/blog/${post.slug}/`}
          className="mt-4 text-sm font-semibold text-[var(--ink)] transition group-hover:text-[var(--brand)]"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}
