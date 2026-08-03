import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-center gap-3">
      {pages.map((page) => {
        const isActive = page === currentPage;
        const href = page === 1 ? basePath : `${basePath}/${page}`;

        return (
          <Link
            key={page}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive ? "bg-[#9f193f] text-white" : "border border-slate-200 bg-white text-slate-700 hover:border-[#9f193f] hover:text-[#9f193f]"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}
