import type { WPPost, WPTerm } from "@/lib/wordpress";

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export function calculateReadingTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  const minutes = Math.ceil(words / 200);
  return Math.max(1, minutes);
}

export function generateExcerpt(content: string, maxLength = 160): string {
  const plain = stripHtml(content);
  return plain.length > maxLength ? `${plain.slice(0, maxLength).trimEnd()}…` : plain;
}

export function getImage(post: WPPost): string | null {
  const image = post._embedded?.["wp:featuredmedia"]?.[0];
  const imageUrl = image?.source_url ?? null;
  return imageUrl ?? null;
}

export function getAuthor(post: WPPost) {
  return post._embedded?.author?.[0] ?? null;
}

export function getCategoriesFromPost(post: WPPost): WPTerm[] {
  const terms = post._embedded?.["wp:term"] ?? [];
  const allTerms = terms.flat();

  // Prefer explicit taxonomy when available.
  const categories = allTerms.filter((term) => term.taxonomy === "category");
  if (categories.length > 0) {
    return categories;
  }

  // Fallback by matching category IDs when taxonomy is not provided.
  return allTerms.filter((term) => post.categories.includes(term.id));
}

export function getTagsFromPost(post: WPPost): WPTerm[] {
  const terms = post._embedded?.["wp:term"] ?? [];
  const allTerms = terms.flat();

  const tags = allTerms.filter((term) => term.taxonomy === "post_tag");
  if (tags.length > 0) {
    return tags;
  }

  return allTerms.filter((term) => post.tags.includes(term.id));
}

export function buildBreadcrumbs(items: Array<{ label: string; href?: string }>) {
  return items;
}

export function createSeoTitle(title: string, siteName = "DevMola") {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
}

export function decodeHtmlEntities(value: string) {
  if (!value) return value;
  // replace numeric entities
  const numericReplaced = value.replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16))).replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)));
  // common named entities
  const map: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&nbsp;': ' ',
  };
  return numericReplaced.replace(/&[a-zA-Z]+?;/g, (ent) => map[ent] ?? ent);
}
