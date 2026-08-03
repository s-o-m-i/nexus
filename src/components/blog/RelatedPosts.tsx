import Link from "next/link";
import Image from "next/image";
import type { WPPost } from "@/lib/wordpress";
import { formatDate, generateExcerpt, getImage, decodeHtmlEntities } from "@/lib/blog-utils";

interface RelatedPostsProps {
  posts: WPPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">Related articles</h3>
      <div className="mt-4 space-y-4">
        {posts.map((post) => {
          const image = getImage(post);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-4 rounded-2xl border border-slate-100 p-3 transition hover:border-[#9f193f] hover:bg-[#fff8fa]">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                {image ? <Image src={image} alt={post.title.rendered} fill sizes="80px" className="object-cover" /> : <div className="flex h-full w-full items-center justify-center bg-slate-100 text-xs text-slate-500">No image</div>}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">{decodeHtmlEntities(post.title.rendered)}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">{generateExcerpt(post.excerpt.rendered, 100)}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{formatDate(post.date)}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
