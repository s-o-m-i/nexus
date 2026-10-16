import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/blog-utils";
import type { WPTerm } from "@/lib/wordpress";

export default function BlogCategoryPills({
  categories,
  activeSlug,
}: {
  categories: WPTerm[];
  activeSlug?: string | null;
}) {
  const visible = categories.filter((c) => (c.count ?? 0) > 0).slice(0, 8);

  return (
    <nav aria-label="Blog categories" className="flex flex-wrap justify-center gap-2">
      <Link
        href="/blog/"
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          !activeSlug
            ? "bg-[var(--ink)] text-white"
            : "border border-[var(--border-strong)] bg-white text-[var(--ink)] hover:border-[var(--ink)]/25"
        }`}
      >
        All
      </Link>
      {visible.map((category) => {
        const isActive = activeSlug === category.slug;
        return (
          <Link
            key={category.slug}
            href={`/blog/category/${category.slug}/`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-[var(--ink)] text-white"
                : "border border-[var(--border-strong)] bg-white text-[var(--ink)] hover:border-[var(--ink)]/25"
            }`}
          >
            {decodeHtmlEntities(category.name)}
          </Link>
        );
      })}
    </nav>
  );
}
