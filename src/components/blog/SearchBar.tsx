"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  initialQuery: string;
}

export default function SearchBar({ initialQuery }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams?.toString());

    if (query.trim()) {
      params.set("search", query.trim());
    } else {
      params.delete("search");
    }

    params.set("page", "1");
    router.push(`/blog?${params.toString()}#search-results`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl rounded-full border border-[var(--border-strong)] bg-white p-1.5 shadow-[var(--shadow-soft)]"
    >
      <label htmlFor="blog-search" className="sr-only">
        Search blog posts
      </label>
      <div className="flex items-center gap-3 px-3 py-1.5">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[var(--text-subtle)]" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 3.536 9.536l2.964 2.964a1 1 0 0 0 1.414-1.414l-2.964-2.964A5.5 5.5 0 0 0 9 3.5ZM4.5 9a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          id="blog-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search articles"
          className="w-full bg-transparent text-sm text-[var(--ink)] outline-none placeholder:text-[var(--text-subtle)]"
          aria-label="Search blog posts"
        />
        <button
          type="submit"
          className="rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
        >
          Search
        </button>
      </div>
    </form>
  );
}
