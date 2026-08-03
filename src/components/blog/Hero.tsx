import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-slate-900 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06),_transparent_35%),linear-gradient(180deg,_#020617_0%,_#090d1f_100%)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-6 py-20 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#ff5c93]">DevMola insights</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight  text-white sm:text-6xl">
            Ideas. 
            Strategy. 
            Code. 
            <span className="bg-gradient-to-r from-[#ff4a84] via-[#b44eff] to-[#3c5dff] bg-clip-text text-transparent">Growth.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Actionable insights on strategy, development, design, and digital growth for modern businesses.
          </p>

          <div className="mt-10 sm:max-w-xl">
            <form action="/blog#search-results" method="get">
              <div className="relative flex items-center overflow-hidden rounded-full border border-white/10 bg-white/10 px-4 py-3 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <span className="mr-3 text-slate-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                    <circle cx="11" cy="11" r="6" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
                <input
                  name="search"
                  type="search"
                  placeholder="Search articles, guides & insights..."
                  className="w-full border-none bg-transparent pr-28 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#d63356] to-[#eb4b8b] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#d63356]/25 transition duration-300  hover:shadow-[#d63356]/40 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#ff7ab4]/50"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 grid  sm:grid-cols-4">
            <div className="">
              <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff4a84]/15 text-[#ff4a84]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M6 4h12v2H6V4zm0 6h12v2H6v-2zm0 6h12v2H6v-2z" />
                </svg>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">200+</p>
              <p className="mt-2 text-sm text-slate-300">In-depth Articles</p>
            </div>
            <div className=" ">
              <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7c5dff]/15 text-[#7c5dff]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 3a6 6 0 110 12 6 6 0 010-12zm0 14c-5 0-9 2.5-9 5v2h18v-2c0-2.5-4-5-9-5z" />
                </svg>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">15K+</p>
              <p className="mt-2 text-sm text-slate-300">Monthly Readers</p>
            </div>
            <div className=" ">
              <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38b37b]/15 text-[#38b37b]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h6v4H4v-4z" />
                </svg>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">10+</p>
              <p className="mt-2 text-sm text-slate-300">Expert Categories</p>
            </div>
            <div className=" ">
              <div className=" flex h-12 w-12 items-center justify-center rounded-2xl bg-[#23d3a3]/15 text-[#23d3a3]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M5 12l5 5 9-9-1.5-1.5L10 14l-3.5-3.5L5 12z" />
                </svg>
              </div>
              <p className="mt-5 text-3xl font-semibold text-white">100%</p>
              <p className="mt-2 text-sm text-slate-300">Practical Insights</p>
            </div>
          </div>
        </div>

        <div className="hidden w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_60px_120px_-60px_rgba(0,0,0,0.6)] backdrop-blur-xl lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7f86a0]">What you’ll learn</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <li>• Build resilient digital products with modern IT strategy.</li>
            <li>• Use SEO content and headless workflows to generate qualified demand.</li>
            <li>• Scale software, marketing, and operations for enterprise growth.</li>
          </ul>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-slate-500">Designed for</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">IT leaders</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Product teams</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Growth squads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
