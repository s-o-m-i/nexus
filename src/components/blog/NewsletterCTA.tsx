export default function NewsletterCTA() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#9f193f] p-8 text-white shadow-[0_20px_80px_-24px_rgba(15,23,42,0.4)] lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f7c7d4]">Growth newsletter</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Receive practical ideas for your next launch.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Join the DevMola list for product strategy notes, growth insights, and thoughtful breakdowns of modern digital work.
              </p>
            </div>
            <a href="mailto:info@devmola.com" className="inline-flex rounded-full bg-white px-6 py-3 text-base font-semibold text-[#111111] transition hover:bg-[#f7dce5]">
              Contact us for updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
