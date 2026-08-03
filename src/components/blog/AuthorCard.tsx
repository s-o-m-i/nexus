import type { WPAuthor } from "@/lib/wordpress";

interface AuthorCardProps {
  author: WPAuthor | null | undefined;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  if (!author) {
    return null;
  }

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">About the author</h3>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#9f193f] text-xl font-semibold text-white">
          {author.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-900">{author.name}</p>
          <p className="text-sm text-slate-600">{author.description || "Contributor at DevMola"}</p>
        </div>
      </div>
    </div>
  );
}
