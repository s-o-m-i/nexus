import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#f8f8f8] px-6 py-24">
      <div className="max-w-2xl rounded-[32px] border border-slate-200 bg-white p-12 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#9f193f]">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">This page is missing</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The article, category, or page you are looking for could not be found.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/blog" className="rounded-full bg-[#9f193f] px-6 py-3 font-semibold text-white transition hover:bg-[#111111]">
            Go to blog
          </Link>
          <Link href="/" className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:border-[#9f193f] hover:text-[#9f193f]">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
