import { notFound, redirect } from "next/navigation";
import BlogPage from "@/app/blog/page";

export const revalidate = 60;

export default async function BlogPageRoute({ params, searchParams }: { params: Promise<{ page: string }>; searchParams?: Promise<{ search?: string }> }) {
  const { page } = await params;
  const resolvedSearchParams = await searchParams;
  const pageNumber = Number(page);

  if (Number.isNaN(pageNumber) || pageNumber < 1) {
    notFound();
  }

  if (pageNumber === 1) {
    redirect("/blog");
  }

  return <BlogPage searchParams={Promise.resolve({ page: page, search: resolvedSearchParams?.search ?? "" })} />;
}
