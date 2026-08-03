import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#111111] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f7c7d4]">DevMola insights</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Strategy, product, and engineering ideas for modern teams.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Explore practical guidance for founders, marketing leaders, and teams building ambitious digital products.
          </p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-300">Latest focus</p>
          <p className="mt-3 text-xl font-semibold text-white">Headless CMS, SEO content systems, and high-converting product storytelling.</p>
          <Link href="#latest-posts" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#f7dce5]">
            Browse articles
          </Link>
        </div>
      </div>
    </section>
  );
}
