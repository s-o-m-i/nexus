import { cache } from "react";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://cms.devmola.com/wp-json";

export interface WPAuthor {
  id: number;
  name: string;
  slug: string;
  description?: string;
  avatar_urls?: Record<string, string>;
  link?: string;
}

export interface WPImage {
  id: number;
  source_url: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<string, { source_url: string }>;
  };
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
  description?: string;
  count?: number;
  link?: string;
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string; protected?: boolean };
  excerpt: { rendered: string; protected?: boolean };
  date: string;
  modified: string;
  link: string;
  featured_media?: number;
  categories: number[];
  tags: number[];
  author?: number;
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPImage[];
    "wp:term"?: Array<WPTerm[]>;
  };
}

export interface PostsResponse {
  posts: WPPost[];
  totalPages: number;
  totalPosts: number;
  page: number;
}

export interface CategoryPostsResponse extends PostsResponse {
  category: WPTerm | null;
}

export interface TagPostsResponse extends PostsResponse {
  tag: WPTerm | null;
}

async function fetchWordPress<T>(path: string, searchParams: Record<string, string | number | undefined> = {}): Promise<T> {
  const url = new URL(`${WORDPRESS_API_URL}${path}`);

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url.toString(), {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed with status ${response.status}`);
  }

  return (await response.json()) as T;
}

export const getPosts = cache(async (options: {
  page?: number;
  perPage?: number;
  search?: string;
  category?: number;
  tag?: number;
} = {}): Promise<PostsResponse> => {
  const page = options.page ?? 1;
  const perPage = options.perPage ?? 10;

  const response = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=${perPage}&page=${page}${options.search ? `&search=${encodeURIComponent(options.search)}` : ""}${options.category ? `&categories=${options.category}` : ""}${options.tag ? `&tags=${options.tag}` : ""}`, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 60 * 60,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress API request failed with status ${response.status}`);
  }

  const posts = (await response.json()) as WPPost[];
  const totalPosts = Number(response.headers.get("x-wp-total") ?? posts.length);
  const totalPages = Number(response.headers.get("x-wp-totalpages") ?? 1);

  return {
    posts,
    totalPages,
    totalPosts,
    page,
  };
});

export const getPostBySlug = cache(async (slug: string): Promise<WPPost | null> => {
  const posts = (await fetchWordPress<WPPost[]>("/wp/v2/posts", {
    slug,
    _embed: "1",
  })) as WPPost[];

  return posts[0] ?? null;
});

export const getCategories = cache(async (): Promise<WPTerm[]> => {
  return fetchWordPress<WPTerm[]>("/wp/v2/categories", {
    per_page: 100,
    _fields: "id,name,slug,description,count,link",
  });
});

export const getCategoryPosts = cache(async (slug: string, page = 1): Promise<CategoryPostsResponse> => {
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug) ?? null;

  if (!category) {
    return {
      posts: [],
      totalPages: 0,
      totalPosts: 0,
      page,
      category,
    };
  }

  const postsResponse = await getPosts({
    page,
    perPage: 10,
    category: category.id,
  });

  return {
    ...postsResponse,
    category,
  };
});

export const getTags = cache(async (): Promise<WPTerm[]> => {
  return fetchWordPress<WPTerm[]>("/wp/v2/tags", {
    per_page: 100,
    _fields: "id,name,slug,description,count,link",
  });
});

export const searchPosts = cache(async (query: string, page = 1): Promise<PostsResponse> => {
  if (!query.trim()) {
    return getPosts({ page, perPage: 10 });
  }

  return getPosts({
    page,
    perPage: 10,
    search: query,
  });
});

export const getRelatedPosts = cache(async (post: WPPost): Promise<WPPost[]> => {
  const categoryIds = post.categories.slice(0, 3);
  const tagIds = post.tags.slice(0, 3);

  const [categoryPosts, tagPosts, latestPosts] = await Promise.all([
    categoryIds.length
      ? getPosts({ perPage: 6, category: categoryIds[0] })
      : Promise.resolve({ posts: [] as WPPost[] }),
    tagIds.length
      ? getPosts({ perPage: 6, tag: tagIds[0] })
      : Promise.resolve({ posts: [] as WPPost[] }),
    getPosts({ perPage: 6 }),
  ]);

  const related = new Map<string, WPPost>();

  const addPosts = (items: WPPost[]) => {
    items.forEach((item) => {
      if (item.slug !== post.slug && !related.has(item.slug)) {
        related.set(item.slug, item);
      }
    });
  };

  addPosts(categoryPosts.posts);
  addPosts(tagPosts.posts);
  addPosts(latestPosts.posts);

  return Array.from(related.values()).slice(0, 6);
});

export const getAdjacentPosts = cache(async (post: WPPost): Promise<{ previous: WPPost | null; next: WPPost | null }> => {
  // Previous: most recent post published before current post
  const prevResp = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=1&before=${encodeURIComponent(post.date)}&orderby=date&order=desc`);
  const nextResp = await fetch(`${WORDPRESS_API_URL}/wp/v2/posts?_embed&per_page=1&after=${encodeURIComponent(post.date)}&orderby=date&order=asc`);

  const previousPosts = prevResp.ok ? ((await prevResp.json()) as WPPost[]) : [];
  const nextPosts = nextResp.ok ? ((await nextResp.json()) as WPPost[]) : [];

  return {
    previous: previousPosts[0] ?? null,
    next: nextPosts[0] ?? null,
  };
});

export const getFeaturedPosts = cache(async (): Promise<WPPost[]> => {
  const response = await getPosts({ perPage: 4 });
  return response.posts.slice(0, 3);
});

export async function getTagPosts(slug: string, page = 1): Promise<TagPostsResponse> {
  const tags = await getTags();
  const tag = tags.find((item) => item.slug === slug) ?? null;

  if (!tag) {
    return {
      posts: [],
      totalPages: 0,
      totalPosts: 0,
      page,
      tag,
    };
  }

  const postsResponse = await getPosts({
    page,
    perPage: 10,
    tag: tag.id,
  });

  return {
    ...postsResponse,
    tag,
  };
}
