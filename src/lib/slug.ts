export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function uniqueSlug(base: string, used: Map<string, number>) {
  let slug = slugify(base || "");
  if (!slug) slug = "section";
  const count = used.get(slug) ?? 0;
  if (count === 0) {
    used.set(slug, 1);
    return slug;
  }
  const next = `${slug}-${count}`;
  used.set(slug, count + 1);
  used.set(next, 1);
  return next;
}
