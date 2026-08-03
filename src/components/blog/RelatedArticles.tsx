import Link from "next/link";
import Image from "next/image";
import type { WPPost } from "@/lib/wordpress";
import { formatDate, generateExcerpt, calculateReadingTime, getImage, getCategoriesFromPost, decodeHtmlEntities } from "@/lib/blog-utils";

interface Props {
  posts: WPPost[];
}

export default function RelatedArticles({ posts }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.slice(0, 6).map((post) => {
        const image = getImage(post);
        const categories = getCategoriesFromPost(post);
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
            {image ? (
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image src={image} alt={post.title.rendered} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            ) : null}
            <div className="p-4">
              <div className="mb-2 text-xs text-slate-500">{categories.slice(0,1).map(c => decodeHtmlEntities(c.name)).join(", ")}</div>
              <h4 className="text-lg font-semibold text-slate-900">{decodeHtmlEntities(post.title.rendered)}</h4>
              <p className="mt-2 text-sm text-slate-600 line-clamp-2">{generateExcerpt(post.excerpt.rendered, 140)}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <div>{formatDate(post.date)}</div>
                <div>{calculateReadingTime(post.content.rendered)} min read</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
