import { MetadataRoute } from "next";
import { getCategories, getPosts, getTags } from "@/lib/wordpress";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://devmola.com";
  const [postsResponse, categories, tags] = await Promise.all([
    getPosts({ perPage: 100 }),
    getCategories(),
    getTags(),
  ]);

  const postEntries = postsResponse.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.modified),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tagEntries = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postEntries,
    ...categoryEntries,
    ...tagEntries,
  ];
}
