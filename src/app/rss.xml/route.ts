import { getPosts } from "@/lib/wordpress";

export const revalidate = 60;

export async function GET() {
  const postsResponse = await getPosts({ perPage: 20 });
  const items = postsResponse.posts
    .map((post) => {
      const title = post.title.rendered;
      const description = post.excerpt.rendered.replace(/<[^>]+>/g, " ");
      return `
        <item>
          <title><![CDATA[${title}]]></title>
          <link>https://devmola.com/blog/${post.slug}/</link>
          <guid>https://devmola.com/blog/${post.slug}/</guid>
          <description><![CDATA[${description}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>DevMola Blog</title>
      <link>https://devmola.com/blog/</link>
      <description>Insights and stories from DevMola.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
