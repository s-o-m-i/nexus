import Link from "next/link";

interface BreadcrumbsProps {
  items: Array<{ label: string; href?: string }>;
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            {isLast || !item.href ? (
              <span className="font-medium text-slate-900">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition hover:text-[#9f193f]">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
